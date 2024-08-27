// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FacebookEmbed } from "react-social-media-embed";
import "./Sliderstyles.css";
// import { Atraining, Btraining, Ctraining, gvestbanner } from "../assets";

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

function CustomArrows() {
  const [scrollContainer, setScrollContainer] = useState(0);
  const [showSectionOne, setShowSectionOne] = useState(false);

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
      { threshold: 50, setState: setShowSectionOne },
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
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

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
    <div
      className={`${
        showSectionOne
          ? "container animate__animated animate__fadeInUp animate__slower "
          : " d-none"
      } container`}
    >
      <div className="d-flex">
        <div className="services-section space-40">
          <div className="feature-title ">
            <h2 className="space-30">Some Recent Events and Trainings...</h2>
          </div>

          <div className="slider-container slider-container-custom">
            <Slider {...settings}>
              <div>
                <div className="row">
                  <div className="col-full-width">
                    <div className="feature-collaborations">
                     
                        <FacebookEmbed
                          url="https://web.facebook.com/photo/?fbid=1001641301330615&set=pb.100044542624764.-2207520000"
                          className="feature-post"
                        />
                     
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-full-width">
                    <div className="feature-collaborations">
                    <FacebookEmbed
                          url="https://web.facebook.com/photo/?fbid=999188408242571&set=pb.100044542624764.-2207520000"
                          className="feature-post"
                        />
                     
                     
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-full-width">
                    <div className="feature-collaborations">
                    <FacebookEmbed
                          url="https://web.facebook.com/drsakintayo/posts/pfbid02mEhQ8d8vDzQ6piCmdVdV2kRMfg74LT8AncyPSnabSZdDoymhT9cY84FAFoVoXar7l"
                          className="feature-post"
                        />
                     
                     
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-full-width">
                    <div className="feature-collaborations">
                    <FacebookEmbed
                          url="https://web.facebook.com/drsakintayo/posts/pfbid0r9JKkmEf9egQVxHYFb2c79wSxBdZ6caQyF1pRZVoxV3pjrUr2zAoXZKiWhkJ8iiFl"
                          className="feature-post"
                        />
                     
                     
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomArrows;
