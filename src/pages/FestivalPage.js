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
import anselImage from '../assets/Ansel.jpeg';
import quickoreImage from '../assets/Quickore.jpg'
import sponsorsImage from '../assets/VPFSponsors.png'; // or whatever your image file is named


// Import video
import video3 from '../assets/Gallery/Video3.mp4';
import video5 from '../assets/Gallery/Video5.mp4'

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
                <span className="stat-number">10</span>
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
                <p>Welcome to Vibrations Poetry Festival (VPF), a dynamic and exciting new literary celebration dedicated to nurturing the art of poetry in Jamaica. Our inaugural festival, scheduled for August 9, 2025 at Edna Manley College of the Visual & Performing Arts, promises to be a landmark event that showcases the creativity, resilience, and vibrancy of emerging and established Jamaican poets. With a rich cultural heritage to draw from, VPF is committed to providing a platform that fosters growth and transformation within the Jamaican poetry community and beyond.</p>
                <p>At the heart of Vibrations Poetry Festival is our unwavering dedication to creating an inclusive space for aspiring poets to learn, grow, and express themselves. We believe that poetry has the power to uplift, challenge, and inspire, and through our festival, we seek to highlight the ways in which the art form can impact not only individual lives but society as a whole.</p>
                
                <h4>Our Vision</h4>
                <p>VPF is dedicated to fostering a passion for poetry writing and creating an inclusive space for aspiring and emerging Jamaican poets to showcase and hone their poetry writing and performance skills. By celebrating the rich tradition of Jamaican poetry, we aim to cultivate a new generation of poets who will shape the cultural and literary landscape for years to come.</p>
                
                <h4>Our Mission</h4>
                <p>VPF's mission is to educate and sensitize both Jamaican society and the world-at-large to the transformative power of poetry. We believe in poetry's ability to create positive change by shifting mindsets, attitudes, and actions—addressing issues that range from local concerns to global challenges. The festival is grounded in the backdrop of Jamaica's rich cultural heritage, which serves as both inspiration and a call to action for poets to use their voices as agents of change.</p>
                
                <h4>Join Us</h4>
                <p>Whether you're a poet, poetry lover, or someone interested in the transformative power of words, Vibrations Poetry Festival is for you. We invite you to be a part of our inaugural event in 2025, where you'll experience the richness of Jamaican poetry, hear from inspiring poets, and witness firsthand how poetry can spark change.</p>
                <p>Let Vibrations of the festival inspire you—because poetry is not just a form of art, it is a force for change.</p>
              {/* Sponsors & Partners Section */}
<div className="sponsors-section">
  <h4>Our Sponsors & Partners</h4>
  <p>We are proud to partner with organizations that share our commitment to celebrating Caribbean poetry and culture. Their support makes Vibrations Poetry Festival possible.</p>
  
  <div className="sponsors-image-container">
    <img src={sponsorsImage} alt="Vibrations Poetry Festival Sponsors and Partners" className="sponsors-image" />
  </div>
  
  <div className="sponsors-list">
    <h5>Thank you to our valued sponsors:</h5>
    <ul>
      <li><strong>PBC Jamaica</strong> - Supporting Caribbean media and cultural initiatives</li>
      <li><strong>Marnei Trading</strong> - Committed to community development and arts</li>
      <li><strong>EMCVP (Edna Manley College of the Visual and Performing Arts)</strong> - Our venue partner and champion of the arts</li>
      <li><strong>Dr. ABC Teachable Moments</strong> - Promoting education and learning through creative expression</li>
      <li><strong>Brain Edibles Collection</strong> - Founded by our co-founder Marguerite C. Anderson, supporting literary excellence</li>
    </ul>
    
    <p className="partnership-note">
      <em>Interested in becoming a sponsor or partner? Contact us to learn about opportunities to support Caribbean poetry and cultural arts.</em>
    </p>
  </div>
