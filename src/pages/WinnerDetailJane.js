import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WinnerDetail.css';

const WinnerDetailJane = () => {
  useEffect(() => {
    document.title = "Jane Doe - Spring Verse Challenge Winner - Vibrations Poetry Festival";
  }, []);

  return (
    <div className="winner-detail-container">
      {/* Hero Section */}
      <section className="winner-detail-hero">
        <div className="winner-detail-hero-content">
          <h1>Jane Doe</h1>
          <h2>Spring Verse Challenge 2024 Winner</h2>
        </div>
      </section>

      <section className="winner-detail-content">
        <div className="winner-navigation">
          <Link to="/competitions" className="back-link">← Back to Competitions</Link>
        </div>

        <div className="poem-container">
          <h2 className="poem-title">Dawn's Promise</h2>
          
          <div className="poem-text">
            <p>
              In the bloom of dawn, verses whisper secrets<br />
              across dew-kissed petals, unfurling possibility<br />
              in the gentle light of becoming.
            </p>
            
            <p>
              I gather morning's courage in cupped hands,<br />
              fragile as breath, strong as intention—<br />
              this daily resurrection of hope.
            </p>
            
            <p>
              The world waits, suspended between<br />
              what was and what might be,<br />
              silence pregnant with syllables<br />
              yet to be arranged.
            </p>
            
            <p>
              I stand in this threshold moment,<br />
              where darkness yields to luminous potential,<br />
              where yesterday's certainties dissolve<br />
              into tomorrow's questions.
            </p>
            
            <p>
              And still—<br />
              I write.
            </p>
            
            <p>
              Each word a small defiance<br />
              against the pull of despair,<br />
              each line a bridge between<br />
              isolation and connection.
            </p>
            
            <p>
              In this sacred space of morning,<br />
              I remember why we speak at all:<br />
              To name the nameless,<br />
              To voice the voiceless,<br />
              To hold the ephemeral<br />
              just long enough<br />
              to recognize ourselves within it.
            </p>
            
            <p>
              The page receives these offerings—<br />
              humble, imperfect, necessary—<br />
              as daylight spills across the horizon,<br />
              revealing once more<br />
              the possibility of beginning again.
            </p>
          </div>
          
          <div className="poem-footer">
            <p className="poem-date">April 2024</p>
          </div>
        </div>

        <div className="poet-bio">
          <h3>About the Poet</h3>
          <img src="/api/placeholder/200/200" alt="Jane Doe" className="poet-image" />
          <p>Jane Doe is an emerging voice in contemporary poetry whose work explores themes of transformation, liminality, and the search for meaning in everyday moments. Based in Portland, Oregon, she holds an MFA from Pacific Northwest University and has been published in several literary journals including The Willow Review, Cascade Poetry Quarterly, and Luminous Echoes.</p>
          <p>Her winning poem "Dawn's Promise" was selected from over 500 entries for its striking imagery, emotional resonance, and masterful exploration of the creative process itself. The judges noted her "exceptional ability to render the ineffable tangible through precise yet evocative language."</p>
          <p>This is Jane's first major poetry prize, though her chapbook "Thresholds" was a finalist in the 2023 Pinewood Press New Poets Series.</p>
          
          <div className="poet-links">
            <h4>More from Jane Doe</h4>
            <ul>
              <li><a href="#" className="external-link">Personal Website</a></li>
              <li><a href="#" className="external-link">Interview in Poetry Today</a></li>
            </ul>
          </div>
        </div>

        <div className="judges-comments">
          <h3>Judges' Commentary</h3>
          <blockquote>
            "In 'Dawn's Promise,' Doe accomplishes what only the finest poetry can: she transforms the deeply personal into the universal. The poem's meditation on creativity and resilience speaks to the heart of why poetry matters, especially in uncertain times. Her control of pacing, imagery, and emotional tone demonstrates a mature poetic sensibility that belies her relatively brief publishing history."
            <cite>— Dr. Eleanor Wright, Lead Judge</cite>
          </blockquote>
        </div>

        <div className="related-winners">
          <h3>Explore Other Winners</h3>
          <div className="winner-cards">
            <div className="related-winner-card">
              <h4>Michael Chen</h4>
              <p>Summer Sonnet Slam 2024</p>
              <Link to="/winner-detail-michael" className="view-btn">View Work</Link>
            </div>
            <div className="related-winner-card">
              <h4>Sophia Rodriguez</h4>
              <p>Spring Verse Challenge 2023</p>
              <Link to="/winner-detail-sophia" className="view-btn">View Work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="winner-detail-cta">
        <h2>Ready to share your voice?</h2>
        <p>Enter this year's Spring Verse Challenge and join our community of poets.</p>
        <div className="cta-buttons">
          <Link to="/poetry-competitions" className="cta-btn">View Competitions</Link>
        </div>
      </section>
    </div>
  );
};

export default WinnerDetailJane;