import React, { useState } from "react";
import "./portfolio.css"; // Import the CSS file

// Generate sequential image names with padded numbers
const generateImageData = (count, prefix) => {
    return Array.from({ length: count }, (_, i) => ({
        image: `${prefix}${String(i + 1).padStart(2, "0")}.webp`, // Generate names like 01.webp, 02.webp, etc.
    }));
};

// Portfolio data for each tab
const portfolioData = {
    Fiction: generateImageData(12, "fiction-"),
    "Non-Fiction": generateImageData(12, "non-fiction-"),
    Biography: generateImageData(12, "biography-"),
    "Children Book": generateImageData(12, "children-"),
};

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("Fiction");

    return (
        <>
            <div className="portfolio-tabs">
                <h5 className="portfolio-subtitle">What we've done so far.
                </h5>
                <h1 className="portfolio-title">Our Portfolio
                </h1>
                <div className="tabs">
                    {Object.keys(portfolioData).map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {portfolioData[activeTab].map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <img
                                src={`/images/${item.image}`}
                                alt=""
                                className="portfolio-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
