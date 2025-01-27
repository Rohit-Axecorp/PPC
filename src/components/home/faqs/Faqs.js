import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./faqs.css"

export default function Faqs() {
    const faqs = [
        {
            question: "What services are included in your packages, and can I customize them to fit my needs?",
            answer:
                "Our packages offer a variety of services, including editing, proofreading, cover design, formatting, ISBN acquisition, and distribution assistance. We also offer ghostwriting services. Absolutely! We understand that every author’s needs are unique. We offer consultations to discuss your project and create a customized package that aligns perfectly with your goals.",
        },
        {
            question: "How do you handle editing and proofreading? What are the qualifications of your editors?",
            answer:
                "Our editors are experienced professionals who are well-versed in grammar, style, and industry standards. We provide thorough editing and proofreading to ensure the highest quality.",
        },
        {
            question:
                "What distribution channels do you offer for my book (e.g., Amazon, Kobo, IngramSpark)?",
            answer:
                "We distribute your book through a variety of popular platforms including Amazon, Kobo, and IngramSpark to maximize your book's reach.",
        },
        {
            question: "Do you offer any marketing and publicity support? If so, what does that entail?",
            answer:
                "Yes, we offer marketing and publicity support including social media promotion, press releases, and targeted advertising campaigns to help your book reach a wider audience.",
        },
        {
            question:
                "What are your royalty rates and payment structures? Are there any upfront costs or hidden fees?",
            answer:
                "We are transparent about our fees. Our royalty rates and payment structures depend on the services you select. No hidden fees.",
        },
        {
            question: "Can I see samples of your work (book covers, formatting examples)?",
            answer:
                "Absolutely, we can provide samples of our previous work including book covers and formatted pages.",
        },
        {
            question: "Can you provide references from past clients?",
            answer: "Yes, we have testimonials and references available from satisfied clients.",
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
