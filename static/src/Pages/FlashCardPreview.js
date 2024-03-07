import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/FlashCardPreview.css";

function FlashCardPreview() {
  return (
    <div className="app">
      <div className="content-container">
        <div className="flashcard-note-title">FlashCard One</div>
        {/* Display lecture notes here */}
        <div className="flashcard">
          {/* Add content specific to Lecture 1 */}
          <div className="new-div-class">
            {/* Content specific to the new div class */}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default FlashCardPreview;

