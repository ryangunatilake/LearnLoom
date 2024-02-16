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
          title="Crystal-clear Summaries"
          description="Transform lectures effortlessly with StudySyncAI! Upload recordings; 
          receive concise, structured notes for accelerated learning. 
          Revolutionize study sessions today!"
        />

        <InformationCard
          title="Smart Flashcards"
          description="Experience the future of education with StudySyncAI! Seamlessly convert lecture recordings into personalized 
          flashcards, tailored to boost comprehension and retention. Revolutionize your study routine and unleash the power of 
          interactive learning at your fingertips!"
        />

        <InformationCard
          title="Engaging Quizzes"
          description="Turn lectures into interactive learning! Upload recordings, let our website transform them into custom 
          questions for an engaging study experience. Unlock knowledge effortlessly with our innovative approach!"
        />
      </div>
    </div>
  );
}

export default Info;