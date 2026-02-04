import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Layout from './components/Layout'; // Import the Layout

// Import all page components
// You'll need to create these components or use placeholders initially
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import PoetryCompetitions from './pages/PoetryCompetitions';
import FestivalYears from './pages/FestivalYears';
import Vendors from './pages/Vendors';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import SubmitReview from './pages/SubmitReview';
import Contact from './pages/Contact'; 
import FestivalPage from './pages/FestivalPage'; 
import DubPoetryBlog from './pages/DubPoetryBlog'
import EntryForm from './pages/EntryForm'
import VendorGuidelines from './pages/VendorGuidelines'
import TicketPurchasePage from './pages/TicketPurchasePage'
import WinnerDetailJane from './pages/WinnerDetailJane'
import CommunityOutreach from './pages/CommunityOutreach'
import ProclamationsBlog from './pages/ProclamationsBlog';
import TanishaBentBlog from './pages/TanishaBentBlog';
import SamuelGordonBlog from './pages/SamuelGordonBlog';


import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/poetry-competitions" element={<PoetryCompetitions />} />
        <Route path="/festival-years" element={<FestivalYears />} />
        <Route path="/festival-page" element={<FestivalPage />} />
        <Route path="/blog/the-rhythm-of-jamaican-dub-poetry" element={<DubPoetryBlog />} />
        <Route path="/entry-form-spring" element={<EntryForm />} />

        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendor-guidelines" element={<VendorGuidelines />} />
        <Route path="/winner-detail-jane" element={<WinnerDetailJane />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/ticket-page" element={<TicketPurchasePage />} />

        <Route path="/submit-review" element={<SubmitReview />} />
        <Route path="/communityoutreach" element={<CommunityOutreach />} />
        <Route path="/blog/proclamations-review" element={<ProclamationsBlog />} />
        <Route path="/blog/tanisha-bent" element={<TanishaBentBlog />} />
      <Route path="/blog/samuel-gordon-witness" element={<SamuelGordonBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;