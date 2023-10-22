// UnderConstruction.js
import React, { useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <div className="under-construction">
      <div className="content">
        <h1>Portfolio Under Construction</h1>
        <p>We're working on something amazing. Stay tuned for updates!</p>
      </div>
    </div>
  );
}

export default Portfolio;
