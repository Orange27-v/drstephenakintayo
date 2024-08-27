import React, { useState, useEffect } from "react";
import "./servicesection.css";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function NextArrow(props) {
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

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} Previous`}
      style={{ ...style, display: "block", color: "#080808", fontSize: "35px" }}
      onClick={onClick}
    >
      <FiChevronLeft />
    </div>
  );
}

function ServiceSection() {
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
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
        showSectionThree
          ? " container animate__animated animate__fadeInUp animate__fast "
          : " d-none"
      } container`}
    >
      <div className="container ">
        <Slider {...settings}>
          <div className="col-four-width">
            <div className="services-ctn ">
              <div className="services-bg">
                <div className="service-details">
                  <h2>Gtext Land</h2>
                  <p>
                    A real estate development company focused on building
                    affordable and luxurious properties.
                  </p>
                </div>

                <div className="service-details-btn">
                  <button className="btn btn-lg btn-white ">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-four-width">
            <div className="services-ctn ">
              <div className="services-bg">
                <div className="service-details">
                  <h2> GVEST </h2>
                  <p>
                    A real estate investment platform providing affordable
                    housing solutions and empowering individuals to become real
                    estate investors.
                  </p>
                </div>

                <div className="service-details-btn">
                  <button className="btn btn-lg btn-white ">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-four-width">
            <div className="services-ctn">
              <div className="services-bg">
                <div className="service-details">
                  <h2> SA University</h2>
                  <p>
                    {" "}
                    An educational platform offering courses and programs for
                    entrepreneurs and business leaders.
                  </p>
                </div>

                <div className="service-details-btn">
                  <button className="btn btn-lg btn-white ">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-four-width">
            <div className="services-ctn ">
              <div className="services-bg">
                <div className="service-details">
                  <h2> Gtext Holdings </h2>
                  <p>
                    Gtext Holdings: A conglomerate with interests in real estate
                    and other sectors.
                  </p>
                </div>

                <div className="service-details-btn">
                  <button className="btn btn-lg btn-white ">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ServiceSection;
