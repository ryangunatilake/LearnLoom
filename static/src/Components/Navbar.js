import React, { useState } from "react";
import whiteText from "../Assets/White-Text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/" className="navbar-logo">
          <img src={whiteText} alt="LearnLoom" className="navbar-logo-img" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/about-us" className="navbar-links">
            About Us
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Dashboard
          </a>
        </li>
        <li>
          <Link to="/contact-us" className="navbar-links">
            Contact Us
          </Link>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Blog
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        SIGN UP!
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Dashboard
            </a>
          </li>
          <li>
            <Link onClick={openNav} to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;