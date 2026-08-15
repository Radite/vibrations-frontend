import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './PoetryCompetitions.css';
import competitionsData from '../data/poetryCompetitions.json';

const PoetryCompetitions = () => {
  const [vpf2025Open, setVpf2025Open] = useState(false);
  const [heritageMonthOpen, setHeritageMonthOpen] = useState(false);

  useEffect(() => {
    document.title = "Poetry Competitions - Vibrations Poetry Festival";
  }, []);

  const { heroTitle, heroSubtitle, openMicNight, heritageChallenge, competitionRecap, futureSection } = competitionsData;

  return (
    <div className="competitions-container">
      {/* Hero Section */}
      <section className="competitions-hero">
        <div className="competitions-hero-content">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </section>

      <section className="competitions-content">
        {/* OPEN MIC NIGHT */}
        {openMicNight.enabled && (
          <div className="open-mic-night-section">
            {openMicNight.postponed && (
              <div className="postponement-banner" role="alert" aria-live="assertive">
                <div className="banner-content">
                  <div className="banner-icon">⏸️</div>
                  <div className="banner-text">
                    <strong>EVENT POSTPONED</strong>
                    <p>Due to unforeseen circumstances, tonight's {openMicNight.title} has been postponed.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="open-mic-container">
              <div className="open-mic-image">
                <img src={openMicNight.image} alt={openMicNight.title} className="open-mic-poster" />
                {openMicNight.postponed && (
                  <div className="postponed-overlay">
                    <span className="postponed-label">POSTPONED</span>
                  </div>
                )}
              </div>

              <div className="open-mic-content">
                <div className="open-mic-header">
                  <h2>{openMicNight.title}</h2>
                  <h3>{openMicNight.theme}</h3>
                </div>

                {openMicNight.postponed && (
                  <div className="event-status-message">
                    <h4>⏸️ Event Status: Postponed</h4>
                    <ReactMarkdown>{openMicNight.statusBody}</ReactMarkdown>
                  </div>
                )}

                <div className="original-event-details">
                  <h4>{openMicNight.postponed ? 'Originally Scheduled For:' : 'Event Details:'}</h4>
                  <div className="open-mic-details">
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <div className="detail-text"><strong>When:</strong> {openMicNight.originalWhen}</div>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🌐</span>
                      <div className="detail-text"><strong>Where:</strong> {openMicNight.originalWhere}</div>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">💰</span>
                      <div className="detail-text"><strong>Cost:</strong> {openMicNight.cost}</div>
                    </div>
                  </div>
                </div>

                <div className="open-mic-intro">
                  <ReactMarkdown>{openMicNight.introBody}</ReactMarkdown>
                </div>

                <div className="open-mic-opportunities">
                  <h4>Whether you're an emerging poet or a seasoned wordsmith, this is your moment to:</h4>
                  <ul className="opportunity-list">
                    {openMicNight.opportunities.map((item) => <li key={item}>✅ {item}</li>)}
                  </ul>
                </div>

                <div className={`performer-info ${openMicNight.postponed ? 'performer-info-disabled' : ''}`}>
                  <h4>🎤 Wanna Perform?</h4>
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <p {...props} />,
                    }}
                  >
                    {openMicNight.performInfoBody.replace(
                      openMicNight.contactEmail,
                      `[${openMicNight.contactEmail}](mailto:${openMicNight.contactEmail})`
                    )}
                  </ReactMarkdown>
                </div>

                <div className="open-mic-hashtags">
                  {openMicNight.hashtags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <div className="button-container">
                  <a href="/contact" className="competitions-btn competitions-btn-outline">
                    Subscribe for Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="competitions-decorative-line"></div>

        {/* PAST COMPETITIONS SECTION */}
        <div className="past-competitions-section">
          <div className="announcement-header">
            <h2>📚 Past Competitions</h2>
            <p className="announcement-date">Explore Previous Festival Competitions</p>
          </div>

          <div className="past-competitions-content">
            <p>Take a journey through our competition history and discover the talented poets who have graced our stages.</p>

            {heritageChallenge.enabled && (
              <>
                <div className="past-competition-buttons">
                  <button
                    className={`year-toggle-btn ${heritageMonthOpen ? 'active' : ''}`}
                    onClick={() => setHeritageMonthOpen(!heritageMonthOpen)}
                  >
                    ✊🏿 Heritage Month Poetry & Human Rights Challenge <span className="toggle-icon">{heritageMonthOpen ? '▲' : '▼'}</span>
                  </button>
                </div>

                <div className={`expandable-competition-content ${heritageMonthOpen ? 'open' : ''}`}>
                  <div className="competition-year-section">
                    <div className="challenge-intro">
                      <p className="collaboration-text">{heritageChallenge.collaborationText}</p>
                      <div className="mlk-quote">
                        <blockquote>
                          "{heritageChallenge.quote}"
                          <cite>— {heritageChallenge.quoteAuthor}</cite>
                        </blockquote>
                      </div>
                    </div>

                    <div className="challenge-details">
                      <h3>🏆 Heritage Month Challenge Winner</h3>

                      <div className="winner-announcement-image">
                        <img src={heritageChallenge.winnerImage} alt={`${heritageChallenge.winnerName} - Heritage Month Poetry Challenge Winner`} className="winner-announcement-photo" />
                      </div>

                      <div className="winner-announcement">
                        <div className="winner-intro">
                          <ReactMarkdown>{heritageChallenge.introBody}</ReactMarkdown>
                        </div>

                        <div className="winner-poem-card">
                          <h4>Winning Poem: "{heritageChallenge.poemTitle}"</h4>
                          <p>{heritageChallenge.poemCardText}</p>
                        </div>

                        <div className="winner-details-box">
                          <h4>What's Next for {heritageChallenge.winnerName.split(' ')[0]}?</h4>
                          <p>As our winner, {heritageChallenge.winnerName} will have access to a number of exciting opportunities:</p>
                          <ul>
                            {heritageChallenge.nextSteps.map((step) => <li key={step}>{step}</li>)}
                          </ul>
                        </div>

                        <div className="challenge-info-box">
                          <h4>📋 Challenge Details</h4>
                          <p><strong>Theme:</strong> {heritageChallenge.theme}</p>
                          <p><strong>Submission Deadline:</strong> {heritageChallenge.submissionDeadline}</p>
                          <p><strong>Submission Period:</strong> {heritageChallenge.submissionPeriod}</p>
                          <p><strong>Collaboration:</strong> {heritageChallenge.collaboration}</p>
                        </div>

                        <div className="hashtags">
                          {heritageChallenge.hashtags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>

                        <div className="button-container">
                          <a href={heritageChallenge.featureLinkUrl} className="competitions-btn competitions-btn-primary">
                            Read {heritageChallenge.winnerName.split(' ')[0]}'s Feature 📖
                          </a>
                          <a href="/contact" className="competitions-btn competitions-btn-outline">
                            Learn About Next Challenge
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {competitionRecap.enabled && (
              <>
                <div className="past-competition-buttons">
                  <button
                    className={`year-toggle-btn ${vpf2025Open ? 'active' : ''}`}
                    onClick={() => setVpf2025Open(!vpf2025Open)}
                  >
                    📖 {competitionRecap.year} Competition <span className="toggle-icon">{vpf2025Open ? '▲' : '▼'}</span>
                  </button>
                </div>

                <div className={`expandable-competition-content ${vpf2025Open ? 'open' : ''}`}>
                  <div className="competition-year-section">
                    <div className="year-banner">
                      <h3>{competitionRecap.year}</h3>
                      <p className="year-tagline">{competitionRecap.tagline}</p>
                      <p className="competition-dates">{competitionRecap.dates}</p>
                    </div>

                    <div className="competition-overview">
                      <h4>🎯 Competition Overview</h4>
                      <p>{competitionRecap.overviewText}</p>

                      <div className="competition-stats">
                        {competitionRecap.stats.map((stat) => (
                          <div className="stat-card" key={stat.label}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="winners-recap">
                      <h4>🏆 Our {competitionRecap.year.match(/\d{4}/)?.[0] || ''} Winners</h4>
                      <div className="recap-winners-grid">
                        {competitionRecap.winners.map((winner) => (
                          <div className={`recap-winner-card ${winner.tier}`} key={winner.name + winner.poemTitle}>
                            <div className="recap-medal">{winner.medal}</div>
                            <div className="recap-place">{winner.place}</div>
                            <div className="recap-name">{winner.name}</div>
                            <div className="recap-poem-title">"{winner.poemTitle}"</div>
                            <div className="recap-prize">{winner.prize}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="all-finalists-recap">
                      <h4>⭐ All {competitionRecap.finalists.length === 5 ? 'Five' : competitionRecap.finalists.length} Finalists</h4>
                      <div className="finalists-recap-list">
                        {competitionRecap.finalists.map((finalist, i) => (
                          <div className={`finalist-recap-item ${finalist.tier ? 'winner-item' : ''}`} key={finalist.name + finalist.poemTitle}>
                            <span className="finalist-number">{i + 1}.</span>
                            <div className="finalist-info">
                              <span className="finalist-name-recap">{finalist.name}</span>
                              <span className="finalist-poem-recap">"{finalist.poemTitle}"</span>
                              <span className={`finalist-badge-recap ${finalist.tier ? `${finalist.tier}-badge` : ''}`}>{finalist.badge}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="competition-highlights">
                      <h4>✨ Competition Highlights</h4>
                      <div className="highlights-grid">
                        {competitionRecap.highlights.map((highlight) => (
                          <div className="highlight-item" key={highlight.title}>
                            <div className="highlight-icon">{highlight.icon}</div>
                            <h5>{highlight.title}</h5>
                            <p>{highlight.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="past-comp-cta">
                      <p>Want to relive the magic of our inaugural competition?</p>
                      <div className="button-container">
                        <a href="/gallery" className="competitions-btn">View Festival Gallery</a>
                        <a href="/festival-page" className="competitions-btn competitions-btn-outline">Festival Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        {/* FUTURE COMPETITIONS SECTION */}
        <div className="future-competitions">
          <div className="announcement-header">
            <h2>🚀 Looking Ahead</h2>
          </div>

          <div className="announcement-content">
            <h3>{futureSection.heading}</h3>
            <ReactMarkdown>{futureSection.body}</ReactMarkdown>

            <div className="button-container">
              <a href="/contact" className="competitions-btn">Stay Updated</a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default PoetryCompetitions;
