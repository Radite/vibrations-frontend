import React from 'react';
import './About.css';
import './global-hero.css';
import foundersVideo from '../assets/founders-intro.mp4';
import aboutData from '../data/about.json';

const AboutPage = () => {
  const { heroTitle, heroSubtitle, introParagraph1, introParagraph2, founders, vision, mission, journeyText, inauguralDate, inauguralLocation } = aboutData;

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>{heroTitle}</h1>
          <p>
            {heroSubtitle}
          </p>
        </div>
      </section>

      <section className="about-page-content">
        {/* Festival Introduction */}
        <div className="about-text-full">
          <h2>
            <i className="fa-solid fa-microphone-alt"></i> About the Festival
          </h2>
          <p>{introParagraph1}</p>
          <p>{introParagraph2}</p>
        </div>

        {/* Visionaries Section with Video */}
        <div className="about-text-full">
          <h2>
            <i className="fa-solid fa-user-tie"></i> Our Visionaries
          </h2>

          {/* Video Introduction */}
          <div className="founders-video-container">
            <h3>Meet Our Founders</h3>
            <p>Get to know the passionate minds behind Vibrations Poetry Festival.</p>
            <div className="video-container">
              <video
                controls
                className="founders-video"
                width="600"
                height="400"
                preload="metadata"
              >
                <source src={foundersVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="founders-container">
            {founders.map((founder) => (
              <div className="founder" key={founder.name}>
                <img src={founder.photo} alt={founder.name} />
                <div className="founder-info">
                  <h3>{founder.name}</h3>
                  <p>{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          {/* Vision & Mission Section */}
          <div className="about-text">
            <h2>
              <i className="fa-solid fa-lightbulb"></i> Our Vision & Purpose
            </h2>
            <p>
              <strong>Vision:</strong> {vision}
            </p>
            <p>
              <strong>Mission:</strong> {mission}
            </p>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="our-journey">
          <h2>
            <i className="fa-solid fa-road"></i> Our Journey
          </h2>
          <p>{journeyText}</p>
          <div className="festival-info">
            <h3>Inaugural Festival</h3>
            <p>
              <strong>Date:</strong> {inauguralDate}
            </p>
            <p>
              <strong>Location:</strong> {inauguralLocation}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
