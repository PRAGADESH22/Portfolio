import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import line from "../../assets/line.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu.png";
import close from "../../assets/close.png";
import logoP from "../../assets/letter-p.png";

const Navbar = () => {
  const menuRef = useRef();
  let openMenu = () => {
    menuRef.current.style.right = "0";
  };
  let closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  let [menu, setmenu] = useState(" ");
  // useEffect(() => {
  //   if (menuRef.current) {
  //     const rect = menuRef.current.getBoundingClientRect();
  //   }
  // }, []);
  return (
    <div className="navbar" id="home">
      <img src={logo} alt="" className="nav-logo" />
      <div className="imgage-wrap">
        <img
          src={logoP}
          alt=""
          style={{ width: "48px", height: "48px" }}
          className="navbar-logoP"
        />
        <h2>ragadesh</h2>
      </div>
      <img
        src={menu_open}
        alt=""
        style={{ width: "32px", height: "32px" }}
        className="navbar-menu-open"
        onClick={openMenu}
      />

      <ul className="nav-menu" ref={menuRef}>
        <img
          src={close}
          alt=""
          style={{ width: "32px", height: "32px" }}
          className="navbar-menu-close"
          onClick={closeMenu}
        />
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
      <div className="nav-connect">
        <AnchorLink href="#contact" offset={50} className="anchor-link">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
