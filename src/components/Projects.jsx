import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Gym Management System",
    description:
      "A software system to manage gym members, payments, trainers, and fitness records.",
    tech: "Java, MySQL",
    github: "https://github.com/amandhussa12/projects.git",
    demo: "#",
  },
  {
    title: "Scientific Calculator",
    description:
      "A calculator application that performs basic and advanced mathematical operations.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/amandhussa12/projects.git",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <span>
              {project.tech}
            </span>


            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>


              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                Demo
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;