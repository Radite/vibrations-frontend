import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import './global-hero.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill in all fields.' });
      return;
    }
  
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    // EmailJS expects specific parameter names that match your template variables
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
      to_email: 'joshuameghoo2@gmail.com',
      subject: 'Contact Form: Vibrations Poetry Festival'
    };
    
    // Log the parameters being sent (for debugging only in console)
    console.log('Sending email with params:', templateParams);
  
    emailjs.send(
      'service_gre9op6',      
      'template_9fl904l',     
      templateParams,
      'qDixnNBz5aFVI9l49'     
    )
    .then((response) => {
      console.log('EmailJS SUCCESS:', response);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.' 
      });
      // Debug info only in console, not shown on page
      console.log('Response status:', response.status);
      console.log('Response text:', response.text);
      setFormData({ user_name: '', user_email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      });
      // Debug info only in console, not shown on page
      console.error('Error details:', error.text || error.message);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-page">
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Contact Us</h1>
          <p>Reach out and let's connect about Vibrations Poetry Festival</p>
        </div>
      </section>

      <section className="page-content">
        <div className="contact-container">
          <h2>Get in Touch</h2>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <input 
              type="submit" 
              value={isSubmitting ? 'Sending...' : 'Send Message'} 
              disabled={isSubmitting}
            />
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              📧 vibrationspoetryfestival@gmail.com
            </div>
            <div className="contact-info-item">
              📍 P.O. Box 2232 Liguanea Post Mall, 115 Hope Road, Kingston 6
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;