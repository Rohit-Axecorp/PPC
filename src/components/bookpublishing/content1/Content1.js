import React from 'react';
import "./content.css";

export default function Content1() {
    return (
        <>

            <section className="content1-section">
                <div className="container">
                    <div className="main-content">
                        {/* Left Column */}
                        <div className="content1-left">
                            <img src='./images/fiction-writing-2.webp' alt='greenimage' />
                        </div>

                        {/* Right Column */}
                        <div className="content1_right">

                            <h2 className="heading">
                                What Makes Our Book Publishing Services Stand Out?
                            </h2>
                            <p className="paragraph">
                                From ghostwriting to editing and publishing support, our comprehensive services cover all your book needs. Whether you seek help crafting a captivating storyline or refining your manuscript, our seasoned team is ready to assist. We are committed to delivering exceptional service and top-notch quality. Don't let your ideas languish—reach out to us and let's bring your book to fruition. As a leading book writing company, trust us to transform your book into a bestseller. Here are the perks you'll enjoy when you choose us:
                            </p>
                            <p className="paragraph">
                                Excellence in Work
                            </p>
                            <p className="paragraph">
                                Timely Delivery
                            </p>
                            <p className="paragraph">
                                Client Satisfaction
                            </p>
                            <p className="paragraph">
                                Full Ownership
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
