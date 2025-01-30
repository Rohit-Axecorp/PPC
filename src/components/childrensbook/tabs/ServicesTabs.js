import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/1111.png",
        title: "Consultation",
        description:
            "Begin with an in-depth discussion to understand your vision and goals"
    },
    {
        id: 2,
        icon: "./images/88.png",
        title: "Evaluation",
        description:
            "Our team assesses your manuscript for strengths and areas of improvement."
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Writer Selection",
        description:
            "We match you with a skilled writer to bring your story to life."
    },
    {
        id: 4,
        icon: "./images/33.png",
        title: "Illustration & Design",
        description:
            "Collaborate with our illustrators and designers to create captivating visuals."
    },
    {
        id: 5,
        icon: "./images/44.png",
        title: "Editing & Proofreading",
        description:
            "Meticulously polish your manuscript for impeccable quality."
    },
    {
        id: 6,
        icon: "./images/55.png",
        title: "Printing & Distribution",
        description:
            "Handle the logistics to ensure your book reaches young readers worldwide."
    },
    {
        id: 7,
        icon: "./images/66.png",
        title: "Marketing & Support",
        description:
            "Develop tailored marketing strategies and provide ongoing support for your book's success."
    },
];

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="services-tabs">
            <div className="container">
                <div className="services-main-tabs">
                    <h1 className="services-tabs-title">
                    Children's Book Publishing Services Process
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