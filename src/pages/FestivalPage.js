import React, { useEffect, useState } from 'react';
import './FestivalPage.css';

// Import all images
import margueriteImage from '../assets/Marguerite.jpeg';
import angelaImage from '../assets/Angela.jpeg';
import joanAndreaImage from '../assets/Joan-Andrea.jpeg';
import brittonImage from '../assets/Britton.jpeg';
import kevinImage from '../assets/Kevin.jpeg';
import andreImage from '../assets/Andre.jpeg';
import canuteImage from '../assets/Canute.png';
import abigaleImage from '../assets/Abigale.jpeg';
import EdnaManley from '../assets/Edna.jpg';

const FestivalPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Animation for page elements
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Initialize tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');
        setActiveTab(target);
      });
    });
    
    return () => {
      // Cleanup event listeners
      tabButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="festival-page">
      {/* Hero Section */}
      <section className="site-hero festival-hero">
        <div className="site-hero-content">
          <h1>Vibrations Poetry Festival 2025</h1>
          <p>August 9, 2025 • Kingston, Jamaica</p>
         {/*} <Link to="/ticket-page">
            <button className="hero-cta-button">Get Tickets</button>
          </Link> */}
        </div>
      </section>
      
      {/* Main Content */}
      <section className={`festival-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {/* Festival Overview */}
          <div className="festival-overview">
            <div className="overview-text">
              <h2>Celebrate Caribbean Poetry & Culture</h2>
              <p>Join us for the inaugural Vibrations Poetry Festival, a celebration of Jamaican literary arts, poetry, and culture in Kingston. Experience performances from award-winning poets, interactive workshops, and vibrant cultural showcases.</p>
            </div>
            <div className="overview-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Poets & Artists</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Day</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Venue</span>
              </div>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="festival-tabs">
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'about' ? 'active' : ''}`} 
                data-tab="about"
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button 
                className={`tab-button ${activeTab === 'presenters' ? 'active' : ''}`} 
                data-tab="presenters"
                onClick={() => setActiveTab('presenters')}
              >
                Presenters
              </button>
              <button 
                className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`} 
                data-tab="schedule"
                onClick={() => setActiveTab('schedule')}
              >
                Schedule
              </button>
              <button 
                className={`tab-button ${activeTab === 'venues' ? 'active' : ''}`} 
                data-tab="venues"
                onClick={() => setActiveTab('venues')}
              >
                Venue
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="tab-content">
              {/* About Tab */}
              <div className={`tab-pane ${activeTab === 'about' ? 'active' : ''}`} id="about">
                <h3>About the Festival</h3>
                <p>Welcome to the Vibrations Poetry Festival (VPF), a dynamic and exciting new literary celebration dedicated to nurturing the art of poetry in Jamaica. Our inaugural festival, scheduled for August 9, 2025 at Edna Manley College of the Visual & Performing Arts, promises to be a landmark event that showcases the creativity, resilience, and vibrancy of emerging and established Jamaican poets. With a rich cultural heritage to draw from, VPF is committed to providing a platform that fosters growth and transformation within the Jamaican poetry community and beyond.</p>
                <p>At the heart of the Vibrations Poetry Festival is our unwavering dedication to creating an inclusive space for aspiring poets to learn, grow, and express themselves. We believe that poetry has the power to uplift, challenge, and inspire, and through our festival, we seek to highlight the ways in which the art form can impact not only individual lives but society as a whole.</p>
                
                <h4>Our Vision</h4>
                <p>VPF is dedicated to fostering a passion for poetry writing and creating an inclusive space for aspiring and emerging Jamaican poets to showcase and hone their poetry writing and performance skills. By celebrating the rich tradition of Jamaican poetry, we aim to cultivate a new generation of poets who will shape the cultural and literary landscape for years to come.</p>
                
                <h4>Our Mission</h4>
                <p>VPF's mission is to educate and sensitize both Jamaican society and the world-at-large to the transformative power of poetry. We believe in poetry's ability to create positive change by shifting mindsets, attitudes, and actions—addressing issues that range from local concerns to global challenges. The festival is grounded in the backdrop of Jamaica's rich cultural heritage, which serves as both inspiration and a call to action for poets to use their voices as agents of change.</p>
                
                <h4>Join Us</h4>
                <p>Whether you're a poet, poetry lover, or someone interested in the transformative power of words, the Vibrations Poetry Festival is for you. We invite you to be a part of our inaugural event in 2025, where you'll experience the richness of Jamaican poetry, hear from inspiring poets, and witness firsthand how poetry can spark change.</p>
                <p>Let the vibrations of the festival inspire you—because poetry is not just a form of art, it is a force for change.</p>
              </div>
              
              {/* Presenters Tab - Keeping this unchanged as requested */}
              <div className={`tab-pane ${activeTab === 'presenters' ? 'active' : ''}`} id="presenters">
                <h3>Festival Presenters & Founders</h3>
                <p>Meet the accomplished poets and artists who will be presenting at the Vibrations Poetry Festival 2025.</p>
                
                
                <div className="presenters-section">
                  <h4>Featured Presenters</h4>
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={margueriteImage} alt="Marguerite Anderson" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Marguerite C. Anderson</h4>
                        <p className="presenter-title">Co-Founder & Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Marguerite C. Anderson is an internationally acclaimed poet, educator, actress and advocate for the arts, known for her evocative exploration of the human condition and Caribbean identity. Born in Kingston, Marguerite has spent over three decades as a language and literature teacher in Jamaica and the Turks & Caicos Islands. She has also contributed to the arts as a thespian, appearing in The Pantomime Company's 2022-23 "Trash & Hype" and 2023-24 "SKoolaz 3.0" as well as in David Tulloch's 2024 theatre production "Pit To Pulpit".</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={canuteImage} alt="Canute Lawrence" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Canute Lawrence</h4>
                        <p className="presenter-title">Co-Founder & Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Canute Lawrence is an award-winning author, educator, and actor. His book "Pathology of a Pandemic" won the International Book Award in 2024. Published in 2021, it is a powerful collection of poems written during the COVID-19 pandemic, exploring a range of voices and perspectives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={angelaImage} alt="Angela Jarrett" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Angela Jarrett</h4>
                        <p className="presenter-title">Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Actress, Playwright, Poet, Producer, Judge - JCDC Speech Competitions.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={joanAndreaImage} alt="Joan-Andrea Hutchinson" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Joan-Andrea Hutchinson</h4>
                        <p className="presenter-title">Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Joan-Andrea Hutchinson is a celebrated cultural ambassador whose poetry and storytelling celebrate Jamaican language, humor, and traditions. Her performances blend entertainment with cultural education, delighting audiences of all ages.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="presenters-section">
                  <h4>Additional Presenters</h4>
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={brittonImage} alt="Britton Wright" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Britton Wright</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Britton Wright is a poet from Stony Hill, now based in Manchester. Deeply inspired by music and Jamaican culture, his poetry explores themes like love of country, the Divine Feminine, sensuality, nature, and mental health. For Britton, poetry is a therapeutic and expressive journey that fosters connection and cultural pride. In 2024, he was shortlisted for the Louise Bennett Coverly Prize and received multiple JCDC awards. Most recently, he won the 2025 CariCon Poetry Slam on March 21.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={kevinImage} alt="Kevin Cooper" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Kevin Cooper</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Kevin Cooper, also known as Blind Vizionary, is a poet and artist born with cataracts and later diagnosed with glaucoma, ultimately losing his sight. Despite these challenges, he's always seen the world through a visionary lens. Deeply influenced by hip-hop and cultural icons like George Carlin, Louise Bennett, and Nas, Kevin uses his gift for language to explore the human experience. His work blends vulnerability, wisdom, and inspiration, aiming to uplift, educate, and connect. Through poetry and music, he continues to be a voice for authenticity, resilience, and purpose.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={andreImage} alt="Andre Smith" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Andre Smith</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>2024-25 Head Boy of Calabar High School.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={abigaleImage} alt="Abigale Reynolds" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Abigale Reynolds</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Abigale Reynolds explores themes of diaspora, belonging, and return in her evocative poetry. Her work has received recognition for its lyrical quality and thoughtful examination of Caribbean identity in a global context.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Schedule Tab - Updated for one-day event */}
              <div className={`tab-pane ${activeTab === 'schedule' ? 'active' : ''}`} id="schedule">
                <h3>Festival Schedule</h3>
                <p>Join us for a full day of poetry, performance, and cultural celebration on August 9, 2025.</p>
                
                <div className="schedule-announcement">
                  <h4>Schedule TBA</h4>
                  <p>The full schedule for the Vibrations Poetry Festival 2025 will be announced closer to the event date. Please check back for updates or join our mailing list to be notified when the schedule is released.</p>
                </div>
                
                <div className="schedule-highlights">
                  <h4>Festival Highlights</h4>
                  <ul>
                    <li>Opening ceremony</li>
                    <li>Poetry readings and performances</li>
                    <li>Writing workshops</li>
                    <li>Panel discussions</li>
                    <li>Youth poetry showcase</li>
                    <li>Closing performances with music and spoken word</li>
                  </ul>
                </div>
              </div>
              
              {/* Venues Tab - Updated for single venue */}
              <div className={`tab-pane ${activeTab === 'venues' ? 'active' : ''}`} id="venues">
                <h3>Festival Venue</h3>
                <p>The Vibrations Poetry Festival takes place at Kingston's premier arts institution.</p>
                
                <div className="venues-list">
                  <div className="venue-item">
                  <img src={EdnaManley} alt="Edna Manley" className="venue-image" />
                  <div className="venue-details">
                      <h4>Edna Manley College of the Visual & Performing Arts</h4>
                      <p>Our venue for all performances, workshops, and activities, celebrating the intersection of poetry and other art forms.</p>
                      <p><strong>Address:</strong> 1 Arthur Wint Drive, Kingston, Jamaica</p>
                      <p>The College provides an ideal setting for our inaugural festival, with its dedication to nurturing artistic expression and cultural heritage.</p>
                    </div>
                  </div>
                </div>
                
                <div className="venue-info">
                  <h4>Venue Facilities</h4>
                  <ul>
                    <li>Auditorium for main performances</li>
                    <li>Workshop spaces</li>
                    <li>Exhibition areas</li>
                    <li>Outdoor performance space</li>
                    <li>Accessible facilities</li>
                    <li>Parking available</li>
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