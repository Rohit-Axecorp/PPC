import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/55.png",
        title: "Custom-Tailored Illustrations",
        description:
            "We create illustrations that perfectly align with your book’s theme and audience.",
    },
    {
        id: 2,
        icon: "./images/33.png",
        title: "Detailed Research and Concept Development",
        description:
            "Our team ensures accuracy and authenticity in every visual element.",
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Collaborative Design Process",
        description:
            "We involve you at every stage to bring your vision to life.",
    },
    {
        id: 4,
        icon: "./images/88.png",
        title: "Commitment to Quality and Detail",
        description:
            "Every illustration is crafted with precision and artistic excellence.",
    },
    {
        id: 5,
        icon: "./images/66.png",
        title: "Final Touches and Refinement ",
        description:
            "We polish and perfect each piece for a flawless final result.",
    },
];

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="services-tabs">
            <div className="services-container">
                <div className="services-main-tabs">
                    <h5 className="services-tabs-subtitle">Our Process</h5>
                    <h1 className="services-tabs-title">
                        Our Approach to Exceptional Book Illustration
                    </h1>
                    <div className="services-tabs-container">
                        <div className="services-tabs-list">
                            {tabsData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`services-tab-item ${activeTab === tab.id ? "services-active" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <div className="services-tab-icon">
                                        <img src={tab.icon} alt=" " />
                                    </div>
                                    <div className="services-tab-title">{tab.title}</div>
                                </div>
                            ))}
                        </div>
                        <div className="services-tab-content">
                            <p>{tabsData.find((tab) => tab.id === activeTab).description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}