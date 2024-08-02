import React from "react";
import "./Contact.css";
import { BsSendFill } from "react-icons/bs";

function Contact() {
  return (
    <React.Fragment>
      <section>
      <div className="contact_header"><h1>Contact Us</h1></div>
        <div className="contact_container">
          <form>
          <h1>Reach out to us...</h1>
            <div className="form_contents">
            <div>
            <label htmlFor="">First Name:</label>
            <input type="text" name='fname' id="fname" />
            </div>
            <div>
            <label htmlFor="">Last Name:</label>
            <input type="text" name='lname' id="lname" />
            </div>
            </div>
            <div className="form_contents">
            <div>
            <label htmlFor="phoneno">Phone Number:</label>
            <input type="text" name="phoneno" id='phoneno' /></div>
            <div>
            <label htmlFor="">Email Address:</label>
            <input type="email" name="email" id="email" />
            </div>
            </div>
            <textarea name="message" id="message"placeholder="Enter your message here."></textarea>
            <button><BsSendFill />Send</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
