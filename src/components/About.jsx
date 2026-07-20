import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>About Me</h2>

        <p className="about-text">
          I'm <strong>Aman Dharmendra Dhussa</strong>, a BSc Computer Science
          student passionate about web development and modern technologies.
          I enjoy building responsive, user-friendly applications and solving
          real-world problems through code.
        </p>

        <p className="about-text">
          I am continuously improving my skills in React, JavaScript, Java and
          frontend development to become a professional software developer.
        </p>


        <div className="about-cards">

          <motion.div 
            className="about-card"
            whileHover={{scale:1.05}}
          >
            <h3>🎓 Education</h3>
            <p>
              BSc Computer Science
            </p>
            <span>
              Savitribai Phule Pune University
            </span>
          </motion.div>


          <motion.div 
            className="about-card"
            whileHover={{scale:1.05}}
          >
            <h3>💻 Technologies</h3>
            <p>
              React, JavaScript, HTML, CSS
            </p>
            <span>
              Frontend Development
            </span>
          </motion.div>


          <motion.div 
            className="about-card"
            whileHover={{scale:1.05}}
          >
            <h3>🚀 Career Goal</h3>
            <p>
              Software Developer
            </p>
            <span>
              Building impactful digital solutions
            </span>
          </motion.div>


        </div>


      </motion.div>

    </section>
  );
}

export default About;