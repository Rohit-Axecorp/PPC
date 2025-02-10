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
                                Assistance in your literary journey at every step
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we guide you through every step of your literary journey with an author-focused approach. First, we assist with book designing, ensuring that your written content, illustrations, and graphics are all professionally created. Our dedicated team is ready to help bring your ideas to life. Once your book is written and formatted, we can support you with the printing process, ensuring the proper sizes and formats are used. When the printed copies are ready, we handle distribution, ensuring your book reaches the right places for visibility and sales. Lastly, our marketing team is always available to help promote your work, creating strategies to increase awareness and engagement. Reach out to us for a seamless publishing experience from start to finish.                            </p>


                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
