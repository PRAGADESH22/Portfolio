import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={hero} alt="" />
      <div className="hero-about">
        <h2>
          <span>I'm PRAGADESH</span> , a frontend developer crafting modern and
          user-focused web experiences
        </h2>
      </div>
      <div className="aboutme-content">
        <p>
          I'm a frontend developer passionate about creating clean, modern, and
          user-focused web experiences.
        </p>
      </div>  
      <div className="hero-contact">
        <p>
          <AnchorLink href="#contact" offset={50} className="anchor-link">
            Contact with me
          </AnchorLink>
        </p>
        <p>My resume</p>
      </div>
    </div>
  );
};

export default Hero;
