import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const TanishaBentBlog = () => {
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
            <span className="blog-category">Poet Feature</span>
            <span className="blog-date">November 20, 2025</span>
          </div>
          <h1>Tanisha Bent: Siloah's Brawta Voice — founder, teacher, and slam-stage contender</h1>
          <div className="blog-author">
            <div className="author-image placeholder"></div>
            <div className="author-info">
              <span className="author-name">Marguerite C. Anderson</span>
              <span className="author-title">Poet & Co-Founder, Vibrations Poetry Festival</span>
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
              <p>Tanisha Bent is a spoken-word poet and community arts leader from the lush Nassau Valley of Siloah, St. Elizabeth. Her childhood was steeped in reading, storytelling and descriptive writing. This background blossomed into a voice for the stage: poems shaped by vivid imagery and an unflinching attention to place, justice and family.</p>
            </div>
            
            <h2>Education and Leadership</h2>
            <p>Bent is a graduate of the University of the West Indies with a Bachelor of Arts in Language &amp; Communication. She has complemented her arts practice with leadership, business administration and project-management certifications. Those skills show in the way she builds projects, nurtures local talent and organizes public events that put rural Jamaica on the spoken-word map.</p>
            
            <h2>Brawta Backyard Poetry: Creating Community Spaces</h2>
            <p>At the center of Tanisha's local work is Brawta Backyard Poetry, an intimate creative space she founded to bring words to the community and give emerging voices a place to be heard. She describes Brawta as a space where "innate and peripheral thoughts ignite the soul and flow enchantingly off the tongue," a mission visible across the project's social posts and event programming. Online, the Brawta Backyard Poetry Instagram profile presents the project, its events and Tanisha's performances.</p>
            
            <p>Brawta events are intentionally accessible and communal: backyard performances, youth workshops and local showcases that foreground St. Elizabeth's talent while creating pathways for young people to experience poetry live.</p>
            
            <h2>From Local to Regional Recognition</h2>
            <p>Tanisha's work has moved beyond the backyards of St. Elizabeth to the Caribbean slam circuit. She made a notable impact at the 2025 CARICON Poetry Slam, placing second, and also finished fourth in the WAPAX Poetry Slam at CARIFESTA XV — performances that introduced her voice to wider regional audiences. Regional recognition matters for a community artist like Tanisha: it raises the profile of Siloah's creative scene, builds connections for youth programming, and demonstrates that grassroots projects can cultivate talent that stands alongside the Caribbean's most dynamic spoken-word artists.</p>
            
            <h2>Themes and Style</h2>
            <p>Listeners and followers note Tanisha's use of dense, sensory imagery and a cadence that can shift from the conversational to the oracular in a heartbeat. Her poems often weave natural imagery with social critique — rooted in place but fluent across issues that matter to Caribbean audiences: identity, accountability, and the small, everyday acts that bind communities together.</p>
            
            <div className="highlighted-section">
              <h3>"In Her Skin" — A Powerful Testament</h3>
              <p>Her 2025 poem "In Her Skin" is a stirring defence of women's autonomy and bodily dignity. The poem confronts street harassment and male entitlement with direct, unapologetic language, anchored by the repeated refrain "Leave her alone!" The work demonstrates Tanisha's ability to blend personal immediacy with social urgency, creating a poem that resonates across lived experience.</p>
            </div>
            
            <h2>Why Tanisha Bent Matters</h2>
            <p>Tanisha represents a model for sustainable, local arts leadership: she performs, but she also builds the spaces where new poets can learn the craft and find an audience. By taking poetry out of formal venues and into backyards and community spaces, she makes literature live and breathe in the places that shaped her. Her success on the Caribbean slam stage demonstrates that grassroots organizers can cultivate voices that resonate regionally — and that investment in rural arts programming yields both cultural and social returns.</p>
            
            <blockquote style={{color: 'black'}}>
              "By taking poetry out of formal venues and into backyards and community spaces, Tanisha makes literature live and breathe in the places that shaped her."
            </blockquote>
            
            <h2>Tanisha's Poem: "In Her Skin"</h2>
            <div className="poem-text">
              <p>I won't even start<br/>
              With the common psst attack,<br/>
              squeezed between his teeth;<br/>
              Followed by old worn dirty cloths fanned - through fowl leaking cycle wheels;<br/>
              When you hold your head straight,<br/>
              Refusing to be his patch.</p>

              <p>Leave the girl alone! Stop breathing in her face.<br/>
              Let her walk by without making her uncomfortable in this place!<br/>
              She is passing through,<br/>
              Passing you.<br/>
              That doesn't mean you need to pass a remark, or grade<br/>
              The size of her thighs, width of her hips,<br/>
              Or the height of the points on her chest.<br/>
              Leave the girl alone!<br/>
              Man, please let her be!</p>

              <p>She has to pass this way each day,<br/>
              Leave her to go her way in peace.<br/>
              She is going about her business<br/>
              Stretching her legs hairy or shaved;<br/>
              It has nothing to do with you,<br/>
              If she has them bow,<br/>
              If they are looking like drum sticks,<br/>
              Or if they're revealing too much meat.<br/>
              Leave the girl alone!</p>

              <p>It's her's to carry those flaps<br/>
              Around her cheeks, dry hair,<br/>
              Short skirt,<br/>
              No sleeves.<br/>
              She is bending to tie her lace;<br/>
              Dancing to the rhythm of her soul;<br/>
              Taking herself to achieve her purpose -<br/>
              She needs no distraction;<br/>
              No time for provocation -<br/>
              About your idle manhood;<br/>
              And stories about your only ability,<br/>
              To rise on sex occasions.<br/>
              Leave her alone!</p>

              <p>Her degree is in her reach.<br/>
              She doesn't need your schooling,<br/>
              For you to place bells on her ankle;<br/>
              Bawling, looking like you,<br/>
              Yet disowned,<br/>
              Causing her to struggle to meet her needs,<br/>
              And the offspring of your<br/>
              Insemination.<br/>
              Leave her alone!</p>

              <p>She does not need to sing on your microphone!<br/>
              She has a voice and words strong enough to shake mountains,<br/>
              Shatter ceilings,<br/>
              And echo through valleys;<br/>
              To get ahead on her own!<br/>
              Leave her alone!</p>

              <p>She is moving.<br/>
              She is moving in the direction of her dreams.<br/>
              She only needs cheers and reminders,<br/>
              Not another word from preys -<br/>
              Attracting strays all the way to her gate;<br/>
              Making her want to stay in;<br/>
              Fighting in her mind.<br/>
              Because, against the men lurking<br/>
              And waiting -<br/>
              To tell her about her anatomy,<br/>
              She fears she can't win;<br/>
              Once she wears this cloak,<br/>
              Built of a woman's skin.</p>
            </div>
            
            <h2>Connect with Tanisha</h2>
            <p>Follow Brawta Backyard Poetry on Instagram to stay updated on Tanisha's performances, workshops, and community events. Her work continues to inspire and challenge audiences across the Caribbean and beyond.</p>
            
            <div className="highlighted-section">
              <h3>Experience Poetry at Vibrations Festival</h3>
              <p>Discover more poets like Tanisha Bent at Vibrations Poetry Festival, where voices from across the Caribbean gather to celebrate, challenge, and inspire. Join us for an unforgettable evening of spoken-word performance.</p>
              <Link to="/festival-years" className="link-button">Learn About Upcoming Festivals</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TanishaBentBlog;