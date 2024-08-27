import React, { useState, useEffect } from "react";
import "./LeftSideSlideMenu.css"; // Import CSS file
import { MdOutlineClose } from "react-icons/md";

const LeftSideMenu = ({ onAnimationEnd, shouldAnimate }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidemenu ${isOpen ? "open" : ""} ${
        shouldAnimate ? "animate" : ""
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className={`${isOpen ? "overlay" : ""}`} onClick={toggleMenu}></div>
      <div className="menu-content">
        <span className="close-icon" onClick={toggleMenu}>
          <MdOutlineClose className="icon-grid" />
        </span>
        {/* Your menu content here */}
      </div>
    </div>
  );
};

export default LeftSideMenu;
