import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaCode } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  const [showHirePopup, setShowHirePopup] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>Aman Dharmendra Dhussa</h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Computer Science Student",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />

          <p className="hero-description">
            I am a BSc Computer Science student passionate about creating
            modern, responsive and user-friendly web applications using
            React, JavaScript and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              <FaCode />
              View Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              <FaDownload />
              Download CV
            </a>

            <button
              className="primary-btn"
              onClick={() => setShowHirePopup(true)}
            >
              Hire Me
            </button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/amandhussa12"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-dhussa-40006b423"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:amandhussa87@gmail.com">
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-glow"></div>

          <img
            src="/aman.jpeg"
            alt="Aman Dharmendra Dhussa"
          />
        </motion.div>
      </div>

      {showHirePopup && (
        <div
          className="hire-popup-overlay"
          onClick={() => setShowHirePopup(false)}
        >
          <div
            className="hire-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setShowHirePopup(false)}
            >
              ✖
            </button>

           <img
  src="/aman.jpeg"
  alt="Aman Dharmendra Dhussa"
  className="popup-profile"
/>
<div className="hire-badge">
  🟢 Available for Internship & Junior Developer Roles
</div>
<h2>Let's Build Something Great Together</h2>

            <p>
              Download my CV to explore my education, skills, projects and
              achievements. I'm actively looking for internship and junior
              developer opportunities.
            </p>

           <div className="popup-buttons">
  <a
    href="/resume.pdf"
    download
    className="popup-btn"
  >
    📄 Download CV
  </a>

  <a
    href="mailto:amandhussa87@gmail.com?subject=Job Opportunity"
    className="popup-btn secondary"
  >
    📧 Contact Me
  </a>
</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;