import React from "react";
import "./publishing.css";

export default function Publishing() {
  return (
    <div className="panda-container">
      {/* Content Publishers Section */}
      <div className="content-publishers">
        <h5 className="features-subtitle">Our Promise to You</h5>
        <h1 className="features-title">What You Get with Panda Publishing</h1>
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
              title: "Book Editing And Proofreading",
              description:
                "Our team of experienced editors will meticulously review your manuscript, ensuring clarity, proper grammar, and a captivating flow. They’ll also provide insightful suggestions to strengthen your story’s structure and enhance its overall impact. Following editing, meticulous proofreaders will double-check for any remaining typos or inconsistencies, ensuring your book is error-free and ready to impress.",
              bg: "gray-bg",
            },
            {
              id: "02",
              title: "Book Cover Design",
              description:
                "First impressions matter, and a captivating cover design is crucial for attracting readers. Our team of talented designers will collaborate with you to create a visually appealing cover that perfectly reflects your book’s genre and content. We’ll ensure your cover design is appropriate, eye-catching, and stands out on crowded online shelves.",
              bg: "white-bg",
            },
            {
              id: "03",
              title: "ISBN Barcodes",
              description:
                "An ISBN (International Standard Book Number) is a unique identifier for your book in the global marketplace. We’ll guide you through the acquisition process to ensure your book has a recognized identity and can be easily found by potential readers and retailers.",
              bg: "white-bg",
            },
            {
              id: "04",
              title: "Multifaceted Book & Author Marketing",
              description:
                "We go beyond simply publishing your book. Our team can provide valuable guidance on crafting a comprehensive marketing strategy. This might include social media promotion, creating a captivating author website, or exploring book review opportunities. Our goal is to help you connect with your target audience and effectively promote your work.",
              bg: "gray-bg",
            },
            {
              id: "05",
              title: "Complete Copyrights & 100% Ownership",
              description:
                "Your book is your creation. When you publish with Panda Publishing, you retain all ownership rights to your work. As we said before, we handle the publishing and distribution logistics, the copyright remains yours. This ensures you receive the full financial benefits from your book sales and have complete control over your intellectual property.",
              bg: "gray-bg",
            },
            {
              id: "06",
              title: "A-Call-Away Customer Support",
              description:
                "We’re here for you every step of the way. Our dedicated customer support team is readily available to answer your questions, address any concerns, and provide ongoing assistance throughout your self-publishing journey. You’ll never feel alone in the process – we’re just a phone call away!",
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
