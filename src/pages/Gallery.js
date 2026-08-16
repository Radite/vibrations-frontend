import React, { useEffect, useState } from 'react';
import './Gallery.css';

// Every file dropped into src/data/gallery via the CMS is picked up automatically.
const galleryContext = require.context('../data/gallery', false, /\.json$/);

const galleryItems = galleryContext
  .keys()
  .map((key) => galleryContext(key))
  .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));

const bySection = (section) => galleryItems.filter((item) => item.section === section);

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

  const renderPhotoGrid = (items) => (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div
          key={item.image}
          className="gallery-item"
          style={{ animationDelay: `${0.3 * (index + 1)}s` }}
        >
          <img src={item.image} alt={item.caption || ''} />
        </div>
      ))}
    </div>
  );

  const renderVideoGrid = (items) => (
    <div className="video-grid">
      {items.map((item, index) => (
        <div
          key={item.mediaType === 'YouTube Video' ? item.youtubeUrl : item.video}
          className="video-item"
          style={{ animationDelay: `${0.2 * (index + 1)}s` }}
        >
          {item.mediaType === 'YouTube Video' ? (
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={item.youtubeUrl}
                title={item.caption || `Gallery Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="video-container">
              <div className="video-wrapper">
                <video controls preload="metadata">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const festivalHighlights = bySection('Festival Highlights');
  const festivalVideos = bySection('Festival Performance Videos');
  const behindTheScenes = bySection('Behind the Scenes & Preparation');
  const poetryInMotion = bySection('Poetry in Motion');
  const youtubeVideos = bySection('More from YouTube');

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

        {(festivalHighlights.length > 0 || festivalVideos.length > 0) && (
          <div className="gallery-section festival-2025-section">
            <h2 className={isVisible ? 'visible' : ''}>🏆 Vibrations Poetry Festival 2025 - The Inaugural Event! 🏆</h2>
            <div className="festival-celebration-text">
              <p>On Saturday, August 9, 2025, history was made! Our inaugural festival brought together poets, artists, and literature lovers for an unforgettable celebration of the spoken word. Relive the magic, the emotions, and the incredible talent showcased at this landmark event.</p>
            </div>

            {festivalHighlights.length > 0 && (
              <>
                <h3 className="subsection-title">Festival Highlights</h3>
                {renderPhotoGrid(festivalHighlights)}
              </>
            )}

            {festivalVideos.length > 0 && (
              <>
                <h3 className="subsection-title">Festival Performance Videos</h3>
                {renderVideoGrid(festivalVideos)}
              </>
            )}
          </div>
        )}

        {behindTheScenes.length > 0 && (
          <div className="gallery-section">
            <h2 className={isVisible ? 'visible' : ''}>Behind the Scenes & Preparation</h2>
            {renderPhotoGrid(behindTheScenes)}
          </div>
        )}

        {poetryInMotion.length > 0 && (
          <div className="gallery-section video-section">
            <h2 className={isVisible ? 'visible' : ''}>Poetry in Motion</h2>
            {renderVideoGrid(poetryInMotion)}
          </div>
        )}

        {youtubeVideos.length > 0 && (
          <div className="gallery-section">
            <h2 className={isVisible ? 'visible' : ''}>More from YouTube</h2>
            {renderVideoGrid(youtubeVideos)}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
