import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './FestivalPage.css';
import festivalData from '../data/festivalPage.json';

const FestivalPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const { hero, overview, aboutBody, sponsors, presenters, schedule, venue } = festivalData;
  const featuredPresenters = presenters.filter((p) => p.featured);
  const additionalPresenters = presenters.filter((p) => !p.featured);

  const renderPresenterCard = (presenter) => (
    <div className="presenter-card" key={presenter.name}>
      <img src={presenter.photo} alt={presenter.name} className="presenter-image" />
      <div className="presenter-info">
        <h4>{presenter.name}</h4>
        <p className="presenter-title">{presenter.title}</p>
        <div className="presenter-bio">
          {presenter.bio.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        </div>
        {presenter.video && (
          <div className="presenter-video">
            <video controls preload="metadata" width="400" height="300">
              <source src={presenter.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {!presenter.video && presenter.youtubeUrl && (
          <div className="presenter-video">
            <iframe
              width="400"
              height="300"
              src={presenter.youtubeUrl}
              title={`${presenter.name} Poetry Performance`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="festival-page">
      {/* Hero Section */}
      <section className="site-hero festival-hero">
        <div className="site-hero-content">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`festival-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {/* Festival Overview */}
          <div className="festival-overview">
            <div className="overview-text">
              <h2>{overview.heading}</h2>
              <p>{overview.description}</p>
            </div>
            <div className="overview-stats">
              {overview.stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="festival-tabs">
            <div className="tab-navigation">
              <button className={`tab-button ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</button>
              <button className={`tab-button ${activeTab === 'presenters' ? 'active' : ''}`} onClick={() => setActiveTab('presenters')}>Presenters</button>
              <button className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>Schedule</button>
              <button className={`tab-button ${activeTab === 'venues' ? 'active' : ''}`} onClick={() => setActiveTab('venues')}>Venue</button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {/* About Tab */}
              <div className={`tab-pane ${activeTab === 'about' ? 'active' : ''}`}>
                <ReactMarkdown>{aboutBody}</ReactMarkdown>

                {/* Sponsors & Partners Section */}
                <div className="sponsors-section">
                  <h4>Our Sponsors & Partners</h4>
                  <div className="sponsors-social-caption">
                    <p><em>{sponsors.caption1}</em></p>
                    <p><em>{sponsors.caption2}</em></p>
                  </div>

                  {sponsors.image && (
                    <div className="sponsors-image-container">
                      <img src={sponsors.image} alt="Vibrations Poetry Festival Sponsors and Partners" className="sponsors-image" />
                    </div>
                  )}

                  <div className="sponsors-list">
                    <h5>Thank you to our valued sponsors:</h5>
                    <ul>
                      {sponsors.list.map((sponsor) => (
                        <li key={sponsor.name}><strong>{sponsor.name}</strong> - {sponsor.description}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Individual Contributors Section */}
                  <div className="contributors-section">
                    <h5>Individual Contributors</h5>
                    <p>We extend our heartfelt gratitude to these individual contributors who have supported Vibrations Poetry Festival:</p>
                    <div className="contributors-grid">
                      <ul className="contributors-list">
                        {sponsors.contributors.slice(0, Math.ceil(sponsors.contributors.length / 2)).map((name) => <li key={name}>{name}</li>)}
                      </ul>
                      <ul className="contributors-list">
                        {sponsors.contributors.slice(Math.ceil(sponsors.contributors.length / 2)).map((name) => <li key={name}>{name}</li>)}
                      </ul>
                    </div>
                  </div>

                  <p className="partnership-note">
                    <em>{sponsors.partnershipNote}</em>
                  </p>
                </div>
              </div>

              {/* Presenters Tab */}
              <div className={`tab-pane ${activeTab === 'presenters' ? 'active' : ''}`}>
                <h3>Festival Presenters & Founders</h3>
                <p>Meet the accomplished poets, emerging and aspiring artists who will be presenting at Vibrations Poetry Festival 2025.</p>

                <div className="presenters-section">
                  <h4>Featured Presenters</h4>
                  <div className="presenters-grid">
                    {featuredPresenters.map(renderPresenterCard)}
                  </div>
                </div>

                <div className="presenters-section">
                  <h4>Additional Presenters</h4>
                  <div className="presenters-grid">
                    {additionalPresenters.map(renderPresenterCard)}
                  </div>
                </div>
              </div>

              {/* Schedule Tab */}
              <div className={`tab-pane ${activeTab === 'schedule' ? 'active' : ''}`}>
                <h3>Festival Schedule</h3>
                <p>{schedule.introText}</p>

                <div className="running-order">
                  <h4>Running Order</h4>
                  <div className="schedule-section">
                    <h5>{schedule.openingSection.title}</h5>
                    <ol className="schedule-list">
                      {schedule.openingSection.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  </div>

                  <div className="schedule-section">
                    <h5>{schedule.performersSection.title}</h5>
                    <ol className="schedule-list" start={schedule.openingSection.items.length + 1}>
                      {schedule.performersSection.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  </div>
                  <div className="intermission">
                    <h5>INTERMISSION</h5>
                  </div>

                  <div className="schedule-section">
                    <h5>{schedule.closingSection.title}</h5>
                    <ol className="schedule-list">
                      {schedule.closingSection.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                    <p className="schedule-end"><strong>THE END</strong></p>
                  </div>
                </div>

                <div className="schedule-note">
                  <p><em>{schedule.note}</em></p>
                </div>
              </div>

              {/* Venues Tab */}
              <div className={`tab-pane ${activeTab === 'venues' ? 'active' : ''}`}>
                <h3>Festival Venue</h3>
                <p>{venue.introText}</p>

                <div className="venues-list">
                  <div className="venue-item">
                    <img src={venue.image} alt={venue.name} className="venue-image" />
                    <div className="venue-details">
                      <h4>{venue.name}</h4>
                      <p>{venue.description}</p>
                      <p><strong>Address:</strong> {venue.address}</p>
                      <p>{venue.extraText}</p>
                    </div>
                  </div>
                </div>

                <div className="venue-info">
                  <h4>Venue Facilities</h4>
                  <ul>
                    {venue.facilities.map((facility) => <li key={facility}>{facility}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestivalPage;
