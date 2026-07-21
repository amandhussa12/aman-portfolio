import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

function Timeline() {

  const timelineData = [
    {
      year: "2023",
      title: "Started Computer Science",
      description:
        "Began BSc Computer Science journey and explored programming and technology.",
    },
    {
      year: "2024",
      title: "Programming Foundation",
      description:
        "Learned core programming concepts, Java and database fundamentals.",
    },
    {
      year: "2025",
      title: "Web Development Journey",
      description:
        "Started building projects using HTML, CSS, JavaScript and React.js.",
    },
    {
      year: "2026",
      title: "BSc Computer Science Graduate",
      description:
        "Completed TY BSc Computer Science from Padmashri Vikhe Patil College of Arts, Commerce and Science under SPPU.",
    },
  ];


  return (
    <section className="timeline-section" id="timeline">

      <h2>My Journey</h2>

      <div className="timeline-container">

        {timelineData.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;