import React from "react";
import Navbar from "../Components/Navbar";
import Doctors from "../Components/Doctors";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import AboutUs1 from "../Components/AboutUs1";
import AboutUs2 from "../Components/AboutUs2";

function AboutUs() {
  return (
    <div className="about-us-section">
      <Navbar />
      <AboutUs1 />
      <AboutUs2 />
      <Doctors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default AboutUs;