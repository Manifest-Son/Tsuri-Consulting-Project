import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { GiBullseye } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import founderImg from "../../assets/Founder.png";

function AboutUs() {
  return (
    <React.Fragment>
      <section className="aboutus_section">
        <h1 className="leadership_header">About Us</h1>
        <div className="aboutus_container">
          <div className="leadership">
            <div className="leadership_text">
              <h1>Hear what our founder has to say.</h1>
              <blockquote>
                Welcome to Tsuri Consultants. We pioneer in leadership, academic,
                career development and management consultancy. Being the founder and the Chief
                Executive Officer of the Consulting firm, i can assure you of
                our excellence when it comes to our job. We value everyone that
                allow us to offer our services to them. <br /> You can trust
                us.
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
                Provide the generation with the necessary tools to meet the
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
