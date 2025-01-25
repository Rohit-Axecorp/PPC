import React from 'react'
import "./cta.css"

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
                            <form className="cta-form">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