</div>
              </div>
              
              {/* Presenters Tab - Keeping this unchanged as requested */}
              <div className={`tab-pane ${activeTab === 'presenters' ? 'active' : ''}`} id="presenters">
                <h3>Festival Presenters & Founders</h3>
                <p>Meet the accomplished poets, emerging and aspiring artists who will be presenting at Vibrations Poetry Festival 2025.</p>
                
                
                <div className="presenters-section">
                  <h4>Featured Presenters</h4>
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={margueriteImage} alt="Marguerite Anderson" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Marguerite C. Anderson</h4>
                        <p className="presenter-title">Co-Founder & Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Marguerite C. Anderson is an international-award winning poet, author of children's books, educator, actress and advocate for the arts, known for her evocative exploration of the human condition and Caribbean identity. Born in Kingston, Marguerite has spent over three decades as an English and Literature teacher in Jamaica and the Turks & Caicos Islands. Marguerite is the founder and CEO of Brain Edibles Collection. She has also contributed to the arts as a thespian, appearing in The Pantomime Company's 2022-23 "Trash & Hype" and 2023-24 "SKoolaz 3.0" as well as in David Tulloch's 2024 theatre production "Pit To Pulpit".</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={canuteImage} alt="Canute Lawrence" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Canute Lawrence</h4>
                        <p className="presenter-title">Co-Founder & Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Canute Lawrence is an award-winning author, educator, and poet. His book "Pathology of a Pandemic" won the <strong>International Impact Book Awards </strong> in 2024. Published in 2021, it is a powerful collection of poems written during the COVID-19 pandemic, exploring a range of voices and perspectives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={joanAndreaImage} alt="Joan-Andrea Hutchinson" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Joan-Andrea Hutchinson</h4>
                        <p className="presenter-title">Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Joan Andrea Hutchinson – Communications and Public Relations Specialist, Public Speaking Coach, Speechwriter, Remedial and Developmental English Lecturer, Editor, Radio and Television Producer, Poet.</p>
                          <p>Joan-Andrea Hutchinson is a celebrated cultural ambassador whose poetry and storytelling celebrate Jamaican language, humor, and traditions. Her performances blend entertainment with cultural education, delighting audiences of all ages.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={angelaImage} alt="Angela Jarrett" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Angela Jarrett</h4>
                        <p className="presenter-title">Featured Poet</p>
                        <div className="presenter-bio">
                          <p>Angela Jarrett is an Award-winning Writer, Producer, and Actress. She started writing at the age of fifteen when she won an award in the JCDC Junior Literary competition. She wrote and produced the JIS Radio Series 'MaB's Family.' She was one of the cast members in Trevor's Rhone's play, "IT'S NOT MY FAULT, BABY." Jarrett worked with Blue Mountain Productions, a London-based theatre company, acting in numerous productions during the 1990s and early 2000s. She wrote and produced several plays including 'Something Fishy.'</p>
                          <p>Angela Jarrett is a judge for the Jamaica Cultural Development Committee (JCDC) Speech Competitions.</p>
                        </div>
                        <div className="presenter-video">
                            <video 
                              controls
                              preload="metadata"
                              width="400"
                              height="300"
                            >
                              <source src={video5} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="presenters-section">
                  <h4>Additional Presenters</h4>
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={anselImage} alt="Ansel Brown" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Ansel Brown</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Ansel Brown is a life-long lover of words and writer of poems from Lluidas Vale, St. Catherine. He excelled in debating and public speaking at Dinthill Technical High School before studying English Language and Psychology in Birmingham, UK.</p>
                          <p>Ansel has published eight poetry collections including 'The Wind Blows and It Stops,' 'Birthwrite,' and 'The Sanity of Ink.' He works with schools to use poetry as an educational tool and has received positive reviews from the Ministry of Education for his work. He considers poetry one of the purest forms of human expression and currently teaches private English classes while continuing to write and perform.</p>
                          <div className="presenter-video">
                            <iframe
                              width="400"
                              height="300"
                              src="https://www.youtube.com/embed/254EBjFgSeo"
                              title="Ansel Brown Poetry Performance"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
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
                  </div>
                    
                  <div className="presenters-grid">
                    <div className="presenter-card">
                      <img src={abigaleImage} alt="Abigale Reynolds" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Abigail Reynolds</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Abigail Reynolds is a seventeen-year-old student of Lower-sixth form at St. Andrew High School for Girls. She is the 1st Place winner of the Jamaica Book Festival Young Writer's Prize for the Poetry category (announced January 20th, 2025).</p>
                          <p>Her entry focuses on themes of nature while documenting the feeling of growing up.</p>
                          <p>She began writing as a way to express things that she didn't feel she could talk about with others. She credits her teachers, Ms. Gayle, Ms. Hemmings, and Mr. Simpson for their support along her writing journey.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={andreImage} alt="Andre Smith" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Andre Smith</h4>
                        <p className="presenter-title">Poet</p>
                        <div className="presenter-bio">
                          <p>Andre Smith is the Head Boy for the academic year 2024–2025 and a passionate 19-year-old poet. Inspired by his high school literature teachers—most notably Ms. Marguerite Anderson, one of the organizers of this very event—Andre began writing poetry as a way to deepen his appreciation for literature. For him, poetry is more than just art; it is a powerful tool for self-expression and reflection, as well as a medium for critiquing personal thoughts and the world at large. Through his writing, Andre continues to explore the transformative power of words and their ability to open minds and spark meaningful conversations.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="presenter-card">
                      <img src={brittonImage} alt="Britton Wright" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Britton Wright</h4>
                        <p className="presenter-title">Poet & 2025 CariCon Poetry Slam Champion</p>
                        <div className="presenter-bio">
                          <p>Britton Wright is a dynamic poet from Stony Hill, now based in Manchester, who brings pure vibes to every performance. Deeply inspired by music and Jamaican culture, his poetry explores themes like love of country, the Divine Feminine, sensuality, nature, and mental health - particularly men's mental health awareness. For Britton, poetry is a therapeutic and expressive journey that fosters connection and cultural pride.</p>
                          <p>In 2024, he was shortlisted for the Louise Bennett Coverly Prize and received multiple JCDC awards. Most recently, he won the <strong>2025 CariCon Poetry Slam Championship</strong>, cementing his place as one of Jamaica's rising poetry stars. His performances blend culture, truth, and island pride, making him a powerful voice for authentic Caribbean expression.</p>
                          <p>As an advocate for mental health through poetry, Britton uses his platform to address important social issues while celebrating Jamaican identity and the transformative power of spoken word.</p>
                          <div className="presenter-video">
                            <video 
                              controls
                              preload="metadata"
                              width="400"
                              height="300"
                            >
                              <source src={video3} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="presenter-card">
                      <img src={quickoreImage} alt="Quickore Bennett" className="presenter-image" />
                      <div className="presenter-info">
                        <h4>Quickore' Bennett</h4>
                        <p className="presenter-title">Poet, Performer & Operations Manager</p>
                        <div className="presenter-bio">
                          <p>Quickore' Bennett is a Jamaican creative whose voice is deeply rooted in poetry, performance, and personal truth. She began writing at the age of 10, turning to short poems as a way to express herself and make sense of a world where her father was absent and adolescence was anything but simple. Poetry became both a refuge and a release—helping her navigate the emotional challenges of growing up while shaping her into the artist she is today.</p>
                          <p>Her work often appeared in The Jamaica Gleaner, where her early writings gained public recognition. She continues to write in traditional rhyme schemes such as ABABB, CDCDD, and ABAB BCDC EFEF, using rhythm and structure to reflect the layered nature of her emotions and experiences. Her writing is honest, reflective, and deeply resonant—built on a foundation of lived experience and heartfelt introspection.</p>
                          <p>As a performer, Quickore has taken on impactful roles in several Jamaican productions. She portrayed "Big K" in Nesta's Rock, Nia in "Skoolaz 2.0" (The Pantomime Company 2023-24), and starred in BEAM Jungle of Treasures. She was also named 2nd runner-up in the 2014 staging of Miss Jamaica Talented Teen, where her dramatic abilities and expressive storytelling stood out. Her most recent lead role was as Mama CeeCee in The Pantomime Company's 2024-25 production "Channel 876" - a powerful performance that further affirmed her command of character and stage presence.</p>
                          <p>Professionally, Quickore' is currently an Operations Manager, where her leadership reflects the same passion and precision she brings to her creative work. She balances her professional and artistic lives with grace, never losing sight of her ultimate goal: to become a published writer. She dreams of releasing a collection of poetry and reflections that speak to young people navigating pain, identity, and healing—just as she once did through her earliest poems. Quickore' Bennett is a woman of voice, vision, and vulnerability—and she continues to write, perform, and lead with authenticity.</p>
                        </div>
                      </div>
                    </div>
                                      </div>
                </div>
              </div>
              
              {/* Schedule Tab - Updated for one-day event */}
              <div className={`tab-pane ${activeTab === 'schedule' ? 'active' : ''}`} id="schedule">
                <h3>Festival Schedule</h3>
                <p>Join us for an evening of poetry, performance, and cultural celebration on August 9, 2025.</p>
                
                <div className="schedule-announcement">
                  <h4>Schedule TBA</h4>
                  <p>The full schedule for Vibrations Poetry Festival 2025 will be announced closer to the event date. Please check back for updates or join our mailing list to be notified when the schedule is released.</p>
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
                <p>Vibrations Poetry Festival takes place at Kingston's premier arts institution.</p>
                
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
                    <li>Amphitheater for main performances</li>
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