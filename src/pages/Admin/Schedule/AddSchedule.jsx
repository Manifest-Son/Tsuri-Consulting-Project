/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Schedule.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { app, database } from "../../../utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function AddSchedule() {
  const [loading, setLoading] = useState(false);
  const collectionRef = collection(database, "schedule");
  const validationSchema = Yup.object({
    event: Yup.string().required("The event name is required"),
    description: Yup.string().required("The description is required"),
    date: Yup.string().required("The date is required"),
    location: Yup.string().required("The location is required"),
  });

  const initialValues = {
    event: "",
    description: "",
    date: "",
    location: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    // console.log(data);
    try {
      setLoading(true);
      await addDoc(collectionRef, {
        event: values.event,
        description: values.description,
        date: values.date,
        location: values.location,
      });
      toast("The Event has been successfully created", {
        theme: "success",
        duration: 3000,
      });
      resetForm();
      setLoading(false);
    } catch (err) {
      toast("An Error occured during the submition. Please try again");
      setLoading(false);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <>
      <section>
        <div className="scheduler_wrapper">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="event">Event:</label>
            <input
              type="text"
              name="event"
              id="event"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.event}
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
            />
            {formik.touched.location && formik.errors.location && (
              <p>{formik.errors.location}</p>
            )}
            <button type="submit" disabled={loading}>
              {loading ? "Adding Event" : "Add Event"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddSchedule;
