import React from "react";
import "./whowearecontent.css"

export default function Whowearecontent() {
    return (
        <section className="wwr-content1-section">
            <div className="container">
                <div className="wwr-main-content">
                    {/* Left Column */}
                    <div className="wwr-content1-left">
                        <img src="./images/about-us.png" alt="About Us" />
                    </div>

                    {/* Right Column */}
                    <div className="wwr-content1_right">
                        <h2 className="wwr-heading">
                            Turning Stories Into Success
                        </h2>
                        <p className="wwr-paragraph">
                            London Book Publishers has been helping authors bring their stories to life for over a decade. With a track record of successful publications, we ensure every book is crafted with quality, creativity, and precision.
                        </p>
                        <p className="wwr-paragraph">
                            Our team works with the goal of making each book a standout success while giving authors full creative control and 100% royalties. No matter the genre or format, we turn ideas into books that captivate readers.
                        </p>
                        <h2 className="wwr-heading2">
                            Our Mission & Values
                        </h2>
                        <p className="wwr-paragraph">
                            Our mission is to empower authors with expert publishing services while maintaining excellence, integrity, and creativity.
                        </p>
                        <p className="wwr-paragraph">
                            We value strong author partnerships, helping bring stories to life with innovation and industry expertise to create books that inspire and engage readers worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
