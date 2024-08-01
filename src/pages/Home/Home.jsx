import "./Home.css";
import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import About from "./About";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Why />
      <About />
    </React.Fragment>
  );
}

export default Home;
