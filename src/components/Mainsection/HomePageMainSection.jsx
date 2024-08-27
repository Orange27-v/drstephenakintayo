// eslint-disable-next-line no-unused-vars
import React from "react";

// import "../../Styles/Utils.css";
import "./mainsection.css";
// import "../../components/Button.css";

import {
    SKBlackWhite,
  } from "../assets";


function HomePageMainSection() {

  return (
    <div className="container">
    <div className="d-flex">
        <div className="main-section-ctn">
          <div className="col-two-width">
            <div className="ska-about-content animate__animated animate__fadeInLeft animate__slow">
              <div className="ska-name-heading">
                <h2>DR STEPHEN AKINTAYO</h2>
                <p>
                  Chairman, Text Holdings Founder, Stephen Akintayo Foundation.
                </p>
              </div>
              <div className="ska-forbes-ctn">
                <div className="forbes-ska">
                  <h2>Forbes</h2>
                </div>
                <div className="ska-left-desc">
                  <p>
                    BEST OF AFRICA LEADING INVESTMENT COACH AND REAL ESTATE
                    MOGUL.
                  </p>
                </div>
              </div>

              <div className="ska-world-mission">
                <p>
                  Raising 1 million millionaires in the world of business
                  through mentorship and in-depth training in Real estate, money
                  market, (Cryptocurrency, Forex, trading and stocks and
                  shares), E-commerce, Digital Marketing, Authoring and Speaking
                  and software Vending.
                </p>

                <div className="space-20">
                  <button className="btn btn-lg btn-white">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-two-width d-md-none">
            <div className="bck-img-ctn animate__animated animate__fadeInRight animate__slower">
              <img className="sk-one" src={SKBlackWhite} alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default HomePageMainSection;
