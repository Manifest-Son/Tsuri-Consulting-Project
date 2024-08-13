import React from "react";
import CountUp from "react-countup";
import "./Home.css";

function Figures() {
  return (
    <React.Fragment>
      <section>
        <div className="figures_container">
          <h1>Our impact</h1>
          <h3>The journey continues...</h3>
          <div className="top_figure">
            <p>
              <CountUp end={20} duration={5} />+<br /> Schools Visited
            </p>
            <p>
              <CountUp end={500} duration={5} />+<br /> Students Impacted
            </p>
            <p>
              <CountUp end={2} duration={5} />+<br /> Experience
            </p>
            <p>
              <CountUp end={10} duration={5} />+<br /> Schools Visited
            </p>
            <p>
              <CountUp end={10000} duration={5} />+<br /> Students Impacted
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Figures;
