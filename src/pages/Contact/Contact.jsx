import React, { useState } from "react";
import "./Contact.css";
import { BsSendFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
// eslint-disable-next-line no-unused-vars
import { app, database } from "../../utils/firebase.js";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [loading, setLoading] = useState();
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Please enter your full names")
      .min(7, "Please write both of your names."),
    phoneno: Yup.string()
      .required("Phone number is required")
      .max(10, "Please input a 10 digit number."),
    emailAddress: Yup.string()
      .required("Email Address is required")
      .email("Please enter a vaild email address with correct symbols."),
    message: Yup.string().required("Your message is required"),
  });

  const initialValues = {
    fullname: "",
    phoneno: "",
    emailAddress: "",
    message: "",
  };
  const collectionRef = collection(database, "main_contact");
  const onSubmit = (values, { resetForm }) => {
    if (values === null) {
      return toast("Please enter valid inputs", {
        theme: "failure",
        duration: 3000,
      });
    }
    setLoading(true);
    try {
      addDoc(collectionRef, {
        fullname: values.fullname,
        phoneno: values.phoneno,
        emailAddress: values.emailAddress,
        message: values.message,
      }).then(() => {
        toast("Your details are collected succesfully. We shall contact you.", {
          theme: "success",
          duration: 3000,
        });
        resetForm();
      });
    } catch (err) {
      toast("An error occured. Please refresh", {
        theme: "failure",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <React.Fragment>
      <section className="contact_section">
        <div className="contact_header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_container">
          <form onSubmit={formik.handleSubmit} className="form_container">
            <h1>Reach out to us...</h1>
            <div className="form_contents">
              <div className="form_details">
                <label htmlFor="">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <p>{formik.errors.fullname}</p>
                )}
              </div>
            </div>
            <div className="form_contents">
              <div className="form_details">
                <label htmlFor="phoneno">Phone Number:</label>
                <input
                  type="text"
                  name="phoneno"
                  id="phoneno"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phoneno}
                />
                {formik.touched.phoneno && formik.errors.phoneno && (
                  <p>{formik.errors.phoneno}</p>
                )}
              </div>
              <div className="form_details">
                <label htmlFor="">Email Address:</label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.emailAddress}
                />
                {formik.touched.emailAddress && formik.errors.emailAddress && (
                  <p>{formik.errors.emailAddress}</p>
                )}
              </div>
            </div>
            <div className="form_details">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p>{formik.errors.message}</p>
              )}
            </div>
            <button type="submit" className="form_details" disabled={loading}>
              {loading ? (
                <p>Sending...</p>
              ) : (
                <>
                  <BsSendFill />
                  Send
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
