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
            <h1 className="hero-heading">Publish Your Book with Panda Publishing</h1>
            <p className="hero-paragraph">
              Panda Publishing is an independent self-publishing house that offers a supportive and comprehensive range of digital services to guide you through every step of the self-publishing journey. Let’s turn your dream of becoming a published author into reality. Contact us today.
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
