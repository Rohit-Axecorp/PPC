import React, { useState, useEffect } from "react";
import "./counter.css";

export default function Counter() {
  const [experience, setExperience] = useState(0);
  const [ghostwriters, setGhostwriters] = useState(0);
  const [books, setBooks] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateCount = (target, setFunction, delay = 50) => {
      let start = 0;
      const increment = Math.ceil(target / 50); // Adjust speed of counting
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setFunction(target);
          clearInterval(timer);
        } else {
          setFunction(start);
        }
      }, delay);
    };

    animateCount(4, setExperience); // Years of Experience
    animateCount(130, setGhostwriters); // Team of Professional Ghostwriters
    animateCount(2000, setBooks); // Books Published
    animateCount(5000, setClients); // Happy Clients
  }, []);

  return (
    <>
      <div className="counter-container ">

        <div className="main-counter">
          <div className="counter">
            <h1>{experience}+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="counter">
            <h1>{ghostwriters}+</h1>
            <p>Team of Professional Ghostwriters</p>
          </div>
          <div className="counter">
            <h1>{books}+</h1>
            <p>Books Published</p>
          </div>
          <div className="counter">
            <h1>{clients}+</h1>
            <p>Happy Clients</p>
          </div>

        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="main-content">
            <h2 className="heading">
              Why Choose London Book Publishers Among Hundreds of Others?
            </h2>
            <p className="paragraph">
              We believe in the power of the word and are out to ensure every idea gets out and meets the
              eyes of the world. Our book publishing company is unique because of its author-centric
              approach towards projects. Instead of restricting authors to unnecessary complications, we
              offer personalised care and solve their problems.</p>
            <p className="paragraph">
              Our expert team goes beyond expectations with an author-centric approach, clear
              communication, and dedicated support. From manuscript finalisation to publishing and
              marketing, we provide tailored solutions to turn ideas into successful books. Ready to start
              your publishing journey?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

