import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-root">
      {/* 1. HERO SECTION */}
      <header className="hero-services">
        <div className="container">
          <span className="badge-outline">Solutions // 2026</span>
          <h1 className="display-heavy">
            Forging <br />
            <span className="text-cyan">Digital Assets</span>
          </h1>
          <p style={{ maxWidth: '600px', color: '#888', fontSize: '1.2rem', marginTop: '30px' }}>
            We eliminate technical debt. Forge Digital builds static infrastructure 
            designed for 100% uptime and sub-second global response.
          </p>
        </div>
      </header>

      {/* 2. THE CAPABILITY STACK */}
      <section className="container">
        <div className="stack-grid">
          {/* Service 01 */}
          <div className="forge-card">
            <span className="card-num">/ 01</span>
            <h3>Static <br/> Ecosystems</h3>
            <p>We build unbreakable sites using Next.js and TypeScript. No databases to hack, no plugins to fail.</p>
            <div className="card-img-wrap">
              <img src="https://www.flashmobcomputing.org/media/2022/01/StaticCodeAnalysis.jpg" alt="Infrastructure" />
            </div>
          </div>

          {/* Service 02 */}
          <div className="forge-card">
            <span className="card-num">/ 02</span>
            <h3>Edge <br/> Computing</h3>
            <p>Deploying directly to the global edge network. Your site loads instantly in every corner of the world.</p>
            <div className="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global Network" />
            </div>
          </div>

          {/* Service 03 */}
          <div className="forge-card">
            <span className="card-num">/ 03</span>
            <h3>Security <br/> Hardening</h3>
            <p>Deep-layer forensics and code auditing to ensure your digital presence is a fortress against intrusion.</p>
            <div className="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Security" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATION */}
      <section className="tech-spec">
        <div className="container">
          <div className="spec-grid">
            <div className="spec-info">
              <h2 className="spec-title">The <span>Standard</span></h2>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Every project we forge follows a strict technical blueprint. We do not use templates. 
                We do not use page builders. We build pure, optimized code.
              </p>
              <div style={{ marginTop: '40px', display: 'flex', gap: '40px' }}>
                 <div><strong style={{ display: 'block', fontSize: '2rem', color: 'var(--neon-cyan)' }}>0.4s</strong><span style={{ fontSize: '0.7rem', color: '#444', textTransform: 'uppercase' }}>Avg. Latency</span></div>
                 <div><strong style={{ display: 'block', fontSize: '2rem', color: 'var(--neon-cyan)' }}>100/100</strong><span style={{ fontSize: '0.7rem', color: '#444', textTransform: 'uppercase' }}>Lighthouse Score</span></div>
              </div>
            </div>
            <div className="matrix-table">
              <div className="matrix-row"><span>Architecture</span><strong>Next.js Static / TS</strong></div>
              <div className="matrix-row"><span>Logic Layer</span><strong>Rust / Edge Workers</strong></div>
              <div className="matrix-row"><span>Deployment</span><strong>Global CDN / Vercel</strong></div>
              <div className="matrix-row"><span>Security</span><strong>AES-256 / SSL-E</strong></div>
              <div className="matrix-row"><span>Performance</span><strong>Brotli / Gzip-9</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL */}
      <footer className="footer-cta">
        <div className="container">
           <h2 className="display-heavy" style={{ fontSize: '3rem', marginBottom: '40px' }}>Ready to <span className="text-cyan">Forge?</span></h2>
           <button className="btn-forge">Initiate Blueprint</button>
        </div>
      </footer>
    </div>
  );
}