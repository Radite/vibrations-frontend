import React, { useEffect } from 'react';
import './PoetryCompetitions.css';

const PoetryCompetitions = () => {
  useEffect(() => {
    document.title = "Poetry Competitions - Vibrations Poetry Festival";
  }, []);

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
        {/* WINNERS ANNOUNCEMENT - Now featured at top */}
        <div className="winners-announcement">
          <div className="announcement-header">
            <h2>🏆 And the Winners Are…!!!! 🏆</h2>
            <p className="announcement-date">August 9, 2025</p>
          </div>
          
          <div className="announcement-content">
            <h3>Vibrations Poetry Festival Competition 2025 - WINNERS!</h3>
            <p>On Saturday, August 9, 2025, <strong>history was made</strong> at the inaugural Vibrations Poetry Festival! We are thrilled to announce the <strong>top 3 winners</strong> of the Vibrations Poetry Festival Competition:</p>
            
            <div className="winners-section">
              <h4>🎉 Our Champions 🎉</h4>
              <div className="winners-grid">
                <div className="winner-card first-place">
                  <div class="trophy-icon">🥇</div>
                  <div className="place-badge">1st Place</div>
                  <div className="poet-name">Keya (pen name)</div>
                  <div className="poem-title">"In Silence"</div>
                  <div className="prize-amount">Winner: JA $70,000</div>
                </div>
                <div className="winner-card second-place">
                  <div class="trophy-icon">🥈</div>
                  <div className="place-badge">2nd Place</div>
                  <div className="poet-name">Jaheal Letford</div>
                  <div className="poem-title">"Why Me"</div>
                  <div className="prize-amount">Winner: JA $40,000</div>

                </div>
                <div className="winner-card third-place">
                  <div class="trophy-icon">🥉</div>
                  <div className="place-badge">3rd Place</div>
                  <div className="poet-name">Abigail Clayton</div>
                  <div className="poem-title">"The Shift"</div>
                  <div className="prize-amount">Winner: JA $25,000</div>

                </div>
              </div>
            </div>
            
            <p className="closing-message">A huge congratulations to our winners — and heartfelt thanks to all who entered, supported, and celebrated with us. <strong>You are the heartbeat of Vibrations!</strong></p>
            
            <div className="hashtags">
              <span>#VibrationsPoetryFestival</span>
              <span>#PoetryCompetition</span>
              <span>#PoetryInMotion</span>
              <span>#Vibrations2025</span>
              <span>#PoetryJamaica</span>
              <span>#PoetryWinners</span>
            </div>
            
            <div class="button-container">
              <a href="/gallery" className="competitions-btn">View Festival Gallery →</a>
              <a href="/festival-page" className="competitions-btn competitions-btn-outline">Relive the Festival →</a>
            </div>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        {/* PREVIOUS FINALISTS - Now moved below winners */}
        <div class="previous-finalists">
          <div className="announcement-header">
            <h2>📋 Our Amazing Finalists</h2>
            <p className="announcement-date">July 9, 2025</p>
          </div>
          
          <div className="announcement-content">
            <h3>The Journey to Victory - Our Top 5 Finalists</h3>
            <p>Before the big night, we announced our <strong>shortlist of finalists</strong> in our inaugural Poetry Competition. These five powerful voices made it to the final round, each bringing depth, authenticity, and lyrical brilliance to our stage.</p>
            
            <div className="finalists-section">
              <h4>Our Talented Finalists</h4>
              <div className="finalists-grid">
                <div className="finalist-card winner">
                  <div className="poet-name">Keya (pen name) ⭐</div>
                  <div className="poem-title">"In Silence"</div>
                  <div className="status-badge">1st Place Winner</div>
                </div>
                <div className="finalist-card winner">
                  <div className="poet-name">Jaheal Letford ⭐</div>
                  <div className="poem-title">"Why Me"</div>
                  <div className="status-badge">2nd Place Winner</div>
                </div>
                <div className="finalist-card winner">
                  <div className="poet-name">Abigail Clayton ⭐</div>
                  <div className="poem-title">"The Shift"</div>
                  <div className="status-badge">3rd Place Winner</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Abigail Clayton</div>
                  <div className="poem-title">"The Little Flower"</div>
                  <div className="status-badge">Finalist</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Andre Smith</div>
                  <div className="poem-title">"Figure Hate Cycle"</div>
                  <div className="status-badge">Finalist</div>
                </div>
              </div>
            </div>
            
            <p>We applaud all entrants for sharing their work and making their voices heard. The talent showcased at our inaugural festival was truly extraordinary!</p>
          </div>
        </div>

        {/* Future Competitions Section */}
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