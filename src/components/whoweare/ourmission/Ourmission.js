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
                                <h2>Our Results Are Evidence of our Value</h2>
                                <p>
                                    Customer Satisfaction is Our Utmost Priority
                                    Our clients are the reason we exist and we help them reach their goals and get their dreams fulfilled by working with relentless dedication.

                                </p>
                                <p>
                                    Our Approach From Start To Publishing Are Result-Oriented
                                    Our strategy is never to hope for the best but to make sure the results are the best. Our every step is with the purpose, and it’s no surprise that it happens at the end.

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
