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
                            <h1 className="cta-heading">Contact Panda Publishing To Begin Your Journey Today!
                            </h1>
                            <p className="cta-paragraph">
                                Are you seeking assistance with ghostwriting, editing, formatting, or marketing? Look no further! At Panda Publishing, our team of professionals is adept in providing these services and fully dedicated to the success of your project.
                            </p>
                            <p className="cta-paragraph">
                                We prioritize maintaining your originality while refining your work to captivate your audience. Take the initial step towards excellence by reaching out to us.
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
