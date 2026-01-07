import React from "react";
import "./Contact.css";

export default function Contact() {
  const email = "hello@forgedigital.com";
  const phone = "+1 (800) 123-4567";
  const address = "123 Innovation Drive, Tech City, NY";

  return (
    <div className="contact-page">
      {/* 1. HERO HEADER */}
      <header className="contact-hero">
        <div className="container">
          <span className="contact-badge pop">FORGING NEW PARTNERSHIPS</span>
          <h1 className="hero-title slide-up">
            Ready to <span className="neon-text">Evolve</span> Your Stack?
          </h1>
          <p className="hero-subtitle fade-in">
            Connect directly with our engineering lead. Our raw data is below for manual contact, or use the one-click protocols to launch an instant session.
          </p>
        </div>
      </header>

      {/* 2. DIRECT ACTION MATRIX (Visible Info + Links) */}
      <section className="contact-main container">
        <div className="action-grid">
          
          {/* EMAIL PROTOCOL */}
          <div className="action-card gmail">
            <span className="action-icon">✉</span>
            <div className="action-content">
              <h4>Email Consultation</h4>
              <p className="raw-data">{email}</p>
              <a href={`mailto:${email}`} className="action-button">
                Open In Gmail →
              </a>
            </div>
          </div>

          {/* WHATSAPP PROTOCOL */}
          <div className="action-card whatsapp">
            <span className="action-icon">💬</span>
            <div className="action-content">
              <h4>WhatsApp Direct</h4>
              <p className="raw-data">{phone}</p>
              <a href={`https://wa.me/18001234567`} target="_blank" rel="noreferrer" className="action-button">
                Start Chat →
              </a>
            </div>
          </div>

          {/* MAPS PROTOCOL */}
          <div className="action-card maps">
            <span className="action-icon">📍</span>
            <div className="action-content">
              <h4>Global HQ</h4>
              <p className="raw-data">{address}</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="action-button">
                View On Maps →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STATUS STRIP */}
      <section className="status-strip container">
        <div className="live-status-bar">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>SYSTEMS ONLINE // EST RESPONSE TIME: <strong>&lt; 1 HOUR</strong></span>
          </div>
        </div>
      </section>

      {/* 4. FINAL MAP VISUAL */}
      <section className="contact-map-area container">
        <div className="map-placeholder">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
            alt="Global Digital Network" 
            className="world-map-img"
          />
          <div className="map-overlay">
            <h3>Forged Remotely.</h3>
            <p>Deployed Globally.</p>
          </div>
        </div>
      </section>
    </div>
  );
}