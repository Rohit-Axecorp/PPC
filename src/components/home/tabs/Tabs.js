import React, { useState } from "react";
import "./tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/11.png", // Replace with your image link
        title: "We Connect with Each Other",
        description:
            "First things first! We begin by scheduling a consultation to get to know you and your book.",
    },
    {
        id: 2,
        icon: "./images/22.png", // Replace with your image link
        title: "We Discuss Your Needs",
        description:
            "We discuss your specific needs and provide guidance tailored to your project, ensuring every step aligns with your vision.",
    },
    {
        id: 3,
        icon: "./images/33.png", // Replace with your image link
        title: "We Handover Your Manuscript to Our Editing Team",
        description:
            "Your manuscript is handed over to our expert editing team, who refine and polish your work to perfection.",
    },
    {
        id: 4,
        icon: "./images/44.png", // Replace with your image link
        title: "We Get the Formatting Done",
        description:
            "We format your manuscript professionally, ensuring it meets industry standards and looks great in print or digital formats.",
    },
    {
        id: 5,
        icon: "./images/55.png", // Replace with your image link
        title: "QA Keeps Everything in Check",
        description:
            "Our quality assurance team ensures everything is flawless, leaving no room for errors.",
    },
    {
        id: 6,
        icon: "./images/66.png", // Replace with your image link
        title: "We Publish Your Book",
        description:
            "Your book is published on major platforms, making it accessible to your audience worldwide.",
    },
    {
        id: 7,
        icon: "./images/66.png", // Replace with your image link
        title: "You Reap the Rewards!",
        description:
            "Enjoy the success and recognition of your published book, reaping the rewards of your hard work.",
    },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="tabs">
                <div className="container">
                    <div className="main-tabs">
                        <h5 className="tabs-subtitle">Our Process</h5>
                        <h1 className="tabs-title">
                            Here's How We Do Things at Panda Publishing
                        </h1>
                        <div className="tabs-container">
                            <div className="tabs-list">
                                {tabsData.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`tab-item ${activeTab === tab.id ? "active" : ""
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <div className="tab-icon">
                                            <img src={tab.icon} alt=" " />
                                        </div>
                                        <div className="tab-title">{tab.title}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="tab-content">
                                <p>{tabsData.find((tab) => tab.id === activeTab).description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
