import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/66.png", // Replace this with your actual image path
        title: "Holistic & Transparent Services",
        description:
            "We offer a comprehensive suite of digital tools and services, from initial editing to final publication and marketing. We maintain clear and open communication every step of the way, ensuring you’re informed and involved throughout the process.",
    },
    {
        id: 2,
        icon: "/images/99.png", // Replace this with your actual image path
        title: "Myriad of Distribution Channels",
        description:
            "We don’t limit your reach. We can make your book available on over 40 distribution platforms and on major online retailers like Amazon, Barnes and Noble, Apple Books, IngramSpark, and more, maximizing your potential audience.",
    },
    {
        id: 3,
        icon: "/images/101.png", // Replace this with your actual image path
        title: "Book Marketing & Author Branding",
        description:
            "We go beyond just publishing your book. We provide guidance on building your author brand and offer marketing support to help you connect with readers and promote your work effectively.",
    },
];

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="main-features">
                    <h5 className="features-subtitle">What Sets Us Apart?</h5>
                    <h1 className="features-title">
                        Panda Publishing Is 100% Invested in Your Vision
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
