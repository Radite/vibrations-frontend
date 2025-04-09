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

const Gallery = () => {
  // State to control animation delays when components are in view
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);

    // Optional: Add intersection observer for more advanced animations
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

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach((item) => {
      observer.observe(item);
    });

    // Observe video section
    const videoSection = document.querySelector('.video-section');
    if (videoSection) {
      observer.observe(videoSection);
    }

    return () => {
      // Clean up observer on component unmount
      observer.disconnect();
    };
  }, []);

  // Gallery images data with captions using the alt text
  const galleryImages = [
    { id: 1, src: image1, alt: '' },
    { id: 2, src: image2, alt: '' },
    { id: 3, src: image3, alt: '' },
    { id: 4, src: image4, alt: 'Canute Lawrence receives his International Impact Book Awards trophy from Nim Stant, Founder & CEO – International Impact Book Awards' },
    { id: 6, src: image6, alt: '' },
    { id: 7, src: image7, alt: '' },
    { id: 8, src: image8, alt: 'Marguerite C. Anderson captivates audiences at the 2nd Jamaica Brew Festival'    },
    { id: 9, src: image9, alt: '' },
    { id: 10, src: image10, alt: '' },
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

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${0.3 * (index + 1)}s` }}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                {/* Caption with white text */}
                <p className="gallery-caption white-text">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={`video-section ${isVisible ? 'visible' : ''}`}>
          <h2>Festival Highlights</h2>
          <p>
            Experience the passion and artistry of Vibrations Poetry Festival through our curated video highlights.
            Feel the energy of live performances and the intimate moments that make our festival unique.
          </p>
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Festival Highlights Video"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Gallery;