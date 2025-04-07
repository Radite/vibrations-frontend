import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const DubPoetryBlog = () => {
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
            <span className="blog-category">Culture</span>
            <span className="blog-date">March 15, 2025</span>
          </div>
          <h1>The Rhythm of Jamaican Dub Poetry</h1>
          <div className="blog-author">
            <div className="author-image placeholder"></div>
            <div className="author-info">
              <span className="author-name">Dr. Carolyn Cooper</span>
              <span className="author-title">Guest Contributor, Professor of Literary and Cultural Studies</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className={`blog-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {/* Featured Image */}
          <div className="blog-featured-image placeholder">
            <div className="image-caption">Linton Kwesi Johnson performing at a poetry festival in London, 1983</div>
          </div>
          
          {/* Article Body */}
          <article className="blog-article">
            <div className="article-intro">
              <p>Jamaican dub poetry emerged in the 1970s as a powerful fusion of spoken word and reggae rhythms. Blending political consciousness with musical innovation, dub poets created a revolutionary art form that continues to influence global poetry and performance.</p>
            </div>
            
            <h2>Origins of Dub Poetry</h2>
            <p>The roots of dub poetry can be traced to the Jamaican sound system culture of the 1960s and early 1970s. DJs (or "toasters") began delivering improvised speech over instrumental reggae tracks, developing a style that would evolve into what we now recognize as dub poetry. The term "dub poetry" was coined by Jamaican poet Linton Kwesi Johnson to describe this new art form where the poet's voice becomes another instrument in the composition.</p>
            
            <p>Unlike earlier spoken word traditions, dub poetry was explicitly created to work with or without musical accompaniment. The rhythm is built into the verses themselves – when performed a cappella, listeners can still hear the implicit reggae beat in the cadence of the words.</p>
            
            <blockquote>
              "Dub poetry is reggae music without the reggae music."<br />
              <cite>— Oku Onuora, Jamaican dub poet</cite>
            </blockquote>
            
            <h2>Political Voice and Social Commentary</h2>
            <p>From its inception, dub poetry has been a vehicle for political expression and social critique. Early dub poets like Linton Kwesi Johnson, Mutabaruka, and Mikey Smith used their platforms to address issues of racial injustice, poverty, and post-colonial identity. Emerging during a period of intense political strife in Jamaica, dub poetry gave voice to the experiences of marginalized communities.</p>
            
            <p>The militant tone and revolutionary themes in dub poetry reflect the influence of Black Power movements and Pan-Africanism of the time. Poets critiqued systems of oppression while simultaneously celebrating Jamaican cultural identity and resilience.</p>
            
            <div className="highlighted-section">
              <h3>Key Figures in Jamaican Dub Poetry</h3>
              <ul>
                <li>
                  <strong>Linton Kwesi Johnson</strong> – Often credited with coining the term "dub poetry" and bringing the art form to international attention through albums like "Dread Beat an' Blood" (1978).
                </li>
                <li>
                  <strong>Mutabaruka</strong> – Known for provocative performances and recordings like "Check It!" (1983), his work emphasizes Pan-African themes.
                </li>
                <li>
                  <strong>Jean "Binta" Breeze</strong> – One of the first women to gain prominence in dub poetry, bringing feminist perspectives to the genre.
                </li>
                <li>
                  <strong>Mikey Smith</strong> – His album "Mi Cyaan Believe It" (1982) is considered a classic of the genre. Tragically killed during a political demonstration in 1983.
                </li>
                <li>
                  <strong>Oku Onuora</strong> – Former political prisoner whose work examines themes of liberation and justice.
                </li>
              </ul>
            </div>
            
            <h2>The Language of Resistance</h2>
            <p>Dub poets deliberately use Jamaican Patois (Patwa) rather than standard English, making a political statement about linguistic autonomy and cultural pride. This choice challenges colonial language hierarchies and asserts the validity of Jamaican linguistic expression. The Patois language, with its rhythmic patterns and unique phonology, naturally lends itself to the percussive nature of dub poetry.</p>
            
            <p>Consider these lines from Linton Kwesi Johnson's "Sonny's Lettah":</p>
            
            <div className="poetry-example">
              <p>
                Mama,<br />
                I really doan know how fi tell yu dis<br />
                Cah it bring tears to mi eyes<br />
                But Mama, I haffi tell yu,<br />
                Mama, I haffi tell yu,<br />
                Dem kill Sonny today
              </p>
            </div>
            
            <p>The use of Patois creates immediacy and authenticity, placing the poem firmly within the lived experience of Jamaican people. The rhythm of the language itself becomes part of the performance.</p>
            
            <h2>Musical Elements and Performance</h2>
            <p>Dub poetry is inseparable from its musical context. The term "dub" refers to the remixing technique developed by Jamaican producers like King Tubby and Lee "Scratch" Perry, who created instrumental versions of reggae tracks by emphasizing bass and drums while removing or manipulating vocal tracks.</p>
            
            <p>When performed with musical accompaniment, dub poetry often features:</p>
            <ul>
              <li>Heavy bass lines that emphasize the heartbeat-like rhythm</li>
              <li>Echo and reverb effects on vocals, creating a sense of space</li>
              <li>Minimal instrumentation that foregrounds the poet's voice</li>
              <li>Call-and-response patterns between poet and audience</li>
            </ul>
            
            <p>Even when performed without music, the rhythmic structure of dub poetry contains implicit musical cues that audiences familiar with reggae can immediately recognize.</p>
            
            <h2>Global Influence and Legacy</h2>
            <p>Dub poetry's influence extends far beyond Jamaica's shores. In the United Kingdom, where many Jamaicans migrated, dub poetry became an important medium for expressing the experiences of the Caribbean diaspora. Poets like Linton Kwesi Johnson and Benjamin Zephaniah achieved significant recognition in Britain, using dub poetry to confront racism and document the Black British experience.</p>
            
            <p>The global spread of reggae music helped introduce dub poetry to international audiences. The art form has influenced spoken word movements worldwide, from hip-hop to slam poetry. Its emphasis on rhythm, political consciousness, and authentic voice has shaped contemporary performance poetry across cultures.</p>
            
            <blockquote>
              "Dub poetry was revolutionary because it created a space where the language of the people could be elevated to art without compromising its authenticity."<br />
              <cite>— Benjamin Zephaniah, British-Jamaican poet</cite>
            </blockquote>
            
            <h2>Contemporary Dub Poetry</h2>
            <p>Today's dub poets continue the tradition while adapting to new social contexts and musical trends. Contemporary practitioners incorporate elements of dancehall, hip-hop, and electronic music, extending the genre's boundaries while maintaining its core emphasis on rhythm and social commentary.</p>
            
            <p>The digital age has created new platforms for dub poetry, with performances reaching global audiences through social media and streaming services. Organizations like Poetry Society of Jamaica continue to nurture new talent through regular poetry readings and slam events.</p>
            
            <div className="highlighted-section">
              <h3>Experience Dub Poetry at the Vibrations Festival</h3>
              <p>The inaugural Vibrations Poetry Festival will feature special workshops and performances dedicated to the dub poetry tradition. Join us for sessions led by established dub poets who will explore the history, techniques, and continuing evolution of this powerful art form.</p>
              <p>Our "Rhythm and Word" workshop on June 17 will introduce participants to the fundamentals of creating and performing dub poetry, with guidance on integrating musical elements into poetic composition.</p>
              <Link to="/festival-page" className="link-button">Learn More About Festival Events</Link>
            </div>
            
            <h2>Preserving and Evolving</h2>
            <p>As we celebrate the rich tradition of dub poetry, it's important to recognize both its historical significance and its continuing evolution. New generations of poets are finding ways to honor the form's roots while addressing contemporary issues and incorporating new influences.</p>
            
            <p>The enduring power of dub poetry lies in its ability to transform language into rhythm, personal experience into universal truth, and political struggle into artistic expression. In a world still marked by inequality and injustice, the urgent voice of dub poetry remains as relevant as ever.</p>
            
            <div className="article-footer">
              <div className="tags">
                <span>Jamaican Culture</span>
                <span>Poetry</span>
                <span>Reggae</span>
                <span>Performance Art</span>
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
                <h4>The Evolution of Reggae: From Ska to Dancehall</h4>
                <p>Tracing the musical journey of Jamaica's most famous export</p>
                <Link to="/blog/evolution-of-reggae" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Miss Lou: Mother of Jamaican Poetry</h4>
                <p>How Louise Bennett-Coverley revolutionized Caribbean literary expression</p>
                <Link to="/blog/miss-lou-jamaican-poetry" className="read-more">Read More</Link>
              </div>
              <div className="related-post">
                <div className="related-image placeholder"></div>
                <h4>Caribbean Storytelling Traditions</h4>
                <p>Exploring the rich oral heritage that shaped island literature</p>
                <Link to="/blog/caribbean-storytelling" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DubPoetryBlog;