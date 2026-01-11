import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const email = "forgedigital001@gmail.com";
  const phone = "+27 (000) 000-0000"; 
  const address = "Durban, KwaZulu-Natal, South Africa";
  
  const mapsSearchUrl = "https://www.google.com/maps/search/Durban+South+Africa";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* 1. HERO HEADER */}
      <header className="contact-hero">
        <div className="container">
          <span className="contact-badge">FORGING NEW PARTNERSHIPS</span>
          <h1 className="hero-title">
            Ready to <span className="neon-text">Evolve</span> <br/> Your Stack?
          </h1>
          <p className="hero-subtitle">
            Connect directly with our engineering lead. We deploy high-performance static fortresses 
            for innovators. Launch a session via the protocols below.
          </p>
        </div>
      </header>

      {/* 2. DIRECT ACTION MATRIX */}
      <section className="contact-main container">
        <div className="action-grid">
          
          <div className="action-card gmail">
            <span className="action-icon">01</span>
            <div className="action-content">
              <h4>Email Protocol</h4>
              <p className="raw-data">{email}</p>
              <a href={`mailto:${email}`} className="action-button">
                Initialize Mail →
              </a>
            </div>
          </div>

          <div className="action-card whatsapp">
            <span className="action-icon">02</span>
            <div className="action-content">
              <h4>Instant Sync</h4>
              <p className="raw-data">WhatsApp Direct</p>
              <a href={`https://wa.me/27000000000`} target="_blank" rel="noreferrer" className="action-button">
                Start Chat →
              </a>
            </div>
          </div>

          <div className="action-card maps">
            <span className="action-icon">03</span>
            <div className="action-content">
              <h4>Local Node</h4>
              <p className="raw-data">{address}</p>
              <a href={mapsSearchUrl} target="_blank" rel="noreferrer" className="action-button">
                Global GPS →
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
            <span>SYSTEMS ONLINE // EST RESPONSE: <strong>&lt; 1 HOUR</strong></span>
          </div>
        </div>
      </section>

      {/* 4. REPAIRED MAP VISUAL */}
      <section className="contact-map-area container">
        <div className="map-wrapper">
          <iframe 
            title="Durban Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110643.0487574226!2d30.916895847353136!3d-29.84752840509653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa000109ef05%3A0x6bf003463a562095!2sDurban!5e0!3m2!1sen!2sza!4v1715456000000!5m2!1sen!2sza" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-overlay">
            <h3>FORGED IN DURBAN.</h3>
            <p>Global Deployment Capability</p>
          </div>
        </div>
      </section>
    </div>
  );
}