import React from "react";
import "./Services.css";
import leadershipImg from "../../assets/leadership.jpg";
import academicsImg from "../../assets/academics.jpg";
import careerImg from "../../assets/career.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <React.Fragment>
      <section>
        <h1 className="services_header">Services</h1>
        <div className="services_container">
          <div className="leaders">
            <div className="leadership_txt">
              <h1>Leadership Training</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, facilis. Libero iusto omnis eligendi dolorem aliquam
                voluptatum asperiores adipisci ratione.
              </p>
              <button>
                <Link to="/request">Register Now!</Link>
              </button>
            </div>
            <div className="leadership_img">
              <img src={leadershipImg} alt="" />
            </div>
          </div>

          <div className="career">
            <div className="career_img">
              <img src={careerImg} alt="" />
            </div>
            <div className="career_txt">
              <h1>Leadership Training</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, facilis. Libero iusto omnis eligendi dolorem aliquam
                voluptatum asperiores adipisci ratione.
              </p>
              <button>
                <Link to="/request">Register Now!</Link>
              </button>
            </div>
          </div>

          <div className="academic">
            <div className="academic_txt">
              <h1>Leadership Training</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, facilis. Libero iusto omnis eligendi dolorem aliquam
                voluptatum asperiores adipisci ratione.
              </p>
              <button>
                <Link to="/request">Register Now!</Link>
              </button>
            </div>
            <div className="academic_img">
              <img src={academicsImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
