import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

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
          I am continuously improving my skills in React, JavaScript, Java, and
          frontend development to become a professional software developer.
        </p>


        <div className="about-cards">

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCard("education")}
            style={{ cursor: "pointer" }}
          >
            <h3>🎓 Education</h3>
            <p>BSc Computer Science</p>
            <span>Click to view details</span>
          </motion.div>


          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCard("technologies")}
            style={{ cursor: "pointer" }}
          >
            <h3>💻 Technologies</h3>
            <p>React, JavaScript, HTML, CSS</p>
            <span>Click to view details</span>
          </motion.div>


          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCard("career")}
            style={{ cursor: "pointer" }}
          >
            <h3>🚀 Career Goal</h3>
            <p>Software Developer</p>
            <span>Click to view details</span>
          </motion.div>

        </div>

      </motion.div>



      {selectedCard === "education" && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>

          <div 
            className="modal-content"
            onClick={(e)=>e.stopPropagation()}
          >

            <button 
              className="close-btn"
              onClick={()=>setSelectedCard(null)}
            >
              ✖
            </button>

            <h2>🎓 Education</h2>

            <h3>BSc Computer Science</h3>

            <p>
              <strong>🏛 College</strong><br/>
              Padmashri Vikhe Patil College of Arts, Commerce & Science
            </p>

            <p>
              <strong>🎓 University</strong><br/>
              Savitribai Phule Pune University (SPPU)
            </p>

            <p>
              <strong>📅 Passing Year</strong><br/>
              2026
            </p>

            <p>
              <strong>📊 CGPA</strong><br/>
              6.58 / 10
            </p>

            <p>
              <strong>⭐ Grade</strong><br/>
              B+
            </p>

          </div>

        </div>
      )}



      {selectedCard === "technologies" && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>

          <div 
            className="modal-content"
            onClick={(e)=>e.stopPropagation()}
          >

            <button 
              className="close-btn"
              onClick={()=>setSelectedCard(null)}
            >
              ✖
            </button>

            <h2>💻 Technologies</h2>

            <h3>Technical Skills</h3>

            <p>⚛️ React.js</p>
            <p>🟨 JavaScript</p>
            <p>🌐 HTML5</p>
            <p>🎨 CSS3</p>
            <p>☕ Java</p>
            <p>🗄 MySQL</p>
            <p>🔧 Git & GitHub</p>
            <p>📱 Responsive Web Design</p>

          </div>

        </div>
      )}



      {selectedCard === "career" && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>

          <div 
            className="modal-content"
            onClick={(e)=>e.stopPropagation()}
          >

            <button 
              className="close-btn"
              onClick={()=>setSelectedCard(null)}
            >
              ✖
            </button>

            <h2>🚀 Career Goal</h2>

            <h3>Professional Software Developer</h3>

            <p>💼 Build modern and responsive web applications.</p>

            <p>
              📚 Keep learning React, Java, JavaScript and Full Stack Development.
            </p>

            <p>🌍 Work on real-world software projects.</p>

            <p>
              🎯 Join a leading IT company and grow as a software engineer.
            </p>

          </div>

        </div>
      )}

    </section>
  );
}

export default About;