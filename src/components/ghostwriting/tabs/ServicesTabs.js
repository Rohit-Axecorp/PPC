import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/55.png",
        title: "Manuscript Review and Editing",
        description:
            "Delve deep into your story, refining plots, characters, and language to capture its essence brilliantly.",
    },
    {
        id: 2,
        icon: "./images/33.png",
        title: "Book Design",
        description:
            "Craft visuals that narrate a story even before the first page. Design covers that capture your narrative's essence and attract potential readers.",
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Printing and Binding",
        description:
            "Merge cutting-edge technology with artisan skills to create each book as a masterpiece. Crisp pages, vibrant colors, and quality binding ensure a delightful reading experience.",
    },
    {
        id: 4,
        icon: "./images/88.png",
        title: "Marketing and Promotion",
        description:
            "Ensure your book reaches eager readers. Ignite curiosity and excitement, propelling your book to the forefront of literary conversations",
    },
    {
        id: 5,
        icon: "./images/66.png",
        title: "Book Distribution",
        description:
            "Leverage Amazon's global reach to bring your story to readers worldwide. Whether in print or digital format, make your story accessible on Amazon's platforms, connecting with readers globally.",
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
                        Here's How We Do Things at Panda Publishing
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