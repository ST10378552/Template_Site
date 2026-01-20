import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; 
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

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

  // Updated navigation function for all buttons
  const goToContact = (e) => {
    if (e) e.preventDefault();
    navigate('/contact');
  };

  // Internal smooth scroll for nav (if you keep an anchor on the same page)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="forged-root">
      {/* 1. SEO METADATA SECTION */}
      <Helmet>
        {/* Title optimized for the "Forge Digital" space search */}
        <title>Forge Digital | Elite Static Website Engineering Durban</title>
        <meta name="description" content="Two BSc graduates from Varsity College Durban North building high-speed, unhackable static websites for local innovators." />
        <meta name="keywords" content="Forge Digital, Web Development Durban, React Developers South Africa, Static Websites, BSc Graduates" />
        
        {/* Favicon & Icon links to fix the Blue Globe icon in Search */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Social Media Preview (Open Graph) */}
        <meta property="og:title" content="Forge Digital // Static Engineering" />
        <meta property="og:description" content="Unhackable websites forged in Durban by BSc graduates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgedigital.co.za" />
      </Helmet>

      {/* BACKGROUND GRAIN OVERLAY */}
      <div className="noise-overlay"></div>
      
      {/* NAVIGATION */}
      <nav className="glass-nav">
        <div className="nav-container">
          <div className="brand">FORGE<span>//</span>DIGITAL</div>
          <div className="nav-tag">DBN.SOUTH_AFRICA</div>
          {/* Using the new navigation function */}
          <a href="/contact" onClick={goToContact} className="contact-trigger">/ CONNECT</a>
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
              <button 
                className="btn-glitch" 
                onClick={goToContact}
              >
                START_PROJECT
              </button>
            </div>
          </div>
          
          <div className="hero-right animate-on-scroll">
            <div className="image-frame">
              <div className="frame-line top"></div>
              <div className="frame-line right"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Forge Digital high-end server architecture" />
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

      {/* BENTO GRID */}
      <section className="features-grid">
        <div className="bento-layout">
          
          <div className="bento-box tall animate-on-scroll">
            <div className="box-num">01</div>
            <div className="box-content">
              <h3>ZERO-DAY<br/>INFRASTRUCTURE</h3>
              <p>We deploy static fortresses. By removing the database layer, we eliminate 99% of common web vulnerabilities before they even exist.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80" className="box-bg" alt="Secure digital architecture" />
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
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global edge network" />
          </div>

          <div className="bento-box animate-on-scroll">
            <div className="box-num">03</div>
            <div className="box-content">
              <h3>DIRECT<br/>ACCESS</h3>
              <p>Elite engineering, no bloat. You collaborate directly with the architects, ensuring zero loss in translation.</p>
            </div>
          </div>

          <div className="bento-box highlight animate-on-scroll">
            <div className="box-content">
              <h3 style={{WebkitTextFillColor: 'black', background: 'none'}}>INITIALIZE<br/>PROJECT?</h3>
              <p style={{color: 'black', opacity: 0.7, fontWeight: 500}}>Ready to build the unhackable?</p>
              <button 
                className="btn-minimal" 
                onClick={goToContact}
              >
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
            <cite>— Preshen Pillay.</cite>
          </div>
          <div className="test-card animate-on-scroll">
            <p>"Fastest turnaround I've seen in Durban. The site feels like it's from 5 years in the future."</p>
            <cite>— Varshan Harilal.</cite>
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