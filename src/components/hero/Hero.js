import React from 'react';
import './hero.css';

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
              <button className="btn btn-primary btn-animated">
                Request A Callback
                <span className="btn-icon">📞</span>

              </button>
              <button className="btn btn-secondary btn-animated">

                Chat Now
                <span className="btn-icon">💬</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-right">
            <h2 className="form-heading">Fill Out Your Details and Get a First-Time Discount. It’s Free!
            </h2>
            <form className="hero-form">
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
