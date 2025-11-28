import React, { useState } from 'react';
import './EventAlert.css';

const EventAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="event-alert-banner" role="alert" aria-live="polite" aria-atomic="true">
      <div className="alert-content">
        <div className="alert-icon">⏸️</div>
        <div className="alert-message">
          <strong>Event Postponed:</strong> Vibrations Open Mic Night – Virtual Edition (Nature's Fury) has been postponed due to unforeseen circumstances. A new date will be announced soon. Thank you for your understanding and patience!
        </div>
        <button 
          className="alert-close" 
          onClick={() => setIsVisible(false)}
          aria-label="Close alert"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default EventAlert;
