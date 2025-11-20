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
          <h2>Featured Content</h2>
          
          <div className="post-card">
            <h3>Tanisha Bent: Siloah's Brawta Voice — founder, teacher, and slam-stage contender</h3>
            <p>Marguerite C. Anderson profiles Tanisha Bent, a spoken-word poet and community arts leader from St. Elizabeth who has brought vibrant poetry programming to rural Jamaica through her Brawta Backyard Poetry project, and whose voice has resonated on the Caribbean slam circuit.</p>
            <div className="post-meta">
              <span className="category">Poet Feature</span>
              <span className="author">By Marguerite C. Anderson</span>
              <span className="date">November 20, 2025</span>
            </div>
            <Link to="/blog/tanisha-bent" className="read-review-btn">
              Read Full Feature
            </Link>
          </div>
          
          <div className="post-card">
            <h3>Lyrical Truths & Social Reckonings: A Scholarly Reflection on "Proclamations</h3>
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
          <p>Stay tuned for exciting updates including cultural essays, literary reviews, and more poet features!</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;