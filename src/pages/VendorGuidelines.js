import React from 'react';
import './Vendors.css'; // Reusing the Vendors CSS
import './global-hero.css'; // Import global hero CSS

// Import any components you might need
import Sidebar from '../components/Sidebar';

const VendorGuidelines = () => {
  return (
    <div className="vendors-page">
      <Sidebar />
      
      <div className="vendors-main">
        
        {/* Hero Section */}
        <section className="site-hero">
          <div className="site-hero-content">
            <h1>Vendor Guidelines</h1>
            <p>Essential information for all Cultural Marketplace participants</p>
          </div>
        </section>
        
        {/* Guidelines Overview Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Participation Guidelines</h2>
          </div>
          <div className="vendors-section-content">
            <p>Thank you for your interest in joining Vibrations Poetry Festival Cultural Marketplace. To ensure a successful and enriching experience for all vendors and attendees, we've established the following guidelines. Please review them carefully before submitting your application.</p>
          </div>
          
          {/* Guidelines Content */}
          <div className="vendors-form-container">
            <div className="vendors-section-title">
              <h3>Eligibility Criteria</h3>
            </div>
            <div className="vendors-section-content">
              <p>Vibrations Poetry Festival Cultural Marketplace prioritizes vendors who:</p>
              <ul>
                <li>Create handcrafted, original products with cultural significance to the Caribbean region</li>
                <li>Source materials ethically and sustainably</li>
                <li>Incorporate traditional techniques, symbols, or Caribbean heritage elements</li>
                <li>Offer products that align with the festival's literary and cultural themes</li>
                <li>Are based in the Caribbean or have strong Caribbean connections</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Booth Information</h3>
            </div>
            <div className="vendors-section-content">
              <p><strong>Booth Types & Pricing:</strong></p>
              <ul>
                <li><strong>Standard Booth (8' x 8'):</strong> $450 - Includes one 6' table, two chairs, basic signage</li>
                <li><strong>Premium Booth (10' x 10'):</strong> $650 - Includes one 8' table, two chairs, prime location, enhanced signage, social media feature</li>
                <li><strong>Corner Booth (10' x 10'):</strong> $750 - Includes premium features plus corner location with dual-side exposure</li>
              </ul>
              
              <p><strong>Booth Setup & Breakdown:</strong></p>
              <ul>
                <li>Setup: Friday, June 12, 2025 (12:00 PM - 7:00 PM)</li>
                <li>Marketplace Hours: Saturday, June 13 (10:00 AM - 7:00 PM) and Sunday, June 14 (10:00 AM - 6:00 PM)</li>
                <li>Breakdown: Sunday, June 14 (6:30 PM - 9:00 PM)</li>
                <li>All vendors must be fully set up 30 minutes before marketplace opening each day</li>
                <li>Early breakdown is strictly prohibited and may affect future participation eligibility</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Payment & Cancellation Policy</h3>
            </div>
            <div className="vendors-section-content">
              <ul>
                <li>50% non-refundable deposit required within 7 days of application approval</li>
                <li>Remaining balance due by May 1, 2025</li>
                <li>Cancellations before May 1, 2025: 50% of total payment refunded (excluding deposit)</li>
                <li>No refunds for cancellations after May 1, 2025</li>
                <li>Payment methods: Credit card, PayPal, or bank transfer</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Presentation Standards</h3>
            </div>
            <div className="vendors-section-content">
              <ul>
                <li>Professional, high-quality display fixtures and signage required</li>
                <li>All booth elements must be contained within allocated space</li>
                <li>No audio presentations without prior approval</li>
                <li>Products must be clearly priced</li>
                <li>Vendors are encouraged to incorporate cultural elements in their booth design</li>
                <li>Demonstrations of craft techniques are highly encouraged</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Product Standards</h3>
            </div>
            <div className="vendors-section-content">
              <ul>
                <li>All products must be original and handcrafted</li>
                <li>Mass-produced items are not permitted</li>
                <li>Reselling of items created by others is not allowed unless specifically authorized</li>
                <li>Products must reflect authentic Caribbean culture, craftsmanship, or literary themes</li>
                <li>Vendors may only sell items listed and approved in their application</li>
                <li>Food vendors must obtain appropriate health permits and follow all local regulations</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Vendor Responsibilities</h3>
            </div>
            <div className="vendors-section-content">
              <ul>
                <li>Maintain booth staffing during all marketplace hours</li>
                <li>Comply with all local tax, business license, and insurance requirements</li>
                <li>Provide own extension cords, power strips, and any specialty display equipment</li>
                <li>Secure valuables - festival is not responsible for lost, stolen, or damaged items</li>
                <li>Maintain a clean and professional booth space</li>
                <li>Conduct business in an ethical and professional manner</li>
                <li>Participate in vendor survey following the event</li>
              </ul>
            </div>
            
            <div className="vendors-section-title">
              <h3>Marketing Opportunities</h3>
            </div>
            <div className="vendors-section-content">
              <ul>
                <li>All vendors receive a listing in the festival program and website</li>
                <li>Premium and corner booth vendors receive additional social media promotion</li>
                <li>Opportunity to donate products for festival raffle (additional promotion provided)</li>
                <li>Selected vendors may be invited to participate in pre-festival promotional events</li>
                <li>Vendors are encouraged to promote their participation through their own channels</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Application Process Section */}
        <section className="vendors-content-section">
          <div className="vendors-section-title">
            <h2>Application Process</h2>
          </div>
          <div className="vendors-section-content">
            <p>Our selection process is designed to ensure a diverse, high-quality marketplace that enhances the festival experience.</p>
            
            <div className="vendors-features-container">
              <div className="vendors-feature">
                <i className="fa-solid fa-file-lines"></i>
                <h3>Submit Application</h3>
                <p>Complete the vendor application form with detailed product information and high-quality images.</p>
              </div>
              <div className="vendors-feature">
                <i className="fa-solid fa-check-circle"></i>
                <h3>Review Process</h3>
                <p>Applications are reviewed by our selection committee. This process takes 2-3 weeks.</p>
              </div>
              <div className="vendors-feature">
                <i className="fa-solid fa-money-bill"></i>
                <h3>Confirmation</h3>
                <p>Approved vendors receive an acceptance email with payment instructions and next steps.</p>
              </div>
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
              <h3>Can I share a booth with another vendor?</h3>
              <p>Yes, booth sharing is permitted with prior approval. Both vendors must submit separate applications and be approved individually. Please note this request in your application's special requests section.</p>
              
              <h3>Is electricity provided?</h3>
              <p>Basic electricity access is available for an additional fee of $50. Please indicate your electrical needs in the special requests section of your application.</p>
              
              <h3>How are booth locations assigned?</h3>
              <p>Booth locations are assigned based on several factors including booth type, product category, application date, and overall marketplace flow. Premium and corner booth vendors receive priority placement.</p>
              
              <h3>Can I request a specific location?</h3>
              <p>Location preferences can be noted in your application but cannot be guaranteed. We do our best to accommodate requests when possible.</p>
              
              <h3>Is there a waitlist if the marketplace is full?</h3>
              <p>Yes, we maintain a waitlist for qualified vendors. If spots become available, waitlisted vendors will be contacted in the order of their approval.</p>
              
              <h3>What happens in case of inclement weather?</h3>
              <p>The marketplace is primarily located indoors, but in case of severe weather affecting attendance, no refunds will be provided. The festival has contingency plans to ensure vendor and attendee safety.</p>
            </div>
            
            <div className="vendors-payment-section">
              <p>Have additional questions? Contact our vendor coordinator:</p>
              <p><strong>Email:</strong> vendors@vibrationspoetry.com</p>
              <p><strong>Phone:</strong> (876) 555-7890</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorGuidelines;