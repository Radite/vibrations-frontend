import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './global-hero.css';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found - Vibrations Poetry Festival";
  }, []);

  return (
    <div className="not-found-page">
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or may have moved.</p>
          <Link
            to="/"
            style={{
              marginTop: '20px',
              display: 'inline-block',
              background: '#FED100',
              color: '#000',
              padding: '14px 30px',
              borderRadius: '30px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
