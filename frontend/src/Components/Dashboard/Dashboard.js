import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './Dashboard.css'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <h1>React Dashboard</h1>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} className="sidebar-height" />
    </div>
  );
}

export default Dashboard;

