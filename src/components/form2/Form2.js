import React, { useState } from "react";
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

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
               
                window.location.href = '/thank-you'; // If using React Router, use history.push('/thank-you')
            } else {
                alert(`Failed to send email: ${result.message}`);
            }
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
                    className="form2-form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="phone"
                    className="form2-form-control"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form2-mb-3">
                <textarea
                    id="description"
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
