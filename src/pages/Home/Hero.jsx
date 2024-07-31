import React from "react";
import "./Home.css";
import heroImg from "../../assets/hero_img.png";
import { GiGraduateCap } from "react-icons/gi";
import { RiShining2Line } from "react-icons/ri";
import { FaPenFancy } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";

function Hero() {
  return (
    <React.Fragment>
      <section>
        <div className="hero_container">
          <div className="hero_text">
            <h1>Tsuri Consultants Limited</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              excepturi ipsa nulla quia aliquid recusandae magni. Iste deleniti
              tenetur, in adipisci magnam eveniet iusto, est ullam ad quis
              eligendi nostrum.
            </p>
            <button>Learn More &rarr;</button>
          </div>
          <div className="hero_left">
            <img src={heroImg} alt="Hero section image" />
            <GiGraduateCap className="svg_1" />
            <GiGraduateCap className="svg_2" />
            <RiShining2Line className="svg_3" />
            <RiShining2Line className="svg_4" />
            <RiShining2Line className="svg_5" />
            <RiShining2Line className="svg_6" />
            <FaPenFancy className="svg_7" />
            <FaPenFancy className="svg_8" />
            <FaBookOpen className="svg_9" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
