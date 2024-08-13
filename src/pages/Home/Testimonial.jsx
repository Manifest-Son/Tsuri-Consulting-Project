import React from "react";
import "./Home.css";
import allanImg from "../../assets/allan.jpg";
import johnImg from "../../assets/john.jpg";
import steveImg from "../../assets/steve.jpg";
import rebeccaImg from "../../assets/rebecca.jpg";

// eslint-disable-next-line react/prop-types
function Testimonial() {
  const testimonial = [
    {
      img: johnImg,
      name: "John Doe",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Assumenda, eum ipsum debitis ducimus corporis dolor voluptatem, utsit sequi repellendus possimus exercitationem eaque laudantium?",
    },
    {
      img: allanImg,
      name: "Allan Kelvin",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Assumenda, eum ipsum debitis ducimus corporis dolor voluptatem, utsit sequi repellendus possimus exercitationem eaque laudantium?",
    },
    {
      img: rebeccaImg,
      name: "Rebecca Dawn",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Assumenda, eum ipsum debitis ducimus corporis dolor voluptatem, utsit sequi repellendus possimus exercitationem eaque laudantium?",
    },
    {
      img: steveImg,
      name: "Steve Jobs",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Assumenda, eum ipsum debitis ducimus corporis dolor voluptatem, utsit sequi repellendus possimus exercitationem eaque laudantium?",
    },
  ];
  return (
    <React.Fragment>
      <section className="testimonial_section">
        <h1 className="testimonial_header">
          This is what some of our clients have to say
        </h1>
        <div className="testimonial_container">
          {testimonial.map((currentTestimony, i) => (
            <div key={i} className="testimonial_wrapper">
              <p>{currentTestimony.testimony}</p>
              <div className="person">
                <img
                  src={currentTestimony.img}
                  alt="This displays a client who is giving their testimony."
                />
                <h1>{currentTestimony.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Testimonial;
