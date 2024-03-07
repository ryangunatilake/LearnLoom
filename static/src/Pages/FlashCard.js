import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/FlashCard.css";

function FlashCard() {
  return (
    <div className="flashcard-container">
      <div className="flashcard flashcard1">
        <h3>Flash Card 1</h3>
      </div>
      <div className="flashcard flashcard2">
        <h3>Flash Card 2</h3>
      </div>
      <div className="flashcard flashcard3">
        <h3>Flash Card 3</h3>
      </div>
     
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default FlashCard;



