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
                                How We Stand Out in Children’s Book Publishing
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, we stand out by blending creativity with precision to produce children’s books that truly captivate young readers. Our team focuses on bringing your story to life with vibrant illustrations, engaging narratives, and professional design. We take a personalised approach, working closely with authors to ensure their vision is realised while maintaining the highest quality standards. With us, your children’s book will make a lasting impression.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
