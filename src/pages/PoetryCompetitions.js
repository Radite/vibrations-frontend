import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        {/* Commented out competitions
        <div className="competition-item">
          <h2>Spring Verse Challenge</h2>
          <div className="competition-details">
            <div className="detail-item">
              <strong>Entry Requirements</strong>
              <p>Open to all poets ages 18+. Submit 1-3 original works not exceeding 40 lines each.</p>
            </div>
            <div className="detail-item">
              <strong>Deadline</strong>
              <p>April 30, 2025 at 11:59 PM EST</p>
            </div>
            <div className="detail-item">
              <strong>Prize</strong>
              <p>$1,000 cash prize, publication, and featured reading at the Summer Festival</p>
            </div>
          </div>
          <p>Our annual Spring Verse Challenge invites poets to explore themes of renewal, growth, and transformation. This prestigious competition attracts submissions from across the globe and offers winners unparalleled exposure in the poetry community.</p>
          <div className="button-container">
            <Link to="/entry-form-spring" className="competitions-btn">Entry Form</Link>
            <Link to="/pay-entry-spring" className="competitions-btn competitions-btn-outline">Pay Entry Fee</Link>
          </div>
        </div>

        <div className="competition-item">
          <h2>Summer Sonnet Slam</h2>
          <div className="competition-details">
            <div className="detail-item">
              <strong>Entry Requirements</strong>
              <p>Open to poets under 30. Submit one original sonnet in any traditional form.</p>
            </div>
            <div className="detail-item">
              <strong>Deadline</strong>
              <p>July 15, 2025 at 11:59 PM EST</p>
            </div>
            <div className="detail-item">
              <strong>Prize</strong>
              <p>$750 cash prize, mentorship opportunity, and publication in our anthology</p>
            </div>
          </div>
          <p>The Summer Sonnet Slam celebrates the timeless sonnet form while encouraging innovative approaches from emerging voices. This competition honors technical mastery alongside fresh perspectives and bold creativity.</p>
          <div className="button-container">
            <Link to="/entry-form-summer" className="competitions-btn">Entry Form</Link>
            <Link to="/pay-entry-summer" className="competitions-btn competitions-btn-outline">Pay Entry Fee</Link>
          </div>
        </div>

        <div className="competitions-decorative-line"></div>

        <div className="competitions-winners-section">
          <h2>Past Winners</h2>
          <div className="competitions-winners-container">
            <div className="competitions-winner-card">
              <h3>Jane Doe — Spring Verse Challenge 2024</h3>
              <p>"In the bloom of dawn, verses whisper secrets across dew-kissed petals, unfurling possibility in the gentle light of becoming..."</p>
              <Link to="/winner-detail-jane" className="competitions-btn">View Full Work</Link>
            </div>
          </div>
        </div>
        */}

        {/* New Vibrations Poetry Competition */}
        <div className="competition-item">
          <h2 className="text-center mb-4">Info for <strong>Vibrations Poetry Competition</strong>:</h2>
          
          <div className="text-center mb-4">
            <h3>🎤✨ <strong>VIBRATIONS POETRY COMPETITION</strong> ✨🎤</h3>
            <em>Where Young Voices Echo Loudest</em>
            <p><em>...invites young and aspiring poets to submit their poetry!</em></p>
          </div>
          
          <p className="mb-4">Are you between the ages of <strong>14 and 35</strong> with a passion for poetry? Step into the spotlight and let your words <em>vibrate</em> with meaning, rhythm, and power!</p>
          
          <div className="competition-details mb-4">
            <div className="detail-item">
              <strong>💰 Entry Fee:</strong>
              <p>JA $1,000.00 per poem 📝 Multiple entries allowed!</p>
            </div>
            <div className="detail-item">
              <strong>📅 Deadline:</strong>
              <p>May 17, 2025</p>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <h4>🔥 Prizes | Performances | Prestige 🔥</h4>
            <p>Whether you're a spoken word warrior or a page poet with quiet fire, this is your stage!</p>
          </div>
          
          <div className="text-center mb-4">
            <h3><strong>SUBMIT. COMPETE. INSPIRE.</strong></h3>
            <p>You could be the winner of <strong>1st Place cash award of JA $70,000.00,</strong> a chance to be featured on our website and in our inaugural newsletter. Free mentorship for two years, publishing of your poetry.</p>
            <p>2nd Place cash award of <strong>JA $40,000.00</strong></p>
            <p>3rd Place cash award of <strong>JA $25,000.00</strong></p>
          </div>
          
          <p className="mb-4">Enter now and let your poetry make waves at the <strong>Vibrations Poetry Festival</strong>.</p>
          
          <div className="text-center mb-4">
            <p>Send entries to <strong>vibrationspoetryfestival@gmail.com</strong></p>
          </div>
          
          <div className="competition-details">
            <div className="detail-item">
              <strong>For more information and submission guidelines, contact:</strong>
              <p>Marguerite Anderson OR Canute Lawrence at vibrationspoetryfestival@gmail.com</p>
            </div>
            <div className="detail-item">
              <strong>Follow on Social Media:</strong>
              <p><a href="https://www.instagram.com/vibrationspoetryfestival" target="_blank" rel="noopener noreferrer">https://www.instagram.com/vibrationspoetryfestival</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoetryCompetitions;