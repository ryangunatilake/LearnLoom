import React from 'react';
import whiteText from "../Assets/White-Text.png";
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={whiteText} alt="LearnLoom" className="navbar-logo-img" />
      <Link to="/upload" className='upload-link'>
        <button className="upload-button">
          <div className="icon-container">
            <span className="plus-icon">+</span>
          </div>
          UPLOAD LECTURE
        </button>
      </Link>
      <nav className="nav">
        <a href="#">Dashboard</a>
        <a href="#">Lecture Notes</a>
        <a href="#">Flashcards</a>
        <a href="#">Quiz’s</a>
        <a href="#">Projects</a>
        <a href="#">Task</a>
      </nav>
      <button className="question-button">
        <div className="inner-circle">
          <span>?</span>
        </div>
      </button>
    </div> 
  );
}

export default Sidebar;