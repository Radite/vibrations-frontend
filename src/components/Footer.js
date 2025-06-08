import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setMessageType('');
    
    try {
      // Use absolute URL to your backend on Render
      const response = await fetch('https://vibrations-backend.onrender.com/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Thanks for subscribing to our newsletter!');
        setMessageType('success');
        setEmail('');
      } else {
        if (data.error && data.error.includes('already subscribed')) {
          setMessage('This email is already subscribed to our newsletter.');
        } else {
          setMessage(`Error: ${data.error || 'Something went wrong'}`);
        }
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Connection error. Please try again later.');
      setMessageType('error');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h3>Join Our Community</h3>
          <p>Subscribe to receive updates about our festival, featured poets, and exclusive content.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address" 
                required 
              />
              <input 
                type="submit" 
                value={isLoading ? "Subscribing..." : "Subscribe"} 
                disabled={isLoading}
              />
            </div>
            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}
          </form>
        </div>
        <div className="social-media">
          <h3>Connect With Us</h3>
          <div className="social-icons">
  <a
    href="https://www.instagram.com/vibrationspoetryfestival"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      alt="Instagram"
      width="24"
      height="24"
    />
  </a>
  <a
    href="https://youtube.com/@vibrationspoetryfestival?si=T_OuORVhBIuZzYml"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
      alt="YouTube"
      width="24"
      height="24"
    />
  </a>
  <a
    href="https://www.facebook.com/vibrationspoetryfestival/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
      alt="Facebook"
      width="24"
      height="24"
    />
  </a>
</div>

        </div>
      </div>
      <p className="copyright">&copy; 2025 <span>Vibrations Poetry Festival</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;