import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const SamuelGordonBlog = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Animation for page elements
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Add reading progress indicator
    const progressBar = document.querySelector('.reading-progress-bar');
    
    const updateReadingProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);

  return (
    <div className="blog-post-page">
      {/* Reading Progress Bar */}
      <div className="reading-progress">
        <div className="reading-progress-bar"></div>
      </div>
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-meta">
            <span className="blog-category">Festival Review</span>
            <span className="blog-date">February 4, 2026</span>
          </div>
          <h1>A Witness to a Quiet Revolution of Verse</h1>
          <div className="blog-author">
            <div className="author-image placeholder"></div>
            <div className="author-info">
              <span className="author-name">Samuel J. Gordon ("Kindred")</span>
              <span className="author-title">Poet | Health & Wellness Coach | Teacher</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className={`blog-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {/* Article Body */}
          <article className="blog-article">
            <div className="article-intro">
              <p>"As a poet who has walked many roads and witnessed countless gatherings of verse, I approached Vibrations Poetry Festival with the quiet curiosity of one who came simply to observe. What I found was a rare and refreshing celebration — an event where poetry was not merely performed, but honored."</p>
            </div>
            
            <h2>An Atmosphere of Sacred Gathering</h2>
            <p>Stepping into the School of Drama amphitheater that evening, I felt something immediately different. The setting radiated respect for the craft—a casually elegant dress code, subtle décor, even the cocktails offered - all combining to elevate what could have been just another open-mic into a sacred gathering of words and spirit.</p>
            
            <p>To say that this festival was like any other, would be a grossly unmerited statement! It was as if Vibrations Poetry Festival created an atmosphere where reverence meets release.</p>
            
            <blockquote style={{color: 'black'}}>
              "While the atmosphere was one of reverence, it pulsed with creative freedom. This was no casual open mic; it was a carefully tended space where voices — seasoned, emerging, and unexpected — could bloom in their fullest power."
            </blockquote>
            
            <p>That blend of ceremonial respect and expressive liberation defined the night. The festival, staged by co-founders, Canute Lawrence and Marguerite C. Anderson in partnership with Edna Manley College, clearly aimed to elevate, heal, and transform through the spoken word.</p>
            
            <h2>Standout Performances That Resonated Deeply</h2>
            <p>Among the remarkable voices that stood out on stage, there were multiple standout performances on that Saturday evening. Among the many voices that rose in the evening, these became vivid in my mind's eye:</p>
            
            <div className="highlighted-section">
              <h3>The Blind Visionary</h3>
              <p>A poet whose performance transcended the physical limitations of the stage. Their words glowed, entering the audience's space as pure luminosity. It wasn't only what the poet formally known as Kevin Cooper said; it was how he spoke—unfettered, raw, and ineffably present.</p>
              <p>The Blind Vizionary's performance was "so luminous it transcended the stage and entered the realm of the unforgettable." He stirred the audience's heart even more when he spoke with deep reverence of his high school English/Literature teacher, Marguerite C. Anderson, whose steadfast guidance continues to shape his art and his life.</p>
            </div>
            
            <h3>The Saxophonist's Gift</h3>
            <p>Another standout performance came from Anniel Rodgers, the saxophonist from St. Andrew High School for Girls. Rodgers gave a remarkable interlude in a festival grounded in spoken word. Her music wrapped itself around the poetry, elevating both to new heights. It wasn't just accompaniment—it became part of the storytelling, a seamless fusion of sound and speech, creating a multisensory heartbeat for the event.</p>
            
            <h2>Poetry as Healing, Liberation, Testimony</h2>
            <blockquote>
              "What struck me most was the festival's understanding of poetry as more than art but as a tool for healing, for releasing what wounds us, for reframing traumas into testimonies. Here, words were not only spoken; they were medicine."
            </blockquote>
            
            <p>This sentiment echoed deeply throughout the festival. Each poet seemed to offer not just performance, but a kind of offering—transforming private truths into shared catharsis. It became clear that Vibrations wasn't just about showcasing talent—it was about building a space where self-awareness, self-trust, and confidence could flourish.</p>
            
            <h2>A Revolution of Verse</h2>
            <p>As I left the School of Drama that evening, I carried with me something more than memories of individual performances. I witnessed what felt like a quiet revolution—a reclaiming of poetry's original purpose as communal ritual, as healing practice, as sacred testimony.</p>
            
            <p>Vibrations Poetry Festival didn't just present poetry; it created a sanctuary for it. In an age where spoken word can sometimes feel performative or commodified, this festival reminded us why poetry matters: because it allows us to see ourselves reflected in another's truth, to feel less alone in our struggles, and to believe in the transformative power of words spoken with intention and received with open hearts.</p>
            
            <div className="highlighted-section">
              <h3>Join the Movement</h3>
              <p>Vibrations Poetry Festival continues to create spaces where poetry is honored as both art and healing practice. Experience this rare gathering of voices at upcoming festivals and open mic nights.</p>
              <Link to="/festival-years" className="link-button">Explore Festival Events</Link>
            </div>
            
            <div className="article-footer">
              <div className="tags">
                <span>Festival Review</span>
                <span>Poetry Performance</span>
                <span>Jamaican Poetry</span>
                <span>Spoken Word</span>
                <span>Community Arts</span>
              </div>
              
              <div className="share-links">
                <span>Share this article:</span>
                <button className="share-button">Twitter</button>
                <button className="share-button">Facebook</button>
                <button className="share-button">Email</button>
              </div>
            </div>
          </article>
          
          {/* Related Posts */}
          <div className="related-posts">
            <h3>Related Articles</h3>
            <div className="related-grid">
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Tanisha Bent: Siloah's Brawta Voice</h4>
                <p>Meet the spoken-word poet and community arts leader bringing vibrant poetry programming to rural Jamaica</p>
                <Link to="/blog/tanisha-bent" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Lyrical Truths & Social Reckonings</h4>
                <p>A scholarly reflection on Marguerite C. Anderson's powerful poetry collection "Proclamations"</p>
                <Link to="/blog/proclamations-review" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Festival Reviews</h4>
                <p>Read more testimonials and reflections from poets and attendees who experienced Vibrations</p>
                <Link to="/reviews" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SamuelGordonBlog;