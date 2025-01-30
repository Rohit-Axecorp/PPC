import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "We Are 100% Invested.",
        description:
            "Your book is your passion, and we share your enthusiasm. We believe in the potential of your story and are fully committed to its success. We don’t just publish books; we become invested partners, working tirelessly to see your vision come to life."
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "We Respect Your Time.",
        description:
            "Writing a book takes immense dedication. The last thing you need is the added stress of handling the technicalities of self-publishing. We take care of the complexities – editing, formatting, cover design, and publishing – so you can focus on what you do best – writing and nurturing your creative spark."
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "We Are with You Every Step of the Way.",
        description:
            "The publishing journey doesn’t end with hitting publish. Panda Publishing is by your side throughout the entire process. We offer constant support, clear communication, and ongoing guidance to ensure you feel informed and empowered every step of the way. You’re never alone – we’re here to answer your questions, celebrate your milestones, and help you navigate the exciting world of Amazon publishing."
    },
];

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="main-features">
                    <h5 className="features-subtitle">What Makes Us Different?
                    </h5>
                    <h1 className="features-title">
                        Why Partner Up with Panda Publishing?
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
