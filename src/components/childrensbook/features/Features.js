import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Experience and Expertise",
        description:
            "Panda Publishing has the experience and insight to turn your idea into a gripping children's book that appeals to readers of all ages. The company has years of experience in the publishing industry and a staff of seasoned professionals."

    }, {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Commitment to Diversity and Inclusion",
        description:
            "We are fervent supporters of stories from a range of cultures, ethnicities, and viewpoints in children's literature. We work to build a more inclusive literary landscape that reflects the rich fabric of our planet by welcoming many voices and experiences."
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Exceptional Quality",
        description:
            "From editing and illustrations to design and printing, we take great delight in providing publishing services of the highest caliber. Our steadfast dedication to perfection guarantees that the level of originality and craftsmanship in your children's book will be the highest."    },
];

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="main-features">
                    <h5 className="features-subtitle">Our Approach
                    </h5>
                    <h1 className="features-title">
                        Crafting Your Masterpiece: Our Approach to Book Publishing Services
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
