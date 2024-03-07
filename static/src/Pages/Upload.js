import React from "react";
import Sidebar from "../Components/Sidebar";
import Profile from "../Components/Profile";
import '../Styles/Upload.css';
import UploadVideo from "../Components/UploadVideo";

function Upload() {
  return (
    <div className="upload-component">
      <Sidebar/>
      <Profile />
      <UploadVideo />
    </div>
  );
}

export default Upload;