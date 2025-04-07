import React, { useEffect } from 'react';
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
          <h1>Coming Soon</h1>
          <p>Stay tuned for exciting updates on our blog!</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
