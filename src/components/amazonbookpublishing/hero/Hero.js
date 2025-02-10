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
              <h1 className="hero-heading">Simplify Your Publishing Journey with Our Amazon Publishing Services
              </h1>
              <p className="hero-paragraph">
                With our Amazon Publishing services, we make the process of getting your book onto one of the world’s largest platforms seamless and hassle-free. From formatting and editing to publishing and marketing, we handle everything for you, ensuring your book is optimised for success. Say goodbye to the stress of inventory management with our Print-On-Demand services, which allow you to publish without the risk. Whether you’re new to publishing or an experienced author, we guide you every step of the way to ensure your book reaches the right audience on Amazon.              </p>
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
