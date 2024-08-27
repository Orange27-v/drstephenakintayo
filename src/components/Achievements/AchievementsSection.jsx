



import React, { useState, useEffect } from "react";
import "./achievements.css";
export default function AchievementsSection() {


    const [scrollContainer, setScrollContainer] = useState(0);
    const [showSectionTwo, setShowSectionTwo] = useState(false);
  
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
       
        { threshold: 800, setState: setShowSectionTwo },
      
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
    <div className="list-box-section">
    <div
      className={`${
        showSectionTwo
          ? "container animate__animated animate__fadeInUp animate__fast "
          : " d-none"
      } container`}
    >
      <div className="d-flex space-bottom-60 ">
        <div className="col-full-width">
          <div className="services-section  ">
            <div className="section-title-ctn ">
              <h2 className="space-30">
                Some Notable Achievements of Dr Stephen Akintayo
              </h2>
            </div>
            <div className="services-left-ctn row">
              <div className="col-two-width d-flex">
                <div className="listing-section">
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>1</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        Stephen Akintayo has built a business empire, Gtext
                        Holdings, with successful ventures in real estate,
                        finance, and technology, including luxury properties
                        like Gtext Homes and a financial services company,
                        cementing his reputation as a savvy entrepreneur and
                        significant player in Nigeria's business world.
                      </p>
                    </div>
                  </div>
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>2</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        As an author, Akintayo has published several
                        bestselling books, including "The Gift of Thoughts"
                        (2013), "The Power of Possibility Thinking" (2015),
                        and "The Art of Possibility" (2018). His books have
                        inspired many readers to think positively and strive
                        for success.
                      </p>
                    </div>
                  </div>
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>3</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        Awards recognition, includes the "Young Entrepreneur of the
                        Year" award by the Lagos Chamber of Commerce and
                        Industry (2014) and the "100 Most Influential People
                        in Nigeria" by the Nigerian government (2015) and
                        also named "Africa's Most Influential Business
                        Leader" by the Africa Leadership Forum (2018).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-two-width d-flex">
                <div className="listing-section">
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>4</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        In addition to his business and literary
                        achievements, Akintayo is also a dedicated
                        philanthropist. He founded the Stephen Akintayo
                        Foundation, which has supported various charitable
                        causes, including education initiatives, healthcare
                        projects, and youth empowerment programs.
                      </p>
                    </div>
                  </div>
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>5</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        Akintayo has inspired many people with his speeches
                        and lectures, which focus on themes such as success,
                        leadership, and personal development. He has spoken
                        at various events, including TEDx Lagos, The African
                        Leadership Forum, and The Nigerian Economic Summit.
                      </p>
                    </div>
                  </div>
                  <div className="listing-section-ctn">
                    <div className="list-box">
                      <h2>6</h2>
                    </div>
                    <div className="list-box-heading">
                      <p>
                        Overall, Stephen Akintayo's achievements demonstrate
                        his versatility, hard work, and dedication to making
                        a positive impact in the world. He is a role model
                        for many young entrepreneurs, leaders, and
                        individuals who aspire to make a difference in their
                        communities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
