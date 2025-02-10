import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/1111.png",
        title: "Initial Consultation",
        description:
            "We begin with a conversation to understand your vision and goals for the book."
    },
    {
        id: 2,
        icon: "./images/88.png",
        title: "Manuscript Review",
        description:
            "Our experts review your manuscript to identify areas for improvement."
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Editing & Refining",
        description:
            "We refine the content for clarity, engagement, and age-appropriate language."
    },
    {
        id: 4,
        icon: "./images/33.png",
        title: "Illustration Planning",
        description:
            "We collaborate to select the right illustrations that enhance your story."
    },
    {
        id: 5,
        icon: "./images/44.png",
        title: "Design & Layout",
        description:
            "Our team ensures a professional and appealing layout for both text and images."
    },
    {
        id: 6,
        icon: "./images/55.png",
        title: "Final Approval",
        description:
            "You review the final version before we move forward with production."
    },
    {
        id: 7,
        icon: "./images/66.png",
        title: "Publishing & Distribution",
        description:
            "Once approved, we handle the publishing and ensure your book reaches the right audience."
    },
];

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="services-tabs">
            <div className="container">
                <div className="services-main-tabs">
                    <h1 className="services-tabs-title">
                        Seamless Steps to Bring Your Children’s Book to Life
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