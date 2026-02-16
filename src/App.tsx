import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">Portfolio</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>Hello, I'm Shreya</h1>
              <p className="hero-subtitle">React.js Developer & UI/UX Enthusiast</p>
              <p className="hero-description">
                I create modern, responsive web applications with clean code and beautiful designs. 
                Specialized in React.js, JavaScript, and full-stack development.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
              <div className="social-links">
                <a href="#" title="GitHub">GitHub</a>
                <a href="#" title="LinkedIn">LinkedIn</a>
                <a href="#" title="Twitter">Twitter</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <span>👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate React developer with 3+ years of experience building web applications. 
                My journey in web development started with a curiosity about how things work online, 
                and it has evolved into a passion for creating intuitive, beautiful digital experiences.
              </p>
              <p>
                I specialize in front-end development with React.js, but I also have experience with 
                backend technologies like Node.js and databases. I believe in writing clean, maintainable code 
                and continuously learning new technologies.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <p>Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Tailwind</span>
              </div>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div className="skill-item">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>Vite</span>
                <span>Redux</span>
                <span>Figma</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Showcase of my recent work</p>
          </div>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-image">
                <div className="image-placeholder">📱</div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Platform</h3>
                <p>
                  A full-featured e-commerce application with product catalog, shopping cart, 
                  user authentication, and payment integration. Built with React, Redux, and Node.js.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Redux</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link">View Project →</a>
                  <a href="#" className="link">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-image">
                <div className="image-placeholder">✅</div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>
                  A collaborative task management tool with real-time updates, user collaboration features, 
                  task categorization, and progress tracking. Built with React and Firebase.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link">View Project →</a>
                  <a href="#" className="link">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-image">
                <div className="image-placeholder">🌤️</div>
              </div>
              <div className="project-info">
                <h3>Weather Dashboard</h3>
                <p>
                  An interactive weather application displaying real-time weather data, 
                  forecasts, and location search. Integrated with OpenWeather API.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>API Integration</span>
                  <span>Charts</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link">View Project →</a>
                  <a href="#" className="link">GitHub →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's talk about it!</p>
          </div>
          <div className="contact-content">
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <a href="mailto:shreya@example.com" className="btn btn-primary btn-large">Send Me an Email</a>
            <div className="contact-alt">
              <p>Or find me on:</p>
              <div className="contact-social">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Shreya Kasare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
