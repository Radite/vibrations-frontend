import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// Import the logo directly
import logo from '../assets/logo.png';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <span 
        className="hamburger"
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        onClick={toggleSidebar}
      >
        &#9776;
      </span>
      <div className="logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Vibrations Poetry Festival Logo" 
            className="logo-image"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;