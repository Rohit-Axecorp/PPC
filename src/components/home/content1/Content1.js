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
                            <img src='./images/home-intro.webp' alt='greenimage' />
                        </div>

                        {/* Right Column */}
                        <div className="content1_right">

                            <h2 className="heading">
                                How to Get Your Book Published with Us
                            </h2>
                            <p className="paragraph">
                                Our streamlined process ensures transparency and author comfort, keeping you in control with
                                continuous updates and approvals. From submission to distribution, we handle every step with
                                precision and expertise.</p>
                            <p className="paragraph">
                                It begins with manuscript submission, followed by thorough editing, proofreading, and image
                                typesetting, ensuring the highest publishing standards. Once finalised, we publish your book in
                                the desired formats and platforms, guaranteeing full compliance.
                            </p>
                            <p className="paragraph">
                                Post-publication, we monitor sales and recommend tailored marketing services to maximise
                                your book’s reach and success. With our top-tier team at your command, your publishing
                                journey is in expert hands.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
