import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../Styles/brands.css";
import { brands } from "./assets.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#080808", fontSize: "35px" }}
      onClick={onClick}
    >
      <FiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#080808", fontSize: "35px" }}
      onClick={onClick}
    >
      <FiChevronLeft />
    </div>
  );
}

function OurBrands() {
  const [scrollContainer, setScrollContainer] = useState(0);
  const [showSectionThree, setShowSectionThree] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollContainer(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const thresholds = [
      { threshold: 1300, setState: setShowSectionThree },
      // Add more thresholds and state setters as needed
    ];

    thresholds.forEach(({ threshold, setState }) => {
      if (scrollContainer > threshold) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [scrollContainer]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`${
          showSectionThree
            ? "animate__animated animate__fadeInUp animate__slower "
            : " d-none"
        }`}
      >
        <div className="container">
          <div className="services-section partner-section">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.land} alt="partner image" />
                  </div>
                </div>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.holding} alt="partner image" />
                  </div>
                </div>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.university} alt="partner image" />
                  </div>
                </div>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.consulting} alt="partner image" />
                  </div>
                </div>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.investment} alt="partner image" />
                  </div>
                </div>
                <div className="col-four-width">
                  <div className="partner-ctn">
                    <img src={brands.foundation} alt="partner image" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBrands;
