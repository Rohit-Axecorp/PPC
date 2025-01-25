import React from 'react';
import './header.css';

export default function Header() {
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
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#books">Our Books</a></li>
              <li><a href="#publishers">Our Publishers</a></li>
              <li><a href="#about">Who We Are</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <button className="quote-btn">Request Quote</button>
        </div>
      </header>
    </>
  );
}
