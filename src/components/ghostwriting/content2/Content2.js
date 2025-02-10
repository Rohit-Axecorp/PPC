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
                                Why Choose Our Ghostwriting Services?
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we provide affordable ghostwriting services without sacrificing quality. Our packages are designed to deliver exceptional results at a price point that ensures your literary aspirations are within reach, without going over budget.
                            </p>
                            <p className="paragraph">
                                Our team of skilled ghostwriters is versatile and experienced in every genre. Whether it’s fiction, non-fiction, memoirs, or any other type of writing, we can turn your vision into a fully fleshed-out manuscript, tailored to your unique style and goals.
                            </p>
                            <p className="paragraph">
                                We pride ourselves on punctuality and professionalism. Our writers, who rank among the top 3% in the country, are committed to meeting deadlines while maintaining the highest standard of quality. When you work with us, you can trust that your project will be completed on time and to your satisfaction.
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
