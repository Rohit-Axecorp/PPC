import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Creative Collaboration",
        description:
            "We believe in working closely with authors, ensuring their vision is brought to life through illustrations that resonate with the story and captivate the audience. Regular communication and feedback allow us to fine-tune the details to your satisfaction."
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Expert Illustrators",
        description:
            "Our team consists of highly skilled, award-winning illustrators who are experts in turning ideas into visually stunning artwork. Their attention to detail ensures that every illustration elevates the narrative, engaging readers from the first page to the last.",
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Proven Track Record",
        description:
            "With decades of experience and over 800 successfully completed projects, we have the expertise to handle every aspect of book illustration. From concept to completion, we deliver exceptional quality and creative solutions tailored to your project’s needs.",
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
                        Our Approach to Book Illustration
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
