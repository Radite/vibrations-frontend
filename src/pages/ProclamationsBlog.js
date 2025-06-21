import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';
import proclamationsImage from '../assets/proclamations.jpg';

const ProclamationsBlog = () => {
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
            <span className="blog-category">Book Review</span>
            <span className="blog-date">January 20, 2025</span>
          </div>
          <h1>A Voice That Refuses Silence: Reviewing "Proclamations"</h1>
          <div className="blog-author">
            <div className="author-image placeholder"></div>
            <div className="author-info">
              <span className="author-name">Vivienne Grant</span>
              <span className="author-title">Historian, Author & Retired Educator</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className={`blog-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {/* Featured Image */}
          <div className="blog-featured-image">
            <a href="https://www.amazon.com/Proclamations-Collection-Marguerite-C-Anderson/dp/B0F66K3F46" target="_blank" rel="noopener noreferrer">
              <img 
                src={proclamationsImage} 
                alt="Proclamations by Marguerite C. Anderson - Click to view on Amazon" 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
            <div className="image-caption">
              Marguerite C. Anderson's "Proclamations" - A Collection of Poems (2025)
              <br />
              <small style={{color: '#666', fontStyle: 'italic'}}>Click image to view on Amazon</small>
            </div>
          </div>
          
          {/* Article Body */}
          <article className="blog-article">
            <div className="article-intro">
              <p>Published in January 2025, "Proclamations" is Marguerite C. Anderson's third poetry collection, following "Echoes From the Naked Soul" (2021) and "I Exist on this Page" (2024). Anderson presents a bold and unflinching body of work that is as culturally grounded as it is universally resonant.</p>
            </div>
            
            <p>This collection is not merely a gathering of poems—it is a deeply personal yet profoundly communal reflection on memory, injustice, identity, faith, womanhood, and survival. With lyrical clarity and emotional range, Anderson opens the door to lived experience, where silence gives way to voice, trauma transforms into witness, and personal truths intersect with collective reckoning.</p>
            
            <h2>Memory as Sacred Ground</h2>
            <p>At the forefront of "Proclamations" is a striking meditation on memory and its vulnerabilities—both personal and societal. This theme culminates in the internationally recognized poem "In Memory's Absence," which earned first place on Poetry.com, bringing Anderson global acclaim. The poem contemplates memory not only as a site of loss but as a contested space where love, identity, and regret coexist. It reflects on the tragedy of a life unremembered and yet emotionally imprinted, blurring the boundary between forgetting and enduring connection.</p>
            
            <h2>Confronting Intergenerational Trauma</h2>
            <p>Anderson's poetic voice is perhaps most powerful when it interrogates intergenerational trauma and the silencing of women's experiences. In poems such as "Providence Penanced Him" and "For My Mother Who Fell from the Cliff," she centers women who are wounded by patriarchal abandonment and social stigma, yet who endure. These are not passive characters. They are complex, emotionally rich figures whose stories critique the cultural and gender-based structures that often criminalize vulnerability while glorifying silence.</p>
            
            <p>The poet exposes how emotional labor, motherhood, and sacrifice are often invisibilized in Caribbean communities and beyond.</p>
            
            <blockquote>
              "Anderson's poems often document what is at risk of being forgotten—those whose stories rarely occupy center stage: the poor, the elderly, the faithful, the abused, the emotionally scarred."
            </blockquote>
            
            <h2>Reclaiming Cultural Identity</h2>
            <p>One of the most compelling features of the collection is Anderson's sustained exploration of cultural identity and self-perception. The poem "The Image I Wear" is a blistering and courageous confrontation with the legacy of colonial beauty standards in Jamaica. Written in Jamaican Creole, the poem is both linguistically and thematically radical, dismantling Eurocentric ideals while affirming the beauty of African heritage.</p>
            
            <p>Anderson uses the power of vernacular speech to recover dignity and agency for girls and women who, like the speaker, struggle to find validation in their natural features.</p>
            
            <div className="highlighted-section">
              <h3>Spiritual Conflict and Healing</h3>
              <p>Spiritual conflict and healing also emerge as significant motifs in the collection. In "Redemption Sounds", Anderson captures the tensions between public shame and divine grace as she recounts the internal dialogue of a woman navigating both religious judgment and personal guilt. Here, Christian imagery is not merely decorative—it functions as a lens through which the poet probes the complexities of faith, forgiveness, and societal double standards.</p>
              <p>The sacred is not presented as a refuge from suffering, but as a space for honest confrontation and eventual reconciliation.</p>
            </div>
            
            <h2>The Lyrical Meets the Testimonial</h2>
            <p>Throughout the collection, Anderson demonstrates a gift for balancing the lyrical with the testimonial. In "Dog a Bawl, Dog a Cry", the neglected voice of a loyal street dog becomes a symbol of overlooked labor and worth—an allegory that evokes empathy and social critique. Similarly, "They Just Come" draws attention to environmental vulnerability and the impact of climate disasters on rural life in the Caribbean.</p>
            
            <h2>A Teacher's Eye, A Mother's Heart</h2>
            <p>Anderson's personal and professional background as a Jamaican educator, woman of faith, and mother permeates the collection. Having taught English and Literature in both Jamaica and the Turks and Caicos Islands for over three decades, Anderson brings to her work a teacher's eye for detail and a pastoral sensitivity.</p>
            
            <p>Her dual role as writer and educator manifests in a poetic voice that is both nurturing and unafraid to confront. These are poems born of lived truth, shaped by compassion, sharpened by social insight.</p>
            
            <h2>The Pursuit of Dignity</h2>
            <p>Despite the thematic range of the collection, a common thread persists: the pursuit of dignity amid silence, struggle, and marginalization. Whether addressing betrayal, aging, cultural erosion, or maternal loss, Anderson's poems speak with a clarity that invites reflection and, at times, quiet revolt. Her poems are not only artistic renderings but ethical engagements, calling readers to listen with more than just their intellects.</p>
            
            <blockquote style={{color: 'black'}}>
              "Anderson affirms poetry not as escapism, but as declaration: a medium through which silence is broken and lives are affirmed."
            </blockquote>
            
            <div className="highlighted-section">
              <h3>Experience Anderson at Vibrations Poetry Festival</h3>
              <p>Marguerite C. Anderson, co-founder of the Vibrations Poetry Festival, will be performing selections from "Proclamations" at our inaugural festival on August 9, 2025. Join us to witness firsthand the power of her voice and the depth of her literary artistry.</p>
              <Link to="/festival-page" className="link-button">Learn More About the Festival</Link>
            </div>
            
            <h2>A Resounding Achievement</h2>
            <p>"Proclamations" is a resounding achievement—a collection deeply rooted in Jamaican life, yet globally relevant in its emotional scope and moral urgency. Anderson affirms poetry not as escapism, but as declaration: a medium through which silence is broken and lives are affirmed. In her hands, the pen becomes not just a tool of expression, but an instrument of remembrance, resistance, and redemption.</p>
            
            <div className="article-footer">
              <div className="tags">
                <span>Book Review</span>
                <span>Caribbean Poetry</span>
                <span>Jamaican Literature</span>
                <span>Women Writers</span>
                <span>Poetry Collection</span>
              </div>
              
              <div className="share-links">
                <span>Share this review:</span>
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
                <h4>The Rhythm of Jamaican Dub Poetry</h4>
                <p>Exploring the revolutionary fusion of spoken word and reggae rhythms</p>
                <Link to="/blog/dub-poetry" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Meet Our Co-Founders</h4>
                <p>Learn about the visionaries behind Vibrations Poetry Festival</p>
                <Link to="/about" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Caribbean Women's Voices in Poetry</h4>
                <p>Celebrating the rich tradition of female poets in the Caribbean</p>
                <Link to="/blog/caribbean-women-poetry" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProclamationsBlog;