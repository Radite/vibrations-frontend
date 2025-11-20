import React, { useEffect, useState } from 'react';
import './PoetryCompetitions.css';
import tanishaBentWinner from '../assets/tanisha-bent-winner.jpeg'; // Import the winner image
import openMicNightImage from '../assets/vibrations-open-mic-night.jpeg'; // Import the open mic night image

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
        {/* VIBRATIONS OPEN MIC NIGHT - VIRTUAL EDITION */}
        <div className="open-mic-night-section">
          <div className="open-mic-container">
            <div className="open-mic-image">
              <img 
                src={openMicNightImage}
                alt="Vibrations Open Mic Night - Virtual Edition - Nature's Fury" 
                className="open-mic-poster"
              />
            </div>

            <div className="open-mic-content">
              <div className="open-mic-header">
                <h2>VIBRATIONS OPEN MIC NIGHT – VIRTUAL EDITION!</h2>
                <h3>🌀 Theme: Nature's Fury 🌀</h3>
              </div>

              <div className="open-mic-intro">
                <p>After Hurricane Melissa, we know you have stories — old and new — to share!</p>
                <p><strong>VPF is calling all poets, wordsmiths, and lovers of spoken word!</strong></p>
                <p>We're bringing the stage to your screen with our first-ever Virtual Open Mic Night!</p>
              </div>

              <div className="open-mic-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <div className="detail-text">
                    <strong>When:</strong> Friday, November 28, 2025 @ 6:00 PM (JA time)
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">🌐</span>
                  <div className="detail-text">
                    <strong>Where:</strong> Online via Zoom/Google Meet
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">💰</span>
                  <div className="detail-text">
                    <strong>Cost:</strong> FREE!
                  </div>
                </div>
              </div>

              <div className="open-mic-opportunities">
                <h4>Whether you're an emerging poet or a seasoned wordsmith, this is your moment to:</h4>
                <ul className="opportunity-list">
                  <li>✅ Share your poem inspired by Nature's Fury</li>
                  <li>✅ Discover fresh poetic voices</li>
                  <li>✅ Connect with a vibrant creative community</li>
                </ul>
              </div>

              <div className="performer-info">
                <h4>🎤 Wanna Perform?</h4>
                <p>Send an email to <a href="mailto:vibrationspoetryfestival@gmail.com" className="email-link">vibrationspoetryfestival@gmail.com</a></p>
                <p>Include your full name and tel# + a short poem excerpt (max 2 minutes).</p>
                <p><strong>Spots are limited — secure yours early!</strong></p>
              </div>

              <div className="open-mic-cta">
                <p>Even if you're just tuning in, come for a night of:</p>
                <div className="cta-highlights">
                  <span>💥 Powerful words</span>
                  <span>💥 Laughter</span>
                  <span>💥 Inspiration</span>
                </div>
              </div>

              <div className="open-mic-closing">
                <h4>Let's keep the VIBRATIONS alive all year long!</h4>
              </div>

              <div className="open-mic-hashtags">
                <span>#VibrationsPoetry</span>
                <span>#OpenMicNight</span>
                <span>#VirtualPoetry</span>
                <span>#EmergingPoets</span>
                <span>#SpokenWord</span>
                <span>🌿🇯🇲</span>
              </div>

              <div className="button-container">
                <a href="mailto:vibrationspoetryfestival@gmail.com?subject=Open%20Mic%20Night%20Performance%20Request&body=Full%20Name%3A%0ATel%20Number%3A%0A%0APoem%20Excerpt%20(max%202%20minutes)%3A" 
                   className="competitions-btn competitions-btn-primary">
                  Register to Perform 🎤
                </a>
                <a href="/contact" className="competitions-btn competitions-btn-outline">
                  Have Questions?
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        {/* HERITAGE MONTH CHALLENGE 2025 - CLOSED WITH WINNER */}
        <div className="heritage-month-challenge">
          <div className="announcement-header">
            <h2>✊🏿 Heritage Month Poetry & Human Rights Challenge ✊🏿</h2>
            <p className="announcement-date">COMPETITION CLOSED - Winner Announced</p>
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

            <div className="challenge-details">
              <h3>🏆 Heritage Month Challenge Winner</h3>
              
              <div className="winner-announcement-image">
                <img 
                  src={tanishaBentWinner}
                  alt="Tanisha Bent - Heritage Month Poetry Challenge Winner" 
                  className="winner-announcement-photo"
                />
              </div>
              
              <div className="winner-announcement">
                <p className="winner-intro">Congratulations to <strong>Tanisha Bent</strong> on winning the Vibrations Poetry Festival's Heritage Month Poetry & Human Rights Challenge with her powerful piece, <strong>"In Her Skin."</strong></p>
                
                <div className="winner-poem-card">
                  <h4>Winning Poem: "In Her Skin"</h4>
                  <p>Bent's poem is a fearless confrontation of the everyday injustices women face and a passionate call for respect, dignity, and autonomy. Her work perfectly captures the spirit of October's theme and embodies exactly what this challenge was about.</p>
                </div>

                <div className="winner-details-box">
                  <h4>What's Next for Tanisha?</h4>
                  <p>As our winner, Tanisha Bent will have access to a number of exciting opportunities:</p>
                  <ul>
                    <li><strong>Feature in the Vibrations Poetry Festival Showcase 2025</strong> — A dedicated profile celebrating her work and artistry</li>
                    <li><strong>Interview Spotlight</strong> — An in-depth conversation about her poetry, inspirations, and creative journey</li>
                    <li><strong>Publication Across Digital Channels</strong> — Her winning poem will be shared on our website, social media, and promotional materials</li>
                  </ul>
                </div>

                <div className="challenge-info-box">
                  <h4>📋 Challenge Details</h4>
                  <p><strong>Theme:</strong> Poetry on Justice, Injustice, and the Pursuit of Peace</p>
                  <p><strong>Submission Deadline:</strong> October 28, 2025</p>
                  <p><strong>Submission Period:</strong> September - October 2025</p>
                  <p><strong>Collaboration:</strong> Vibrations Poetry Festival & Brain Edibles Collection</p>
                </div>

                <div className="hashtags">
                  <span>#HeritageMonthPoetryChallenge</span>
                  <span>#TanishaBent</span>
                  <span>#InHerSkin</span>
                  <span>#Winner</span>
                  <span>#vibrationspoetryfestival</span>
                  <span>#brainediblescollection</span>
                  <span>#poetrycommunity</span>
                </div>

                <div className="button-container">
                  <a href="/blog/tanisha-bent" className="competitions-btn competitions-btn-primary">
                    Read Tanisha's Feature 📖
                  </a>
                  <a href="/contact" className="competitions-btn competitions-btn-outline">
                    Learn About Next Challenge
                  </a>
                </div>
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
            <p>The success of our inaugural competition and the Heritage Month Poetry & Human Rights Challenge has inspired us to make this an annual tradition. Stay tuned for announcements about the 2026 Vibrations Poetry Festival Competition!</p>
            
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