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
                                Complete Book Marketing Solutions
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we know that simply writing a great book isn’t enough. The real challenge lies in ensuring your book reaches the right readers and generates the attention it deserves. Our marketing strategies are designed to elevate your book’s visibility and maximise its potential in a competitive market.
                            </p>
                            <p className="paragraph">
                                We create a bespoke marketing plan tailored to your book’s unique qualities. Our experienced team works closely with you, ensuring that every strategy is fine-tuned to enhance your book’s popularity and connect with your target audience.
                            </p>
                            <p className="paragraph">
                                In the digital age, author branding and a strong social media presence are essential for success. We help build your personal brand and manage your online presence, ensuring consistent engagement with your readers. Through influencer outreach and securing reviews, we ensure your book gains the momentum it needs to thrive.
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
