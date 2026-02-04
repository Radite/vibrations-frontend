import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import EventAlert from './EventAlert';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div id="main" style={{ 
        marginLeft: sidebarOpen ? '280px' : '0',
        transition: 'margin-left 0.5s'
      }}>
        {/* Header Component */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <Outlet />

        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;