import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* 1. HERO HEADER */}
      <header className="contact-hero">
        <div className="container">
          <span className="contact-badge pop">Available for New Projects</span>
          <h1 className="hero-title slide-up">
            Let’s Build the <span className="neon-text">Next</span> Big Thing.
          </h1>
          <p className="hero-subtitle fade-in">
            Whether you have a fully-baked idea or just a spark of inspiration, 
            our engineers are ready to help you launch.
          </p>
        </div>
      </header>

      {/* 2. CONTACT GRID */}
      <section className="contact-main container">
        <div className="contact-wrapper">
          
          {/* LEFT: INFO PANELS */}
          <div className="contact-info-panel">
            <div className="info-card">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@yourstudio.com</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call the Studio</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Global HQ</h4>
                <p>123 Innovation Drive, Tech City, NY</p>
              </div>
            </div>

            <div className="live-status-card">
              <div className="status-header">
                <span className="status-dot"></span>
                <span>Current Response Time</span>
              </div>
              <strong>&lt; 2 Hours</strong>
            </div>
          </div>

          {/* RIGHT: CYBER FORM */}
          <div className="contact-form-container">
            <form className="cyber-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="input-group">
                <label>Project Type</label>
                <select>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Automation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>How can we help?</label>
                <textarea rows="5" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="submit" className="btn-submit-glow">
                Send Message <span>→</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. MAP/IMAGE SECTION */}
      <section className="contact-map-area container">
        <div className="map-placeholder">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
            alt="World Map Connection" 
            className="world-map-img"
          />
          <div className="map-overlay">
            <h3>We Work Globally.</h3>
            <p>From Durban to San Francisco, we serve clients in 15+ countries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}