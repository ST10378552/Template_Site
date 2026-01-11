import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Added Helmet import
import "./Services.css";

export default function Services() {
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="services-root">
      {/* ADDED SEO HELMET BLOCK */}
      <Helmet>
        <title>Our Protocol | Static Architecture & Edge Deployment</title>
        <meta name="description" content="Explore the Forge Protocol: Hand-coded React architecture, global edge deployment on Vercel, and zero-database security for maximum performance." />
      </Helmet>

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="aura-purple"></div>
      <div className="aura-mint"></div>

      {/* --- HERO SECTION --- */}
      <section className="services-hero reveal-on-scroll">
        <div className="container">
          <div className="hero-split">
            <div className="hero-content">
              <span className="eyebrow-tag">02 // CAPABILITIES</span>
              <h1 className="editorial-header">
                ELITE <br/> <span className="gradient-text">STATIC</span> <br/> FORGING
              </h1>
              <p className="hero-subline">
                We strip away the bloat. Using pure React architecture, we build 
                high-velocity digital fortresses that load instantly and never break.
              </p>
            </div>
            <div className="hero-visual">
              <div className="visual-frame">
                {/* Added descriptive alt text for SEO */}
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Forge Digital cyber security and elite coding infrastructure" />
                <div className="frame-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE GRID --- */}
      <section className="services-grid-container">
        <div className="container">
          <div className="modern-grid">
            <div className="service-feature reveal-on-scroll">
              <div className="feature-top">
                <span className="num">01</span>
                <h3>IMPERVIOUS <br/> ARCHITECTURE</h3>
              </div>
              <div className="feature-body">
                <p>No databases. No vulnerabilities. We build 100% static ecosystems that are invisible to common attack vectors.</p>
                {/* Added descriptive alt text for SEO */}
                <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80" alt="Secure zero-database static web architecture logic" />
              </div>
              <button className="learn-more" onClick={scrollToContact}>ENQUIRE_NOW</button>
            </div>

            <div className="service-feature reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="feature-top">
                <span className="num">02</span>
                <h3>EDGE-FIRST <br/> SPEED</h3>
              </div>
              <div className="feature-body">
                <p>Your site lives on the Vercel global edge. Content is served from the closest node to your user for zero latency.</p>
                {/* Added descriptive alt text for SEO */}
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" alt="Global edge computing network visualization for Vercel deployment" />
              </div>
              <button className="learn-more" onClick={scrollToContact}>ENQUIRE_NOW</button>
            </div>

            <div className="service-feature reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="feature-top">
                <span className="num">03</span>
                <h3>BESPOKE <br/> VISUALS</h3>
              </div>
              <div className="feature-body">
                <p>No templates. We hand-code every pixel in VS Code to ensure your brand stands out with high-end digital aesthetics.</p>
                {/* Added descriptive alt text for SEO */}
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80" alt="Bespoke digital design and high-end web aesthetics hand-coded in VS Code" />
              </div>
              <button className="learn-more" onClick={scrollToContact}>ENQUIRE_NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECIFICATION (THE TABLE) --- */}
      <section className="tech-spec reveal-on-scroll">
        <div className="container">
          <div className="spec-grid">
            <div className="spec-info">
              <h2 className="spec-title">THE <span>FORGE</span> <br/> PROTOCOL</h2>
              <p className="spec-lead">
                Every project we forge follows a strict technical blueprint. 
                We build pure, optimized code in React for maximum security.
              </p>
              <div className="stats-row">
                  <div className="stat-box">
                    <strong className="neon-text">SUB-1S</strong>
                    <span>LOAD_VELOCITY</span>
                  </div>
                  <div className="stat-box">
                    <strong className="neon-text">100%</strong>
                    <span>UPTIME_GAUGE</span>
                  </div>
              </div>
            </div>
            <div className="matrix-table">
              <div className="matrix-row"><span>Architecture</span><strong>React Static / JS</strong></div>
              <div className="matrix-row"><span>Development</span><strong>Visual Studio Code</strong></div>
              <div className="matrix-row"><span>Deployment</span><strong>Vercel Edge Network</strong></div>
              <div className="matrix-row"><span>Security</span><strong>AES-256 / SSL-E</strong></div>
              <div className="matrix-row"><span>Logic Layer</span><strong>Pure JavaScript</strong></div>
              <div className="matrix-row"><span>Data Layer</span><strong>Zero-Database Shift</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <footer className="services-footer reveal-on-scroll">
        <div className="container">
          <h2 className="editorial-header-small">READY TO <span className="mint-text">FORGE?</span></h2>
          <button className="btn-heavy-cyan" onClick={scrollToContact}>INITIALIZE_BUILD</button>
        </div>
      </footer>
    </div>
  );
}