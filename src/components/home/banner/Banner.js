import React, { useState } from "react";
import "./banner.css";
import Popup from "../../popup/Popup";
import { openChat } from "../../livechat/Livechat";

export default function Banner2() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openGetStartedPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="main-banner">
                        <h5 className="subheading">Self-Publish Your Book
                        </h5>
                        <h1 className="heading">Let London Book Publishers Take Care of the Complications of Publishing
                        </h1>
                        <div className="button-group">
                            <button className="btn btn-primary" onClick={openGetStartedPopup}>Get A Quote</button>
                            <button className="btn btn-secondary" onClick={openChat}>Live Chat</button> {/* Call openChat */}
                            <button className="btn btn-tertiary"><a href="tel:+44 020 4615 6000">Phone Number: +44 020 4615 6000</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <Popup isOpen={isPopupOpen} closePopup={closePopup} />



        </>
    );
}
