import React from "react";
import "./Schedule.css";
import { GoDotFill } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Schedule() {
  return (
    <React.Fragment>
      <section>
        <div className="schedule_container">
          <div className="schedule_header">
            <h1>Schedule</h1>
          </div>
          <div className="schedule_wrapper">
            <h1>Know where we shall be next</h1>
            <p className="subtitle">We could be near you...</p>
            <div className="schedule_events">
              <div className="left">
              <div className="event_container_1">
                <h1>Kombi High School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                <div className="event_details_1">
                <div className="details"><MdEvent /><p>29 Aug 2024</p></div>
                <div className="details"><FaLocationDot /><p>Koimbi, Murang&#39;a</p></div>
                </div>
              </div>

              <div className="event_container_2">
                <h1>Kombi High School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                <div className="event_details_2">
                <div className="details"><MdEvent /><p>29 Aug 2024</p></div>
                <div className="details"><FaLocationDot /><p>Koimbi, Murang&#39;a</p></div>
                </div>
              </div>
              </div>
              <ol className='event_line'>
                <li className = "li_1"><GoDotFill /></li>
                <li className = "li_2"><GoDotFill /></li>
                <li className = "li_3"><GoDotFill /></li>
                <li className = "li_4"><GoDotFill /></li>
                <li className = "li_5"><GoDotFill /></li>
              </ol>
              <div className="right">
              <div className="event_container">
                <h1>Kombi High School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                <div className="event_details">
                <div className="details"><MdEvent /><p>29 Aug 2024</p></div>
                <div className="details"><FaLocationDot /><p>Koimbi, Murang&#39;a</p></div>
                </div>
              </div>

              <div className="event_container_3">
                <h1>Kombi High School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                <div className="event_details_3">
                <div className="details"><MdEvent /><p>29 Aug 2024</p></div>
                <div className="details"><FaLocationDot /><p>Koimbi, Murang&#39;a</p></div>
                </div>
              </div>

              <div className="event_container_4">
                <h1>Kombi High School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                <div className="event_details_4">
                <div className="details"><MdEvent /><p>29 Aug 2024</p></div>
                <div className="details"><FaLocationDot /><p>Koimbi, Murang&#39;a</p></div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Schedule;
