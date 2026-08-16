import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FestivalYears.css';
import './global-hero.css'; // Import global hero CSS
import { initializeYearsPageAnimations } from './utils/festivalYearsAnimations';
import festivalYearsData from '../data/festivalYears.json';

// Detects which years already have a full "Festival Year Detail Pages" entry,
// so the timeline can link to it automatically instead of requiring a manually
// typed URL that has to be kept in sync by hand.
const festivalYearPagesContext = require.context('../data/festivalYearPages', false, /\.json$/);
const yearsWithDetailPages = new Set(
  festivalYearPagesContext.keys().map((key) => festivalYearPagesContext(key).year)
);

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

  const { heroTitle, heroSubtitle, introTitle, introText, years } = festivalYearsData;

  return (
    <div className="festival-years-page">
      {/* Hero Section - Updated to use global hero styles */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </section>

      {/* Page Content */}
      <section className="years-content">
        <div className="years-header">
          <h1>{introTitle}</h1>
          <p>{introText}</p>
        </div>

        <div className="timeline-decoration">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="years-grid">
          {years.map((yearEntry) => {
            const hasDetailPage = yearsWithDetailPages.has(yearEntry.year);
            const linkUrl = hasDetailPage ? `/festival-page/${yearEntry.year}` : yearEntry.linkUrl;
            const linkText = yearEntry.linkText || (hasDetailPage ? 'View Festival Details' : 'Learn More');

            return (
              <div className="year-card" key={yearEntry.year}>
                <h2>{yearEntry.year}</h2>
                <p>{yearEntry.description}</p>

                {yearEntry.poster && (
                  <div className="poster-container">
                    <img src={yearEntry.poster} alt={`Vibrations Poetry Festival ${yearEntry.year} Poster`} className="festival-poster" />
                  </div>
                )}

                {linkUrl && (
                  <Link to={linkUrl} className="btn">{linkText}</Link>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FestivalYears;
