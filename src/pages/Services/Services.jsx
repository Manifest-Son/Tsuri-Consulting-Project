import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Book from "./Book";
import { FaGraduationCap, FaUserTie, FaChartLine, FaBuilding, FaArrowRight } from 'react-icons/fa';

function Services() {
  return (
    <React.Fragment>
      <section className="services_section">
        <h1>Our Services</h1>
        <div className="services_container">
          <div className="service_grid">
            <div className="service_card">
              <FaUserTie className="service_icon" />
              <h2>Leadership Training</h2>
              <p>
                Leaders are noted from a far, build and sent to make other
                leaders. In short being a producer of reproducers makes us to
                ever have a desire to make other leaders who shall impact the
                globe.
              </p>
              <div className="service_features">
                <span>✓ Leadership Development</span>
                <span>✓ Team Building</span>
                <span>✓ Communication Skills</span>
              </div>
              <Link to="/request" className="service_link">
                <button>Register Now <FaArrowRight /></button>
              </Link>
            </div>

            <div className="service_card">
              <FaChartLine className="service_icon" />
              <h2>Career Guidance</h2>
              <p>
                Uncertainity hits almost every student in every level of
                education they are. We provide professional guidance for
                your career path and future opportunities.
              </p>
              <div className="service_features">
                <span>✓ Career Assessment</span>
                <span>✓ Industry Insights</span>
                <span>✓ Personal Branding</span>
              </div>
              <Link to="/request" className="service_link">
                <button>Register Now <FaArrowRight /></button>
              </Link>
            </div>

            <div className="service_card">
              <FaGraduationCap className="service_icon" />
              <h2>Academic Tracking</h2>
              <p>
                Students always have a desire to do their best. They struggle in
                every manner but little to find that their efforts are not
                producing anything. This is why they need mentorship. Here we
                assess on how they do their studies, and give suggestions on how
                to make sure that the students reaches the best mark they can
                achieve.
              </p>
              <div className="service_features">
                <span>✓ Study Techniques</span>
                <span>✓ Progress Tracking</span>
                <span>✓ Personalized Mentorship</span>
              </div>
              <Link to="/request" className="service_link">
                <button>Register Now <FaArrowRight /></button>
              </Link>
            </div>

            <div className="service_card">
              <FaBuilding className="service_icon" />
              <h2>Management Consultancy</h2>
              <p>
                We offer professional service that helps organizations imporve their performance by solving problems, creating
                value, maximizing growth and improving business efficiency. We expertise in specific institutions, industries and business functions, analyze
                institution&#x27;s existing practices and provide advice on how to optimize operations, implement strategies and manage change. We also follow a
                structured approach to problem-solving, including gathering data, analyzing it, formulating recommendations, and supporting the client in implementing the solutions.
              </p>
              <div className="service_features">
                <span>✓ Strategy</span>
                <span>✓ Operations</span>
                <span>✓ Human Resources</span>
                <span>✓ Technology & Digital Transformation</span>
                <span>✓ Risk and Compliance</span>
              </div>
              <Link to="/request" className="service_link">
                <button>Register Now <FaArrowRight /></button>
              </Link>
            </div>
          </div>

          <div className="stats_section">
            <div className="stat_item">
              <h3>500+</h3>
              <p>Students Mentored</p>
            </div>
            <div className="stat_item">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat_item">
              <h3>50+</h3>
              <p>Partner Institutions</p>
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
