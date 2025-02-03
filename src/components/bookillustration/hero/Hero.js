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
                Discover the Most Budget-Friendly Book Illustration Services!
              </h1>
              <p className="hero-paragraph">
                If you're a self-published author seeking top-notch illustration to transform your book into a work of art, you've come to the perfect spot! At Panda Publishing, we offer exceptional and cost-effective book illustration services tailored to your requirements, ensuring your storytelling passion continues unhindered.
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
