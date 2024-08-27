import React, { useState, useEffect } from "react";
import Modal from "../components/Modal.jsx"
import "../Styles/footer.css";
import "../Styles/Utils.css";
import { FiMail, FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";
import { FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";


function Footer() {
  const [scrollUp, setScrollUp] = useState(0);
  const [fixedPosition, setFixedPosition] = useState(false);
  const [showClass, setShowClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollUp(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollUp > 10) {
      setFixedPosition(true);
    } else {
      setFixedPosition(false);
    }
    if (scrollUp > 45) {
      setShowClass(true);
    } else {
      setShowClass(false);
    }
  }, [scrollUp]);





  return (

    <>
    <Modal />
    <footer>
      <div className="container footer">
       
          <div className=" d-flex">
            <div className="col-two-width">
              <div className="footer-about-section">
                <h2 className="space-10">Get In Touch!</h2>

                <h4>
                  {" "}
                  <span>
                    {" "}
                    <FiMail className="icon-grid" />
                  </span>{" "}
                  Email:
                </h4>
                <p>
                  <b> Click to send Email </b>
                </p>

                <h4>
                  {" "}
                  <span>
                    {" "}
                    <FiGlobe className="icon-grid" />
                  </span>{" "}
                  Who we are :{" "}
                </h4>
                <p></p>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  quam voluptate blanditiis? Tempora, at blanditiis. quam
                  voluptate at blanditiis.Lorem ipsum dolor sit amet, consectetur
                   adipisicing elit. Esse  quam . 
                </p>
              </div>
            </div>
            <div className="col-two-width">
              <div className="footer-about-section">
                <h2 className="space-10">Get In Touch!</h2>
                <h4>
                  <span>
                    <FiMapPin className="icon-grid" />
                  </span>{" "}
                  ADDRESS:
                </h4>
                <p>
                  <b>LAGOS</b> : dolor sit amet consectetur.
                </p>
                <p>
                  <b>USA</b> : ipsum dolor sit amet consectetur.
                </p>
                <p>
                  <b>DUBAI</b> : ipsum dolor sit amet consectetur.
                </p>
                <h4>
                  <span>
                    <FiPhone className="icon-grid" />
                  </span>{" "}
                  Telephone:
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            {/* <div className="col-three-width">
              <div className="footer-short-link">
                <h2 className="space-10">Quick Links</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Me </a>
                  </li>
                  <li>
                    <a href="/contact">Our University </a>
                  </li>
                  <li>
                    <a href="/terms">Visit Our Store</a>
                  </li>
                  <li>
                    <a href="/privacy">Make Bookings </a>
                  </li>
                  <li>
                    <a href="/">Visit Our Blog</a>
                  </li>
                  <li>
                    <a href="/about">See Events</a>
                  </li>
                </ul>
              </div>
            </div> */}
         
          <div className="col-two-width">
            <div className="footer-cta">
              <h2 className="space-10">Send us an Email</h2>

              <form className="d-grid" action="">
                <div>
                  <input
                    type="text"
                    className="form-input"
                    name=""
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    className="form-input"
                    name=""
                    placeholder="Enter email"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    className="form-input"
                    name=""
                    placeholder="Write brief message"
                  />
                </div>

                <div className="button-cta-ctn">
                  <div className="col-two-width">
                    <button className="btn btn-sm btn-blue ">
                      {" "}
                      Send us a quick email
                    </button>
                  </div>
                  <div className="col-two-width"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>





<div
className={`d-none container d-flex  ${
  fixedPosition ? "fixed-app-container" : ""
}`}
>
<div
  className={ `${
    showClass ? "hide" : ""
  } section-social d-flex  animate__animated animate__slideInUp animate__slow`}
>
  <div className="main-section-social d-flex">
    <div className="social-icon">
      <BsFacebook className="icon" style={{ fontSize: 18 }} />
    </div>
    <div className="social-icon">
      <BsInstagram className="icon" style={{ fontSize: 18 }} />
    </div>
    <div className="social-icon">
      <FaTiktok className="icon" style={{ fontSize: 18 }} />
    </div>
    <div className="social-icon">
      <FaLinkedinIn className="icon" style={{ fontSize: 18 }} />
    </div>
  </div>
</div>
</div>



</>

  );
}

export default Footer;
