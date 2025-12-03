import React from "react";
import theme from "../../assets/theme-pattern.png";
import hero from "../../assets/Hero.jpg";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div id="about" className="aboutme">
      <div className="aboutme-text">
        <p>About Me</p>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={hero} alt="" />
        </div>
        <div className="about-right">
          <p>
            I am a passionate fresher in Frontend Development with a strong
            foundation in modern web technologies. I’m eager to learn, grow, and
            contribute to meaningful projects.
          </p>
          <p>
            I enjoy creating responsive and attractive websites. I like turning
            ideas into projects and learning new technologies to make websites
            useful and engaging.
          </p>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "65%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Git & Github</p>
              <hr style={{ width: "90%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievement">
          <p>
            Hands on experience in building responsive web application using
            react
          </p>
        </div>
        <hr style={{ height: "50px" }} />
        <div className="about-achievement">
          <p>worked with morder UI frameworks like Tailwind CSS</p>
        </div>
        <hr style={{ height: "50px" }} />

        <div className="about-achievement">
          <p>Actively exploring backend development with node.JS & Express</p>
        </div>
        <hr style={{ height: "50px" }} className="lastHr" />

        <div className="about-achievement">
          <p>Focus on become full stack developer</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
