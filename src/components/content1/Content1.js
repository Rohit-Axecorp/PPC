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
                                1389 (& Counting) Self-Published Books Later – Let Panda Publishing Be Your Guide.
                            </h2>
                            <p className="paragraph">
                                These are the number of authors who have trusted Panda Publishing to help shepherd their books into the world! We are honored to have played a part in their success stories, and we’re eager to add yours to the list.</p>
                            <p className="paragraph">
                                Are you ready to join the ranks of these 1389+ self-published authors? Have you always wondered, “can you self-publish a book?” If you have a manuscript waiting to be unleashed on the world or even just a dream of becoming a published author, Panda Publishing is here to help you navigate the exciting path of book publishing.
                            </p>
                            <p className="paragraph">
                                With our comprehensive suite of digital services, we’ll empower you to transform your creative vision into a polished, professional book and get it into the hands of readers everywhere. Feel free to explore our services today and let Panda Publishing be your guide on your self-publishing journey to success.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
