import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import "./HomePage.css";

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    // Smooth reveal for the hero text
    const textReveal = document.querySelector('.hero-giant-text');
    if(textReveal) textReveal.classList.add('reveal');
  }, []);

  // Smooth Scroll Function for the buttons
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="forged-root">
      {/* 1. SEO METADATA SECTION */}
      <Helmet>
        <title>Forge Digital | Elite Static Website Engineering Durban</title>
        <meta name="description" content="Two BSc graduates from Varsity College Durban North building high-speed, unhackable static websites for local innovators." />
        <meta name="keywords" content="Web Development Durban, React Developers South Africa, Static Websites, Forge Digital" />
        
        {/* Social Media Preview (Open Graph) */}
        <meta property="og:title" content="Forge Digital // Static Engineering" />
        <meta property="og:description" content="Unhackable websites forged in Durban." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* BACKGROUND GRAIN OVERLAY */}
      <div className="noise-overlay"></div>
      
      {/* NAVIGATION */}
      <nav className="glass-nav">
        <div className="nav-container">
          <div className="brand">FORGE<span>//</span>DIGITAL</div>
          <div className="nav-tag">DBN.SOUTH_AFRICA</div>
          <a href="#contact" onClick={scrollToContact} className="contact-trigger">/ CONNECT</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-v2">
        <div className="hero-main-grid">
          <div className="hero-left">
            <div className="status-indicator">
              <span className="blink"></span> SYSTEM_ONLINE // 2026_PROTOCOL
            </div>
            <h1 className="hero-giant-text">
              FORGING <br/>
              <span className="outline-text">IMMUTABLE</span> <br/>
              WEBSITES
            </h1>
            <p className="hero-subtext">
              Two BSc graduates from <strong>Varsity College Durban North</strong> building the next 
              generation of high-speed, unhackable static fortresses for local innovators.
            </p>
            <div className="hero-actions">
              <button className="btn-glitch" onClick={scrollToContact}>START_PROJECT</button>
            </div>
          </div>
          
          <div className="hero-right animate-on-scroll">
            <div className="image-frame">
              <div className="frame-line top"></div>
              <div className="frame-line right"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="High-end server hardware in a dark data center" />
              <div className="scan-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE EFFECT */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[...Array(10)].map((_, i) => (
            <span key={i}>FAST. SECURE. BESPOKE. DURBAN BORN. // </span>
          ))}
        </div>
      </div>

      {/* BENTO GRID RE-IMAGINED */}
      <section className="features-grid">
        <div className="bento-layout">
          
          <div className="bento-box tall animate-on-scroll">
            <div className="box-num">01</div>
            <div className="box-content">
              <h3>ZERO-DAY<br/>INFRASTRUCTURE</h3>
              <p>We deploy static fortresses. By removing the database layer, we eliminate 99% of common web vulnerabilities before they even exist.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80" className="box-bg" alt="Abstract 3D digital security blocks" />
          </div>

          <div className="bento-box wide animate-on-scroll">
            <div className="box-num">02</div>
            <div className="box-content">
              <h3>RAW VELOCITY</h3>
              <p>Our architecture bypasses traditional server-side processing. Your content is served from the edge, resulting in near-instant load states.</p>
              <div className="decor-lines">
                <div className="line"></div>
                <div className="line" style={{width: '60px', opacity: 1, backgroundColor: 'var(--mint)'}}></div>
                <div className="line"></div>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global digital network connectivity" />
          </div>

          <div className="bento-box animate-on-scroll">
            <div className="box-num">03</div>
            <div className="box-content">
              <h3>DIRECT<br/>ACCESS</h3>
              <p>Elite engineering, no bloat. You collaborate directly with the architects, ensuring zero loss in translation.</p>
            </div>
          </div>

          <div className="bento-box highlight animate-on-scroll" id="contact">
            <div className="box-content">
              <h3 style={{WebkitTextFillColor: 'black', background: 'none'}}>INITIALIZE<br/>PROJECT?</h3>
              <p style={{color: 'black', opacity: 0.7, fontWeight: 500}}>Ready to build the unhackable?</p>
              <button className="btn-minimal" onClick={scrollToContact}>
                ESTABLISH_CONNECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-modern">
        <div className="test-grid">
          <div className="test-card animate-on-scroll">
            <p>"The security level they provided gave us total peace of mind. These guys are the real deal."</p>
            <cite>— Preshen Pillay. // FINTECH SOLUTIONS</cite>
          </div>
          <div className="test-card animate-on-scroll">
            <p>"Fastest turnaround I've seen in Durban. The site feels like it's from 5 years in the future."</p>
            <cite>— Varshan Harilal. // CREATIVE DIRECTOR</cite>
          </div>
        </div>
      </section>

      <footer className="footer-v3">
        <div className="footer-bottom">
          <span>FORGE DIGITAL // CORE_SYSTEM_V1</span>
          <span>©2026 // DBN // ZA</span>
        </div>
      </footer>
    </div>
  );
}