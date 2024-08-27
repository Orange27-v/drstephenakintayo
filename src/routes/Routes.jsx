// Routes.jsx
import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
import { Route, Routes  } from "react-router-dom";
import HomePage from "./../pages/Home";
import AboutPage from "./../pages/About";
import ServicesPage from "./../pages/Services";
import BlogPage from "../pages/Blog.jsx";
import SliderPage from "../pages/Slider.jsx";
import NoPage from "../pages/NoPage.jsx";
import Animation from "../demo/Animation.jsx";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/slider" element={<SliderPage />} />
      <Route path="/anime" element={<Animation />} />


      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
