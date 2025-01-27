import React from 'react';
import './hero.css';
import Form from '../../form/Form';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Column */}
          <div className="hero-left">
            <h1 className="hero-heading">Crack Your Story's Potential: Our Comprehensive Book Publishing Services
            </h1>
            <p className="hero-paragraph">
              Step into excellence with Panda Publishing Agency's Book Publishing Services. Our team unlocks your story's potential with manuscript evaluation, editing, design, marketing, and distribution. Experience the thrill of seeing your book in readers' hands. Whether a first-time author or seasoned writer, we offer professional support and personalized attention. Let us turn your literary dreams into reality!
            </p>
            <div className="btn-group">
              <button className="btn btn-primary">
                Request A Callback
              </button>
              <button className="btn btn-secondary">
                Chat Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-right">
            <h2 className="form-heading">Fill Out Your Details and Get a First-Time Discount. It’s Free!
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
