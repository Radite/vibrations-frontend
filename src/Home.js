import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import single banner image
import banner from './assets/banner.png';

const Home = () => {
  return (
    <>
      {/* Hero Section with Static Background */}
      <section className="site-hero">
        {/* Background Image */}
        <div 
          className="hero-bg" 
          style={{ 
            backgroundImage: `url(${banner})`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        
        {/* Hero Content */}
        <div className="site-hero-content">
          <h1>Vibrations Poetry Festival</h1>
          <p>
            A celebration of poetic expression, cultural heritage, and the rhythmic spirit of Jamaican-inspired storytelling.
          </p>
          <Link to="/festival-page" className="btn">Experience the Festival</Link>
        </div>
      </section>

      
      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight">
          <i className="fas fa-book-open"></i>
          <h2>Blog</h2>
          <p>
            Explore our latest articles featuring vibrant stories, cultural insights, and poetic expressions from across the Caribbean.
          </p>
          <Link to="/blog">Discover Stories</Link>
        </div>
        
        <div className="highlight">
          <i className="fas fa-trophy"></i>
          <h2>Competition Results</h2>
          <p>
            Celebrate our inaugural competition winners and discover the incredible poetry that made history at our festival.
          </p>
          <Link to="/poetry-competitions">See the Winners</Link>
        </div>
        
        <div className="highlight">
          <i className="fas fa-calendar-alt"></i>
          <h2>Festival Years</h2>
          <p>
            Journey through our inaugural 2025 festival and experience the birth of a new cultural celebration tradition.
          </p>
          <Link to="/festival-years">Explore Our Journey</Link>
        </div>
        
        <div className="highlight">
          <i className="fas fa-images"></i>
          <h2>Festival Gallery</h2>
          <p>
            Relive the magic of our inaugural festival through photos and videos from this historic celebration.
          </p>
          <Link to="/gallery">View Gallery</Link>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="join-us">
        <div className="join-us-content">
          <h2>Thank You for Making History!</h2>
          <p>
            Our inaugural Vibrations Poetry Festival on August 9, 2025, was a tremendous success! We witnessed 
            incredible poetry, celebrated amazing talent, and created lasting memories. Whether you were a poet, 
            poetry lover, or someone discovering the transformative power of words, you helped make this festival 
            a historic moment in Jamaican cultural history.
          </p>
          <p>
            The <em>vibrations</em> of our inaugural festival continue to inspire—proving that poetry is not just 
            a form of art, it is a force for change. Stay tuned for future festivals and competitions!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;