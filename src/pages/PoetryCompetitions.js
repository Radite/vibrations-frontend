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

        {/* Poetry Competition Details and Update */}
        <div className="competition-item">
          <h2>Vibrations Poetry Festival Competition (Emerging Voices)</h2>
          <div className="competition-details">
            <div className="detail-item">
              <strong>Entry Requirements</strong>
              <p>Open to Jamaican nationals who are aspiring or emerging poets, ages 14 to 35.</p>
            </div>
            <div className="detail-item">
              <strong>Contest Frequency</strong>
              <p>Annually</p>
            </div>
            <div className="detail-item">
              <strong>Closing Date</strong>
              <p>May (annually)</p>
            </div>
            <div className="detail-item">
              <strong>Entry Fee</strong>
              <p>JA$1,000 per poem</p>
            </div>
            <div className="detail-item">
              <strong>Word/Line Limit</strong>
              <p>None</p>
            </div>
            <div className="detail-item">
              <strong>Top Prize</strong>
              <p>JA$70,000, publication, and featured performance at the Vibrations Poetry Festival</p>
            </div>
            <div className="detail-item">
              <strong>Winners Announced</strong>
              <p>August (annually at the live event/festival)</p>
            </div>
          </div>
          <p>Vibrations Poetry Festival is a celebration of literary expression and Caribbean identity, hosted at the Edna Manley College of the Visual & Performing Arts. The Emerging Voices Poetry Competition is open to poets ages 14 to 35. Shortlisted poems are published in a commemorative chapbook, and winners are invited to perform their work before a live audience of writers, educators, and cultural stakeholders.</p>
          <p>Submissions are evaluated on originality, craft, and thematic resonance. While there are no restrictions on theme or style, we especially welcome poems that reflect boldness, authenticity, and the lived Caribbean experience.</p>
          
          <div className="competitions-decorative-line"></div>
          
          <h3 className="text-center mb-4"><strong>Poetry Competition Update – Thank You for Submitting!</strong></h3>
          
          <p className="mb-4">The submission window for <strong>Vibrations Poetry Festival Competition</strong> officially closed on <strong>May 17, 2025</strong>. We extend heartfelt thanks to all entrants for sharing your poetic voice and creative energy with us. Your words moved, challenged, and inspired us.</p>
          
          <p className="mb-4">We are now in the review phase, and are excited to announce that the <strong>shortlist of the Top 5 entries</strong> will be revealed on <strong>July 9, 2025</strong>. Shortlisted poets will receive an official email notification.</p>
          
          <p className="mb-4">The <strong>grand prize winner</strong> of <strong>JA$70,000.00 (Seventy Thousand Jamaican Dollars)</strong> along with the <strong>second and third place winners</strong> will be <strong>announced live at the inaugural Vibrations Poetry Festival</strong> on <strong>Saturday, August 9, 2025</strong>, at the <strong>Edna Manley College of the Visual & Performing Arts</strong> in Kingston.</p>
          
          <p className="mb-4">All shortlisted entrants are expected to attend the festival and will receive a <strong>complimentary pass</strong> to the event. Friends, family, and other guests are warmly welcomed; however, <strong>guest admission will be ticketed</strong>.</p>
          
          <p className="mb-4">We look forward to celebrating your talent and lifting your words on one of Jamaica's most vibrant literary stages.</p>
          
          <p className="mb-4">Stay tuned for more updates and continue to let your poetry rise!</p>
          
          <div className="competition-details">
            <div className="detail-item">
              <strong>— Vibrations Poetry Festival Team</strong>
              <p>Kingston, Jamaica<br/>
              <a href="http://www.vibrationspoetryfestival.com" target="_blank" rel="noopener noreferrer">www.vibrationspoetryfestival.com</a><br/>
              <a href="mailto:vibrationspoetryfestival@gmail.com">vibrationspoetryfestival@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoetryCompetitions;