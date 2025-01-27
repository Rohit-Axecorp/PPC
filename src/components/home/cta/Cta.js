import React from 'react'
import "./cta.css"
import Form2 from '../../form2/Form2'

export default function Cta() {
    return (
        <>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        {/* Left Column */}
                        <div className="cta-left">
                            <h1 className="cta-heading">Have Questions? Need Guidance? Let’s Talk
                            </h1>
                            <p className="cta-paragraph">
                                Ready to embark on your self-publishing journey but have lingering questions? Perhaps you need some expert guidance to navigate the exciting world of book creation? Don’t hesitate to reach out! The Panda Publishing team is here to answer your questions and provide tailored advice to address your specific needs.
                            </p>
                            <p className="cta-paragraph">
                                We offer a free consultation where you can discuss your book concept, explore our services in detail, and get a clear understanding of how Panda Publishing can help you achieve your book publishing goals. Contact us today, and let’s chat about turning your manuscript into a published masterpiece!
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="cta-right">
                            <h2 className="form-heading">Fill Out Your Details and Get a First-Time Discount. It’s Free!
                            </h2>
                            <Form2 />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
