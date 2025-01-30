import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility
  const openGetStartedPopup = () => setIsPopupOpen(true); // Set the popup to open
  const closePopup = () => setIsPopupOpen(false); // Set the popup to close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-right">
            <span className="phone"><a href="tel:+44 020 4615 6000">Phone Number: +44 020 4615 6000</a></span>
            <span className="email"><a href="mailto:info@londonbookpublishers.com">Email Us</a></span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./images/lbp_logo.webp" alt="Logo" />
            </Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#services">Services</a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/book-publishing-services">Book Publishing</Link>
                    </li>
                    <li>
                      <Link to="/amazon-book-publishing-services">Amazon Book Publishing</Link>
                    </li>
                    <li>
                      <Link to="/childrens-book-services">Children's Book</Link>
                    </li>
                    <li>
                      <Link to="/book-marketing-services">Book Marketing</Link>
                    </li>
                    <li>
                      <Link to="/ghostwriting-services">Ghostwriting</Link>
                    </li>
                    <li>
                      <Link to="/book-illustration-services">Book Illustration</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/our-books">Our Books</Link>
              </li>
              <li>
                <Link to="/our-publishers">Our Publishers</Link>
              </li>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <button className="quote-btn" onClick={openGetStartedPopup}>Request Quote</button>
        </div>
      </header>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
}
