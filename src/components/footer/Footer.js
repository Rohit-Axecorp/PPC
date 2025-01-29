import React from 'react';
import "./footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    {/* Logo and About Section */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="./images/lbp_logo.webp" alt="Logo" />
                        </div>
                        <p className="footer-text1">
                            Panda Publishing is an independent publishing house that provides a suite
                            of digital services, including book publishing, children’s books, book
                            marketing, ghostwriting, illustration, book cover design, author website,
                            and more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/our-books">Our Books</Link></li>
                            <li><Link to="/our-publishers">Our Publishers</Link></li>
                            <li><Link to="/who-we-are">Who We Are</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="footer-section">
                        <h3>Our Services</h3>
                        <ul className="footer-links">
                            <li><Link to="/book-publishing-services">Book Publishing</Link></li>
                            <li><Link to="/amazon">Amazon Book Publishing</Link></li>
                            <li><Link to="/children">Children's Book</Link></li>
                            <li><Link to="/marketing">Book Marketing</Link></li>
                            <li><Link to="/barnes-noble">Barnes & Noble Publishing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p className="footer-text"><strong>Mailing Address:</strong> 1650 Market Street Suite 3600 Philadelphia 19103</p>
                        <p className="footer-text"><strong>2nd Mailing Address:</strong> 515 Flower St, Los Angeles, CA 90071</p>
                        <p className="footer-text"><strong>Toll-Free Number:</strong> 1 877-633-0753</p>
                        <p className="footer-text"><strong>Phone Number:</strong> +1 210-888-0060</p>
                        <p className="footer-text">
                            <strong>Email Address:</strong>{" "}
                            <a href="mailto:info@pandapublishing.agency">info@pandapublishing.agency</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    © 2025 London Book Publishers
                </div>
            </footer>
        </>
    );
}
