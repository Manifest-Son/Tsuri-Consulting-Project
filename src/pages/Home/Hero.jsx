import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: slideDuration,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <section className="carousel">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentSlide + 1) % 3) * 35}%`,
              transition: `width ${slideDuration}ms linear`,
            }}
          />
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div className="hero_container">
            <div className="hero_text">
              <h1>Tsuri Consultants Limited</h1>
              <h3>Services you can trust</h3>
              <p>
                As a consulting firm we are hooured to work with every client
                irregadless of the status quo to bring our skill set and
                experience to impact the current generation. We value people
                more and this makes us on top.
              </p>
              <Link to="/about">
                <button>Learn More &rarr;</button>
              </Link>
            </div>
          </div>

          <div className="hero_container_1">
            <div className="hero_text">
              <h1>Tsuri Consultants Limited</h1>
              <h3>Want us near you?</h3>
              <p>
                We are always available to any request from our clients to offer
                them our service. We are strong to make you strong. Click on the
                button below to book us to come to you.
              </p>
              <Link to="/about">
                <button>Book Us &rarr;</button>
              </Link>
            </div>
          </div>

          <div className="hero_container_2">
            <div className="hero_text">
              <h1>Tsuri Consultants Limited</h1>
              <h3>Book Knowledge</h3>
              <p>
                Books carry a wealth of knowledge. Man is destroyed because of
                lack of knowledge or in short, ignorance. From our experience
                and our heart to reaveal how to make it through in the higher
                institutions, we have written a book that reveals it all and it
                is affordable to purchase. Click to order the book.
              </p>
              <Link to="/about">
                <button>Book Store &rarr;</button>
              </Link>
            </div>
          </div>
        </Slider>

        <div className="carousel_nav">
          <button id="prev" onClick={handlePrevClick}>
            &#10094;
          </button>
          <button id="next" onClick={handleNextClick}>
            &#10095;
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
