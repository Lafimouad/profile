import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            ML
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Mouadh Lafi</h1>
          <p className="hero-subtitle">Full-Stack Software Engineer</p>
          <p className="hero-description">
            Motivated full-stack software engineer with 5 years of experience.
            Expertise in Java, Spring Boot, and React, with a proven ability to
            quickly learn new technologies.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a
              href="https://github.com/Lafimouad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack software engineer with 5 years of
                experience building scalable web applications and microservices.
                My expertise spans across modern technologies including Java,
                Spring Boot, React, and cloud platforms like AWS.
              </p>
              <p>
                Currently working at Vistaprint, I specialize in designing
                MicroFront-end architectures, developing RESTful microservices,
                and implementing robust CI/CD pipelines. I'm always eager to
                learn new technologies and take on challenging projects that
                expand my skills and international experience.
              </p>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <div className="language-item">
                <span>Arabic</span>
                <span className="language-level">Native</span>
              </div>
              <div className="language-item">
                <span>French</span>
                <span className="language-level">Professional</span>
              </div>
              <div className="language-item">
                <span>English</span>
                <span className="language-level">Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="company">Vistaprint</span>
                  <span className="period">Dec 2022 - Present</span>
                </div>
                <ul className="timeline-list">
                  <li>
                    Led MicroFront-end architecture design using
                    React/Typescript and Material UI
                  </li>
                  <li>
                    Developed and maintained React component libraries for UI
                    consistency and reusability
                  </li>
                  <li>
                    Built RESTful microservices with Typescript, NodeJS, and
                    Java
                  </li>
                  <li>
                    Orchestrated microservices deployment on AWS using Jenkins,
                    Spinnaker, Docker, and Kubernetes
                  </li>
                  <li>
                    Implemented A/B testing with Optimizely, Contentful, and
                    React
                  </li>
                  <li>
                    Created personalization platform for automated email and
                    marketing campaign templates
                  </li>
                  <li>
                    Implemented serverless services with AWS Lambda and API
                    Gateway
                  </li>
                </ul>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>AWS</span>
                  <span>Kubernetes</span>
                  <span>GraphQL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>
                    Software Engineer | Digital Banking Technical Consultant
                  </h3>
                  <span className="company">ITSS</span>
                  <span className="period">July 2021 - Nov 2022</span>
                </div>
                <p className="timeline-description">
                  Worked on Digital Banking team for Temenos Infinity software,
                  serving ATB Bank.
                </p>
                <ul className="timeline-list">
                  <li>
                    Developed backend services and API processors for three
                    distinct banking projects
                  </li>
                  <li>
                    Created Quantum Fabric integration and orchestration
                    services
                  </li>
                  <li>
                    Built cross-platform web and mobile applications using MVC
                    framework
                  </li>
                  <li>
                    Implemented ATB Onboarding backend with Spring Boot
                    microservices
                  </li>
                  <li>
                    Administered application environment using AWS and
                    Kubernetes
                  </li>
                </ul>
                <div className="tech-tags">
                  <span>Spring Boot</span>
                  <span>Java 8</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                  <span>AWS</span>
                  <span>RESTful APIs</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="company">Value</span>
                  <span className="period">Jan 2021 - June 2021</span>
                </div>
                <p className="timeline-description">
                  Developed multi-platform application for car purchasing and
                  credit simulation.
                </p>
                <ul className="timeline-list">
                  <li>
                    Designed full-stack web application using Angular, Spring
                    Boot, and MySQL
                  </li>
                  <li>
                    Implemented robust CI/CD pipeline with Jenkins, Nexus, GIT,
                    and Docker
                  </li>
                  <li>
                    Integrated Camunda BPMN for credit workflow management
                  </li>
                  <li>Implemented Keycloak IAM with SSO session management</li>
                  <li>Utilized WSO2 API Manager for secure API architecture</li>
                </ul>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>React</span>
                  <span>Camunda BPMN</span>
                  <span>AWS</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Computer Engineering Degree</h3>
              <p className="school">ESPRIT</p>
              <p className="year">2019 - 2022</p>
            </div>
            <div className="education-card">
              <h3>Preparatory Cycle for Engineering Studies</h3>
              <p className="school">IPEIN</p>
              <p className="year">2016 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Node.js</span>
                <span>Microservices</span>
                <span>RESTful APIs</span>
                <span>GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Angular</span>
                <span>Material UI</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Jenkins</span>
                <span>Terraform</span>
                <span>CI/CD</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database & Tools</h3>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>Git</span>
                <span>Jira</span>
                <span>Camunda BPMN</span>
                <span>API Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities and
            challenging projects.
          </p>
          <div className="contact-links">
            <a href="mailto:mouadh.lafi@outlook.com" className="contact-item">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">mouadh.lafi@outlook.com</span>
              </div>
            </a>
            <a href="tel:+21655454412" className="contact-item">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+216 55454412</span>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/mouadh-lafi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">mouadh-lafi</span>
              </div>
            </a>
            <a
              href="https://github.com/Lafimouad"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">Lafimouad</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Mouadh Lafi. All rights reserved.</p>
      </footer>
    </div>
  );
}
