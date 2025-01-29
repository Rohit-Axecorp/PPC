import React, { useState } from "react";
import "./sidebar.css"; // Custom CSS file
import { MdCall } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import Popup from "../popup/Popup";

const Sidebar = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility

    // Handlers for button interactions
    const openLiveChat = () => alert("Opening live chat...");
    const callUs = () => (window.location.href = "tel:+1234567890");
    const openGetStartedPopup = () => setIsPopupOpen(true); // Set the popup to open
    const closePopup = () => setIsPopupOpen(false); // Set the popup to close

    return (
        <>
            <div className="sidebar">
                {/* Chat With Us Button */}
                <div
                    className={`sidebar-item call-button ${hoveredButton === "chat" ? "expanded" : ""}`}
                    onMouseEnter={() => setHoveredButton("chat")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={openLiveChat}
                >
                    <span className="icon">
                        <TbMessages size={28} />
                    </span>
                    {hoveredButton === "chat" && <span className="text" id="open-livechat">Chat With Us</span>}
                </div>

                {/* Call Us Button */}
                <div
                    className={`sidebar-item call-button ${hoveredButton === "call" ? "expanded" : ""}`}
                    onMouseEnter={() => setHoveredButton("call")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={callUs}
                >
                    <span className="icon">
                        <MdCall size={28} />
                    </span>
                    {hoveredButton === "call" && <span className="text">+1 877-633-0753</span>}
                </div>

                {/* Get Started Button */}
                <div
                    className="sidebar-item get-started open-popup-btn"
                    onClick={openGetStartedPopup}
                >
                    <span className="rotated-text">LET'S GET STARTED</span>
                </div>
            </div>

            {/* Pass the state and close function to Popup */}
            <Popup isOpen={isPopupOpen} closePopup={closePopup} />
        </>
    );
};

export default Sidebar;
