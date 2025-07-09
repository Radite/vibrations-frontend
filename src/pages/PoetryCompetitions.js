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
          <p>Elevate your artistry, challenge your craft, and become part of our prestigious legacy of poetic excellence.</p>
        </div>
      </section>

      <section className="competitions-content">
        {/* FINALISTS ANNOUNCEMENT - Featured at top */}
        <div className="finalists-announcement">
          <div className="announcement-header">
            <h2>🎉 Announcing Our Top 5 Finalists!</h2>
            <p className="announcement-date">July 9, 2025</p>
          </div>
          
          <div className="announcement-content">
            <h3>Vibrations Poetry Festival Competition 2025</h3>
            <p>We are proud to announce the <strong>shortlist of finalists</strong> in our inaugural <strong>Poetry Competition</strong>, launched in April 2025.</p>
            
            <p>After carefully reviewing an inspiring range of entries from young and aspiring poets across Jamaica, our judges have selected <strong>five powerful voices</strong> whose work has resonated with depth, authenticity, and lyrical brilliance.</p>
            
            <p>These shortlisted poets are now in the running for the <strong>grand cash prize of JA $70,000.00</strong> and the honour of performing their winning poem at the inaugural <strong>Vibrations Poetry Festival</strong> on <strong>August 9, 2025</strong>, at <strong>Edna Manley College of the Visual and Performing Arts</strong>.</p>
            
            <div className="finalists-section">
              <h4>Congratulations to our shortlisted poets!</h4>
              <div className="finalists-grid">
                <div className="finalist-card">
                  <div className="poet-name">Keya (penname)</div>
                  <div className="poem-title">"In Silence"</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Jaheal Lettford</div>
                  <div className="poem-title">"Why Me"</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Abigail Clayton</div>
                  <div className="poem-title">"The Shift"</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Abigail Clayton</div>
                  <div className="poem-title">"The Little Flower"</div>
                </div>
                <div className="finalist-card">
                  <div className="poet-name">Andre Smith</div>
                  <div className="poem-title">"Figure Hate Cycle"</div>
                </div>
              </div>
            </div>
            
            <p className="closing-message">We applaud all entrants for sharing their work and making their voices heard. Stay tuned for the final results!</p>
            
            <div className="button-container">
              <a href="/festival-page" className="competitions-btn">Learn more about the festival →</a>
            </div>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        {/* Poetry Competition Details */}

      </section>
    </div>
  );
};

export default PoetryCompetitions;