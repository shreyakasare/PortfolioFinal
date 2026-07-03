import { useEffect, useState } from "react";
import "./App.css";
import { useCountUp } from "./hooks/useCountUp";
import { useScrollReveal } from "./hooks/useScrollReveal";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Frontend",
    icon: "⚡",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Redux", level: 82 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const PROJECTS = [
  {
    emoji: "🛒",
    gradient: "gradient-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    emoji: "✅",
    gradient: "gradient-2",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, user collaboration, and progress tracking.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    featured: false,
  },
  {
    emoji: "🌤️",
    gradient: "gradient-3",
    title: "Weather Dashboard",
    description:
      "An interactive weather app with real-time data, forecasts, and location search via OpenWeather API.",
    tech: ["React", "API Integration", "Charts"],
    featured: false,
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/shreyakasare",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreya-kasare/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/Shreya43649386",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const ROLES = [
  "React.js Developer",
  "UI/UX Enthusiast",
  "Full-Stack Builder",
];

function StatCard({
  value,
  suffix,
  label,
  isActive,
}: {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
}) {
  const count = useCountUp(value, isActive);
  return (
    <div className="stat">
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
  light = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <div className={`section-header ${light ? "section-header--light" : ""}`}>
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);

  const aboutReveal = useScrollReveal<HTMLElement>();
  const skillsReveal = useScrollReveal<HTMLElement>();
  const projectsReveal = useScrollReveal<HTMLElement>();
  const contactReveal = useScrollReveal<HTMLElement>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="bg-noise" aria-hidden="true" />

      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container">
          <a href="#home" className="logo">
            <span className="logo-mark">S</span>
            Shreya<span className="logo-dot">.</span>
          </a>

          <button
            className={`nav-toggle ${menuOpen ? "nav-toggle--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  activeSection === link.href.slice(1) ? "nav-active" : ""
                }
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="hero-grid-pattern" />
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="pulse-dot" />
                Available for new opportunities
              </div>

              <h1 className="hero-title">
                Hello, I'm{" "}
                <span className="gradient-text">Shreya Kasare</span>
              </h1>

              <p className="hero-subtitle">
                <span className="role-text" key={roleIndex}>
                  {ROLES[roleIndex]}
                </span>
              </p>

              <p className="hero-description">
                I craft modern, responsive web applications with clean code and
                thoughtful design — turning ideas into polished digital
                experiences.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </div>

              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    title={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-image">
              <div className="avatar-ring">
                <div className="avatar-ring-inner">
                  <div className="image-placeholder">
                    <span>👩‍💻</span>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card--1">
                <span>⚡</span> React Expert
              </div>
              <div className="floating-card floating-card--2">
                <span>🎨</span> UI/UX Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutReveal.ref}
        className={`about reveal ${aboutReveal.isVisible ? "reveal--visible" : ""}`}
      >
        <div className="container">
          <SectionHeader
            number="01"
            title="About Me"
            subtitle="Passionate about building things that matter"
          />
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate React developer with{" "}
                <strong>4+ years of experience</strong> building web
                applications. My journey started with curiosity about how things
                work online and evolved into a love for creating intuitive,
                beautiful digital experiences.
              </p>
              <p>
                I specialize in front-end development with React.js, with solid
                experience in Node.js and databases. I believe in writing clean,
                maintainable code and continuously learning new technologies.
              </p>
              <a href="#contact" className="btn btn-outline">
                Let's Connect
              </a>
            </div>
            <div className="about-stats">
              <StatCard
                value={4}
                suffix="+"
                label="Years Experience"
                isActive={aboutReveal.isVisible}
              />
              <StatCard
                value={20}
                suffix="+"
                label="Projects Completed"
                isActive={aboutReveal.isVisible}
              />
              <StatCard
                value={15}
                suffix="+"
                label="Happy Clients"
                isActive={aboutReveal.isVisible}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsReveal.ref}
        className={`skills reveal ${skillsReveal.isVisible ? "reveal--visible" : ""}`}
      >
        <div className="container">
          <SectionHeader
            number="02"
            title="My Skills"
            subtitle="Technologies I work with daily"
          />
          <div className="skills-grid">
            {SKILLS.map((group, gi) => (
              <div
                key={group.title}
                className="skill-item"
                style={{ animationDelay: `${gi * 0.12}s` }}
              >
                <div className="skill-item-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-bars">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-bar">
                      <div className="skill-bar-label">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: skillsReveal.isVisible
                              ? `${skill.level}%`
                              : "0%",
                            transitionDelay: `${gi * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsReveal.ref}
        className={`projects reveal ${projectsReveal.isVisible ? "reveal--visible" : ""}`}
      >
        <div className="container">
          <SectionHeader
            number="03"
            title="Featured Projects"
            subtitle="A selection of my recent work"
          />
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                className={`project-card ${project.featured ? "project-card--featured" : ""} ${project.gradient}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="project-card-visual">
                  <span className="project-emoji">{project.emoji}</span>
                  {project.featured && (
                    <span className="project-badge">Featured</span>
                  )}
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" className="link">
                      Live Demo
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                    <a href="#" className="link link--muted">
                      GitHub
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactReveal.ref}
        className={`contact reveal ${contactReveal.isVisible ? "reveal--visible" : ""}`}
      >
        <div className="contact-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="container">
          <SectionHeader
            number="04"
            title="Let's Work Together"
            subtitle="Have a project in mind? I'd love to hear about it."
            light
          />
          <div className="contact-grid">
            <div className="contact-info">
              <p>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi — my inbox is open.
              </p>
              <a
                href="mailto:shreya@example.com"
                className="contact-email"
              >
                shreya@example.com
              </a>
              <div className="contact-social">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    title={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon social-icon--light"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get("name");
                const email = data.get("email");
                const message = data.get("message");
                window.location.href = `mailto:shreya@example.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Shreya Kasare. All rights reserved.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
