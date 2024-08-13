import "./Home.css";
import React from "react";
// import why from '../../data/why';
import { TbBriefcaseFilled } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { BsFire } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Why() {
  return (
    <React.Fragment>
      <section className="why_section">
        <h1>Why they choose us...</h1>
        <div className="why_wrapper">
          <div className="why_container">
            <div className="why_icon">
              <TbBriefcaseFilled />
            </div>
            <div className="why_text">
              <h2>Always Ready</h2>
              <p>
                When service calls we hit the road. We carry personel and tools
                that are ready for the neccesary task needed from us by our
                clients.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <BsTools />
            </div>
            <div className="why_text">
              <h2>Equipped</h2>
              <p>
                Work is never done witthout the specifie tools. We believe that
                we have all it takes to commit to our vision. Such include
                books, great minds with the non-renewable resources such as time
                to build students.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <BsFire />
            </div>
            <div className="why_text">
              <h2>Passionate</h2>
              <p>
                A burning desire within us to see the lives of our brethren
                change through the services we offer. Career, academic, and
                leadership mentorship are areas when they are properly
                adddressed, we believe it shall skyrocket our worlds growth.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <RiTimerLine />
            </div>
            <div className="why_text">
              <h2>Experienced</h2>
              <p>
                Experience is a teacher away from the noraml teaching. From the
                vairous services we have offered to our cliets, whe have been
                ever growing and leveraging to offer the best services when
                called upon to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Why;
