import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* 1. LAYERED VISUAL HERO */}
      <header className="hero-visual-stack">
        <div className="hero-main-content">
          <div className="announcement-bar">
            <span className="dot"></span> Now Specializing in AI Automation
          </div>
          <h1 className="main-headline">
            WE BUILD THE <br /> 
            <span className="text-glow">FUTURE</span> OF <br />
            DIGITAL COMMERCE.
          </h1>
          <p className="hero-subtext">
            High-end development for brands that refuse to be average. 
            We blend architectural code with boundary-pushing design.
          </p>
          <div className="hero-cta-group">
            <button className="btn-cyan-glow">Start Your Project</button>
            <button className="btn-glass">See Our Work</button>
          </div>
        </div>

        {/* Hero Image Composition */}
        <div className="hero-image-composition">
          <div className="comp-box box-1">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Code" />
          </div>
          <div className="comp-box box-2">
             <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Team" />
          </div>
          <div className="comp-box box-3">
             <div className="live-stat-card">
                <span className="label">GLOBAL REACH</span>
                <strong className="count">2.4M+</strong>
                <div className="pulse-line"></div>
             </div>
          </div>
        </div>
      </header>

      {/* 2. THE EXPERTISE WALL */}
      <section className="expertise-wall">
        <div className="section-intro">
          <h2 className="title-large">Where We <span className="outline">Excel</span></h2>
          <p>We don't just "do" tech. We master the stacks that move the needle.</p>
        </div>

        <div className="expertise-grid-v2">
          {/* Card 1 */}
          <div className="exp-card-v2">
            <div className="exp-img-hold">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Web Dev" />
            </div>
            <div className="exp-content">
              <div className="exp-tag">Architectural</div>
              <h3>Full-Stack Web Systems</h3>
              <p>We build resilient, SEO-optimized React & Next.js platforms designed for massive scale and millisecond load times.</p>
              <ul className="tech-pills">
                <li>React</li><li>Node.js</li><li>TypeScript</li><li>AWS</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="exp-card-v2 reversed">
            <div className="exp-img-hold">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="AI" />
            </div>
            <div className="exp-content">
              <div className="exp-tag">Intelligence</div>
              <h3>AI & Deep Learning</h3>
              <p>Integrating LLMs and custom automation pipelines into your workflow to cut costs and skyrocket efficiency.</p>
              <ul className="tech-pills">
                <li>OpenAI</li><li>Python</li><li>Llama 3</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="exp-card-v2">
            <div className="exp-img-hold">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="Mobile" />
            </div>
            <div className="exp-content">
              <div className="exp-tag">Experience</div>
              <h3>Mobile Ecosystems</h3>
              <p>Native-feel cross-platform apps that live in your users' pockets. Smooth animations and biometric security.</p>
              <ul className="tech-pills">
                <li>React Native</li><li>Flutter</li><li>Swift</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT CTA */}
      <section className="impact-cta">
        <div className="impact-card">
           <h2>Stop waiting for the "perfect time."</h2>
           <p>Your competitors are already building. Let's overtake them today.</p>
           <button className="btn-giant">Contact the Studio</button>
        </div>
      </section>
    </div>
  );
}