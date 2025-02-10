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
              <h1 className="hero-heading">
                Creative Illustrators for Your Book – Getting Your Dreams Designed With Passion
              </h1>
              <p className="hero-paragraph">
                Welcome to London Book Publisher’s Illustration section, a place where we offer unmatched book illustration design and give life to your written content. Our professional artists have worked and are aware of every genre and have a way with those designs that promise results, all at a bearable cost.
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
