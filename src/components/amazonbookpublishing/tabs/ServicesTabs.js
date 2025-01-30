import React, { useState } from "react";
import "./services-tabs.css";

const tabsData = [
    {
        id: 1,
        icon: "./images/1111.png",
        title: "Welcome Call",
        description:
            "To start, we conduct a thorough discussion with you over the phone, discussing your book publishing needs and what your expectations are from us. Everything from editing and formatting to cover design and publishing will be discussed in great detail, ensuring your creative vision shines through each decision. Considering your needs and goals, we will then present you with a range of packages that will contain everything you want.You can also ask us for professional recommendations regarding marketing or author branding.Once you accept a particular package and proceed with the payment, our partnership begins.",
    },
    {
        id: 2,
        icon: "./images/88.png",
        title: "Dedicated Project Manager",
        description:
            "As soon as we get the green light from your end regarding the package and its payment, we immediately assign a dedicated project manager for your project. The dedicated project manager is your personal concierge throughout your entire Amazon book publishing journey. They will be responsible for detailing real-time progress to you regarding your book publishing. Feel free to contact them if you have questions or want to discuss something regarding your project."
    },
    {
        id: 3,
        icon: "./images/22.png",
        title: "Manuscript Handover to Editing Team",
        description:
            "After the call with your private project manager, your manuscript will be handed over to our editing team with all of the relevant details and requirements."
    },
    {
        id: 4,
        icon: "./images/33.png",
        title: "Editing & Proofreading",
        description:
            "This is where the editing and proofreading will take place. Whether you opted for line editing, developmental editing, or simply proofreading, our team of professional book editors will conduct a thorough editorial review of your book, correcting any and all major grammatical and structural inconsistencies. They will also provide a critical review of your manuscript and point out if your story has plot holes, character inconsistencies, or more. The edited manuscript will be given to you for feedback."
    },
    {
        id: 5,
        icon: "./images/44.png",
        title: "Typesetting & Formatting",
        description:
            "Once you approve of the edits, your manuscript will then be handed over to our formatting team. This is where your manuscript’s structural layout will be corrected and be in line with Amazon’s stringent publishing guidelines. Our team of formatters has a stellar track record of formatting books that are published on the first go. In that, they take care of spacing, indentation, inconsistent paragraph issues, and the entire layout accordingly. The finalized formatted file will be sent to you for your feedback."
    },
    {
        id: 6,
        icon: "./images/55.png",
        title: "Cover Design",
        description:
            "Once you are satisfied with the edits and the formatting, our project manager will then proceed with the cover design of your book. In that, you will be asked a series of questions that will help us and our creative design team to really jot down your vision on your book cover. If you have a particular vision for your book cover, feel free to let us know. If not, we are here to offer our professional recommendations."
    },
    {
        id: 7,
        icon: "./images/66.png",
        title: "Finalization & Book Publishing",
        description:
            "Once everything is approved from your end, your finalized book draft will be handed over to our Quality Assurance team. Our QA team will then perform a thorough and final check to ensure everything is perfect to a T. After we get the green light from our QA team, our Amazon publishing team will publish your book on the platform in the agreed formats, be it eBook, paperback, hardcover, or all."
    },
];

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="services-tabs">
            <div className="container">
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