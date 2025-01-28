import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-right">
            <span className="phone">Toll Free Number: +1 877-633-0753</span>
            <span className="email">Email Us</span>
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
              <li className="dropdown" onClick={toggleDropdown}>
                <a href="#services">Services</a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/book-publishing-services">Book Publishing</Link>
                    </li>
                    <li>
                      <Link to="/amazon">Amazon Book Publishing</Link>
                    </li>
                    <li>
                      <Link to="/childrens">Children's Book</Link>
                    </li>
                    <li>
                      <Link to="/marketing">Book Marketing</Link>
                    </li>
                    <li>
                      <Link to="/ghostwriting">Ghostwriting</Link>
                    </li>
                    <li>
                      <Link to="/illustration">Book Illustration</Link>
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
          <button className="quote-btn">Request Quote</button>
        </div>
      </header>
    </>
  );
}
