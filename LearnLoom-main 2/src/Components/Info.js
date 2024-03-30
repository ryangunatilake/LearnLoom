import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Features</span>
        </h3>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title={<p className="info-card-title">Crystal-clear Summaries</p>}
          description={
            <p className="info-card-description">
              Transform lectures effortlessly with StudySyncAI! Upload recordings;
              receive concise, structured notes for accelerated learning.
              Revolutionize study sessions today!
            </p>
          }
        />

        <InformationCard
          title={<p className="info-card-title">Smart Flashcards</p>}
          description={
            <p className="info-card-description">
              Experience the future of education with StudySyncAI! Seamlessly convert
              lecture recordings into personalized flashcards, tailored to boost
              comprehension and retention. Revolutionize your study routine and
              unleash the power of interactive learning at your fingertips!
            </p>
          }
        />

        <InformationCard
          title={<p className="info-card-title">Engaging Quizzes</p>}
          description={
            <p className="info-card-description">
              Turn lectures into interactive learning! Upload recordings, let our
              website transform them into custom questions for an engaging study
              experience. Unlock knowledge effortlessly with our innovative
              approach!
            </p>
          }
        />
         <div className="info-card">
          <div className="video-player">
            {/* Your video player component */}
            <video controls>
              <source src="path_to_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-description">
            <p className="video-text">
              Dive into a world of possibilities! Watch our engaging videos to
              effortlessly master the art of creating lecture notes, flashcards,
              and questions using our intuitive tools.
            </p>
          </div>
        <div className="info-cta">
          <div className="cta-rectangle">
            <h2 className="cta-text">Unlock Your Academic Potential</h2>
            <p className="cta-description">Revolutionize your study experience with cutting-edge technology, personalized learning, and collaboration. We're not just a platform; we're your academic partner.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Info;