import React from "react";
import "./Home.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPostOffice } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

function HomeContact() {
  return (
    <React.Fragment>
      <section>
        <div className="home_contact_container">
          <div className="contact">
            <h1>Contact Us</h1>
            <p>Feel free to contact us for any enquiry.</p>
            <p>As you fill this form, we shall get back to you shortly.</p>
            <form className="home_form_contents">
              <label htmlFor="fullname">Full Names: </label>
              <input type="text" name="fullname" id="fullname" />
              <label htmlFor="phoneno">Phone No:</label>
              <input type="text" name="phoneno" id="phoneno" />
              <label htmlFor="subject">Subject: </label>
              <input type="text" name="subject" id="subject" />
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message"></textarea>
              <button>Send</button>
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
