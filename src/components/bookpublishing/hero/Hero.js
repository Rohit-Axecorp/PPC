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
              <h1 className="hero-heading">Your Path to Successful Book Publishing with London Book Publishing
              </h1>
              <p className="hero-paragraph">
                At London Book Publishing, we guide authors, whether new or experienced, through the entire publishing process, ensuring your book reaches its full potential. From manuscript review to final publication, our team provides expert support to make your book stand out in the competitive market. We understand the intricacies of the industry and offer personalised services to help bring your story to life.
                < br />
                Ready to get started? Contact us for a free consultation and take the first step towards seeing your book published.
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
