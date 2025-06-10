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

  const galleryImages = [
    { id: 1, src: image1, alt: '' },
    { id: 2, src: image2, alt: '' },
    { id: 3, src: image3, alt: '' },
    {
      id: 4,
      src: image4,
      alt: 'Canute Lawrence receives his International Impact Book Awards trophy from Nim Stant, Founder & CEO – International Impact Book Awards',
    },
    { id: 6, src: image6, alt: '' },
    { id: 7, src: image7, alt: '' },
    {
      id: 8,
      src: image8,
      alt: 'Marguerite C. Anderson captivates audiences at the 2nd Jamaica Brew Festival',
    },
    { id: 9, src: image9, alt: '' },
    { id: 10, src: image10, alt: '' },
  ];

  const localVideos = [
    {
      id: 1,
      src: video1,
    },
    {
      id: 2,
      src: video2,
    },
    {
      id: 3,
      src: video3,
    },
  ];

  const youtubeVideos = [
    {
      id: 4,
      src: 'https://www.youtube.com/embed/RWwgCXX_Gqc',
    },
    {
      id: 5,
      src: 'https://www.youtube.com/embed/Q5XACeJgp28',
    },
    {
      id: 6,
      src: 'https://www.youtube.com/embed/G4N-GnGAwEQ',
    },
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

        {/* Images Section */}
        <div className="gallery-section">
          <h2 className={isVisible ? 'visible' : ''}>Festival Moments</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
              >
                <div className="image-container">
                  <img src={image.src} alt={image.alt} />
                  {image.alt && (
                    <p className="gallery-caption white-text">{image.alt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Videos Section */}
        <div className="gallery-section video-section">
          <h2 className={isVisible ? 'visible' : ''}>Videos</h2>
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
                title={video.title || `Gallery Video ${index + 1}`} // Add this line
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