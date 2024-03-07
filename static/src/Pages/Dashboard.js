import React from "react";
import Sidebar from "../Components/Sidebar";
import Overview from "../Components/Overview";
import Profile from "../Components/Profile";
import '../Styles/Dashboard.css';
import ProjectSummary from "../Components/ProjectSummary";
import Task from "../Components/Task";

function Dashboard() {
  return (
    <div className="component">
      <Sidebar />
      <Profile />
      <div className="overview-project-summary">
        <Overview />
        <ProjectSummary />
        <Task />
      </div>
    </div>
  );
}

export default Dashboard;