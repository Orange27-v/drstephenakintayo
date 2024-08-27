import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./Aboutsection.css";
import { FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Aboutsection() {
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
    const thresholds = [{ threshold: 50, setState: setShowSectionOne }];

    thresholds.forEach(({ threshold, setState }) => {
      if (scrollContainer > threshold) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [scrollContainer]);

  useEffect(() => {
    anime({
      targets: ".one, .two, .three, .four, .five, .six",
      translateX: -270,
      duration: 2000,
      delay: anime.stagger(400, { easing: "easeInOutSine" }),
    });
  }, []);

  return (
    <div className="container -margin-top">
      <div
        className={`${
          showSectionOne
            ? "animate__animated animate__fadeInUp animate__fast"
            : "d-flex space-top-60 space-bottom-20 d-none"
        } d-flex space-top-60 space-bottom-20`}
      >
        <div className="services-section">
          <div className="section-title-ctn ">
            <h2>About Dr Stephen Akintayo</h2>
            <p>
              Dr Stephen Akintayo is a Nigerian entrepreneur, author, and
              digital marketing expert. He is known for his expertise in online
              marketing and for founding several successful businesses in
              Nigeria. Dr Akintayo is the CEO of GText Media and Investment
              Limited, a digital marketing firm that specializes in bulk SMS,
              email marketing, and other digital advertising services.
            </p>
          </div>
          <div className="services-left-ctn row">
            <div className="col-three-width  animate__animated animate__pulse animate__slow ">
              <div className="services-info-ctn services-info-ctn-bg">
                <div className="service-info-desc">
                  <div className="section-desc-ctn">
                    <div>
                      <h2 className="section-desc-heading">
                        Dr Stephen Akintayo
                      </h2>
                    </div>
                    <div className="section-desc-p">
                      <p>
                        Chairman Gtextholdings, Member forbes councils, Best of
                        Africa Leading Investment Coach
                      </p>
                    </div>

                    <div className="section-desc-social-icon">
                      <div className="social-icon">
                        <BsFacebook className="icon" />
                      </div>
                      <div className="social-icon">
                        <BsInstagram className="icon" />
                      </div>
                      <div className="social-icon">
                        <FaTiktok className="icon" />
                      </div>
                      <div className="social-icon">
                        <FaLinkedinIn className="icon" />
                      </div>
                      {/* <div className="social-icon"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-three-width">
              <div className=" services-details-main">
                <div
                  className="services-details-ctn one" >
                  <div className="services-details-info">
                    <h3> Visionary</h3>
                    <p>
                      Stephen Akintayo is known for his ability to think big and
                      have a clear vision for his businesses and projects.
                    </p>
                  </div>
                </div>
                <div className="services-details-ctn two">
                  <div className="services-details-info">
                    <h3> Entrepreneurial Spirit </h3>
                    <p>
                      He has a strong entrepreneurial drive, having started
                      several successful businesses in various industries.
                    </p>
                  </div>
                </div>
                <div className="services-details-ctn three">
                  <div className="services-details-info">
                    <h3> Inspirational Leader</h3>
                    <p>
                      Akintayo is a motivational speaker and leader who inspires
                      others to achieve their goals and pursue their passions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-three-width -margin-top">
              <div className="services-details-main">
                <div className="services-details-ctn four">
                  <div className="services-details-info">
                    <h3> Philanthropic </h3>
                    <p>
                      Akintayo is committed to giving back to his community, and
                      has founded a foundation to support education, healthcare,
                      and youth empowerment initiatives.
                    </p>
                  </div>
                </div>
                <div
                  className="services-details-ctn five">
                  <div className="services-details-info">
                    <h3> Strategic Thinker </h3>
                    <p>
                      He is a strategic thinker who has built successful
                      businesses through careful planning and execution.
                    </p>
                  </div>
                </div>
                <div
                  className={`services-details-ctn services-details-ctn-last  six `}
                >
                  <div className="services-details-last">
                    <h3> Resilient </h3>
                    <p>
                      He has demonstrated resilience and perseverance in the
                      face of challenges to build successful businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
