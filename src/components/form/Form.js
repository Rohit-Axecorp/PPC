import React from 'react'
import "./form.css"

export default function Form() {
    return (
        <>
            <form className="form1-cta-form">
                <div className="form1-mb-3">
                    <input
                        type="text"
                        id="name"
                        className="form1-form-control"
                        placeholder="Name"
                    />
                </div>
                <div className="form1-mb-3 form1-input-row">
                    <input
                        type="email"
                        id="email"
                        className="form1-form-control"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        id="phone"
                        className="form1-form-control"
                        placeholder="Phone"
                    />
                </div>
                <div className="form1-mb-3 form1-checkbox-container">
                    <input type="checkbox" id="terms1" />
                    <label htmlFor="terms1" className="form1-terms-label">
                        Please check the box to communicate via SMS or Email Terms & 
                        Conditions & Privacy Policy – Carrier charges may apply for SMS. 
                        Reply STOP or UNSUBSCRIBE to stop to unsubscribe anytime
                    </label>
                </div>
                <button type="submit" className="form1-btn form1-btn-primary">
                    SUBMIT
                </button>
            </form>
        </>
    )
}
