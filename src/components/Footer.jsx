import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <h3>
          Aman Dharmendra Dhussa
        </h3>

        <p>
          Aspiring Software Developer | React Developer | Computer Science Graduate
        </p>


        <div className="footer-links">

          <a
            href="https://github.com/amandhussa12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>


          <a
            href="www.linkedin.com/in/aman-dhussa-40006b423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>


        <p className="copyright">
          © {new Date().getFullYear()} Aman Dharmendra Dhussa. All Rights Reserved.
        </p>


        <p className="made">

          Made with <FaHeart /> and React.js

        </p>


      </div>

    </footer>

  );

}

export default Footer;