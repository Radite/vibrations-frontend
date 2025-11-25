import React, { useState } from 'react';
import './SubmitReview.css';
import './global-hero.css'; // Import global hero CSS

const SubmitReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    review: '',
    rating: 5,
    email: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleRatingChange = (newRating) => {
    setFormData(prevState => ({
      ...prevState,
      rating: newRating
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Show success message
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      position: '',
      review: '',
      rating: 5,
      email: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  const renderRatingSelector = () => {
    return (
      <div className="rating-selector">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star}
            className={`star ${star <= formData.rating ? 'filled' : ''}`}
            onClick={() => handleRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  
  return (
    <div className="submit-review-page">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Share Your Experience</h1>
          <p>Tell us about your time at Vibrations Poetry Festival</p>
        </div>
      </section>
      
      {/* Review Form Section */}
      <section className="form-container">
        {submitted ? (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <h3>Thank You for Your Review!</h3>
            <p>Your feedback helps us improve Vibrations Poetry Festival experience.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="position">How would you describe yourself?</label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="e.g. Poet, Educator, Literary Enthusiast"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <small>Your email will not be published with your review</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="rating">Your Rating</label>
              {renderRatingSelector()}
            </div>
            
            <div className="form-group">
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows="6"
                placeholder="Share your thoughts about the festival, the performances, workshops, or anything else you'd like to highlight..."
                required
              />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn">Submit Your Review</button>
            </div>
          </form>
        )}
      </section>
      
      {/* Back to Reviews Section */}
      <section className="back-section">
        <a href="/reviews" className="back-link">
          <span className="back-arrow">←</span> Back to Reviews
        </a>
      </section>
    </div>
  );
};

export default SubmitReview;