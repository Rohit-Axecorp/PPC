import React, { useState } from "react";
import "./header.css";

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
            <img src="./images/lbp_logo.webp" alt="Logo" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li className="dropdown" onClick={toggleDropdown}>
                <a href="#services">Services</a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#publishing">Book Publishing</a>
                    </li>
                    <li>
                      <a href="#amazon">Amazon Book Publishing</a>
                    </li>
                    <li>
                      <a href="#childrens">Children's Book</a>
                    </li>
                    <li>
                      <a href="#marketing">Book Marketing</a>
                    </li>
                    <li>
                      <a href="#ghostwriting">Ghostwriting</a>
                    </li>
                    <li>
                      <a href="#illustration">Book Illustration</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#books">Our Books</a>
              </li>
              <li>
                <a href="#publishers">Our Publishers</a>
              </li>
              <li>
                <a href="#about">Who We Are</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          <button className="quote-btn">Request Quote</button>
        </div>
      </header>
    </>
  );
}
