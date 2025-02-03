import React, { useState } from "react";
import './hero.css';

import Popup from '../../popup/Popup';
import { openChat } from "../../livechat/Livechat";
import Form2 from "../../form2/Form2";

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
              <h1 className="hero-heading">Publish Your Book with Panda Publishing</h1>
              <p className="hero-paragraph">
                Panda Publishing is an independent self-publishing house that offers a supportive and comprehensive range of digital services to guide you through every step of the self-publishing journey. Let’s turn your dream of becoming a published author into reality. Contact us today.
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
