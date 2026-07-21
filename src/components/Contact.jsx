import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">

        <h2>Contact Me</h2>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Let's Work Together</h3>

            <p>
              I am open to internships, freelance projects, and developer
              opportunities where I can learn and contribute.
            </p>

           <p>
  📧 <a href="mailto:amandhussa87@gmail.com">
    amandhussa87@gmail.com
  </a>
</p>
            
            <p>📍 Maharashtra, India</p>


            <div className="social-icons">

  <a 
    href="https://github.com/amandhussa12/aman-portfolio.git"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>


  <a 
    href="www.linkedin.com/in/aman-dhussa-40006b423"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>


  <a 
    href="https://www.instagram.com/_a_m_a_n_223?igsh=aGt6ZDUxYnZqMnU0"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

</div>


            <a className="resume-btn" href="/Aman_Dhussa_CV.pdf" download>
              <FaDownload /> Download CV
            </a>


          </div>


          <form className="contact-form">

            <input 
              type="text"
              placeholder="Your Name"
            />

            <input 
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>


      <footer className="footer">

        <p>
          © 2026 Aman Dhussa. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Contact;