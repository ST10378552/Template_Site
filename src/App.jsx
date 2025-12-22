import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components - Ensure file names match EXACTLY (Case-Sensitive)
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

// Import Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* PREMIUM NAVIGATION */}
        <header className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo-link">
              <h1 className="logo">STUDIO<span className="dot">.</span></h1>
            </Link>
            
            <nav className="nav-links">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/services" className="nav-item">Services</Link>
              <Link to="/contact" className="nav-cta">Work With Us</Link>
            </nav>
          </div>
        </header>

        {/* PAGE ROUTES */}
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