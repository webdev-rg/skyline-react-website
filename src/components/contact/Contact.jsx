import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <div className="top-content">
            <div className="contact">
              <div className="phone">
                <div className="contact-icon">
                  <i className="uil uil-phone"></i>
                </div>
                <h4>+91 7485963124</h4>
              </div>
              <div className="email">
                <div className="contact-icon">
                  <i className="uil uil-envelope"></i>
                </div>
                <h4>skyline@gmail.com</h4>
              </div>
            </div>
            <div className="contact-social-media">
              <ul>
                <li className="contact-icon">
                  <i className="uil uil-facebook-f"></i>
                </li>
                <li className="contact-icon">
                  <i className="uil uil-linkedin-alt"></i>
                </li>
                <li className="contact-icon">
                  <i className="uil uil-twitter"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form">
            <div className="input-field">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="input-message">
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
