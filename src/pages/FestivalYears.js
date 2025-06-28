import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FestivalYears.css';
import './global-hero.css'; // Import global hero CSS
import { initializeYearsPageAnimations } from './utils/festivalYearsAnimations';
import Poster from '../assets/Poster.jpg'; // Import the poster image

const FestivalYears = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add page-specific animations if needed
    const yearCards = document.querySelectorAll('.year-card');
    
    // Simple animation to fade in cards with slight delay between each
    yearCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 200 * index);
    });
    
    // Initialize advanced animations and get cleanup function
    const cleanup = initializeYearsPageAnimations();
    
    // Return cleanup function to remove event listeners when component unmounts
    return cleanup;
  }, []);

  return (
    <div className="festival-years-page">
      {/* Hero Section - Updated to use global hero styles */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Festival Years</h1>
          <p>Explore the evolution of our festival from inception to its vibrant future</p>
        </div>
      </section>
      
      {/* Page Content */}
      <section className="years-content">
        <div className="years-header">
          <h1>Our Festival History</h1>
          <p>Explore the evolution of the Vibrations Poetry Festival through the years, from our humble beginnings to our vision for the future.</p>
        </div>
        
        <div className="timeline-decoration">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className="years-grid">
          {/* Since 2025 is the first year, we display a Coming Soon message */}
          <div className="year-card">
            <h2>2025</h2>
            <p>Join us for our inaugural festival – a celebration of Caribbean poetry, music, and culture. Vibrations Poetry Festival will debut in 2025 with renowned poets and artists from across the region.</p>
            
            {/* Festival Poster */}
            <div className="poster-container">
              <img src={Poster} alt="Vibrations Poetry Festival 2025 Poster" className="festival-poster" />
            </div>
            
            <Link to="/festival-page" className="btn">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestivalYears;