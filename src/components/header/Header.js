import React from 'react';
import './header.css';

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-light py-2 border-bottom">
        <div className="container d-flex justify-content-end align-items-center">
          <div className="top-bar-right d-flex gap-4">
            <span className="phone">Toll Free Number: +1 877-633-0753</span>
            <span className="email">Email Us</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header py-3 bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center gap-3">
            <img src="./images/lbp_logo.png" alt="Logo" className="img-fluid" style={{ width: '200px' }} />
          </div>
          <nav className="navbar">
            <ul className="list-unstyled d-flex gap-4 mb-0">
              <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-dark text-decoration-none">Services</a></li>
              <li><a href="#books" className="text-dark text-decoration-none">Our Books</a></li>
              <li><a href="#publishers" className="text-dark text-decoration-none">Our Publishers</a></li>
              <li><a href="#about" className="text-dark text-decoration-none">Who We Are</a></li>
              <li><a href="#contact" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </nav>
          <button className="quote-btn btn btn-success text-white py-2 px-4 border-0 rounded-3">
            Request Quote
          </button>
        </div>
      </header>
    </>
  );
}
