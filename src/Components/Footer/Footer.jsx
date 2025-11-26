import React from "react";
import "./Footer.css";
import letterp from "../../assets/letter-p.png";
import user from "../../assets/user-email.png";

const Footer = () => {
  return (
    <div  id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={letterp}
            alt="Logo"
            style={{ width: "64px", height: "auto" }}
          />
          <p>
            I build modern, responsive web experiences with clean and simple UI
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email">
            <img
              src={user}
              alt="User Email"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>
            Designed & Developed by <span>PRAGADESH</span> | © 2025
          </p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
