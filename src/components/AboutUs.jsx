import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* 1. ANIMATED HERO SECTION */}
      <header className="about-hero">
        <div className="hero-glow-bg"></div>
        <div className="container hero-flex">
          <div className="hero-text-content">
            <span className="about-badge fade-in">Our Journey</span>
            <h1 className="about-title slide-up">
              Engineering the <span className="neon-text">Impossible</span> Since 2019.
            </h1>
            <p className="about-sub fade-in-delayed">
              We aren't just another agency. We are a high-performance lab where 
              ambitious ideas are forged into market-leading digital products.
            </p>
            <div className="hero-stats-row pop-in">
              <div className="mini-stat"><strong>180+</strong><span>Builds</span></div>
              <div className="mini-stat"><strong>99%</strong><span>Uptime</span></div>
              <div className="mini-stat"><strong>24/7</strong><span>Support</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE STORY SECTION (Interactive Grid) */}
      <section className="about-story container">
        <div className="story-grid">
          <div className="story-visuals">
             <div className="main-frame">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="story-img" />
                <div className="floating-experience">6+ Years of Grit</div>
             </div>
             <div className="sub-frame">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Meeting" />
             </div>
          </div>

          <div className="story-text">
            <h2 className="section-title">The Blueprint</h2>
            <p className="lead">What started as a three-person dev shop in a garage has evolved into a global powerhouse of digital innovation.</p>
            <p>We believe that code is an art form. Every line we write is designed to be scalable, secure, and human-centric. We don't just build features; we build legacies for our clients.</p>
            
            <div className="mission-vision-v2">
              <div className="mv-item">
                <i className="mv-icon">🎯</i>
                <div>
                  <h4>Our Mission</h4>
                  <p>To eliminate digital friction and empower brands through flawless engineering.</p>
                </div>
              </div>
              <div className="mv-item">
                <i className="mv-icon">🚀</i>
                <div>
                  <h4>Our Vision</h4>
                  <p>To set the global gold standard for AI-integrated software development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (Cards with Hover Effects) */}
      <section className="about-values">
        <div className="container">
          <h2 className="center-title">What Drives Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Radical Transparency</h3>
              <p>No jargon. No hidden fees. Just honest communication and clear roadmaps.</p>
            </div>
            <div className="value-card active">
              <div className="value-number">02</div>
              <h3>Velocity & Precision</h3>
              <p>We move fast, but we never break the things that matter. Quality is non-negotiable.</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Future-Proofing</h3>
              <p>We build with tomorrow’s tech, ensuring your product stays relevant for years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOGO MARQUEE */}
      <section className="logo-marquee-section">
        <p className="marquee-label">POWERING TEAMS AT</p>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta_Platforms_Inc._logo.svg" alt="Meta"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"/>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="about-footer-cta">
        <div className="cta-box">
          <h2>Ready to write your own story?</h2>
          <p>Let's build the next big thing together. Our experts are standing by.</p>
          <div className="cta-actions">
            <button className="btn-neon">Launch My Project</button>
            <button className="btn-outline-white">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
}