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
              <h1 className="hero-heading">Welcome to London Book Publishers
              </h1>
              <p className="hero-paragraph">
                Are you an author looking to get your work published? Is it your dream to see your book
                shining on the high street or online bookshops? Cheers! You have made it to the right place.
                We, at London Book Publishers, break down publishing into easy, understandable steps for
                our authors and stand by them every step of the way. With our team of expert publishers and
                friendly customer service, we ensure your work reaches where you expect it to be…
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
