import React from "react";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <section>
        <div className="header-container">
          <h1>Pre-Eminent Consulting</h1>
          <nav>
            <ol className="nav_links">
              <li>Home</li>
              <li>Services</li>
              <li>Schedule</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ol>
          </nav>
          <button>Get in Touch</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
