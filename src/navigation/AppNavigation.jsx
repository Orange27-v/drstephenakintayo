// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import LeftSideMenu from "../components/SideMenu/LeftSideMenu.jsx";
import RightSideMenu from "../components/SideMenu/RightSideMenu.jsx";

import AppRoutes from "../routes/Routes.jsx";
import "../Styles/Header.css";
import { Logo } from "../components/assets.js";

function AppNavigation() {
  const [isLeftSideMenuOpen, setIsLeftSideMenuOpen] = useState(false);
  const [isRightSideMenuOpen, setIsRightSideMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);
  const [fixedClass, setFixedClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > 10) {
      setFixedClass(true);
    } else {
      setFixedClass(false);
    }
  }, [scrollTop]);

  useEffect(() => {
    if (isLeftSideMenuOpen) {
      // Trigger animation
      setShouldAnimate(true);
    }
  }, [isLeftSideMenuOpen]);

  const toggleRightSideMenu = () => {
    setIsRightSideMenuOpen(!isRightSideMenuOpen);
  };

  const toggleLeftSideMenu = () => {
    setIsLeftSideMenuOpen(!isLeftSideMenuOpen);
  };

  const onAnimationEnd = () => {
    setShouldAnimate(false);
  };

  return (
    <Router>
      <header>
        <div
          className={`app-container ${fixedClass ? "fixed-app-container" : ""}`}
        >
          <nav className="nav-bar">
            <div className="menu-logo-ctn">
              <div className="menu-logo">
                <NavLink to="/">
                  <img className="logo-image" src={Logo} alt="" />
                </NavLink>
              </div>
              <div className="name-ctn">
                <NavLink to="/">
                  <p>Dr Stephen Akintayo</p>
                  <small>info@stephenakintayo.com</small>
                </NavLink>
              </div>
            </div>

            <div className="nav-ctn">
              <div
                className="main-header__sidebar-btn"
                onClick={toggleRightSideMenu}
              >
                <CgMenuGridO className="icon-grid" />
              </div>

              <ul>
                <li>
                  <NavLink
                    to="/"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/university"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    University
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/events"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bookings"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="selected"
                    className={({ isActive }) => (isActive ? "selected" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="nav-left-ctn">
                <div className="main-header__notify sidebar-btn__toggler">
                  <div className="circle"></div>
                  <span> Streaming Live </span>
                </div>

                <div
                  className="main-header__sidebar-btn-end sidebar-btn__toggler"
                  onClick={toggleLeftSideMenu}
                >
                  <RiMenu3Line className="icon-grid d-none" />
                </div>
              </div>
            </div>

            {isLeftSideMenuOpen && (
              <LeftSideMenu
                onAnimationEnd={onAnimationEnd}
                shouldAnimate={shouldAnimate}
              />
            )}

            {isRightSideMenuOpen && <RightSideMenu />}

            {/* <LeftSideMenu /> */}
            {/* <RightSideMenu /> */}
          </nav>
        </div>
      </header>
      <AppRoutes />
    </Router>
  );
}

export default AppNavigation;
