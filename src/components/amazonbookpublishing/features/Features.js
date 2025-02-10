import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Seamless Ordering & Quick Turnaround",
        description:
            "We offer an easy-to-navigate online platform, ensuring that ordering your books is a fast and smooth process."
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Premium Quality Printing & Binding Options",
        description:
            "Our state-of-the-art digital printing technology ensures that your book is produced with exceptional quality. From saddle stitching to case binding and perfect binding, we provide a range of options to suit your specific needs."
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Customisable Options for Every Author",
        description:
            "We understand that each book is unique, and that’s why we offer customisable options for layout, paper types, and cover finishes. You can choose between landscape, portrait, or square formats, as well as various paper weights and binding styles."
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
                        Print-On-Demand Services: Tailored for Amazon Publishing Success
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
