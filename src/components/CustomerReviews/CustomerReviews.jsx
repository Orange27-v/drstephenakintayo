import React, { useState, useEffect } from "react";
import "./CustomerReviews.css";


function CustomerReviews() {

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
      ];
  
      thresholds.forEach(({ threshold, setState }) => {
        if (scrollContainer > threshold) {
          setState(true);
        } else {
          setState(false);
        }
      });
    }, [scrollContainer]);
  


  return (
    <div
    className={`${
      showSectionThree
        ? "section-short-ctn animate__animated animate__fadeInUp animate__slower "
        : " d-none"
    } section-short-ctn`}
  >
    <div className="container">
      <div className="services-section d-grid ">
        <div className="section-title-ctn space-40 ">
          <h2 className="">Our customer reviews</h2>
        </div>

        <div className="services-section figure-section ">
          <div className="d-flex ">
            <div className="col-three-width">
              <div className="figure-quote">
                <h3>Olamide Oyebade </h3>
                <p>
                  Stephen Akintayo is a true mentor and leader, dedicated to
                  empowering young Africans to achieve financial freedom
                  through legitimate means. His guidance has transformed my
                  life and I'm forever grateful!"
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Chukwuma Okoroafor </h3>
                <p>
                  I've had the privilege of learning from Stephen Akintayo
                  and I can confidently say he's a rare gem. His passion for
                  helping others succeed is inspiring and his teachings have
                  helped me build a successful career.
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Nneoma Onyekwere </h3>
                <p>
                  Stephen Akintayo's mentorship has been a game-changer for
                  me. He's shown me that hard work and determination can
                  lead to financial stability and success. Thank you for
                  believing in me and pushing me to reach my potential!
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-three-width">
              <div className="figure-quote">
                <h3> Abdulrahman Suleiman </h3>
                <p>
                  I was struggling to make ends meet until I met Stephen
                  Akintayo. His advice and guidance helped me turn my life
                  around and now I'm living my best life. He's a true
                  blessing to our generation!
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Zainab Mohammed </h3>
                <p>
                  Stephen Akintayo is a shining example of what it means to
                  be a successful and responsible entrepreneur. His
                  commitment to empowering young Africans is admirable and I
                  feel honored to have learned from him.
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Ayobami Adedoyin</h3>
                <p>
                  Stephen Akintayo's teachings have been a beacon of hope
                  for me. He's shown me that with the right mindset and
                  skills, I can achieve greatness. Thank you for inspiring
                  me to reach for my dreams!
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-three-width">
              <div className="figure-quote">
                <h3> Chinonso Ibe</h3>
                <p>
                  I was lost and unsure of my future until I met Stephen
                  Akintayo. His guidance and mentorship have helped me
                  discover my purpose and build a successful business. I'm
                  forever grateful!" -
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Oluwaseun Adegoke </h3>
                <p>
                  Stephen Akintayo is a true leader and visionary. His
                  passion for empowering young Africans is contagious and
                  has inspired me to make a positive impact in my community.
                  Thank you for being a role model and mentor!
                </p>
              </div>
            </div>
            <div className="col-three-width">
              <div className="figure-quote figure-quote-line">
                <h3> Fadekemi Oyediran</h3>
                <p>
                  Stephen Akintayo's training programs have been a
                  game-changer for me. He's taught me how to turn my passion
                  into a profitable business and I'm now living my best
                  life. Thank you for your wisdom and guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomerReviews