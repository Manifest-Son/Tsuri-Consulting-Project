import React from "react";
import "./Contact.css";
import { BsSendFill } from "react-icons/bs";

function Contact() {
  return (
    <React.Fragment>
      <section>
        <div className="contact_header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_container">
          <form className="form_container">
            <h1>Reach out to us...</h1>
            <div className="form_contents">
              <div className="form_details">
                <label htmlFor="">First Name:</label>
                <input type="text" name="fname" id="fname" />
              </div>
              <div className="form_details">
                <label htmlFor="">Last Name:</label>
                <input type="text" name="lname" id="lname" />
              </div>
            </div>
            <div className="form_contents">
              <div className="form_details">
                <label htmlFor="phoneno">Phone Number:</label>
                <input type="text" name="phoneno" id="phoneno" />
              </div>
              <div className="form_details">
                <label htmlFor="">Email Address:</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="form_details">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message here."
              ></textarea>
            </div>
            <button className="form_details">
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
