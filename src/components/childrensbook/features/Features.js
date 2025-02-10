import React from 'react';
import "./features.css";

const features2 = [
    {
        id: 1,
        icon: "/images/100.png", // Replace this with your actual image path
        title: "Personalised Editing for Young Readers",
        description:
            "We understand the unique needs of children’s books, so we offer personalised editing to ensure your content is engaging, age-appropriate, and easy to understand. Our team focuses on refining sentence structure and vocabulary, making your book both educational and enjoyable for young minds."

    }, {
        id: 2,
        icon: "/images/88.png", // Replace this with your actual image path
        title: "Creative and Vibrant Illustrations",
        description:
            "A key element of any children’s book is its visuals. Our talented illustrators work closely with you to create vibrant and captivating artwork that complements your story. We ensure the illustrations reflect the tone and message of your book, drawing young readers into the world you’ve created."
    },
    {
        id: 3,
        icon: "/images/77.png", // Replace this with your actual image path
        title: "Seamless Publishing and Distribution",
        description:
            "Once your book is ready, we handle the entire publishing process with precision. Whether it’s print-on-demand or traditional printing, we ensure your book reaches the right audience through reliable distribution channels, all while maintaining high standards of quality throughout."
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
                        Tailored for Your Children’s Book Success
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
