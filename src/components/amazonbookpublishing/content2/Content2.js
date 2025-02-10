import React from 'react';
import "./content2.css";

export default function Content2() {
    return (
        <>

            <section className="content2-section">
                <div className="container">
                    <div className="main-content">
                        {/* Left Column */}
                        <div className="content2_right">

                            <h2 className="heading">
                                Leave the Details to Us: Seamless Amazon Publishing Services
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we believe that as an author, your focus should be on crafting your story. Leave the rest to us. We streamline the publishing process, providing you with a hassle-free experience from start to finish.
                            </p>
                            <p className="paragraph">
                                <b>Simple Service Selection & Transparent Quotes
                                </b>
                                <br />
                                Getting started is as easy as telling us what services you need. Choose from our range of publishing options and request a personalised quote. Our team is ready to guide you through the process, ensuring there are no surprises.
                            </p>
                            <p className="paragraph">
                                <b>Swift Project Initiation
                                </b>
                                <br />
                                Once your payment is processed, we get to work immediately. Whether it’s editing, formatting, or publishing your book on Amazon, our dedicated team moves quickly to ensure that your book progresses without delay.
                            </p>
                            <p className="paragraph">
                                <b>Comprehensive Support Every Step of the Way
                                </b>
                                <br />
                                From the first consultation to your book’s launch and beyond, we provide ongoing support. Whether you’re looking for help with marketing, distribution, or creating a professional website, we’re here to assist at every stage.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="content2-left">
                            <img src='./images/fiction-writing.webp' alt='greenimage' />
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
