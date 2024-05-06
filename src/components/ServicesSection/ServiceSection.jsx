import React, { useState, useEffect } from "react";
import "./servicesection.css";
import Slider from "react-slick";
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
      speed: 2000,
    };

  return (
   
    <div
    className={`${
      showSectionThree
        ? "container animate__animated animate__fadeInUp animate__fast "
        : " d-none"
    } container`}
  >
    <div className="d-flex">
   
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
     
    </div>
  </div>

  )
}

export default ServiceSection