import React from 'react';
import './CommunityOutreach.css';

// Placeholder image imports
import heroBackground from '../assets/banner.png';
import eventPoster from '../assets/fashion-show-poster.jpeg';

const CommunityOutreach = () => {
  return (
    <div className="community-outreach-page">
      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-bg" 
          style={{backgroundImage: `url(${heroBackground})`}}
        ></div>
        <h1>Community Outreach</h1>
        <p>Supporting arts, culture, and education across Jamaica</p>
        <a href="#featured-event" className="btn">View Events</a>
      </section>

      {/* Featured Event Section */}
      <section className="content-section" id="featured-event">
        <div className="section-header">
          <h2>Featured Event</h2>
        </div>
        
        <div className="featured-event">
          <div className="event-image">
            <img src={eventPoster} alt="Fashion Show Poster" />
          </div>
          
          <div className="event-details">
            <h3>Spring into Fashion: A Celebration of Jamaican Fashions</h3>
            <p>
              The Canadian Women's Club of Jamaica's 14th Annual Gala Fashion Show, 
              taking place on Sunday, May 11, 2025, at the AC Hotel Rocksteady Ballroom. 
              This special Mother's Day treat features celebrity models, personalities, 
              and special guests.
            </p>
            <p>
              The event supports the Riverton Meadows Early Childhood Centre, 
              providing essential educational resources to young children in our community.
            </p>
            <p className="sponsor-note">
              VPF is a proud sponsor of this event. See our logo displayed at the bottom 
              of the poster. This sponsorship reflects our support of other art forms and 
              our community outreach to other charitable organizations.
            </p>
            <a href="#rsvp" className="btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityOutreach;