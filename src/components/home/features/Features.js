import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/66.png", // Replace this with your actual image path
        title: "Expert Formatting for a Professional Look",
        description:
            "A properly formatted book is crucial for making a great first impression. Our team carefully works on each page to ensure it meets publishing standards, making sure your book looks neat and professional while also offering a better reading experience.",
    },
    {
        id: 2,
        icon: "/images/99.png", // Replace this with your actual image path
        title: "Bringing Your Fiction to Life",
        description:
            "Our fiction writing service helps you turn your creative ideas into engaging stories. With our expert guidance, we help you bring your imagination to life, crafting narratives that will capture the attention of your readers.",
    },
    {
        id: 3,
        icon: "/images/101.png", // Replace this with your actual image path
        title: "Fun and Easy-to-Read Children’s Book Editing",
        description:
            "For children’s books, we make sure the content is fun, engaging, and easy for young readers to understand. Our editing focuses on simple sentence structure and vocabulary, ensuring it’s clear, smooth, and enjoyable for children."
    },
];

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="main-features">
                    <h5 className="features-subtitle">What Sets Us Apart?
                    </h5>
                    <h1 className="features-title">
                        London Book Publishers is 100% Invested In Your Book
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
