import React from "react";
import "./Request.css";
import { BsSendFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from 'yup'


export default function Request() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter your name"),
    lastname: Yup.string().required("Please enter your last name"),
    phoneno: Yup.string().required("Please enter phone number"),
    emailAddress: Yup.string().required("Please enter your email address"),
    purpose: Yup.string().required("Please enter the service you would require from us."),
    selecteddate: Yup.string().required("Please select the date would would need us to come.")
  })

  const initialValues = ({
    firstname: '',
    lastname: '',
    phoneno: '',
    emailAddress: '',
    purpose: '',
    selecteddate: ''
  })

  const onSubmit = () => {

  }

  const formik = useFormik({initialValues, validationSchema, onSubmit})
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
                  <label htmlFor="">First Name:</label>
                  <input type="text" name="firstname" id="firstname" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.firstname} />
                </div>
                <div className="form_input">
                  <label htmlFor="">Last Name:</label>
                  <input type="text" name="lastname" id="lastname" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.lastname}/>
                </div>
              </div>
              <div className="details">
                <div className="form_input">
                  <label htmlFor="">Phone No:</label>
                  <input type="text" name="phoneno" id="phoneno" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.phoneno}/>
                </div>
                <div className="form_input">
                  <label htmlFor="">Email Address:</label>
                  <input type="email" name="emailAddress" id="emailAddress" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.emailAddress}/>
                </div>
              </div>
              <div className="form_input">
                <label htmlFor="">When you need us to come</label>
                <input type="date" name="selectdate" id="selectdate" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.selecteddate} />
              </div>
              <div className="form_input">
                <label htmlFor="purpose">What would you want us to do?</label>
                <select name="purpose" id="purpose" onBlur={formik.handleBlur} onChange={formik.handleChange} value = {formik.values.purpose}>
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
              <div className="form_input">
                <label htmlFor="">Any other info:</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button>
                <BsSendFill />
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
