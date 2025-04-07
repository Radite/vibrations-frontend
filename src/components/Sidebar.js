// Sidebar.js - Updated to accept props instead of using global window object
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <span className="closebtn" onClick={closeSidebar}>&times;</span>
      <div className="bookmark"></div>
      
      <div className="sidebar-header">
        <h3>Vibrations</h3>
        <p>Poetry Festival</p>
      </div>
      
      <div className="divider"></div>
      
      <nav>
        {/* Updated link order */}
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/poetry-competitions" className={location.pathname === '/poetry-competitions' ? 'active' : ''}>
          Poetry Competitions
        </Link>
        <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
          Blog
        </Link>
        <Link to="/festival-years" className={location.pathname === '/festival-years' ? 'active' : ''}>
          Festival Years
        </Link>
        <Link to="/vendors" className={location.pathname === '/vendors' ? 'active' : ''}>
          Call for Vendors
        </Link>
        <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
          Gallery
        </Link>
        <Link to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''}>
          Festival Reviews
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </nav>
      
      <div className="sidebar-footer">
      </div>
    </div>
  );
};

export default Sidebar;
