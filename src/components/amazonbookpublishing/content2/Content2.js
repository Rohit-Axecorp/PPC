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
                                Panda Publishing Is Not Your Run-of-the-Mill Publishers
                            </h2>
                            <p className="paragraph">
                                Forget the dusty image of traditional publishing houses. Here at Panda Publishing, we’re a forward-thinking firm that embraces the dynamism of the modern publishing landscape. We believe in the power of stories, but we also believe in breaking the mold to bring them to life.
                            </p>
                            <p className="paragraph">
                                <b>We Champion Innovation
                                </b>
                                <br />
                                We don’t shy away from unconventional ideas. We thrive on exploring new avenues to showcase your work, whether it’s embracing emerging technologies or utilizing creative marketing strategies.
                            </p>
                            <p className="paragraph">
                                <b>We Speak Your Language
                                </b>
                                <br />
                                We understand that authors today are tech-savvy and involved. And if you are not, no worries. We value transparency and open communication, keeping you informed and engaged throughout the publishing journey.
                            </p>
                            <p className="paragraph">
                                <b>We Break Down Barriers

                                </b>
                                <br />
                                Traditional publishing can feel rigid and impersonal. We prioritize fostering a collaborative partnership where your voice is heard, and your vision is respected. We’re here to empower you, not dictate your story.

                                <br />

                                We want you to think of us as your publishing partner, not the gatekeepers. We believe in bending the traditional rules to help your book stand out in a crowded marketplace.
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
