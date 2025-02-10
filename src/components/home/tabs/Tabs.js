import React, { useState } from "react";
import "./tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/11.png", // Replace with your image link
        title: "Action and Adventure",
        description:
            "Add the right amount of action and adventure to your stories to make them engaging and keep the readers on the edge.",
    },
    {
        id: 2,
        icon: "./images/22.png", // Replace with your image link
        title: "Science Fiction",
        description:
            "Talk about the technologies that could exist in the future and get your readers hooked on the never-ending possibilities and threats.",
    },
    {
        id: 3,
        icon: "./images/33.png", // Replace with your image link
        title: "Comics",
        description:
            "Form the right balance between the graphics and dialogues to create comics that make readers live the scene.",
    },
    {
        id: 4,
        icon: "./images/44.png", // Replace with your image link
        title: "Dictionary",
        description:
            "Take the next steps towards a wider audience and find the words that push your story before the world. Write content that leaves an impact with the precision of words.",
    },
    {
        id: 5,
        icon: "./images/55.png", // Replace with your image link
        title: "Drama",
        description:
            "With stories of human experiences, this is where emotions come into play, and characters grab the attention with traits and fight for love, survival and much more.",
    },
    {
        id: 6,
        icon: "./images/66.png", // Replace with your image link
        title: "Health",
        description:
            "Inspire the readers through stories of resilience, healing and mindset. From stories of discipline to those of fighting through pain, the genre helps readers learn the strength of the body and the mind.",
    },
    {
        id: 7,
        icon: "./images/66.png", // Replace with your image link
        title: "Horror",
        description:
            "Dig deep into the fears that have prevailed among humans forever and write bone-chilling stories for the audience that loves the does of terror and suspense.",
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
