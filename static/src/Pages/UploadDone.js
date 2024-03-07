import React from "react";
import Sidebar from "../Components/Sidebar";
import Profile from "../Components/Profile";
import '../Styles/Upload.css';
import UploadVideoDone from "../Components/UploadVideoDone";

function UploadDone() {
  return (
    <div className="upload-component">
      <Sidebar/>
      <Profile />
      <UploadVideoDone />
      
    </div>
  );
}

export default UploadDone;