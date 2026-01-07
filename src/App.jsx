import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Import your components
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

// Global Styles
import './App.css';

// Automatically scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo(0, 0); 
    // Set Document Title for SEO
    document.title = "ForgeDigital";
  }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        {/* PREMIUM NAVIGATION */}
        <header className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <h1 className="logo">FORGE<span className="cyan-glow">DIGITAL</span></h1>
            </Link>
            
            {/* MOBILE HAMBURGER */}
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            {/* NAV LINKS */}
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
              <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
              <Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact</Link>
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
            <p>&copy; 2026 FORGE DIGITAL. Built with Technical Grit.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;