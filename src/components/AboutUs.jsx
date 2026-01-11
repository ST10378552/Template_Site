import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Added Helmet import
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
      {/* ADDED SEO HELMET BLOCK */}
      <Helmet>
        <title>About the Duo | Forge Digital Founders Durban</title>
        <meta name="description" content="Founded by two BSc graduates from Varsity College Durban North. We specialize in bespoke, hand-coded React static engineering." />
      </Helmet>

      {/* GLOW DECORATIONS */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <section className="manifesto-hero">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-text reveal-on-scroll">
              <span className="eyebrow">THE DUO // DBN_ZA</span>
              <h1 className="editorial-title">
                TWO ENGINEERS.<br/> ONE <span>MISSION.</span>
              </h1>
              <p className="manifesto-lead">
                We are two BSc graduates from <strong>Varsity College Durban North</strong> who got tired of slow, vulnerable websites. 
                ForgeDigital isn't a bloated agency—it's a high-speed engineering lab dedicated to building the unhackable.
              </p>
              <div className="founder-stats">
                <div className="stat-pill">BSc_COMPUTER_SCIENCE</div>
                <div className="stat-pill">NEXT.JS_ARCHITECTS</div>
              </div>
            </div>
            <div className="manifesto-visual reveal-on-scroll">
              <div className="image-stack">
                {/* Added descriptive alt text for SEO */}
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Forge Digital laboratory technical setup with server hardware" className="main-img" />
                <div className="visual-accent-box"></div>
              </div>
              <div className="visual-tag">FORGED // 2026_PROTOCOL</div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-chronicle">
        <div className="container">
          <div className="chronicle-header reveal-on-scroll">
            <h2 className="editorial-title-small">OUR <span>TRAJECTORY</span></h2>
          </div>
          <div className="chronicle-grid">
            {[
              { year: "2024", title: "The Zero-DB Pivot", desc: "Realized databases are the #1 vulnerability. We moved to pure static fortresses." },
              { year: "2025", title: "VC Durban North", desc: "Graduated top of class, refining the Forge standard during our final year labs." },
              { year: "2026", title: "Forge Launch", desc: "Now deploying sub-second architecture for local innovators and global disruptors." }
            ].map((item, index) => (
              <div key={index} className="chronicle-item reveal-on-scroll" style={{ transitionDelay: `${index * 0.2}s` }}>
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="item-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-lab">
        <div className="container">
          <div className="lab-header reveal-on-scroll">
             <span className="eyebrow">THE TECH STACK</span>
             <h2 className="editorial-title-small">THE <span>GEAR</span></h2>
          </div>
          <div className="lab-bento-grid">
            <div className="bento-main reveal-on-scroll">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Close-up of clean optimized React and Next.js source code" />
               <div className="bento-info">
                  <h4>Hand-Written Excellence</h4>
                  <p>No templates. No page builders. Just raw, optimized TypeScript and Next.js 15.</p>
               </div>
            </div>
            <div className="bento-side reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="side-box">
                    <strong>99.9%</strong>
                    <span>UPTIME_GAUGE</span>
                </div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Precision engineering and technical hardware" />
            </div>
            <div className="bento-bottom reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
               <div className="bento-info">
                  <h4>Durban Edge</h4>
                  <p>Built locally, deployed globally via Vercel Edge Runtime.</p>
               </div>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global digital network representing Vercel Edge Runtime" />
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer-statement reveal-on-scroll">
        <div className="container">
          <h2 className="editorial-title">WORK WITH <span>US.</span></h2>
          <button className="btn-launch-v2" onClick={() => navigate('/contact')}>
            ESTABLISH_LINK
          </button>
        </div>
      </footer>
    </div>
  );
}