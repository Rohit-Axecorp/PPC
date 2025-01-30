import React, { useState } from "react";
import "./banner2.css";
import Popup from "../../popup/Popup";
import { openChat } from "../../livechat/Livechat";

export default function Banner2() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const openGetStartedPopup = () => setIsPopupOpen(true); 
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <div className="banner2">
                <h5 className="subheading2">Professional Non-Fiction Book Writing Services!</h5>
                <h1 className="heading2">Hire The Best Nonfiction Writers</h1>
                <div className="button-group2">
                    <button className="btn2 btn-primary2" onClick={openGetStartedPopup}>Get A Quote</button>
                    <button className="btn2 btn-secondary2" onClick={openChat}>Live Chat</button> {/* Call openChat */}
                    <button className="btn2 btn-tertiary2"><a href="tel:+44 020 4615 6000">Phone Number: +44 020 4615 6000</a></button>
                </div>
            </div>

            <Popup isOpen={isPopupOpen} closePopup={closePopup} />


            
        </>
    );
}
