import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <section>
        <div className="header-container">
          <Link to="/">
            <h1>Tsuri Consulting</h1>
          </Link>
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
          <div className="buttons">
            <Link to="/contact">
              <button>Get in Touch</button>
            </Link>
            <Link to="/admin">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
