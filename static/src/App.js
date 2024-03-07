import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import LectureNote from "./Pages/LectureNote";
import Upload from "./Pages/Upload";
import UploadDone from "./Pages/UploadDone";

function App() {
  return (
    <div className="App">
      <Router basename="/Learnloom">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/lecture-note" element={<LectureNote/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/upload-done" element={<UploadDone/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;