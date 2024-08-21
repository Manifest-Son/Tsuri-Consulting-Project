/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { database } from "../../../utils/firebase.js";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function DisplayScheduler({
  id,
  event,
  description,
  date,
  location,
  onUpdate,
  onDelete,
}) {
  return (
    <>
      <section>
        <div className="scheduler_display">
          <h1>{event}</h1>
          <p>{description}</p>
          <div className="scheduler_details">
            <p>
              <MdEvent /> <br /> {date}
            </p>
            <p>
              <FaLocationDot /> <br /> {location}
            </p>
          </div>
          <div className="scheduler_operations">
            <button onClick={() => onUpdate(id)}>Update</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </div>
      </section>
    </>
  );
}

function FetchSchedule() {
  const [loading, setLoading] = useState(false);
  const [scheduleFetch, setScheduleFetch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        await onSnapshot(collection(database, "schedule"), (snapshot) => {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setScheduleFetch(items);
        });
      } catch {
        toast("Error fetching schedules ", {
          theme: "success",
          duration: 3000,
        });
      }
    };

    fetchSchedules();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/admin/schedule/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, "schedule", id));
      setScheduleFetch((prevItems) =>
        prevItems.filter((item) => item.id !== id),
      );
    } catch (error) {
      toast("Error deleting the record.", { theme: "failure", duration: 3000 });
    }
  };
  return (
    <>
      <section>
        <div className="display_scheduler_wrapper">
          {scheduleFetch.map((schedule) => (
            <DisplayScheduler
              key={schedule.id}
              id={schedule.id}
              event={schedule.event}
              description={schedule.description}
              date={schedule.date}
              location={schedule.location}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default FetchSchedule;
