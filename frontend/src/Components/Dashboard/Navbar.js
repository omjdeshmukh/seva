import React from "react";
import "./Navbar.css";
import avatar from "../../Assets/png.png";

function Navbar({sidebarOpen, openSidebar}) {
  return (
    <div className="navbar">
      <div
        className="nav-icon"
        onClick={() => {
          openSidebar();  
        }}
      >
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar-left">
        <a href="#">Subscribers</a>
        <a href="#">manage</a>
        <a href="#" className="active_link">
          admin
        </a>
      </div>
      <div className="navbar-right">
          <a href="#" >
              <i className="fa fa-search"></i>
          </a>
          <a href="#" >
              <i className="fa fa-search"></i>
          </a>
          <a href="#" >
             <img width="30" src={avatar} alt={avatar} />
          </a>
      </div>
    </div>
  );
}

export default Navbar;
