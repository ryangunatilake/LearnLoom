import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/Quiz.css";

function quiz() {
    return (
      <div>
        
        <div className="app">h
          <div className="content-container">
            <div className="lecture-note-title">Quiz </div> {/* Add the title here */}
            {/* Display lecture notes here */}
            <div className="lecture-note">
              {/* Add content specific to Lecture 1 */}
              <div className="new-div-class">
                {/* Content specific to the new div class */}
              </div>
            </div>
          </div>
        
  
          <Sidebar />
        </div>
      </div>
    );
  }
  
  export default quiz;
  