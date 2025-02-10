import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/55.png",
        title: "Tailored Marketing Plans",
        description:
            "We create personalised strategies that align with your book’s genre, ensuring it reaches the right audience.",
    },
    {
        id: 2,
        icon: "./images/33.png",
        title: "In-Depth Market Research",
        description:
            "We study current market trends and identify key opportunities to enhance your book’s visibility.",
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Social Media Engagement",
        description:
            "Our team creates engaging content to boost your social media presence and connect with readers.",
    },
    {
        id: 4,
        icon: "./images/88.png",
        title: "Collaborative Process",
        description:
            "We work closely with authors to ensure they’re involved and informed at every stage of the marketing journey.",
    },
    {
        id: 5,
        icon: "./images/66.png",
        title: "Ongoing Optimisation",
        description:
            "We track and refine campaigns continuously, ensuring optimal results and consistent promotion.",
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
                        Our Approach to Effective Book Marketing
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