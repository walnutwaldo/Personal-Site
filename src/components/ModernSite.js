import React, { useState, useEffect } from 'react';
import { ChevronDown, GitHub, Linkedin, Twitter, Mail, ExternalLink, Moon, Sun } from 'react-feather';
import { socials } from '../tools/constants';
import '../style/ModernSite.scss';

const ModernSite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    // Track mouse position for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Loading animation
    setTimeout(() => setIsLoading(false), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const projects = [
    {
      title: "Cognition.ai - Devin",
      description: "Co-founded company building the world's first AI software engineer",
      tags: ["AI", "Software Engineering", "Startup"],
      link: "#",
      year: "2024"
    },
    {
      title: "DeepReason",
      description: "Founded company providing advanced formal tooling for smart contract auditing",
      tags: ["Blockchain", "Security", "Formal Verification"],
      link: "https://deepreason.xyz/",
      year: "2023"
    },
    {
      title: "MIT PRIMES Research",
      description: "Conducted research in cryptography and machine learning",
      tags: ["Cryptography", "ML", "Research"],
      link: "#",
      year: "2022"
    }
  ];

  const writing = [
    {
      title: "On Technology, Inequality, Purpose, and the Fermi Paradox",
      date: "Nov 15, 2022",
      excerpt: "Exploring the impact of AI on various industries and its implications for the future.",
      link: "https://waldensthoughts.bloggi.co/on-technology-inequality-purpose-and-the-fermi-paradox"
    }
  ];

  if (isLoading) {
    return (
      <div className="modern-loading">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`modern-site ${darkMode ? 'dark' : ''}`}>
      {/* Custom cursor effect */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      />

      {/* Navigation */}
      <nav className="modern-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">Walden Yan</span>
          </div>
          <div className="nav-links">
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#work" className={activeSection === 'work' ? 'active' : ''}>Work</a>
            <a href="#writing" className={activeSection === 'writing' ? 'active' : ''}>Writing</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="modern-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Building the future</span>
              <span className="title-line accent">with AI & code</span>
            </h1>
            <p className="hero-subtitle">
              Software engineer, entrepreneur, and AI researcher. Currently co-founder at Cognition.ai, 
              makers of Devin - the world's first AI software engineer.
            </p>
            <div className="hero-cta">
              <a href="#work" className="cta-primary">View My Work</a>
              <a href="#contact" className="cta-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="modern-section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm passionate about using software to advance humanity and working with exceptional people. 
                My journey has taken me from competitive programming (IOI Gold medalist) to AI research at MIT, 
                and now to building revolutionary AI tools.
              </p>
              <p>
                As a co-founder at Cognition.ai, I'm working on Devin, an AI that can write, debug, and deploy 
                code like a human software engineer. Previously, I founded DeepReason, where we developed 
                advanced formal verification tools for smart contract security.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <h4>Interests</h4>
                <ul>
                  <li>Artificial Intelligence</li>
                  <li>Software Engineering</li>
                  <li>Cryptography</li>
                  <li>Entrepreneurship</li>
                </ul>
              </div>
              <div className="highlight">
                <h4>Achievements</h4>
                <ul>
                  <li>IOI Gold Medalist</li>
                  <li>MIT PRIMES Researcher</li>
                  <li>2x Founder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="modern-section">
        <div className="section-content">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-year">{project.year}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="modern-section">
        <div className="section-content">
          <h2 className="section-title">Recent Writing</h2>
          <div className="writing-list">
            {writing.map((post, index) => (
              <article key={index} className="writing-item">
                <div className="writing-date">{post.date}</div>
                <h3 className="writing-title">
                  <a href={post.link} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="writing-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <a href="https://waldensthoughts.bloggi.co/" className="view-all-link" target="_blank" rel="noreferrer">
            View All Posts →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="modern-section">
        <div className="section-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always interested in discussing new opportunities, collaborations, or just having a good conversation about technology and its future.
          </p>
          <div className="contact-links">
            <a href="mailto:contact@waldenyan.com" className="contact-link">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a href="https://twitter.com/walden_yan" className="contact-link" target="_blank" rel="noreferrer">
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/waldenyan" className="contact-link" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/walnutwaldo" className="contact-link" target="_blank" rel="noreferrer">
              <GitHub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <p>© 2024 Walden Yan. Built with React & passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModernSite;