import React from "react";
import "./Contact.css";
import { BsSendFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter your first name"),
    lastname: Yup.string().required("Please enter your last name"),
    phoneno: Yup.string().required("Please enter your phone number"),
    emailAddress: Yup.string().required("Please enter your email address"),
    message: Yup.string().required("Please enter your message"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    phoneno: "",
    emailAddress: "",
    message: "",
  };

  const onSubmit = () => {};

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <React.Fragment>
      <section>
        <div className="contact_header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_container">
          <form onSubmit={formik.handleSubmit} className="form_container">
            <h1>Reach out to us...</h1>
            <div className="form_contents">
              <div className="form_details">
                <label htmlFor="">First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p>{formik.errors.firstname}</p>
                )}
              </div>
              <div className="form_details">
                <label htmlFor="">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p>{formik.errors.lastname}</p>
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
            <button type="submit" className="form_details">
              <BsSendFill />
              Send
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
