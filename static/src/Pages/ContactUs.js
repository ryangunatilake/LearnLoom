import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/ContactUs.css"; // Import the ContactUs specific CSS file if needed

function ContactUs() {
  return (
    <div className="contact-us-section">
      <Navbar />
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p>Welcome to LearnLoom. We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you and ensure your experience with us is seamless.</p>
        <div className="contact-info">
          <div className="card">
            <i className="fa fa-phone"></i>
            <p>Call Us<br /> <br /></p> <p1>091 2227 009</p1>
          </div>
          <div className="card">
            <i className="fa fa-envelope"></i>
            <p>Email Us<br /> <br /> </p> <p1>info@LearnLoom.com</p1>
          </div>
          <div className="card">
            <i className="fa fa-map-marker"></i>
            <p>Locate Us <br /> <br /></p><p1>NO 12, Bambalapitiya, Galle Road</p1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;