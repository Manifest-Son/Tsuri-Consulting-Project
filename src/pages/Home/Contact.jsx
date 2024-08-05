import React from "react";
import "./Home.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPostOffice } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from 'yup';

function HomeContact() {
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Please enter your full names").min(7, "Please write your full name"),
    phoneno: Yup.string().required("Please enter your phone number"),
    subject: Yup.string().required("Please enter the subject"),
    message: Yup.string().required("Please enter the message")
  })

  const initialValues = (
    {
      fullname: '',
      phoneno: '',
      subject: '',
      message: ''
    }
  )

  const onSubmit = () =>{

  }

  const formik = useFormik({initialValues, validationSchema, onSubmit})

  return (
    <React.Fragment>
      <section>
        <div className="home_contact_container">
          <div className="contact">
            <h1>Contact Us</h1>
            <p>Feel free to contact us for any enquiry.</p>
            <p>As you fill this form, we shall get back to you shortly.</p>
            <form  onSubmit={formik.handleSumbit} className="home_form_contents">
              <label htmlFor="fullname">Full Names: </label>
              <input type="text" name="fullname" id="fullname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fullname}/>
              {formik.touched.fullname && formik.errors.fullname && (<p>{formik.errors.fullname}</p>)}
              <label htmlFor="phoneno">Phone No:</label>
              <input type="text" name="phoneno" id="phoneno" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneno}/>
              {formik.touched.phoneno && formik.errors.phoneno && (<p>{formik.errors.phoneno}</p>)}
              <label htmlFor="subject">Subject: </label>
              <input type="text" name="subject" id="subject" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.subject}/>
              {formik.touched.subject && formik.errors.subject&& (<p>{formik.errors.subject}</p>)}
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message"onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message}></textarea>
              {formik.touched.message && formik.errors.message && (<p>{formik.errors.message}</p>)}
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="info">
            <h1>Info</h1>
            <p>
              <MdLocationPin /> Murang&#39;a Buildings, Muranga Town
            </p>
            <p>
              <FaPhoneAlt /> <a href="tel:+254707238163">+254707238163</a>,{" "}
              <a href="tel:+254710626463">+254710626463</a>
            </p>
            <p>
              <IoMdMail /> info@preeminentconsulting.co.ke
            </p>
            <p>
              <GiPostOffice /> P.O.Box 7202-00100 Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomeContact;
