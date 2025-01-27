import React from "react";
import "./form2.css";

export default function Form2() {
    return (
        <form className="form2-cta-form">
            <div className="form2-mb-3">
                <input
                    type="text"
                    id="name"
                    className="form2-form-control"
                    placeholder="Name"
                />
            </div>
            <div className="form2-mb-3 form2-input-row">
                <input
                    type="email"
                    id="email"
                    className="form2-form-control"
                    placeholder="Email"
                />
                <input
                    type="text"
                    id="phone"
                    className="form2-form-control"
                    placeholder="Phone"
                />
            </div>
            <div className="form2-mb-3">
                <textarea
                    id="project-description"
                    className="form2-form-control"
                    rows="4"
                    placeholder="Project Description"
                ></textarea>
            </div>
            <div className="form2-mb-3 form2-checkbox-container">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="form2-terms-label">
                    Please check the box to communicate via SMS or Email Terms & Conditions & Privacy Policy – Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to stop to unsubscribe anytime
                </label>
            </div>
            <button type="submit" className="form2-btn form2-btn-primary">
                LET'S GET STARTED
            </button>
        </form>
    );
}
