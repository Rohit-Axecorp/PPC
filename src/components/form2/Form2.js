import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import "./form2.css";

export default function Form2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the email using EmailJS
        try {
            const result = await emailjs.sendForm(
                'service_hlulyaj',    // Service ID (you get it from EmailJS)
                'template_gox87xv',    // Template ID (you create this in EmailJS)
                e.target,              // The form element
                'GNWNSpeH0ebfaLTxa'         // Your User ID (you get it from EmailJS)
            );
            console.log(result.text); // Log the response from EmailJS

            // Redirect to the Thank You page
            window.location.href = '/thank-you'; // If using React Router, use history.push('/thank-you')
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };

    return (
        <form className="form2-cta-form" onSubmit={handleSubmit}>
            <div className="form2-mb-3">
                <input
                    type="text"
                    id="name"
                    name="from_name"    // Add name attribute here for EmailJS to map
                    className="form2-form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form2-mb-3 form2-input-row">
                <input
                    type="email"
                    id="email"
                    name="from_email"   // Add name attribute here for EmailJS to map
                    className="form2-form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="phone"
                    name="from_phone"   // Add name attribute here for EmailJS to map
                    className="form2-form-control"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form2-mb-3">
                <textarea
                    id="description"
                    name="from_description"  // Add name attribute here for EmailJS to map
                    className="form2-form-control"
                    rows="4"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit" className="form2-btn form2-btn-primary">
                LET'S GET STARTED
            </button>
        </form>
    );
}
