import React from 'react';
import '../Styles/Profile.css';

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="sidebarr">
        <div className="nav-item">Dashboard</div>
      </div>
      <div className="main-content">
        <input type="text" className="search-bar" placeholder="Search for anything..." />
        <div className="profile">
          <div className="avatar"></div>
          <div className="user-info">
            <div className="user-name">User Name</div>
            <div className="university-name">University Name</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;