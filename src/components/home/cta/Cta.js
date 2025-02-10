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
                                Got questions or need some guidance? We’re here to help! Our team of experts is ready to
                                assist you at every stage of your publishing journey. Whether you’re just starting or seeking
                                specific advice, we offer clear and friendly support to ensure you’re confident throughout the
                                process.
                            </p>
                            <p className="cta-paragraph">
                                Feel free to get in touch. We’re passionate about bringing your book to life and would be
                                delighted to discuss your ideas, goals, and how we can help make your publishing experience
                                smooth and successful. Let’s connect today!
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
