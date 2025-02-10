import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./faqs.css"

export default function Faqs() {
    const faqs = [
        {
            question: "What genres of books do London Book Publishers typically accept?",
            answer:
                "London Book Publishers accepts various genres, including fiction (literary, romance, mystery, science fiction, etc.), non-fiction (memoirs, biographies, self-help, history, etc.), young adult, children’s books, and more.",
        },
        {
            question: "How do I submit my manuscript to London Book Publishers?",
            answer:
                "You can send us your manuscript, preferably via email, as it is readily accessible, and the team can start working on your project. If you don’t have a strict timeline, you can send us via fax, mail, or scanned images.",
        },
        {
            question:
                "Will the London Book Publishers handle the marketing and promotion of my book?",
            answer:
                "Yes, if you have signed up for a Marketing Plan for your book, London Book Publishers has adedicated marketing and publicity department that will help promote your book. They may assist with creating a marketing plan, arranging author events, securing media coverage, and leveraging digital platforms. However, it’s also important for authors to actively participate in promoting their own books and building their author brand.",
        },
        {
            question: "Can I choose my own cover design for my book?",
            answer:
                "London Book Publishers values author input, and the final decision regarding cover design is often a collaborative effort between the publisher, the author, and the design team. Designers have experience in creating covers that appeal to their target audience and fit within market trends. However, authors can share their ideas and preferences, and the designer will strive to create a cover that represents the essence of the book while meeting market standards. But yes, an author can choose their cover designs for their books. "
        },
        {
            question:
                "How do royalties work with London Book Publishers?",
            answer: "Royalties are a percentage of the book’s sales that authors receive as compensation. All royalties go directly to the author; London Book Publishers would never ask its authors for a percentage of their royalties.",
        },

    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className="faqs">
                <div className="faq-container">
                    <h3 className="faq-subtitle">Frequently Asked Questions</h3>
                    <h2 className="faq-title">FAQs</h2>
                    <div className="faq-items">
                        {faqs.map((faq, index) => (
                            <div
                                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                key={index}
                            >
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                    <span className="faq-toggle">
                                        <FontAwesomeIcon
                                            icon={activeIndex === index ? faChevronUp : faChevronDown}
                                        />
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
