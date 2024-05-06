// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FacebookEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";
import "./Sliderstyles.css";
import { Atraining, Btraining, Ctraining, gvestbanner } from "../assets";

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
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

          <div className="slider-container slider-container-custom ">
            <Slider {...settings}>
              <div>
                <div className="d-flex">
                  <div className="col-full-width">
                    <div className="feature-colabroations">
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <FacebookEmbed
                          url="https://web.facebook.com/drsakintayo/posts/pfbid02e7t5PbgRdaGfKc7xnre2SH387SvDPvYop3c6bb2y81tdNWXZuShB1Rfqo4tqiyrGl"
                          width={450}
                          height={550}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div className="col-full-width">
                    <div className="feature-colabroations">
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <InstagramEmbed
                            url="https://www.instagram.com/p/C6eOQ5irIvk/?fbclid=IwZXh0bgNhZW0CMTAAAR0Xpg-aPt-yECMeG0mi66w1IcCzwOhtZ1eMjGHa2G1ovG41snbnM0diTyk_aem_AUSAuBEN05dY35h29Z2URKKcEKA703aUPzEt8WVFRJb7l-3NtF8StSfEYv9VZ18Ceh8sK9G3o8ZS9swgbDR6JOHS&img_index=2"
                            width={450}
                            height={550}
                            captioned />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div className="col-two-width">
                    <div className="feature-colabroations">
                      <div className="featured-image">
                        <img src={Ctraining} alt="" />
                      </div>

                      <div className="feature-link d-flex">
                        <div className="featured-dash"></div>
                        <div className="featured-info">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet
                            consectetur adipisicing.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-two-width">
                    <div className="feature-colabroations">
                      <div className="feature-section">
                        <div className="feature-title ">
                          <h2>EFFECTIVE REALESTATE DEVELOPMENT</h2>
                        </div>
                        <p>
                          Another edition is here! The CEOs Leadership Retreat
                          is happening live in Ghana! The venue is Kempinski
                          Hotel, Ghana. The date is from 16th - 20th May, 2024.
                          It's going to be 10X of the previous editions, which
                          you cannot afford to miss.
                        </p>

                        <p>
                          Akintayo urges Nigerian entrepreneurs to create value
                          amid the economic challenges facing the country. It
                          was 5 days of FIRE! 🔥🔥 The truth was laid bare.
                          Mediocrity was attacked, and the spirit of excellence
                          was birthed.
                        </p>

                        <p>
                          Akintayo urges Nigerian entrepreneurs to create value
                          amid the economic challenges facing the country. What
                          I post on social media is just a fraction of what is
                          in me to pour out. If you want to move to the next
                          level in your business, move close.
                        </p>
                        <div className="feature-btn">
                          <button className="btn btn-lg btn-blue">
                            Get More Information
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div className="col-two-width">
                    <div className="feature-colabroations">
                      <div className="featured-image">
                        <img src={gvestbanner} alt="" />
                      </div>

                      <div className="feature-link d-flex">
                        <div className="featured-dash"></div>
                        <div className="featured-info">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet
                            consectetur adipisicing.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-two-width">
                    <div className="feature-colabroations">
                      <div className="feature-section">
                        <div className="feature-title ">
                          <h2>EFFECTIVE REALESTATE DEVELOPMENT</h2>
                        </div>
                        <p>
                          Another edition is here! The CEOs Leadership Retreat
                          is happening live in Ghana! The venue is Kempinski
                          Hotel, Ghana. The date is from 16th - 20th May, 2024.
                          It's going to be 10X of the previous editions, which
                          you cannot afford to miss.
                        </p>

                        <p>
                          Akintayo urges Nigerian entrepreneurs to create value
                          amid the economic challenges facing the country. It
                          was 5 days of FIRE! 🔥🔥 The truth was laid bare.
                          Mediocrity was attacked, and the spirit of excellence
                          was birthed.
                        </p>

                        <p>
                          Akintayo urges Nigerian entrepreneurs to create value
                          amid the economic challenges facing the country. What
                          I post on social media is just a fraction of what is
                          in me to pour out. If you want to move to the next
                          level in your business, move close.
                        </p>
                        <div className="feature-btn">
                          <button className="btn btn-lg btn-blue">
                            Get More Information
                          </button>
                        </div>
                      </div>
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
