import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Maintain Confidentiality",
        description:
            "Confidentiality of the content is very important while ghostwriting. It’s because they are fresh and unpublished and can be copied easily. But with London Book Publishers, you don’t need to worry for a moment. "
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Free Revisions",
        description:
            "Did you notice a mistake or want to improve something? No worries since our team is committed to working on your book till the point you are satisfied. All our clients receive options to get free revisions without any changes in the previously decided cost. ",
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Take Advantage of Our Discounts",
        description:
            "We are often offering discounts that add to the already cheap prices. So stay connected and take advantage of our services!",
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
                        Should You Trust Our Ghostwriting Company? Discover and Decide
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
