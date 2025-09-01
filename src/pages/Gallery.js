import React, { useEffect, useState } from 'react';
import './Gallery.css';

// Import the gallery images from the assets folder
import image1 from '../assets/Gallery/Gallery (1).jpeg';
import image2 from '../assets/Gallery/Gallery (2).jpeg';
import image3 from '../assets/Gallery/Gallery (3).jpeg';
import image4 from '../assets/Gallery/Gallery (4).jpeg';
import image6 from '../assets/Gallery/Gallery (6).jpeg';
import image7 from '../assets/Gallery/Gallery (7).jpeg';
import image8 from '../assets/Gallery/Gallery (8).jpeg';
import image9 from '../assets/Gallery/Gallery (9).jpeg';
import image10 from '../assets/Gallery/Gallery (10).jpeg';

// Import the video files from the assets folder
import video1 from '../assets/Gallery/Video1.mp4';
import video2 from '../assets/Gallery/Video2.mp4';
import video3 from '../assets/Gallery/Video3.mp4';
import video4 from '../assets/Gallery/Video4.mp4';

// Import 2025 Festival Images - August 12, 2025
import festival2025_001 from './assets/2025/IMG-20250812-WA0001.jpg';
import festival2025_002 from './assets/2025/IMG-20250812-WA0002.jpg';
import festival2025_003 from './assets/2025/IMG-20250812-WA0003.jpg';
import festival2025_004 from './assets/2025/IMG-20250812-WA0004.jpg';
import festival2025_005 from './assets/2025/IMG-20250812-WA0005.jpg';
import festival2025_006 from './assets/2025/IMG-20250812-WA0006.jpg';
import festival2025_007 from './assets/2025/IMG-20250812-WA0007.jpg';
import festival2025_008 from './assets/2025/IMG-20250812-WA0008.jpg';
import festival2025_009 from './assets/2025/IMG-20250812-WA0009.jpg';
import festival2025_010 from './assets/2025/IMG-20250812-WA0010.jpg';
import festival2025_011 from './assets/2025/IMG-20250812-WA0011.jpg';
import festival2025_012 from './assets/2025/IMG-20250812-WA0012.jpg';
import festival2025_014 from './assets/2025/IMG-20250812-WA0014.jpg';
import festival2025_015 from './assets/2025/IMG-20250812-WA0015.jpg';
import festival2025_016 from './assets/2025/IMG-20250812-WA0016.jpg';
import festival2025_017 from './assets/2025/IMG-20250812-WA0017.jpg';

// Import 2025 Festival Images - September 1, 2025
import festival2025_0901_004 from './assets/2025/IMG-20250901-WA0004.jpg';
import festival2025_0901_005 from './assets/2025/IMG-20250901-WA0005.jpg';
import festival2025_0901_006 from './assets/2025/IMG-20250901-WA0006.jpg';
import festival2025_0901_007 from './assets/2025/IMG-20250901-WA0007.jpg';
import festival2025_0901_008 from './assets/2025/IMG-20250901-WA0008.jpg';
import festival2025_0901_009 from './assets/2025/IMG-20250901-WA0009.jpg';
import festival2025_0901_010 from './assets/2025/IMG-20250901-WA0010.jpg';
import festival2025_0901_011 from './assets/2025/IMG-20250901-WA0011.jpg';
import festival2025_0901_012 from './assets/2025/IMG-20250901-WA0012.jpg';
import festival2025_0901_013 from './assets/2025/IMG-20250901-WA0013.jpg';
import festival2025_0901_014 from './assets/2025/IMG-20250901-WA0014.jpg';

// Import WhatsApp Images
import festival2025_whatsapp from './assets/2025/WhatsApp Image 2025-08-12 at 02.51.28_3a6e59c7.jpg';
import festival2025_whatsapp_0825 from './assets/2025/WhatsApp Image 2025-08-25 at 04.09.21_e8768019.jpg';

