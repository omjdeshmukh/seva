import React from "react";
import logoi from "../../Assets/mini.jpg";
import "./Sidebar.css";

function Sidebar({sidebarOpen, closeSidebar} ) {
  return (
    <div id="sidebar" className={sidebarOpen ? "sidebar-responsive" : ""}>
      <div className="sidebar__title">
        <div>
          <img scr={logoi} alt="logo" />
          <h1>Dashboard</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => {
            closeSidebar();
          }}
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#"> Dashboard </a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="#"> Admin </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#"> Company </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#"> Employee </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#"> wearhouse </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#"> contacts </a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#"> Request </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#"> Leave Policy </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calender-check-o"></i>
          <a href="#"> Special Days </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#"> Apply for Leave </a>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-calender-check-o"></i>
          <a href="#"> Special Days </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-power-off"></i>
          <a href="#"> Log out </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
