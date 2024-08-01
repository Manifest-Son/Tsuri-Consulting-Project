import React from "react";
import "./Home.css";
import studentImg from "../../assets/student.png";
import studentsImg from "../../assets/students.png";
import graduateImg from "../../assets/graduate.png";

function About() {
  return (
    <React.Fragment>
      <section>
        <div className="about_container">
          <div className="about_img">
            <img src={studentImg} alt="Fresh man" className="img_1" />
            <img
              src={graduateImg}
              alt="Graduation ceremony"
              className="img_3"
            />
            <img
              src={studentsImg}
              alt="students in a group"
              className="img_2"
            />
          </div>
          <div className="about_us_txt">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              sed accusantium similique officiis dolorum sunt aperiam, tenetur,
              commodi consequuntur nulla non expedita perferendis pariatur
              libero inventore distinctio qui consequatur repellat.
            </p>
            <button>Learn More &rarr;</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