// Import 2025 Festival Videos
import festival2025Video from './assets/2025/WhatsApp Video 2025-08-12 at 02.54.02_8fa64b25.mp4';
import festival2025Video_0825_1 from './assets/2025/WhatsApp Video 2025-08-25 at 04.02.25_fec2e3ac.mp4';
import festival2025Video_0825_2 from './assets/2025/WhatsApp Video 2025-08-25 at 04.13.38_eaab353a.mp4';
import festival2025Video_0825_3 from './assets/2025/WhatsApp Video 2025-08-25 at 15.02.04_d10301ac.mp4';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.gallery-item').forEach((item) => {
      observer.observe(item);
    });

    const videoSection = document.querySelector('.video-section');
    if (videoSection) observer.observe(videoSection);

    document.querySelectorAll('.video-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  // Pre-festival gallery images - NO ALT TEXT
  const preFestivalImages = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
  ];

  // 2025 Festival Images - ALL IMAGES INCLUDING NEW ONES
  const festival2025Images = [
    // August 12, 2025 images
    { id: 1, src: festival2025_001 },
    { id: 2, src: festival2025_002 },
    { id: 3, src: festival2025_003 },
    { id: 4, src: festival2025_004 },
    { id: 5, src: festival2025_005 },
    { id: 6, src: festival2025_006 },
    { id: 7, src: festival2025_007 },
    { id: 8, src: festival2025_008 },
    { id: 9, src: festival2025_009 },
    { id: 10, src: festival2025_010 },
    { id: 11, src: festival2025_011 },
    { id: 12, src: festival2025_012 },
    { id: 14, src: festival2025_014 },
    { id: 15, src: festival2025_015 },
    { id: 16, src: festival2025_016 },
    { id: 17, src: festival2025_017 },
    // September 1, 2025 images
    { id: 18, src: festival2025_0901_004 },
    { id: 19, src: festival2025_0901_005 },
    { id: 20, src: festival2025_0901_006 },
    { id: 21, src: festival2025_0901_007 },
    { id: 22, src: festival2025_0901_008 },
    { id: 23, src: festival2025_0901_009 },
    { id: 24, src: festival2025_0901_010 },
    { id: 25, src: festival2025_0901_011 },
    { id: 26, src: festival2025_0901_012 },
    { id: 27, src: festival2025_0901_013 },
    { id: 28, src: festival2025_0901_014 },
    // WhatsApp images
    { id: 29, src: festival2025_whatsapp },
    { id: 30, src: festival2025_whatsapp_0825 },
  ];

  const localVideos = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src: video4 },
  ];

  // 2025 Festival Videos - ALL VIDEOS
  const festival2025Videos = [
    { id: 1, src: festival2025Video },
    { id: 2, src: festival2025Video_0825_1 },
    { id: 3, src: festival2025Video_0825_2 },
    { id: 4, src: festival2025Video_0825_3 },
  ];

  const youtubeVideos = [
    { id: 4, src: 'https://www.youtube.com/embed/RWwgCXX_Gqc' },
    { id: 5, src: 'https://www.youtube.com/embed/Q5XACeJgp28' },
    { id: 6, src: 'https://www.youtube.com/embed/G4N-GnGAwEQ' },
  ];

  return (
    <div className="gallery-page">
      <section className="page-content">
        <h1 className={isVisible ? 'visible' : ''}>Our Gallery</h1>

        <div className={`gallery-intro ${isVisible ? 'visible' : ''}`}>
          <p>
            Immerse yourself in the vibrant moments from our poetry festivals. Each image captures
            the essence of creativity, connection, and the power of spoken word that defines the
            Vibrations experience.
          </p>
        </div>

        {/* 2025 Festival Section - SIMPLE, NO FANCY BACKGROUND */}
        <div className="gallery-section festival-2025-section">
          <h2 className={isVisible ? 'visible' : ''}>🏆 Vibrations Poetry Festival 2025 - The Inaugural Event! 🏆</h2>
          <div className="festival-celebration-text">
            <p>On Saturday, August 9, 2025, history was made! Our inaugural festival brought together poets, artists, and literature lovers for an unforgettable celebration of the spoken word. Relive the magic, the emotions, and the incredible talent showcased at this landmark event.</p>
          </div>

          {festival2025Images.length > 0 && (
            <>
              <h3 className="subsection-title">Festival Highlights</h3>
              <div className="gallery-grid">
                {festival2025Images.map((image, index) => (
                  <div
                    key={image.id}
                    className="gallery-item"
                    style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                  >
                    <img src={image.src} alt="" />
                  </div>
                ))}
              </div>
            </>
          )}

          {festival2025Videos.length > 0 && (
            <>
              <h3 className="subsection-title">Festival Performance Videos</h3>
              <div className="video-grid">
                {festival2025Videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="video-item"
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                  >
                    <div className="video-container">
                      <div className="video-wrapper">
                        <video controls preload="metadata">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Pre-Festival Images Section */}
        <div className="gallery-section">
          <h2 className={isVisible ? 'visible' : ''}>Behind the Scenes & Preparation</h2>
          <div className="gallery-grid">
            {preFestivalImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
              >
                <img src={image.src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Local Videos Section */}
        <div className="gallery-section video-section">
          <h2 className={isVisible ? 'visible' : ''}>Poetry in Motion</h2>
          <div className="video-grid">
            {localVideos.map((video, index) => (
              <div
                key={video.id}
                className="video-item"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="video-container">
                  <div className="video-wrapper">
                    <video controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Videos Section */}
        <div className="gallery-section">
          <h2 className={isVisible ? 'visible' : ''}>More from YouTube</h2>
          <div className="video-grid">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                className="video-item"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.src}
                    title={`Gallery Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;