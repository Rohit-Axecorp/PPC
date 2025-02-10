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
                                Why Choose London Book Publishers for Your Book Marketing?
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we bring years of experience and expertise to the table, ensuring your book gets the recognition it deserves. Our marketing strategies are uniquely tailored to your book’s genre, target audience, and release timing, ensuring maximum impact. As a one-stop solution, we guide you through every stage of your literary journey—from writing and publishing to effective marketing. We also believe in fostering long-lasting, supportive partnerships with our authors, ensuring they have the ongoing support they need to succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
