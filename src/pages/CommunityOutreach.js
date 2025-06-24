import React from 'react';
import './CommunityOutreach.css';

// Import Spring into Fashion images
import spring2 from '../assets/Gallery/Spring (2).jpg';
import spring3 from '../assets/Gallery/Spring (3).jpg';
import spring4 from '../assets/Gallery/Spring (4).jpg';
import metGala1 from '../assets/Gallery/MetGala1.jpg';
import metGala2 from '../assets/Gallery/MetGala2.jpg';
import metGala3 from '../assets/Gallery/MetGala3.jpg';
import metGala4 from '../assets/Gallery/MetGala4.jpg';
import banner from '../assets/banner.png';

const CommunityOutreach = () => {
  return (
    <main className="community-outreach">

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          position: 'relative',
          height: '50vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          color: 'white',
        }}
      >
        {/* Background Image Layer */}
        <div 
          className="hero-bg"
          style={{
            backgroundImage: `url(${banner})`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Optional Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Community Involvement</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Celebrating culture, fashion, and empowerment through active community engagement and proud sponsorships.
          </p>
        </div>
      </section>

      {/* Featured Sponsorship Section */}
      <section className="featured-sponsorship" style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🌸✨ Proud Sponsors of "Spring into Fashion" Mother's Day Gala ✨🌸
          </h2>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8',
              color: '#2c3e50',
              marginBottom: '1.5rem'
            }}>
              Vibrations Poetry Festival was a proud sponsor of the <strong>14th Annual "Spring into Fashion" Gala Fashion Show</strong>, hosted by the Canadian Women's Club of Jamaica on <strong>Sunday, May 11, 2025</strong>, at the elegant AC Marriott Hotel in Kingston.
            </p>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              color: '#34495e',
              marginBottom: '1.5rem'
            }}>
              This vibrant Mother's Day celebration brought together grace, glamour, and gratitude as patrons enjoyed a dazzling runway show featuring designs from some of Jamaica's most talented fashion creatives.
            </p>

            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '10px',
              padding: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.7',
                color: '#856404',
                fontWeight: '500'
              }}>
                We were especially thrilled to see our very own <strong>Co-Founder, Canute Lawrence</strong>, grace the runway as one of the featured models in the show's stunning fashion showcase! His presence was a celebration of style, confidence, and the multifaceted nature of artistic expression.
              </p>
            </div>

            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              color: '#34495e'
            }}>
              We extend heartfelt congratulations to the Canadian Women's Club of Jamaica for curating another spectacular event and for the important work they continue to do in support of charitable causes and women's empowerment. Vibrations Poetry Festival is proud to stand with organizations that uplift communities and celebrate culture in all its forms — from the runway to the written word.
            </p>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section id="gallery" className="join-us" style={{ padding: '2rem 1rem', backgroundColor: '#fff' }}>
        <div className="join-us-content" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2>Photo Highlights</h2>
          <p>Moments from the Spring Into Fashion Mother's Day Gala at AC Marriott Hotel, Kingston - May 11, 2025</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginTop: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            {[spring2, spring3, spring4, metGala1, metGala2, metGala3, metGala4].map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '450px',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={img}
                  alt={`Event Gallery Image ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center',
        padding: '1.5rem 0',
        marginTop: '4rem'
      }}>
        <p style={{ margin: 0 }}>
          © 2025 Vibrations Poetry Festival. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
};

export default CommunityOutreach;