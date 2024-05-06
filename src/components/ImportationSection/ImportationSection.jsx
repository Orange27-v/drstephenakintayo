import React, { useState, useEffect } from "react";
import "./Importation.css";
function ImportationSection() {


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
  

  return (
   
    <div
    className={`${
      showSectionOne
        ? "animate__animated animate__fadeInUp animate__slower "
        : " d-none"
    }`}
  >
    <div className="shipping-section">
      <div className="d-flex">
        <div className="col-full-width">
          <div className="shipping-cnt-holder">
            <h3>
              {" "}
              Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto, assumenda.{" "}
            </h3>
            <button className="btn btn-lg btn-white ">
              {" "}
              start mini importation today
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImportationSection