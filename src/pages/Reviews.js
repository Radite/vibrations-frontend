import React, { useEffect } from 'react';
import './Reviews.css';
import './global-hero.css'; // Import global hero CSS

const Reviews = () => {
  useEffect(() => {
    document.title = "Festival Reviews - Vibrations Poetry Festival";
  }, []);

  return (
    <div className="reviews-coming-soon-container">
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Coming Soon</h1>
          <p>Stay tuned for upcoming reviews and festival experiences!</p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
