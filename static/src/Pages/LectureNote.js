import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/LectureNote.css";

function LectureNote() {
  return (
    <div className="app">
      <div className="content-container">
   
        <div className="lecture-note1">
          <h3>Lecture 1</h3>
        </div>
        <div className="lecture-note2">
          <h3>Lecture 2</h3>
        </div>
        <div className="lecture-note3">
          <h3>Lecture 3</h3>
        </div>
        <div className="lecture-note4">
          <h3>Lecture 4</h3>
        </div>
        <div className="lecture-note5">
          <h3>Lecture 5</h3>
        </div>
        <div className="lecture-note6">
          <h3>Lecture 6</h3>
        </div>
      </div>
      <div className="component">
        <Sidebar />
      </div>
    </div>
  );
}

export default LectureNote;

