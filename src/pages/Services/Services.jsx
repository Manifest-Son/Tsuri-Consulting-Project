import React from "react";
import "./Services.css";
import leadershipImg from "../../assets/leadership.jpg";
import academicsImg from "../../assets/Academics.jpg";
import careerImg from "../../assets/career.jpg";
import { Link } from "react-router-dom";
import Book from "./Book";

function Services() {
  return (
    <React.Fragment>
      <section className="services_section">
        <h1 className="">Services</h1>
        <div className="services_container">
          <div className="leaders">
            <div className="leadership_txt">
              <h2>Leadership Training</h2>
              <p>
                Leaders are noted from a far, build and sent to make other
                leaders. In short being a producer of reproducers makes us to
                ever have a desire to make other leaders who shall impact the
                globe.
              </p>
              <Link to="/request">
                <button>Register Now!</button>
              </Link>
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
              <h2>Career Guidance</h2>
              <p>
                Uncertainity hits almost every student in every level of
                education they are. To be specific, the fresh high school
                graduates. Many are the times that they struggle to know what
                they shall encounter in the future that makes them to panic. But
                we have the solution. We shall guide them to the next phase of
                their lives.
              </p>
              <Link to="/request">
                <button>Register Now!</button>
              </Link>
            </div>
          </div>

          <div className="academic">
            <div className="academic_txt">
              <h2>Academic Tracking</h2>
              <p>
                Students always have a desire to do their best. They struggle in
                every manner but little to find that their efforts are not
                producing anything. This is why they need mentorship. Here we
                assess on how they do their studies, and give suggestions on how
                to make sure that the students reaches the best mark they can
                achieve.
              </p>
              <Link to="/request">
                <button>Register Now!</button>
              </Link>
            </div>
            <div className="academic_img">
              <img src={academicsImg} alt="" />
            </div>
          </div>
          <h3>
            In our adventurous spirit and compassion towards students growth in
            leadership, career and academics, a book was birthed. We may not say
            much in the semminars but this book culminates all.
            <br /> More are still coming so keep watch. At the moment grab your
            copy!!
          </h3>
          <Book />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
