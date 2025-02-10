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
                                How We Bring Success To Your Project
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we ensure your project’s success by offering expert editing services tailored to your needs. Our team of editors pays meticulous attention to detail, guaranteeing a high-quality result that meets your expectations and delivers complete customer satisfaction.                            </p>
                            <p className="paragraph">
                                The process begins with a thorough analysis of your manuscript. We review it for errors and create a report that outlines the necessary changes. This helps us understand the scope of revisions and prepares us for the next stage.                            </p>
                            <p className="paragraph">
                                Once the analysis is complete, we work with you to decide on the best approach for editing, whether it’s line, developmental, or copy editing. After finalising the editing plan, we revise the manuscript in drafts, collaborating with you to ensure your vision is realised. The final step involves formatting and typesetting the book, after which we seek your approval before sending it to the publisher.                            </p>
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
