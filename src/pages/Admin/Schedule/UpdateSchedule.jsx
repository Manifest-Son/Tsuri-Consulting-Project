/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../../utils/firebase.js";
import "./Schedule.css";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function UpdateSchedule() {
  const { id } = useParams(); // Get the id from the URL
  const [initialValues, setInitialValues] = useState({
    event: "",
    description: "",
    date: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Fetch the current schedule item data using the id
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(database, "schedule", id);
        const itemSnapshot = await getDoc(itemDoc);
        if (itemSnapshot.exists()) {
          const item = itemSnapshot.data();
          setInitialValues({
            event: item.event,
            description: item.description,
            date: item.date,
            location: item.location,
          });
        } else {
          toast("Item not found", { theme: "success", duration: 3000 });
        }
      } catch (error) {
        // console.error("Error fetching item:", error);
        toast("An Error occured. Please refresh", {
          theme: "failure",
          duration: 2000,
        });
      }
    };

    fetchItem();
  }, [id]);

  // Form submission handler
  const onSubmit = async (values, { resetForm }) => {
    try {
      setIsSubmitting(true);
      await updateDoc(doc(database, "schedule", id), {
        event: values.event,
        description: values.description,
        date: values.date,
        location: values.location,
      });

      toast("Schedule item updated successfully!", {
        theme: "success",
        duration: 3000,
      });
      resetForm();
      navigate("/admin/scheduler");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error updating schedule item:", {
        theme: "failure",
        duration: 3000,
      });
      setIsSubmitting(false);
    }
  };

  // Initialize formik with the fetched initial values
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
  });

  return (
    <>
      <section>
        <div className="scheduler_wrapper">
          <h1>Update an Event.</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="event">Event:</label>
            <input
              type="text"
              name="event"
              id="event"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.event}
              aria-label="Event Name"
            />
            {formik.touched.event && formik.errors.event && (
              <p>{formik.errors.event}</p>
            )}
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              aria-label="Event Description"
            />
            {formik.touched.description && formik.errors.description && (
              <p>{formik.errors.description}</p>
            )}
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              min={new Date().toISOString().split("T")[0]}
              value={formik.values.date}
              aria-label={Date()}
            />
            {formik.touched.date && formik.errors.date && (
              <p>{formik.errors.date}</p>
            )}
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.location}
              aria-label="Event Location"
            />
            {formik.touched.location && formik.errors.location && (
              <p>{formik.errors.location}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Updating Event" : "Update Event"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateSchedule;
