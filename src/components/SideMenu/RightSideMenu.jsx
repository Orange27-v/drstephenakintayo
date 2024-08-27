import React, { useState, useEffect } from "react";
import "./RightSideSlideMenu.css"; // Import CSS file
import { MdOutlineClose } from "react-icons/md";
import { FiMapPin, FiPhone} from "react-icons/fi";

import {
 Logo,
} from "../assets";

const RightSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <div className={`sidemenu-right ${isOpen ? "open" : ""}`}>
      <div
        className={`${isOpen ? "overlay-right" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className="menu-content">
        <span className="close-icon" onClick={toggleMenu}>
          <MdOutlineClose className="icon-grid" style={{ color: "white" }} />
        </span>
        {/* Your menu content here */}

        <div className="sidemenu-header">
          <div className="menu-logo-ctn menu-logo-ctn-left ">
            <div className="menu-logo">
              <div onClick={handleLogoClick}>
                <img className="logo-image" src={Logo} alt="" />
              </div>
            </div>
            <div className="name-ctn name-ctn-left">
              <div onClick={handleLogoClick}>
                <p>Dr Stephen Akintayo</p>
                <small>info@stephenakintayo.com</small>
              </div>
            </div>
          </div>
          </div>

          <div className="about-sa">
            <p>
              Stephen Akintayo is a Nigerian entrepreneur, author, and digital
              marketing expert. He is known for his expertise in online
              marketing and for founding several successful businesses in
              Nigeria. Akintayo is the CEO of GText Media and Investment
              Limited, a digital marketing firm that specializes in bulk SMS,
              email marketing, and other digital advertising services.
            </p>
          </div>




          <div className="sidebar-about-section">
              <h2 className="space-10">Get In Touch!</h2>
              <h4>
                <span>
                  <FiMapPin className="icon-grid icon-grid-left" />
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
                  <FiPhone className="icon-grid icon-grid-left" />
                </span>{" "}
                TELEPHONE:
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>
      </div>
  );
};

export default RightSideMenu;
