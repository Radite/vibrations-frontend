import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EntryForm.css';

const EntryForm = () => {
  const { competitionId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    poemTitle: '',
    poemText: '',
    bio: '',
    hasPublishedBefore: false,
    heardAboutUs: '',
    agreeToTerms: false
  });
  
  const [competitionDetails, setCompetitionDetails] = useState({
    title: '',
    requirements: 'Student, 14 years and older.',
    deadline: 'March 31, 2025'
  });
  
  useEffect(() => {
    // Set page title
    document.title = "Entry Form - Vibrations Poetry Festival";
    
    // This would normally come from an API, but for this example we'll hardcode based on the competitionId
    if (competitionId === 'spring') {
      setCompetitionDetails({
        title: 'Spring Verse Challenge',
        requirements: 'Open to all poets ages 18+. Submit 1-3 original works not exceeding 40 lines each.',
        deadline: 'April 30, 2025 at 11:59 PM EST'
      });
    } else if (competitionId === 'summer') {
      setCompetitionDetails({
        title: 'Summer Sonnet Slam',
        requirements: 'Open to poets under 30. Submit one original sonnet in any traditional form.',
        deadline: 'July 15, 2025 at 11:59 PM EST'
      });
    }
  }, [competitionId]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Normally would send this data to an API endpoint
    alert('Thank you for your submission!');
  };
  
  return (
    <div className="entry-form-container">
      {/* Hero Section */}
      <section className="entry-form-hero">
        <div className="entry-form-hero-content">
          <h1>Submit Your Work</h1>
          <h2>{competitionDetails.title}</h2>
          <p>Share your poetic voice with the world</p>
        </div>
      </section>
      
      <section className="entry-form-content">
        <div className="entry-form-info-panel">
          <h3>Competition Details</h3>
          <div className="entry-detail-item">
            <strong>Requirements</strong>
            <p>{competitionDetails.requirements}</p>
          </div>
          <div className="entry-detail-item">
            <strong>Deadline</strong>
            <p>{competitionDetails.deadline}</p>
          </div>
          <div className="entry-detail-item">
            <strong>Entry Fee</strong>
            <p>$20 USD (payable after form submission)</p>
          </div>
        </div>
        
        <form className="poetry-entry-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                min="12"
                max="120"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Mailing Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="state">State/Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zipCode">Zip/Postal Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Poem Submission</h3>
            
            <div className="form-group">
              <label htmlFor="poemTitle">Poem Title *</label>
              <input
                type="text"
                id="poemTitle"
                name="poemTitle"
                value={formData.poemTitle}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="poemText">Poem Text *</label>
              <textarea
                id="poemText"
                name="poemText"
                value={formData.poemText}
                onChange={handleChange}
                rows="10"
                required
                placeholder="Type or paste your poem here. Please ensure it adheres to the line count requirements."
              ></textarea>
              <div className="form-hint">For multiple poems, please submit separate entries.</div>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Additional Information</h3>
            
            <div className="form-group">
              <label htmlFor="bio">Brief Bio (150 words max) *</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Tell us a bit about yourself and your work as a poet."
              ></textarea>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="hasPublishedBefore"
                name="hasPublishedBefore"
                checked={formData.hasPublishedBefore}
                onChange={handleChange}
              />
              <label htmlFor="hasPublishedBefore">I have been published before</label>
            </div>
            
            <div className="form-group">
              <label htmlFor="heardAboutUs">How did you hear about this competition?</label>
              <select
                id="heardAboutUs"
                name="heardAboutUs"
                value={formData.heardAboutUs}
                onChange={handleChange}
              >
                <option value="">Please select</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend or Colleague</option>
                <option value="website">Our Website</option>
                <option value="email">Email Newsletter</option>
                <option value="event">Poetry Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-section">
            <div className="form-group checkbox-group terms-checkbox">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                I confirm this is my original work and I agree to the competition <Link to="/terms">terms and conditions</Link> *
              </label>
            </div>
          </div>
          
          <div className="entry-form-buttons">
            <button type="submit" className="competitions-btn">Submit Entry</button>
            <Link to="/competitions" className="competitions-btn competitions-btn-outline">Cancel</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EntryForm;