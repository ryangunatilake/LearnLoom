import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpeg";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.jpg";
import profile4 from "../Assets/profile-4.jpg";
import profile5 from "../Assets/profile-5.jpeg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
        Team of Designers 
        and Developers
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Osara Bandara"
          title="Back-end Developer"
          
         
        />
        <DoctorCard
          img={profile2}
          name="Chathuni"
          title="Back-end Developer"
        
          
        />
        <DoctorCard
          img={profile3}
          name="Parami Anupama"
          title="Back-end Developer"
          
        
        />
        <DoctorCard
          img={profile5}
          name="Dinal Vidushika"
          title="Back-end Developer"
        />
          <DoctorCard
          img={profile4}
          name="Ryan Gunatilake"
          title="Back-end Developer"
          />
      </div>
    </div>
  );
}

export default Doctors;