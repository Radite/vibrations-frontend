import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './FestivalPage.css';

// Every file in src/data/festivalYears is one festival year, added via the CMS
// "Festival Years" collection. This page only shows years where the entry's
// "Full Festival Details" section has been filled in (at least a Hero Title).
const yearsContext = require.context('../data/festivalYears', false, /\.json$/);

const hasFullDetails = (entry) => !!(entry.fullDetails && entry.fullDetails.hero && entry.fullDetails.hero.title);

const yearPages = yearsContext
  .keys()
  .map((key) => yearsContext(key))
  .filter(hasFullDetails)
  .sort((a, b) => (b.year || '').localeCompare(a.year || ''));

const FestivalPage = () => {
  const { year } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditor, setIsEditor] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Show a quick "Edit this page" link straight to the CMS when the visitor
  // is already logged in as a content editor (via the Netlify Identity widget
  // loaded site-wide in public/index.html).
  useEffect(() => {
    const identity = window.netlifyIdentity;
    if (!identity) return undefined;
    const checkUser = () => setIsEditor(!!identity.currentUser());
    checkUser();
    identity.on('login', checkUser);
    identity.on('logout', checkUser);
    return () => {
      identity.off('login', checkUser);
      identity.off('logout', checkUser);
    };
  }, []);

  // No year in the URL (/festival-page) shows the most recent year with full details.
  const yearEntry = year ? yearPages.find((p) => p.year === year) : yearPages[0];

  if (!yearEntry) {
    return <Navigate to="/festival-years" replace />;
  }

  const fullDetails = yearEntry.fullDetails;
  const hero = fullDetails.hero;
  const overview = fullDetails.overview || { heading: '', description: '', stats: [] };
  const aboutBody = fullDetails.aboutBody || '';
  const sponsors = fullDetails.sponsors || { caption1: '', caption2: '', list: [], contributors: [], partnershipNote: '' };
  const presenters = fullDetails.presenters || [];
  const schedule = fullDetails.schedule || {
    introText: '',
    openingSection: { title: '', items: [] },
    performersSection: { title: '', items: [] },
    closingSection: { title: '', items: [] },
    note: '',
  };
  const venue = fullDetails.venue || { introText: '', name: '', image: '', description: '', address: '', extraText: '', facilities: [] };

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
      {isEditor && (
        <a
          href={`/admin/#/collections/festivalYears/entries/${yearEntry.year}`}
          className="edit-this-page-link"
        >
          ✏️ Edit this page
        </a>
      )}

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

                  {sponsors.list && sponsors.list.length > 0 && (
                    <div className="sponsors-list">
                      <h5>Thank you to our valued sponsors:</h5>
                      <ul>
                        {sponsors.list.map((sponsor) => (
                          <li key={sponsor.name}><strong>{sponsor.name}</strong> - {sponsor.description}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Individual Contributors Section */}
                  {sponsors.contributors && sponsors.contributors.length > 0 && (
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
                  )}

                  {sponsors.partnershipNote && (
                    <p className="partnership-note">
                      <em>{sponsors.partnershipNote}</em>
                    </p>
                  )}
                </div>
              </div>

              {/* Presenters Tab */}
              <div className={`tab-pane ${activeTab === 'presenters' ? 'active' : ''}`}>
                <h3>Festival Presenters & Founders</h3>
                <p>Meet the accomplished poets, emerging and aspiring artists who will be presenting at Vibrations Poetry Festival {yearEntry.year}.</p>

                {featuredPresenters.length > 0 && (
                  <div className="presenters-section">
                    <h4>Featured Presenters</h4>
                    <div className="presenters-grid">
                      {featuredPresenters.map(renderPresenterCard)}
                    </div>
                  </div>
                )}

                {additionalPresenters.length > 0 && (
                  <div className="presenters-section">
                    <h4>Additional Presenters</h4>
                    <div className="presenters-grid">
                      {additionalPresenters.map(renderPresenterCard)}
                    </div>
                  </div>
                )}

                {presenters.length === 0 && <p>Presenters will be announced soon.</p>}
              </div>

              {/* Schedule Tab */}
              <div className={`tab-pane ${activeTab === 'schedule' ? 'active' : ''}`}>
                <h3>Festival Schedule</h3>
                <p>{schedule.introText}</p>

                <div className="running-order">
                  <h4>Running Order</h4>
                  {schedule.openingSection && schedule.openingSection.items && schedule.openingSection.items.length > 0 && (
                    <div className="schedule-section">
                      <h5>{schedule.openingSection.title}</h5>
                      <ol className="schedule-list">
                        {schedule.openingSection.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    </div>
                  )}

                  {schedule.performersSection && schedule.performersSection.items && schedule.performersSection.items.length > 0 && (
                    <div className="schedule-section">
                      <h5>{schedule.performersSection.title}</h5>
                      <ol className="schedule-list" start={(schedule.openingSection?.items?.length || 0) + 1}>
                        {schedule.performersSection.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    </div>
                  )}

                  {(schedule.openingSection?.items?.length > 0 || schedule.performersSection?.items?.length > 0) && (
                    <div className="intermission">
                      <h5>INTERMISSION</h5>
                    </div>
                  )}

                  {schedule.closingSection && schedule.closingSection.items && schedule.closingSection.items.length > 0 && (
                    <div className="schedule-section">
                      <h5>{schedule.closingSection.title}</h5>
                      <ol className="schedule-list">
                        {schedule.closingSection.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                      <p className="schedule-end"><strong>THE END</strong></p>
                    </div>
                  )}
                </div>

                {schedule.note && (
                  <div className="schedule-note">
                    <p><em>{schedule.note}</em></p>
                  </div>
                )}
              </div>

              {/* Venues Tab */}
              <div className={`tab-pane ${activeTab === 'venues' ? 'active' : ''}`}>
                <h3>Festival Venue</h3>
                <p>{venue.introText}</p>

                {venue.name && (
                  <div className="venues-list">
                    <div className="venue-item">
                      {venue.image && <img src={venue.image} alt={venue.name} className="venue-image" />}
                      <div className="venue-details">
                        <h4>{venue.name}</h4>
                        <p>{venue.description}</p>
                        <p><strong>Address:</strong> {venue.address}</p>
                        <p>{venue.extraText}</p>
                      </div>
                    </div>
                  </div>
                )}

                {venue.facilities && venue.facilities.length > 0 && (
                  <div className="venue-info">
                    <h4>Venue Facilities</h4>
                    <ul>
                      {venue.facilities.map((facility) => <li key={facility}>{facility}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestivalPage;
