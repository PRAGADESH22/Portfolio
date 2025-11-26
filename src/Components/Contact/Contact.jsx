import React, { useState } from "react";
import "./Contact.css";
import contact_mail from "../../assets/contact-mail.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone-contact.png";
import location from "../../assets/location.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4132ff59-ecea-4811-9fc7-c3135fc89bbb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setTimeout(() => {
        alert("Form Submitted Successfully");
      }, 500);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="contact" className="contact">
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
          <p>Questions, collaborations, or just saying Hi - contact me here!</p>
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
              <p>Tamilnadu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
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
