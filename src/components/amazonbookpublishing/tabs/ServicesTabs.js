import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/1111.png",
        title: "Edit Your Manuscript",
        description:
            "Refine your manuscript through professional editing, whether it’s line, developmental, or copy editing.",
    },
    {
        id: 2,
        icon: "./images/88.png",
        title: "Format for Publishing",
        description:
            "Ensure your book is properly formatted and typeset to meet Amazon’s publishing standards."
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Self-Publishing on Amazon",
        description:
            "Publish your book directly on Amazon with expert guidance and support."
    },
    {
        id: 4,
        icon: "./images/33.png",
        title: "Print Your Book",
        description:
            "Choose print-on-demand services to print your book in both paperback and hardcover formats."
    },
    {
        id: 5,
        icon: "./images/44.png",
        title: "Customise Your Book Cover",
        description:
            "Design an eye-catching book cover that attracts readers and matches your book’s theme."
    },
    {
        id: 6,
        icon: "./images/55.png",
        title: "Market Your Book",
        description:
            "Implement effective marketing strategies to boost visibility and sales on Amazon."
    },
    {
        id: 7,
        icon: "./images/66.png",
        title: "Manage Royalties & Sales",
        description:
            "Track your sales and manage your royalties to maximise earnings from your Amazon book."
    },
];

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="services-tabs">
            <div className="container">
                <div className="services-main-tabs">
                    <h5 className="services-tabs-subtitle">From Editing to Selling</h5>
                    <h1 className="services-tabs-title">
                        Comprehensive Amazon Publishing Services
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