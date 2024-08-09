import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { GiBullseye } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import founderImg from "../../assets/Founder.png";

function AboutUs() {
  return (
    <React.Fragment>
      <section>
        <div className="aboutus_container">
          <h1 className="leadership_header">About Us</h1>
          <div className="leadership">
            <div className="leadership_text">
              <h1>Hear what our founder has to say.</h1>
              <blockquote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt eaque nulla omnis totam, recusandae impedit labore
                velit voluptatibus animi expedita dolor blanditiis vitae
                cupiditate eos. Qui atque voluptates ab quidem!
              </blockquote>
              <h2>
                <i>- Phoebe Muruga</i>
              </h2>
            </div>
            <div className="leadership_about_img">
              <img src={founderImg} alt="Phoebe Murunga the founder." />
            </div>
          </div>
          <div className="vision">
            <GiBullseye />
            <div className="leadership_vision">
              <h2>Vision</h2>
              <p>
                Provide thw generation with the necessary tools to meet the
                world and overcome every obstacle.
              </p>
            </div>
          </div>

          <div className="mission">
            <div className="leadership_mission">
              <h2>Mission</h2>
              <p>
                To give room for the generation to grow and follow their
                desires.
              </p>
            </div>
            <MdOutlineWork />
          </div>

          <div className="what_we_do">
            <div className="leaderhip_what_we_do">
              <h2>Vision</h2>
              <p>
                Some of the things we do include:
                <ol>
                  <li>Academic Performance Analysis and Stratedy</li>
                  <li>Career Guidance</li>
                  <li>Leadership Training</li>
                </ol>
              </p>
            </div>
            <LuListTodo />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutUs;
