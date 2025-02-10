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
                                Comprehensive Book Publishing and Marketing Services
                            </h2>
                            <p className="paragraph">
                                Our publishing services cover everything from self-publishing on Amazon to launching on
                                various platforms. With a team that understands the process inside out, we guide you through
                                every step or handle it entirely, ensuring a seamless experience.
                            </p>
                            <p className="paragraph">
                                Marketing is key to a book’s success, and our experts develop tailored strategies to boost
                                visibility and reach the right audience. From digital campaigns to promotional efforts, we help
                                maximise your book’s potential.
                            </p>
                            <p className="paragraph">
                                Our editors and proofreaders refine your manuscript to meet professional standards. With
                                expertise across genres, they enhance clarity, correct errors, and polish every detail to
                                perfection.
                            </p>
                            <p className="paragraph">
                                A strong visual appeal makes a difference, and our designers craft compelling book covers,
                                while our illustrators bring stories to life. We also offer audiobook services with narrators
                                suited to your book’s tone and style.
                            </p>
                            <p className="paragraph">
                                To strengthen your online presence, we create professional author websites that serve as a
                                marketing hub. From publishing to promotion, our complete services ensure your book gets
                                the attention it deserves.
                            </p>

                        </div>

                        {/* Right Column */}
                        <div className="content2-left">
                            <img src='./images/what-is-ghostwriting.webp' alt='greenimage' />
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
