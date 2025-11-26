import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import line from "../../assets/line.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  let [menu, setmenu] = useState(" ");
  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home" offset={50} className="anchor-link">
            <p onClick={() => setmenu("Home")}>Home</p>
          </AnchorLink>
          {menu === "Home" ? (
            <img src={line} alt="" style={{ height: "20px", width: "80px" }} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink href="#about" offset={50} className="anchor-link">
            <p onClick={() => setmenu("About")}>About Me</p>
          </AnchorLink>

          {menu === "About" ? (
            <img src={line} alt="" style={{ height: "20px", width: "80px" }} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink href="#services" offset={50} className="anchor-link">
            {" "}
            <p onClick={() => setmenu("Skills")}>Skills</p>
          </AnchorLink>

          {menu === "Skills" ? (
            <img src={line} alt="" style={{ height: "20px", width: "80px" }} />
          ) : (
            <></>
          )}
        </li>
        {/* <li>
          <AnchorLink href="#home" offset={50} className="anchor-link">
            {" "}
            <p onClick={() => setmenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? (
            <img src={line} alt="" style={{ height: "20px", width: "80px" }} />
          ) : (
            <></>
          )}
        </li> */}
        <li>
          <AnchorLink href="#contact" offset={50} className="anchor-link">
            <p onClick={() => setmenu("Contact")}>Contact</p>
          </AnchorLink>

          {menu === "Contact" ? (
            <img src={line} alt="" style={{ height: "20px", width: "80px" }} />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink href="#contact" offset={50} className="anchor-link">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
