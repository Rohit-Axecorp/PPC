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
                                Why We Are the Experts in Children’s Book Publishing
                            </h2>
                            <p className="paragraph">
                                At London Book Publishers, our experience in children’s books allows us to create engaging, age-appropriate content that meets industry standards. Our team ensures your book is both educational and entertaining for young readers.
                            </p>
                            <p className="paragraph">
                                We bring your vision to life with vibrant illustrations that complement your story. Our skilled artists know how to capture the essence of your book, ensuring it resonates with your audience.
                            </p>
                            <p className="paragraph">
                                From start to finish, we handle every aspect of the publishing process with precision. With our expertise, your book will stand out and capture the attention of readers and parents alike.
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
