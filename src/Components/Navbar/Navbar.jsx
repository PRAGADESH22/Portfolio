import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg"
// import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt=""  className="nav-logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
