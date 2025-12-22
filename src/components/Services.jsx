import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">
      {/* 1. DYNAMIC HERO */}
      <header className="services-hero">
        <div className="container">
          <span className="services-badge pop">Our Capabilities</span>
          <h1 className="hero-title slide-up">
            Solutions That <span className="neon-text">Scale</span> <br /> 
            With Your Ambition.
          </h1>
          <p className="hero-subtitle fade-in">
            We don't just build software; we build revenue engines. From initial 
            strategy to global deployment, we handle the heavy lifting.
          </p>
        </div>
        <div className="hero-mesh-gradient"></div>
      </header>

      {/* 2. INTERACTIVE SERVICE GRID */}
      <section className="services-grid-container container">
        <div className="services-main-grid">
          
          {/* Service 1 */}
          <div className="service-card-v3">
            <div className="card-top">
              <span className="service-icon">⚡</span>
              <span className="service-tag">Strategy</span>
            </div>
            <h3>Consulting & <br/> Digital Strategy</h3>
            <p>We analyze your market, identify bottlenecks, and build a technical roadmap to dominate your competition.</p>
            <ul className="service-list">
              <li>Market Analysis</li>
              <li>Tech Stack Audit</li>
              <li>ROI Projections</li>
            </ul>
            <div className="card-footer">
              <button className="btn-learn">Learn More</button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card-v3 active">
            <div className="card-top">
              <span className="service-icon">🌐</span>
              <span className="service-tag">Development</span>
            </div>
            <h3>Web & App <br/> Engineering</h3>
            <p>Custom-built, high-performance platforms. We specialize in React, Next.js, and complex backend architecture.</p>
            <ul className="service-list">
              <li>SaaS Platforms</li>
              <li>E-Commerce</li>
              <li>Native Mobile Apps</li>
            </ul>
            <div className="card-footer">
              <button className="btn-learn">Learn More</button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card-v3">
            <div className="card-top">
              <span className="service-icon">🎯</span>
              <span className="service-tag">Growth</span>
            </div>
            <h3>Marketing & <br/> Performance Branding</h3>
            <p>Digital marketing that actually converts. We combine data-driven SEO with world-class visual identity.</p>
            <ul className="service-list">
              <li>SEO Domination</li>
              <li>Brand Identity</li>
              <li>Conversion Tracking</li>
            </ul>
            <div className="card-footer">
              <button className="btn-learn">Learn More</button>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card-v3">
            <div className="card-top">
              <span className="service-icon">🛠️</span>
              <span className="service-tag">Systems</span>
            </div>
            <h3>AI & Customer <br/> Support Solutions</h3>
            <p>Automate your workflow with custom AI agents and 24/7 automated customer success pipelines.</p>
            <ul className="service-list">
              <li>AI Chatbots</li>
              <li>Workflow Automation</li>
              <li>CRM Integration</li>
            </ul>
            <div className="card-footer">
              <button className="btn-learn">Learn More</button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. VISUAL BREAK SECTION */}
      <section className="services-visual-break">
        <div className="container flex-row">
          <div className="visual-left">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data Visualization" className="tilt-img" />
          </div>
          <div className="visual-right">
             <h2>The <span className="neon-text">1%</span> Advantage.</h2>
             <p>Our code is written to be 30% faster than industry standards. We optimize for every millisecond because speed is the silent killer of conversion.</p>
             <div className="metric-row">
                <div className="metric"><strong>0.4s</strong> <span>Avg. Load Time</span></div>
                <div className="metric"><strong>100%</strong> <span>Security Rating</span></div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING / START SECTION */}
      <section className="pricing-cta container">
         <div className="cta-gradient-box">
            <h2>Ready to Build?</h2>
            <p>Flexible engagement models from monthly retainers to fixed-price projects.</p>
            <button className="btn-neon-glow">Get a Custom Quote</button>
         </div>
      </section>
    </div>
  );
}