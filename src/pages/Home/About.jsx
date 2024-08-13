import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <section>
        <div className="about_container">
          <div className="about_us_txt">
            <h1>About Us</h1>
            <p>
              Tsuri Consulting Limited is a consulting firm that is specialized
              to mentor, nature and grow the current generation into present
              people who are resposible in whatever they do. Them committed
              under us shall be qualified in the future to become prominent
              people who are qualified in character and non-negotiable
              standards. They shall love people and help to take the work to the
              world in the possibilities it can offer.
            </p>
            <Link to="/about">
              <button>Learn More &rarr;</button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
