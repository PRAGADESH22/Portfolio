import React from "react";
import "./Services.css";
import { userPerson } from "./DataService.jsx";
import skill from "../../assets/skill.png";
import arrow from "../../assets/white arrow.png";
const Services = () => {
  return (
    <div className="Services">
      <div className="service-title">
        <h1>My Skills</h1>
        <img src={skill} alt="" style={{ height: "96px", width: "96px" }} />
      </div>
      <div className="service-container">
        {userPerson.map((services, id) => {
          return (
            <div key={id} className="service-content">
              <h2>{services.service}</h2>
              <p>{services.description}</p>
              <div className="service-readmore">
                <p>Read More</p>
                <img src={arrow} alt=""  style={{ height: "32px", width: "32px"}}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
