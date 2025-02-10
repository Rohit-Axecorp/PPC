import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Personalized Support",
        description:
            "At London Book Publishers, we offer a complete package of services to help authors at every step of their publishing journey. We take care of the details that might hold you back, ensuring a smooth and stress-free process."
    },
    {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Myriad of Distribution Channels",
        description:
            "A great book cover and illustrations are essential for making your book stand out. Our expert team will design an eye-catching cover and create illustrations that bring your content to life, ensuring it grabs the attention of readers."
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Book Marketing & Author Branding",
        description:
            "We also handle editing, formatting, printing, and publishing, ensuring your book is polished and professionally presented. With access to top printing technology and a deep understanding of publishing platforms, we help you get your book into stores and online. Additionally, our marketing services ensure your book reaches the right audience and builds a strong presence."
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
                        A Complete Package for Book Publishing Services at One Place
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
