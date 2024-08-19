import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { GoDotFill } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { database } from "../../utils/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

// eslint-disable-next-line react/prop-types
function DisplaySchedule({ venue, description, date, location }) {
  return (
    <React.Fragment>
      <div className="event_card">
        <div className="event_timeline">
          <GoDotFill className="timeline_dot" />
        </div>
        <div className="event_content">
          <h2>{venue}</h2>
          <p>{description}</p>
          <div className="event_details">
            <div className="details">
              <MdEvent />
              <p>{date}</p>
            </div>
            <div className="details">
              <FaLocationDot />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Schedule() {
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await onSnapshot(collection(database, "schedule"), (snapshot) => {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFetch(items);
        });
      } catch {
        toast("Error fetching gallery ", {
          theme: "success",
          duration: 3000,
        });
      }
    };

    fetchGallery();
  }, []);
  return (
    <section className="schedule_section">
      <div className="schedule_container">
        <div className="schedule_header">
          <h1>Schedule</h1>
        </div>
        <div className="schedule_wrapper">
          <h1>Upcoming Events</h1>
          <p className="subtitle">We could be near you...</p>
          <div className="schedule_events">
            {fetch.map((currentSchedule) => (
              <DisplaySchedule
                key={currentSchedule.id}
                venue={currentSchedule.event}
                description={currentSchedule.description}
                date={currentSchedule.date}
                location={currentSchedule.location}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Schedule;
