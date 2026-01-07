import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-editorial-root">
      {/* SECTION 1: MANIFESTO */}
      <section className="manifesto-hero">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-text reveal-on-scroll">
              <span className="eyebrow">THE BLUEPRINT</span>
              <h1 className="editorial-title">
                FORGING <br/> THE <em>FUTURE</em> <br/> OF STATIC.
              </h1>
              <p className="manifesto-lead">
                ForgeDigital was founded to solve the "Bloat Problem." Most web agencies 
                stack libraries until the site breaks. We do the opposite: we strip 
                everything back to pure, high-performance engineering.
              </p>
            </div>
            <div className="manifesto-visual reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Forged Architecture" />
              <div className="visual-tag">FORGED // 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHRONICLE */}
      <section className="technical-chronicle">
        <div className="container">
          <div className="chronicle-header reveal-on-scroll">
            <h2 className="editorial-title-small">ENGINEERING <span>DNA</span></h2>
          </div>
          <div className="chronicle-grid">
            <div className="chronicle-item reveal-on-scroll">
              <span className="year">2024</span>
              <h3>The Zero-Database Shift</h3>
              <p>We officially pivoted to 100% static architecture. By removing the database layer, we eliminated 99.9% of common web vulnerabilities for our clients.</p>
            </div>
            <div className="chronicle-item reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <span className="year">2025</span>
              <h3>Edge Propagation</h3>
              <p>We expanded our infrastructure to a global mesh network. Our sites now deploy to 200+ edge locations, ensuring sub-0.5s load times globally.</p>
            </div>
            <div className="chronicle-item reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <span className="year">2026</span>
              <h3>The Forged Standard</h3>
              <p>Today, we lead the industry in "Bespoke Static" engineering—combining unhackable code with elite-tier digital aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE OPERATIONS LAB */}
      <section className="studio-lab">
        <div className="container">
          <div className="lab-header reveal-on-scroll">
             <span className="eyebrow">THE LABORATORY</span>
             <h2 className="editorial-title-small">INSIDE THE <span>FORGE</span></h2>
          </div>
          <div className="lab-bento-grid">
            <div className="bento-main reveal-on-scroll">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" alt="Cyber Security Lab" />
               <div className="bento-info">
                  <h4>Security First</h4>
                  <p>Our lab monitors global threat levels to ensure our static assets remain unreachable by conventional attack vectors.</p>
               </div>
            </div>
            <div className="bento-side reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="side-box">
                    <strong>100/100</strong>
                    <span>Lighthouse Perf Score</span>
                </div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Precision Tech" />
            </div>
            <div className="bento-bottom reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
               <div className="bento-info">
                  <h4>Global Mesh</h4>
                  <p>We utilize Rust-based edge workers to handle dynamic logic without sacrificing speed.</p>
               </div>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global Network" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <footer className="about-footer-statement reveal-on-scroll">
        <div className="container">
          <h2 className="editorial-title">READY TO <span>BUILD?</span></h2>
          {/* NAVIGATE TO CONTACT PAGE */}
          <button className="btn-launch" onClick={() => navigate('/contact')}>
            Initiate Blueprint
          </button>
        </div>
      </footer>
    </div>
  );
}