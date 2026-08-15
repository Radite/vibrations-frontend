import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Vendors.css'; // Reusing the Vendors CSS
import './global-hero.css'; // Import global hero CSS

// Import any components you might need
import Sidebar from '../components/Sidebar';
import guidelinesData from '../data/vendorGuidelines.json';

const VendorGuidelines = () => {
  const {
    heroTitle, heroSubtitle, overviewText, guidelinesBody,
    applicationProcessText, applicationSteps, faqBody, contactEmail, contactPhone
  } = guidelinesData;

  return (
    <div className="vendors-page">
      <Sidebar />

      <div className="vendors-main">

        {/* Hero Section */}
        <section className="site-hero">
          <div className="site-hero-content">
            <h1>{heroTitle}</h1>
            <p>{heroSubtitle}</p>
          </div>
        </section>

        {/* Guidelines Overview Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Participation Guidelines</h2>
          </div>
          <div className="vendors-section-content">
            <p>{overviewText}</p>
          </div>

          {/* Guidelines Content */}
          <div className="vendors-form-container">
            <div className="vendors-section-content">
              <ReactMarkdown>{guidelinesBody}</ReactMarkdown>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Application Process</h2>
          </div>
          <div className="vendors-section-content">
            <p>{applicationProcessText}</p>

            <div className="vendors-features-container">
              {applicationSteps.map((step) => (
                <div className="vendors-feature" key={step.title}>
                  <i className={step.icon}></i>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>

            <div className="vendors-payment-section">
              <p>Ready to showcase your cultural products at Vibrations Poetry Festival?</p>
              <a href="/vendors" className="vendors-btn">Apply Now</a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="vendors-form-container">
            <div className="vendors-section-content">
              <ReactMarkdown>{faqBody}</ReactMarkdown>
            </div>

            <div className="vendors-payment-section">
              <p>Have additional questions? Contact our vendor coordinator:</p>
              <p><strong>Email:</strong> {contactEmail}</p>
              <p><strong>Phone:</strong> {contactPhone}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorGuidelines;
