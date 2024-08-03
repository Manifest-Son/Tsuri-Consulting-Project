import React from "react";
import "./Request.css";
import { BsSendFill } from "react-icons/bs";

export default function Request() {
  return (
    <React.Fragment>
      <section>
        <div className="request_container">
          <div className="request_intro">
            <h1>Request Introduction</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor
              provident minima molestias non exercitationem! Nemo, alias itaque
              autem doloremque pariatur ex id odit cum?
            </p>
          </div>
          <div className="form_section">
            <form>
              <div className="details">
                <div className="form_input">
                  <label htmlFor="">First Name:</label>
                  <input type="text" name="fname" id="fname" />
                </div>
                <div className="form_input">
                  <label htmlFor="">Last Name:</label>
                  <input type="text" name="lname" id="lname" />
                </div>
              </div>
              <div className="details">
                <div className="form_input">
                  <label htmlFor="">Phone No:</label>
                  <input type="text" name="phoneno" id="phoneno" />
                </div>
                <div className="form_input">
                  <label htmlFor="">Email Address:</label>
                  <input type="email" name="fname" id="fname" />
                </div>
              </div>
              <div className="form_input">
                <label htmlFor="">When you need us to come</label>
                <input type="date" name="fname" id="fname" />
              </div>
              <div className="form_input">
                <label htmlFor="purpose">What would you want us to do?</label>
                <select name="purpose" id="purpose">
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
