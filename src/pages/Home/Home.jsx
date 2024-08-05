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
      <Hero />
      <Why />
      <About />
      <Figures />
      <Testimonial />
      <HomeContact />
      <Newsletter />
    </React.Fragment>
  );
}

export default Home;
