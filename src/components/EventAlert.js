import React, { useState } from 'react';
import './EventAlert.css';
import bannerData from '../data/banner.json';

const EventAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!bannerData.enabled || !isVisible) return null;

  return (
    <div className="event-alert-banner" role="alert" aria-live="polite" aria-atomic="true">
      <div className="alert-content">
        <div className="alert-icon">{bannerData.icon}</div>
        <div className="alert-message">
          {bannerData.message}
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
