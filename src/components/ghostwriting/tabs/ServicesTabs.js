import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/55.png",
        title: "Personalised Ghostwriting Services",
        description:
            "We tailor each manuscript to match your unique voice, style, and vision, ensuring the final product reflects your ideas perfectly.",
    },
    {
        id: 2,
        icon: "./images/33.png",
        title: "Thorough Research and Planning",
        description:
            "We conduct in-depth research to ensure your book is both authentic and engaging, resonating with your intended audience.",
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Collaborative Writing Experience",
        description:
            "We actively involve you throughout the writing process, ensuring your feedback shapes the direction of the manuscript.",
    },
    {
        id: 4,
        icon: "./images/88.png",
        title: "Quality and Consistency",
        description:
            "We maintain high writing standards, providing regular updates and ensuring your manuscript stays on track.",
    },
    {
        id: 5,
        icon: "./images/66.png",
        title: "Refining and Polishing",
        description:
            "Our team refines your manuscript, polishing every detail to ensure it meets the highest standards before publication.",
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
                        Our Approach to Exceptional Ghostwriting
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