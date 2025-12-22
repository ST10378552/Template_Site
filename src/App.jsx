import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components - Ensure folder and file names match EXACTLY
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

// Import Global Styles
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Functions to handle menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="app-wrapper">
        {/* PREMIUM NAVIGATION */}
        <header className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <h1 className="logo">STUDIO<span className="dot">.</span></h1>
            </Link>
            
            {/* HAMBURGER ICON (Visible only on mobile) */}
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            {/* NAV LINKS (Desktop & Mobile Overlay) */}
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
              <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
              <Link to="/contact" className="nav-cta" onClick={closeMenu}>Work With Us</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="content-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* MINIMAL FOOTER */}
        <footer className="simple-footer">
          <div className="container">
            <p>&copy; 2025 YourStudio. Built with Technical Grit.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;