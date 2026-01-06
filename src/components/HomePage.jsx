import React, { useEffect } from "react";
import "./HomePage.css";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="forged-root">
      {/* SECTION 1: HIGH-IMPACT HERO */}
      <header className="hero-v10">
        <div className="hero-grid-v10">
          <div className="hero-text-main animate-on-scroll">
            <div className="glitch-tag">CORE // SYSTEMS // 2026</div>
            <h1 className="hero-giant-text">
              FORGED <br/>
              <span className="accent-glow">DIGITAL</span>
            </h1>
            <p className="hero-sub">
              Engineering high-speed, unhackable static fortresses for the next 
              generation of digital commerce.
            </p>
          </div>
          <div className="hero-visual-v10 animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" alt="Cyber Tech" />
            <div className="scanline"></div>
          </div>
        </div>
      </header>

      {/* SECTION 2: BENTO TECHNICAL GRID */}
      <section className="tech-bento">
        <div className="bento-container">
          <div className="bento-item tall animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global Data" />
            <div className="bento-content">
                <h3>GLOBAL EDGE</h3>
                <p>Deployed to 200+ edge locations for sub-millisecond delivery.</p>
            </div>
          </div>
          
          <div className="bento-item wide animate-on-scroll">
            <div className="bento-content">
                <span className="bento-num">01</span>
                <h3>ZERO VULNERABILITY</h3>
                <p>By removing the database, we remove the target. Your site is mathematically unhackable.</p>
            </div>
            <img src="https://web-assets.esetstatic.com/tn/-x700/wls/2025/08-25/winrar/winrar-zeroday-vulnerability-romcom-apt-eset-research.jpeg" alt="Server" />
          </div>

          <div className="bento-item animate-on-scroll">
            <div className="bento-content">
                <h3>PURE CODE</h3>
                <p>No plugins. No bloat. Just forged performance.</p>
            </div>
          </div>

          <div className="bento-item animate-on-scroll highlight-bento">
            <div className="bento-content">
                <h3>READY TO UPGRADE?</h3>
                <p>Let's discuss your technical roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS (MINIMAL DARK) */}
      <section className="voices-v10">
        <div className="voices-container">
            <div className="voice-card animate-on-scroll">
                <p>"The migration reduced our server costs to zero while doubling our speed."</p>
                <cite>MARCUS REED // CTO AT VERTEX</cite>
            </div>
            <div className="voice-card animate-on-scroll">
                <p>"Unbreakable. We've survived heavy traffic spikes without a single millisecond of downtime."</p>
                <cite>ELARA VANCE // FOUNDER OF AETHER</cite>
            </div>
        </div>
      </section>
    </div>
  );
}