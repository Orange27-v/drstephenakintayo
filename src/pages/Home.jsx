import React, { useState, useEffect } from "react";
import SliderCustomArrows from "../components/BlogSection/SliderComponent.jsx";
import OurBrands from "../components/OurBrands";
import HomePageMainSection from "../components/Mainsection/HomePageMainSection";
import Footer from "../components/Footer";
import Aboutsection from "../components/Aboutsection/Aboutsection";
import AchievementsSection from "../components/Achievements/AchievementsSection";
import ServiceSection from "../components/ServicesSection/ServiceSection.jsx";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews.jsx";
import ImportationSection from "../components/ImportationSection/ImportationSection.jsx";

function Home() {
  return (
    <div>
      <HomePageMainSection />
      <Aboutsection />
      <AchievementsSection />
      <ServiceSection />
      <SliderCustomArrows />
      <CustomerReviews />
      <ImportationSection />
      <OurBrands />
      <Footer />
    </div>
  );
}

export default Home;
