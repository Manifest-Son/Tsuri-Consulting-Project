import './Footer.css'
import { MdLocationPin } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPostOffice } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import React from "react"

function Footer(){
    return(
        <React.Fragment>
            <section>
                <div className="footer_container">
                    <div className="footer_logo">
                        <h1>Tsuri Consulting</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum distinctio doloribus laboriosam reprehenderit, harum sunt!</p>
                        <hr />
                        <div className="footer_socials">
                            <MdFacebook />
                            <AiFillInstagram  />
                            <FaLinkedin />
                            <FaSquareXTwitter />
                        </div>
                    </div>
                    <div className="footer_nav">
                        <h1>SiteMap</h1>
                        <ol className='footer_links'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Schedule</li>
                            <li>Gallery</li>
                            <li>Contact US</li>
                        </ol>
                    </div>
                    <div className="footer_contact">
                        <h1>Contact Us</h1>
                        <p><MdLocationPin />  Murang&#39;a Buildings, Muranga Town</p>
                        <p><FaPhoneAlt />  <a href="tel:+254707238163">+254707238163</a>, <a href="tel:+254710626463">+254710626463</a></p>
                        <p><IoMdMail />  info@preeminentconsulting.co.ke</p>
                        <p><GiPostOffice />  P.O.Box 7202-00100 Nairobi, Kenya</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Footer;