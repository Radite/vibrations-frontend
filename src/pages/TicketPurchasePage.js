import React, { useState } from 'react';
import './TicketPage.css';

const TicketPurchasePage = () => {
  const [selectedTickets, setSelectedTickets] = useState({
    fullFestival: 0,
    weekend: 0,
    singleDay: 0,
    workshopPass: 0
  });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  
  const ticketTypes = [
    {
      id: 'fullFestival',
      name: 'Full Festival Pass',
      description: 'Access to all events, workshops, and performances for all 6 days',
      price: 299,
      originalPrice: 349
    },
    {
      id: 'weekend',
      name: 'Weekend Pass',
      description: 'Access to all events on Saturday and Sunday (June 19-20)',
      price: 149,
      originalPrice: 179
    },
    {
      id: 'singleDay',
      name: 'Single Day Pass',
      description: 'Access to all events for one day of your choice',
      price: 79,
      originalPrice: null
    },
    {
      id: 'workshopPass',
      name: 'Workshop Add-on',
      description: 'Access to all writing workshops (requires any pass)',
      price: 99,
      originalPrice: 129
    }
  ];
  
  const handleTicketChange = (ticketId, change) => {
    const newCount = Math.max(0, selectedTickets[ticketId] + change);
    setSelectedTickets({
      ...selectedTickets,
      [ticketId]: newCount
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const getTotalCost = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + (selectedTickets[ticket.id] * ticket.price);
    }, 0);
  };
  
  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, count) => sum + count, 0);
  };
  
  return (
    <div className="festival-page">
      {/* Hero Section */}
      <section className="site-hero festival-hero">
        <div className="site-hero-content">
          <h1>Get Your Tickets</h1>
          <p>Vibrations Poetry Festival • June 15-20, 2025 • Kingston, Jamaica</p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="festival-content loaded">
        <div className="content-container">
          
          {/* Ticket Selection Section */}
          <div className="ticket-selection">
            <h2>Select Your Tickets</h2>
            <p>Early bird prices available until January 31, 2025</p>
            
            <div className="tickets-container">
              {ticketTypes.map((ticket) => (
                <div className="ticket-item" key={ticket.id}>
                  <div className="ticket-info">
                    <h3>{ticket.name}</h3>
                    <p>{ticket.description}</p>
                    <div className="ticket-price">
                      <span className="current-price">${ticket.price}</span>
                      {ticket.originalPrice && (
                        <span className="original-price">${ticket.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="ticket-quantity">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleTicketChange(ticket.id, -1)}
                      disabled={selectedTickets[ticket.id] === 0}
                    >
                      -
                    </button>
                    <span className="quantity-value">{selectedTickets[ticket.id]}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleTicketChange(ticket.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Customer Information */}
          <div className="customer-info">
            <h2>Your Information</h2>
            <form className="info-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Selected Tickets:</span>
                <span>{getTotalTickets()}</span>
              </div>
              {Object.entries(selectedTickets).map(([id, quantity]) => {
                if (quantity > 0) {
                  const ticket = ticketTypes.find(t => t.id === id);
                  return (
                    <div className="summary-row" key={id}>
                      <span>{ticket.name}:</span>
                      <span>{quantity} × ${ticket.price} = ${quantity * ticket.price}</span>
                    </div>
                  );
                }
                return null;
              })}
              <div className="summary-row total">
                <span>Total:</span>
                <span>${getTotalCost()}</span>
              </div>
            </div>
            
            <button 
              className="btn primary-btn checkout-btn"
              disabled={getTotalTickets() === 0}
            >
              Proceed to Payment
            </button>
            
            <div className="payment-info">
              <p>Secure payment processed by Stripe. You will receive an email confirmation after your purchase.</p>
              <p>Questions? Contact us at <a href="mailto:tickets@vibrationsfestival.com">tickets@vibrationsfestival.com</a></p>
            </div>
          </div>
          

        </div>
      </section>
    </div>
  );
};

export default TicketPurchasePage;