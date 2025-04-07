import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WinnerDetail.css';

const WinnerDetailJane = () => {
  useEffect(() => {
    document.title = "Jane Doe - Spring Verse Challenge Winner - Vibrations Poetry Festival";
  }, []);

  return (
    <div className="winner-detail-container">
      {/* Hero Section */}
      <section className="winner-detail-hero">
        <div className="winner-detail-hero-content">
          <h1>Jane Doe</h1>
          <h2>Spring Verse Challenge 2024 Winner</h2>
        </div>
      </section>

      <section className="winner-detail-content">
        <div className="winner-navigation">
          <Link to="/competitions" className="back-link">← Back to Competitions</Link>
        </div>

        <div className="poem-container">
          <h2 className="poem-title">Dawn's Promise</h2>
          
          <div className="poem-text">
            {/* (Poem text left unchanged for brevity) */}
          </div>
          
          <div className="poem-footer">
            <p className="poem-date">April 2024</p>
          </div>
        </div>

        <div className="poet-bio">
          <h3>About the Poet</h3>
          <img src="/api/placeholder/200/200" alt="Jane Doe" className="poet-image" />
          <p>Jane Doe is an emerging voice in contemporary poetry...</p>
          
          <div className="poet-links">
            <h4>More from Jane Doe</h4>
            <ul>
              <li>
                {/* Use a real URL or open in new tab */}
                <a href="https://janedoe-poetry.com" target="_blank" rel="noopener noreferrer" className="external-link">
                  Personal Website
                </a>
              </li>
              <li>
                <a href="https://poetrytoday.org/interviews/jane" target="_blank" rel="noopener noreferrer" className="external-link">
                  Interview in Poetry Today
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="judges-comments">
          <h3>Judges' Commentary</h3>
          <blockquote>
            "In 'Dawn's Promise,' Doe accomplishes what only the finest poetry can..."
            <cite>— Dr. Eleanor Wright, Lead Judge</cite>
          </blockquote>
        </div>

        <div className="related-winners">
          <h3>Explore Other Winners</h3>
          <div className="winner-cards">
            <div className="related-winner-card">
              <h4>Michael Chen</h4>
              <p>Summer Sonnet Slam 2024</p>
              <Link to="/winner-detail-michael" className="view-btn">View Work</Link>
            </div>
            <div className="related-winner-card">
              <h4>Sophia Rodriguez</h4>
              <p>Spring Verse Challenge 2023</p>
              <Link to="/winner-detail-sophia" className="view-btn">View Work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="winner-detail-cta">
        <h2>Ready to share your voice?</h2>
        <p>Enter this year's Spring Verse Challenge and join our community of poets.</p>
        <div className="cta-buttons">
          <Link to="/poetry-competitions" className="cta-btn">View Competitions</Link>
        </div>
      </section>
    </div>
  );
};

export default WinnerDetailJane;
