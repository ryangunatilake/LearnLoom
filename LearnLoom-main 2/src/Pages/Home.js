import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <FAQ />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;