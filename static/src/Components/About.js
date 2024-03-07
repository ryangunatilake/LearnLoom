import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dinoImage from "../Assets/Dino.png"; // Import the image
import "../Styles/About.css";

function About() {
  const handleUploadClick = () => {
    // Handle the upload click event here
    console.log("Upload button clicked");
  };

  return (
    <div className="about-section" id="about">
      <div className="about-text-content">
        <h4 className="about-titleup"> 
          "Simplify. Master. Excel."
        </h4>
        <h3 className="about-title">
          <span>One Study Tool to Rule Them All</span>
        </h3>
        <p className="about-description">
          Discover the ultimate study companion that sets the standard for academic success.<br/>
          Our all-in-one platform is designed to revolutionize your learning experience. 
        </p>
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleUploadClick}
        >
          <FontAwesomeIcon /> UPLOAD
        </button>
      </div>

      <div className="solution-steps">
        <ol className="steps-list">
          <li className="step-item">Efficiency Unleashed</li>
          <li className="step-item">Collaborate and Conquer</li>
          <li className="step-item">Smart learning, Not hard work</li>
        </ol>
      </div>

      <div className="solution-image-container">
        <img src={dinoImage} alt="Study" />
      </div>

      <div className="additional-content">
        <div className="text-content">
          <h4>ABOUT</h4>
          <h1>Your Academic Partner</h1>
          <h3>Elevate Your Learning Experience</h3>
          <p>Empowering learners with a comprehensive study experience, we go beyond a platform. We aim to be your long-term study companion, working seamlessly with you.</p>
        </div>
        <div className="image-content">
          {/* Add your image here */}
        </div>
      </div>
      <button className="about-appointment-btn" type="button">ABOUT US</button>
    </div>
  );
}

export default About;
