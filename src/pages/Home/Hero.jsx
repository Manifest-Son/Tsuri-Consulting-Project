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
    dots: true,
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
              width: `${((currentSlide + 1) % 3) * 33.33}%`,
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet excepturi ipsa nulla quia aliquid recusandae magni. Iste
                deleniti tenetur, in adipisci magnam eveniet iusto, est ullam ad
                quis eligendi nostrum.
              </p>
              <button>
                <Link to="/about">Learn More &rarr;</Link>
              </button>
            </div>
          </div>

          <div className="hero_container_1">
            <div className="hero_text">
              <h1>Tsuri Consultants Limited</h1>
              <h3>Want us near you?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet excepturi ipsa nulla quia aliquid recusandae magni. Iste
                deleniti tenetur, in adipisci magnam eveniet iusto, est ullam ad
                quis eligendi nostrum.
              </p>
              <button>
                <Link to="/about">Book Us &rarr;</Link>
              </button>
            </div>
          </div>

          <div className="hero_container_2">
            <div className="hero_text">
              <h1>Tsuri Consultants Limited</h1>
              <h3>Book Knowledge</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet excepturi ipsa nulla quia aliquid recusandae magni. Iste
                deleniti tenetur, in adipisci magnam eveniet iusto, est ullam ad
                quis eligendi nostrum.
              </p>
              <button>
                <Link to="/about">Book Store &rarr;</Link>
              </button>
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
