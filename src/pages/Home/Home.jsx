import "./Home.css";
import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import About from "./About";
import Figures from "./Figures";
import Testimonial from "./Testimonial";
import HomeContact from "./Contact";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <React.Fragment>
      <section className="home_section">
        <Hero />
        <Why />
        <About />
        <Figures />
        <Testimonial />
        <HomeContact />
        <Newsletter />
      </section>
    </React.Fragment>
  );
}

export default Home;
