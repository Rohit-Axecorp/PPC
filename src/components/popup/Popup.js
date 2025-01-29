import React from "react";
import "./popup.css";
import Form2 from "../form2/Form2";

export default function Popup({ isOpen, closePopup }) {
    return (
        <>
            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>
                            ×
                        </button>
                        <h2>Book your Consultation & Avail Exclusive Discount!</h2>
                        <Form2 />
                    </div>
                </div>
            )}
        </>
    );
}
