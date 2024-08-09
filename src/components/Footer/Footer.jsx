import "./Footer.css";
import { MdLocationPin, MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPostOffice } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <section>
        <div className="footer_container">
          <div className="footer_logo">
            <h1>Tsuri Consulting</h1>
            <p>
              We pionieer in career guidance, leadership development and
              academic performace guide. All this is to bring growth to the
              current generation for the future endevours.
            </p>
            <hr />
            <div className="footer_socials">
              <MdFacebook />
              <AiFillInstagram />
              <FaLinkedin />
              <FaSquareXTwitter />
            </div>
          </div>
          <div className="footer_nav">
            <h1>SiteMap</h1>
            <ol className="footer_links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/schedule">
                <li>Schedule</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact US</li>
              </Link>
            </ol>
          </div>
          <div className="footer_contact">
            <h1>Contact Us</h1>
            <p>
              <MdLocationPin /> Murang&#39;a Buildings, Muranga Town
            </p>
            <p>
              <FaPhoneAlt /> <a href="tel:+254707238163">+254707238163</a>,{" "}
              <a href="tel:+254710626463">+254710626463</a>
            </p>
            <p>
              <IoMdMail /> info@tsuriconsulting.co.ke
            </p>
            <p>
              <GiPostOffice /> P.O.Box 7202-00100 Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
