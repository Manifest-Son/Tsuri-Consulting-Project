import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <section>
        <div className="header-container">
          <h1>Tsuri Consulting</h1>
          <nav>
            <ol className="nav_links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/service">
                <li>Services</li>
              </Link>
              <Link to="/schedule">
                <li>Schedule</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
            </ol>
          </nav>
          <button>Get in Touch</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
