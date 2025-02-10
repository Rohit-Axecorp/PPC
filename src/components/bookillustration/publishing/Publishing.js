import React from "react";
import "./publishing.css";

export default function Publishing() {
  return (
    <div className="panda-container">
      {/* Content Publishers Section */}
      <div className="content-publishers">
        <h5 className="publishers-subtitle">Our Promise to You</h5>
        <h1 className="publishers-title">We Provide Solutions to Every Publishing Problem</h1>
      </div>

      {/* Columns Section */}
      <div className="columns">
        {/* Left Column */}
        <div className="left-column"></div>

        {/* Right Column: Features */}
        <div className="panda-features">
          {[
            {
              id: "01",
              title: "Professional Editing",
              description:
                "Our expert editing services refine every aspect of your manuscript, ensuring that your book meets the highest standards. Whether it’s structural editing, copyediting, or proofreading, we help bring clarity, flow, and coherence to your work.",
              bg: "gray-bg",
            },
            {
              id: "02",
              title: "Custom Illustrations and Design",
              description:
                "We bring your story to life with unique, high-quality illustrations, paired with expert design services. Our team ensures that the layout, typography, and imagery perfectly align with the tone and vision of your book.",
              bg: "white-bg",
            },
            {
              id: "03",
              title: "Book Formatting",
              description:
                "Our experienced formatters ensure your book is professionally laid out and meets industry standards. This makes your book not only visually appealing but also enhances readability, providing a smooth experience for the reader.",
              bg: "white-bg",
            },
            {
              id: "04",
              title: "Publishing Assistance",
              description:
                "We handle every step of the publishing process, from print-on-demand to distribution across major platforms. Our services ensure your book reaches readers wherever they are, in the format they prefer.",
              bg: "gray-bg",
            },
            {
              id: "05",
              title: "Marketing and Promotion",
              description:
                "Our marketing team crafts strategies to give your book the attention it deserves. From social media campaigns to author websites, we ensure your book is visible and reaches its target audience effectively.",
              bg: "gray-bg",
            },
            {
              id: "06",
              title: "Ongoing Support",
              description:
                "We believe in building long-term relationships with our authors. Our team provides continuous support throughout the publishing journey, offering guidance, updates, and advice as you navigate the world of publishing and promotion.",
              bg: "white-bg",
            },
          ].map((feature, index) => (
            <div key={index} className={`feature-box ${feature.bg}`}>
              <h3>{feature.id}</h3>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
