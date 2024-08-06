import React, { useState } from "react";
import "./Request.css";
import { BsSendFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line no-unused-vars
import { app, database } from "../../utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
import { useNavigate } from "react-router-dom";

export default function Request() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter your name"),
    lastname: Yup.string().required("Please enter your last name"),
    phoneno: Yup.string().required("Please enter phone number"),
    emailAddress: Yup.string().required("Please enter your email address"),
    purpose: Yup.string().required(
      "Please enter the service you would require from us.",
    ),
    selectdate: Yup.string().required(
      "Please select the date would would need us to come.",
    ),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    phoneno: "",
    emailAddress: "",
    purpose: "",
    selectdate: "",
  };
  const collectionRef = collection(database, "request");
  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      await addDoc(collectionRef, {
        firstname: values.firstname,
        lastname: values.lastname,
        phoneno: values.phoneno,
        emailAddress: values.emailAddress,
        selectdate: values.selectdate,
        purpose: values.purpose,
      }).then(() => {
        toast("Request created successfully", {
          theme: "success",
          duration: 3000,
        });
        resetForm();
        navigate("/");
      });
    } catch (err) {
      toast("An error occured please redo the process.", {
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
      <section>
        <div className="request_container">
          <div className="request_intro">
            <h1>Book Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor
              provident minima molestias non exercitationem! Nemo, alias itaque
              autem doloremque pariatur ex id odit cum?
            </p>
          </div>
          <div className="form_section">
            <form onSubmit={formik.handleSubmit}>
              <div className="details">
                <div className="form_input">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </div>
              </div>
              <div className="details">
                <div className="form_input">
                  <label htmlFor="lastname">Phone No:</label>
                  <input
                    type="text"
                    name="phoneno"
                    id="phoneno"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phoneno}
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="emailAddress">Email Address:</label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.emailAddress}
                  />
                </div>
              </div>
              <div className="form_input">
                <label htmlFor="selectdate">When you need us to come</label>
                <input
                  type="date"
                  name="selectdate"
                  id="selectdate"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.selectdate}
                />
              </div>
              <div className="form_input">
                <label htmlFor="purpose">What would you want us to do?</label>
                <select
                  name="purpose"
                  id="purpose"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.purpose}
                >
                  <option value="none">--option--</option>
                  <option value="career_guidance">Career Guidance</option>
                  <option value="academic_performance">
                    Academic Performance
                  </option>
                  <option value="leadership_training">
                    Leadership Training
                  </option>
                </select>
              </div>
              <button type="submit" disabled={loading}>
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
        </div>
      </section>
    </React.Fragment>
  );
}
