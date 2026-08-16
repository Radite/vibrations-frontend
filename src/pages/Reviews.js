import React, { useEffect } from 'react';
import './Reviews.css';
import './global-hero.css'; // Import global hero CSS
import reviewsData from '../data/reviews.json';

const Reviews = () => {
  useEffect(() => {
    document.title = "Festival Reviews - Vibrations Poetry Festival";
  }, []);

  const { heroTitle, heroSubtitle, reviews, impactHeading, impactText, stats } = reviewsData;

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <span className="quotation-mark">"</span>
            <p>{review.quote}</p>
            <div className="author">
              <strong>{review.author}</strong>
              {review.title && <span className="author-title">, {review.title}</span>}
            </div>
          </div>
        ))}
      </section>

      {/* Community Impact Section */}
      <section className="community-impact">
        <div className="impact-content">
          <h3>{impactHeading}</h3>
          <p>{impactText}</p>
          <div className="impact-stats">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Join Us for Future Events</h3>
        <p>Be part of our growing community of poetry enthusiasts and cultural advocates.</p>
        <a href="/contact" className="btn">Get Involved</a>
      </section>
    </div>
  );
};

export default Reviews;
