import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dinoImage from "../Assets/Dino.png"; // Import the image
import "../Styles/AboutUs2.css";

function AboutUs2() {
  const handleUploadClick = () => {
    // Handle the upload click event here
    console.log("Upload button clicked");
  };

  return (
    <div className="about-section" id="about">
      <div className="about-text-content">
        <h3 className="about-title">
          <span>Your Study Tool <br /> Partner</span> {/* Add <br> tag here */}
        </h3>
        <p className="about-description">
          At LearnLoom, we're more than a study tool; we're your academic ally. Our seamless integration of technology and design, coupled with a profound understanding of learning, offers a tailored solution for your educational journey. Join us, and elevate your study experience with a partner committed to your success. 
        </p>
      </div>

      <div className="solution-image-container">
        <img src={dinoImage} alt="Study" />
      </div>

      <div className="additional-content">
        <div className="text-content">
          <h4>KEY FEATURES</h4>
          <h1>Comprehensive Academic <br /> Partnership</h1>
          <p>Designed for the long run, LearnLoom is more than a tool; it's an extension of your academic team. We put ourselves in your shoes, partnering closely to enhance your learning journey.</p>
        </div>
        <div className="image-content">
          {/* Rectangles */}
          <div className="rectangles">
            <div className="rectangle white-rectangle">
                <p className="rectangle-text">Professional</p>
                <p className="rectangle-text-description">Tech-Powered Academic <br /> Success Solution.</p>
            </div>
            <div className="rectangle transparent-rectangle">
                <p className="rectangle-text-white-text">Accessibility</p>
                <p className="rectangle-text-description-white-text">Your Academic Goals, User-Centric Solution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs2;