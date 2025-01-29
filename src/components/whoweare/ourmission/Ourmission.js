import React from 'react'
import "./ourmission.css"

export default function Ourmission() {
    return (
        <>
            <section className='ourmission-section'>
                <div className="ourmission-container">
                    {/* Mission Section */}
                    <section className="mission-section">
                        <div className="mission-content">
                            <div className="left-image"></div>
                            <div className="right-text">
                                <h2>Our Mission</h2>
                                <p>
                                    At Panda Publishing, our mission is to deliver top-notch services
                                    and unparalleled customer support to individuals and businesses
                                    worldwide who aspire to share their literary creations with the
                                    world through writing, publishing, and marketing books.
                                </p>
                                <p>
                                    We are committed to fostering long-term partnerships with our
                                    clients, built on trust and excellence, by providing them with a
                                    dedicated team and unwavering commitment to quality.
                                </p>
                                <button className="cta-button">Get Started Now</button>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="stats-section">
                        <div className="stat">
                            <h3>7+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat">
                            <h3>130+</h3>
                            <p>Team of Professional Ghostwriters</p>
                        </div>
                        <div className="stat">
                            <h3>2000+</h3>
                            <p>Books Published</p>
                        </div>
                        <div className="stat">
                            <h3>5000+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
