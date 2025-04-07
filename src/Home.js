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
          <i className="fas fa-microphone"></i>
          <h2>Poetry Competitions</h2>
          <p>
            Submit your poetry and spoken word pieces for a chance to gain recognition in our prestigious competitions.
          </p>
          <Link to="/poetry-competitions">Submit Your Work</Link>
        </div>
        
        <div className="highlight">
          <i className="fas fa-history"></i>
          <h2>Festival Years</h2>
          <p>
            Journey through the vibrant history of our festivals and experience the evolution of our cultural celebrations.
          </p>
          <Link to="/festival-years">Explore Our Roots</Link>
        </div>
        
        <div className="highlight">
          <i className="fas fa-store"></i>
          <h2>Call for Vendors</h2>
          <p>
            Showcase your artistry and crafts by securing a vendor space at our vibrant cultural marketplace.
          </p>
          <Link to="/vendors">Join the Vendors</Link>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="join-us">
        <div className="join-us-content">
          <h2>Join Us</h2>
          <p>
            Whether you're a poet, poetry lover, or someone interested in the transformative power of words, 
            the Vibrations Poetry Festival is for you. We invite you to be a part of our inaugural event in 
            2025, where you'll experience the richness of Jamaican poetry, hear from inspiring poets, and 
            witness firsthand how poetry can spark change.
          </p>
          <p>
            Let the <em>vibrations</em> of the festival inspire you—because poetry is not just a form of art, 
            it is a force for change.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;