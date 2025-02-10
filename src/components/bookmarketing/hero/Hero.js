import React, { useState } from "react";
import './hero.css';
import Form2 from "../../form2/Form2";
import Popup from '../../popup/Popup';
import { openChat } from "../../livechat/Livechat";

export default function Hero() {

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility
  const openGetStartedPopup = () => setIsPopupOpen(true); // Set the popup to open
  const closePopup = () => setIsPopupOpen(false); // Set the popup to close
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Left Column */}
            <div className="hero-left">
              <h1 className="hero-heading">Let Everyone Know About Your Book By Relying On Our Marketing Services
              </h1>
              <p className="hero-paragraph">
                The world has changed drastically over the past decades, and today, if you don’t exist online, you don’t exist at all. Develop yourself and your book as a brand in front of the world by relying on our expert marketing team. The marketing team at London Book Publishers has strategies and approaches that get the word out and get you in business!
              </p>
              <div className="btn-group">
                <button className="btn btn-primary" onClick={openGetStartedPopup}>
                  Request A Callback
                </button>
                <button className="btn btn-secondary" onClick={openChat}>
                  Chat Now
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="hero-right">
              <h2 className="form-heading">Fill Out Your Details and Get a First-Time Discount. It’s Free!
              </h2>
              <Form2 />
            </div>
          </div>
        </div>
      </section>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />



    </>
  );
}
