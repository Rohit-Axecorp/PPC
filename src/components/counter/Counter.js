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
        <div className="container">
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
      </div>

      <div className="content">
        <div className="container">
          <div className="main-content">
          <h2 className="heading">
            We Make Self Publishing Your Book Easy.
          </h2>
          <p className="paragraph">
            We know how difficult it is to handle the various stages of self-publishing a book, especially if you are an aspiring author looking to get your first book published. Panda Publishing started as a small group of friends who enjoyed reading classical and contemporary literature sharing notes, thoughts, and interpretation. That love blossomed into starting a then-small self-publishing firm called Panda Publishing. Now, we are a team of over 100 industry-vetted and like-minded professionals offering digital services to help aspiring writers and authors looking to make a mark in the literary world and cement their legacy.
          </p>
          <p className="paragraph">
            We’re here to simplify your journey. Whether you have a polished manuscript ready for publication or are at an earlier stage and require assistance with editing, proofreading, formatting, or even crafting your story from scratch with our ghostwriting services, our team of experienced professionals is here to guide you. We can also help you design a stunning cover that will grab readers’ attention and navigate the intricacies of Amazon Book Publishing to ensure your book reaches its target audience. Let Panda Publishing be your self-publish book partner in transforming your manuscript, or even your initial ideas, into a published masterpiece.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

