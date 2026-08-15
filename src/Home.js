import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import single banner image
import banner from './assets/banner.png';
import homeData from './data/home.json';

const highlightIcons = [
  'fas fa-book-open',
  'fas fa-trophy',
  'fas fa-calendar-alt',
  'fas fa-images',
];

const highlightLinks = [
  '/blog',
  '/poetry-competitions',
  '/festival-years',
  '/gallery',
];

const Home = () => {
  const { hero, highlights, joinUs } = homeData;

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
          <h1>{hero.title}</h1>
          <p>
            {hero.subtitle}
          </p>
          <Link to="/festival-page" className="btn">{hero.buttonText}</Link>
        </div>
      </section>


      {/* Highlights Section */}
      <section className="highlights">
        {highlights.map((highlight, index) => (
          <div className="highlight" key={highlight.title}>
            <i className={highlightIcons[index]}></i>
            <h2>{highlight.title}</h2>
            <p>
              {highlight.text}
            </p>
            <Link to={highlightLinks[index]}>{highlight.linkText}</Link>
          </div>
        ))}
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <div className="join-us-content">
          <h2>{joinUs.title}</h2>
          <p>
            {joinUs.paragraph1}
          </p>
          <p>
            {joinUs.paragraph2}
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
