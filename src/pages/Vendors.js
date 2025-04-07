import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Vendors.css';
import './global-hero.css'; // Import global hero CSS

// Import any components you might need
import Sidebar from '../components/Sidebar';

const Vendors = () => {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    description: '',
    special_requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.business_name || !formData.contact_name || !formData.email || !formData.phone || !formData.description) {
      setSubmitStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Create template parameters for EmailJS
    const templateParams = {
      business_name: formData.business_name,
      contact_name: formData.contact_name,
      email: formData.email,
      phone: formData.phone,
      description: formData.description,
      special_requests: formData.special_requests || 'None',
      to_email: 'joshuameghoo2@gmail.com',
      subject: 'Vendor Application: Vibrations Poetry Festival'
    };
    
    // Log parameters for debugging in console only
    console.log('Sending vendor application:', templateParams);
    
    // Send email using EmailJS
    emailjs.send(
      'service_gre9op6',      // Your EmailJS service ID
      'template_av25rc5',     // Your EmailJS template ID (you might want to create a new template for vendors)
      templateParams,
      'qDixnNBz5aFVI9l49'     // Your EmailJS user ID
    )
    .then((response) => {
      console.log('EmailJS SUCCESS:', response);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your application! We will review your submission and contact you soon.' 
      });
      // Reset form
      setFormData({
        business_name: '',
        contact_name: '',
        email: '',
        phone: '',
        description: '',
        special_requests: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again later or contact us directly.' 
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="vendors-page">
      <Sidebar />
      
      <div className="vendors-main">
        
        {/* Hero Section - Updated to use global hero styles */}
        <section className="site-hero">
          <div className="site-hero-content">
            <h1>Cultural Marketplace</h1>
            <p>Join our vibrant community of artisans, craftspeople, and cultural entrepreneurs showcasing authentic Caribbean creativity</p>
          </div>
        </section>
        
        {/* About Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Become a Vendor</h2>
          </div>
          <div className="vendors-section-content">
            <p>The Vibrations Poetry Festival Cultural Marketplace is a celebration of Caribbean craftsmanship, artistry, and entrepreneurship. We invite vendors who embody the spirit of the islands to showcase their unique offerings to our diverse audience of art enthusiasts, cultural connoisseurs, and poetry lovers.</p>
            <p>Selected vendors will benefit from high visibility at our premium event space, promotional opportunities through our festival marketing channels, and direct access to a targeted audience passionate about authentic cultural experiences.</p>
          </div>
        </section> 
        
        {/* Application Form */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Vendor Application</h2>
          </div>
          
          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="vendors-form-container">
            <form onSubmit={handleSubmit}>
              <div className="vendors-form-group">
                <label htmlFor="business_name">Business Name</label>
                <input 
                  type="text" 
                  id="business_name" 
                  name="business_name" 
                  value={formData.business_name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="vendors-form-group">
                <label htmlFor="contact_name">Contact Person</label>
                <input 
                  type="text" 
                  id="contact_name" 
                  name="contact_name" 
                  value={formData.contact_name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="vendors-form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="vendors-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="vendors-form-group">
                <label htmlFor="description">Description of Products/Services</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="vendors-form-group">
                <label htmlFor="special_requests">Special Requests or Requirements</label>
                <textarea 
                  id="special_requests" 
                  name="special_requests"
                  value={formData.special_requests}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <input 
                type="submit" 
                value={isSubmitting ? "Submitting..." : "Submit Application"} 
                disabled={isSubmitting}
                className="vendors-btn"
              />
            </form>
            
            <div className="vendors-payment-section">
              <p>After your application is approved, you will receive instructions to secure your vendor spot with payment.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Vendors;