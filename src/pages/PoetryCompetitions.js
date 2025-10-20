import React, { useEffect, useState } from 'react';
import './PoetryCompetitions.css';

const PoetryCompetitions = () => {
  const [vpf2025Open, setVpf2025Open] = useState(false);

  useEffect(() => {
    document.title = "Poetry Competitions - Vibrations Poetry Festival";
  }, []);

  const toggleVpf2025 = () => {
    setVpf2025Open(!vpf2025Open);
  };

  return (
    <div className="competitions-container">
      {/* Hero Section */}
      <section className="competitions-hero">
        <div className="competitions-hero-content">
          <h1>Poetry Competitions</h1>
          <p>Celebrating the voices that shaped our inaugural festival and looking forward to future competitions.</p>
        </div>
      </section>

      <section className="competitions-content">
        {/* HERITAGE MONTH CHALLENGE 2025 - NEW ACTIVE COMPETITION */}
        <div className="heritage-month-challenge">
          <div className="announcement-header">
            <h2>✊🏿 Heritage Month Poetry & Human Rights Challenge ✊🏿</h2>
            <p className="announcement-date">NOW OPEN - Deadline: October 28, 2025</p>
          </div>
          
          <div className="announcement-content">
            <div className="challenge-intro">
              <p className="collaboration-text">
                <strong>Vibrations Poetry Festival</strong> in collaboration with <strong>Brain Edibles Collection</strong>
              </p>
              <div className="mlk-quote">
                <blockquote>
                  "Injustice anywhere is a threat to justice everywhere."
                  <cite>— Martin Luther King Jr.</cite>
                </blockquote>
              </div>
            </div>

            <div className="challenge-flyer-section">
              <img 
                src={'/heritageMonthFlyer.jpg'} 
                alt="Heritage Month Poetry & Human Rights Challenge Flyer" 
                className="challenge-flyer"
              />
            </div>

            <div className="challenge-details">
              <h3>Submit a Poem on Justice, Injustice, and the Pursuit of Peace</h3>
              
              <div className="submission-guidelines-box">
                <h4>📝 Submission Guidelines</h4>
                <ul>
                  <li><strong>Theme:</strong> Submit a poem based on any aspect of justice/injustice and the pursuit of peace</li>
                  <li><strong>Email to:</strong> <a href="mailto:vibrationspoetryfestival@gmail.com" className="email-highlight">vibrationspoetryfestival@gmail.com</a></li>
                  <li><strong>Deadline:</strong> <span className="deadline-highlight">Tuesday, October 28, 2025</span></li>
                  <li><strong>Language:</strong> English only</li>
                  <li><strong>Length:</strong> 50 lines or less</li>
                  <li><strong>Format:</strong> Title and poem text only (no dates, no notes)</li>
                  <li><strong>Originality:</strong> You must be the poem's author</li>
                  <li><strong>Previously published works are allowed</strong></li>
                  <li><strong>Rights:</strong> You retain all rights to your poem and can publish it elsewhere</li>
                  <li><strong>Permission:</strong> By submitting, you grant permission for VPF and Brain Edibles Collection to publish your poetry to VPF's website and social media platforms for promotional purposes</li>
                </ul>
              </div>

              <div className="benefits-section">
                <h4>✨ Benefits of Taking the Challenge</h4>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">🏆</div>
                    <p>Writer's work gets featured, giving a sense of achievement</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🌟</div>
                    <p>Grants credibility</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">💎</div>
                    <p>Showcases poet's skill and talent</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🤝</div>
                    <p>Introduces poet to a community of fellow like-minded individuals</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📚</div>
                    <p>An opportunity for mentorship to soar higher in one's writing career</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🗣️</div>
                    <p>Authors/Poets get to speak their minds to the world</p>
                  </div>
                </div>
              </div>

              <div className="hashtags">
                <span>#HeritageMonth2025</span>
                <span>#vibrationspoetryfestivalwrites</span>
                <span>#brainediblescollection</span>
                <span>#vibrationspoetryfestival</span>
                <span>#poetrychallenge</span>
                <span>#injustice</span>
                <span>#justice</span>
                <span>#pursuitofpeace</span>
                <span>#poetrycommunity</span>
                <span>#poetryisnotdead</span>
              </div>

              <div className="button-container">
                <a href="mailto:vibrationspoetryfestival@gmail.com?subject=Heritage%20Month%20Poetry%20Challenge%20Submission" 
                   className="competitions-btn competitions-btn-primary">
                  Submit Your Poem ✉️
                </a>
                <a href="/contact" className="competitions-btn competitions-btn-outline">
                  Questions? Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>


        {/* PAST COMPETITIONS SECTION */}
        <div className="past-competitions-section">
          <div className="announcement-header">
            <h2>📚 Past Competitions</h2>
            <p className="announcement-date">Explore Previous Festival Competitions</p>
          </div>
          
          <div className="past-competitions-content">
            <p>Take a journey through our competition history and discover the talented poets who have graced our stages.</p>
            
            {/* VPF 2025 Competition Toggle Button */}
            <div className="past-competition-buttons">
              <button 
                className={`year-toggle-btn ${vpf2025Open ? 'active' : ''}`}
                onClick={toggleVpf2025}
              >
                📖 VPF 2025 Competition <span className="toggle-icon">{vpf2025Open ? '▲' : '▼'}</span>
              </button>
            </div>

            {/* VPF 2025 Expandable Content */}
            <div className={`expandable-competition-content ${vpf2025Open ? 'open' : ''}`}>
              <div className="competition-year-section">
                <div className="year-banner">
                  <h3>Vibrations Poetry Festival 2025</h3>
                  <p className="year-tagline">Our Inaugural Competition</p>
                  <p className="competition-dates">August 9, 2025 • Edna Manley College • Kingston, Jamaica</p>
                </div>

                {/* Competition Overview */}
                <div className="competition-overview">
                  <h4>🎯 Competition Overview</h4>
                  <p>The inaugural Vibrations Poetry Festival Competition brought together Jamaica's most talented emerging and established poets for an unforgettable evening of spoken word artistry. Open to all Jamaican poets and poetry enthusiasts, this competition celebrated the power of the written and performed word.</p>
                  
                  <div className="competition-stats">
                    <div className="stat-card">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Submissions</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">5</div>
                      <div className="stat-label">Finalists</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">3</div>
                      <div className="stat-label">Winners</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">$135K</div>
                      <div className="stat-label">Prize Money</div>
                    </div>
                  </div>
                </div>

                {/* The Winners - Recap */}
                <div className="winners-recap">
                  <h4>🏆 Our 2025 Winners</h4>
                  
                  <div className="recap-winners-grid">
                    <div className="recap-winner-card gold">
                      <div className="recap-medal">🥇</div>
                      <div className="recap-place">1st Place</div>
                      <div className="recap-name">Keya (pen name)</div>
                      <div className="recap-poem-title">"In Silence"</div>
                      <div className="recap-prize">JA $70,000</div>
                    </div>
                    
                    <div className="recap-winner-card silver">
                      <div className="recap-medal">🥈</div>
                      <div className="recap-place">2nd Place</div>
                      <div className="recap-name">Jaheal Letford</div>
                      <div className="recap-poem-title">"Why Me"</div>
                      <div className="recap-prize">JA $40,000</div>
                    </div>
                    
                    <div className="recap-winner-card bronze">
                      <div className="recap-medal">🥉</div>
                      <div className="recap-place">3rd Place</div>
                      <div className="recap-name">Abigail Clayton</div>
                      <div className="recap-poem-title">"The Shift"</div>
                      <div className="recap-prize">JA $25,000</div>
                    </div>
                  </div>
                </div>

                {/* All Finalists */}
                <div className="all-finalists-recap">
                  <h4>⭐ All Five Finalists</h4>
                  <div className="finalists-recap-list">
                    <div className="finalist-recap-item winner-item">
                      <span className="finalist-number">1.</span>
                      <div className="finalist-info">
                        <span className="finalist-name-recap">Keya (pen name)</span>
                        <span className="finalist-poem-recap">"In Silence"</span>
                        <span className="finalist-badge-recap gold-badge">🥇 1st Place Winner</span>
                      </div>
                    </div>
                    <div className="finalist-recap-item winner-item">
                      <span className="finalist-number">2.</span>
                      <div className="finalist-info">
                        <span className="finalist-name-recap">Jaheal Letford</span>
                        <span className="finalist-poem-recap">"Why Me"</span>
                        <span className="finalist-badge-recap silver-badge">🥈 2nd Place Winner</span>
                      </div>
                    </div>
                    <div className="finalist-recap-item winner-item">
                      <span className="finalist-number">3.</span>
                      <div className="finalist-info">
                        <span className="finalist-name-recap">Abigail Clayton</span>
                        <span className="finalist-poem-recap">"The Shift"</span>
                        <span className="finalist-badge-recap bronze-badge">🥉 3rd Place Winner</span>
                      </div>
                    </div>
                    <div className="finalist-recap-item">
                      <span className="finalist-number">4.</span>
                      <div className="finalist-info">
                        <span className="finalist-name-recap">Abigail Clayton</span>
                        <span className="finalist-poem-recap">"The Little Flower"</span>
                        <span className="finalist-badge-recap">Finalist</span>
                      </div>
                    </div>
                    <div className="finalist-recap-item">
                      <span className="finalist-number">5.</span>
                      <div className="finalist-info">
                        <span className="finalist-name-recap">Andre Smith</span>
                        <span className="finalist-poem-recap">"Figure Hate Cycle"</span>
                        <span className="finalist-badge-recap">Finalist</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competition Highlights */}
                <div className="competition-highlights">
                  <h4>✨ Competition Highlights</h4>
                  <div className="highlights-grid">
                    <div className="highlight-item">
                      <div className="highlight-icon">📝</div>
                      <h5>Submission Period</h5>
                      <p>March - June 2025</p>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">🎭</div>
                      <h5>Live Performances</h5>
                      <p>5 finalists performed at the festival</p>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">👥</div>
                      <h5>Audience Choice</h5>
                      <p>Live audience voting participated</p>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">🏆</div>
                      <h5>Prize Distribution</h5>
                      <p>Winners announced on festival night</p>
                    </div>
                  </div>
                </div>

                {/* Link to Full Details */}
                <div className="past-comp-cta">
                  <p>Want to relive the magic of our inaugural competition?</p>
                  <div className="button-container">
                    <a href="/gallery" className="competitions-btn">View Festival Gallery</a>
                    <a href="/festival-page" className="competitions-btn competitions-btn-outline">Festival Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        {/* FUTURE COMPETITIONS SECTION */}
        <div className="future-competitions">
          <div className="announcement-header">
            <h2>🚀 Looking Ahead</h2>
          </div>
          
          <div className="announcement-content">
            <h3>Future Poetry Competitions</h3>
            <p>The success of our inaugural competition has inspired us to make this an annual tradition. Stay tuned for announcements about the 2026 Vibrations Poetry Festival Competition!</p>
            
            <p>Want to be the first to know about upcoming competitions and festival news? <a href="/contact">Subscribe to our newsletter</a> and follow us on social media.</p>
            
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