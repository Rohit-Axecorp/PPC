import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/55.png",
        title: "Edit Your Book",
        description:
            "Get your book edited to make it refined and ready for publishing. This might require line, developmental or copy editing. ",
    },
    {
        id: 2,
        icon: "./images/33.png",
        title: "Publish Your Book",
        description:
            "Get your book published once it is done with editing, formatting and typesetting. Go for print-on-demand, marketing and other services for best results. ",
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Print Your Book",
        description:
            "Get your book printed in hardcover and paperback formats with quality paper and printing.",
    },
    {
        id: 4,
        icon: "./images/88.png",
        title: "Sell Your Book",
        description:
            "Ensure your book reaches eager readers. Ignite curiosity and excitement, propelling your book to the forefront of literary conversations",
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
                        Publishing Assistance in Every Step of the Process
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