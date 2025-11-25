import React from "react";
import "./Contact.css";
import contact_mail from "../../assets/contact-mail.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone-contact.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img
          src={contact_mail}
          alt=""
          style={{ height: "64px", width: "64px" }}
        />
      </div>
      <div className="contact-session">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Questions, collaborations, or just saying hi - contact me here!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src={mail}
                alt=""
                style={{ height: "32px", width: "32px" }}
              />
              <p>pragdeshpragadesh00@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                src={phone}
                alt=""
                style={{ height: "32px", width: "32px" }}
              />
              <p>880711**</p>
            </div>
            <div className="contact-detail">
              <img
                src={location}
                alt=""
                style={{ height: "32px", width: "32px" }}
              />
              <p>Tamilnadu.</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={8}
          ></textarea>
          <button type="submit" className="submit-button">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
