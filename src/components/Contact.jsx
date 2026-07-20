import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub
} from "react-icons/fa";

import "./Contact.css";


function Contact() {

  return (

    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
        Have a project, internship opportunity, or want to connect?
        Feel free to reach out.
      </p>


      <div className="contact-container">


        <div className="contact-card">

          <FaEnvelope />

          <h3>Email</h3>

          <p>
            amandhussa87@gmail.com
          </p>

        </div>



        <div className="contact-card">

          <FaPhone />

          <h3>Phone</h3>

          <p>
            +91 9766189398
          </p>

        </div>



        <div className="contact-card">

          <FaMapMarkerAlt />

          <h3>Location</h3>

          <p>
            Maharashtra, India
          </p>

        </div>



        <div className="contact-card">

          <FaGithub />

          <h3>GitHub</h3>

          <p>
            github.com/amandhussa12
          </p>

        </div>


      </div>


    </section>

  );
}


export default Contact;