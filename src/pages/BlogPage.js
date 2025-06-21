import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
// Import the global hero styles
import './global-hero.css';

const BlogPage = () => {
  useEffect(() => {
    document.title = "Island Narratives - Vibrations Poetry Festival";
  }, []);

  return (
    <div className="blog-coming-soon-container">
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Island Narratives</h1>
          <p>Stories, reviews, and reflections from the vibrant world of Caribbean poetry</p>
        </div>
      </section>
      
      <section className="blog-preview-content">
        <div className="featured-post-preview">
          <h2>Latest Review Available</h2>
          <div className="post-card">
            <h3>A Voice That Refuses Silence: Reviewing "Proclamations"</h3>
            <p>Vivienne Grant reviews Marguerite C. Anderson's latest poetry collection, exploring themes of memory, identity, and the pursuit of dignity amid silence and struggle.</p>
            <div className="post-meta">
              <span className="category">Book Review</span>
              <span className="author">By Vivienne Grant</span>
              <span className="date">June 21, 2025</span>
            </div>
            <Link to="/blog/proclamations-review" className="read-review-btn">
              Read Full Review
            </Link>
          </div>
        </div>
        
        <div className="coming-soon-section">
          <h2>More Content Coming Soon</h2>
          <p>Stay tuned for exciting updates including poet interviews, cultural essays, and more literary reviews!</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;