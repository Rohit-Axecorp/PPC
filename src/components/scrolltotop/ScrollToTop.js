import React, { useState, useEffect } from "react";
import "./scrolltotop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to Top"
        >
          <span className="arrow">↑</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
