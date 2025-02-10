import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Expert Analysis & Strategy Development",
        description:
            "The first step in our marketing process is a thorough review of your book by our expert marketing team. They analyse your book’s unique qualities and identify the best strategy that aligns with your goals. Our approach is tailored to maximise your returns while keeping the marketing budget in mind."
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Personalised Marketing Campaigns",
        description:
            "Whether it’s PPC, SEO, or Social Media Marketing, we craft a personalised campaign suited to your book’s needs. Our team of subject matter specialists and experienced marketers ensures that your book gets the recognition it deserves, with transparent communication throughout the process.",
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Optimising for Success",
        description:
            "At times, adjustments may be needed within your book or its cover to maximise marketability. Our team works closely with you to make the necessary changes, ensuring that your book stands out and reaches the readers most likely to appreciate it.",
    },
];

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="main-features">
                    <h5 className="features-subtitle">Our Approach
                    </h5>
                    <h1 className="features-title">
                        Our Comprehensive Book Marketing Strategy
                    </h1>
                    <div className="features-cards">
                        {features2.map((feature2) => (
                            <div key={feature2.id} className="feature-card">
                                {/* Displaying the image icon */}
                                <div className="feature-icon">
                                    <img src={feature2.icon} alt={feature2.title} />
                                </div>
                                <h3 className="feature-title">{feature2.title}</h3>
                                <p className="feature-description">{feature2.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
