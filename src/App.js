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
              <div className="contact-icon">✉</div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">mouadh.lafi@outlook.com</span>
              </div>
            </a>
            <a href="tel:+21655454412" className="contact-item">
              <div className="contact-icon">📞</div>
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
              <div className="contact-icon">💼</div>
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
              <div className="contact-icon">👨‍💻</div>
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
