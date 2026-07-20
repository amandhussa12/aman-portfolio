import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt
} from "react-icons/fa";

import "./Skills.css";


function Skills() {

  const skills = [
    {
      name: "HTML",
      level: "90%",
      icon: <FaHtml5 />
    },
    {
      name: "CSS",
      level: "85%",
      icon: <FaCss3Alt />
    },
    {
      name: "JavaScript",
      level: "80%",
      icon: <FaJs />
    },
    {
      name: "React",
      level: "75%",
      icon: <FaReact />
    },
    {
      name: "Java",
      level: "70%",
      icon: <FaJava />
    },
    {
      name: "SQL",
      level: "75%",
      icon: <FaDatabase />
    },
    {
      name: "Git & GitHub",
      level: "70%",
      icon: <FaGitAlt />
    }
  ];


  return (

    <section id="skills" className="skills">

      <motion.h2
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
      >
        My Skills
      </motion.h2>


      <div className="skills-container">

        {
          skills.map((skill,index)=>(

            <motion.div
              className="skill-box"
              key={index}

              initial={{opacity:0,y:50}}

              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{once:true}}
            >

              <div className="skill-title">

                <span className="skill-name">
                  {skill.icon}
                  {skill.name}
                </span>

                <span>
                  {skill.level}
                </span>

              </div>


              <div className="progress">

                <motion.div

                  className="progress-bar"

                  initial={{width:0}}

                  whileInView={{
                    width:skill.level
                  }}

                  transition={{
                    duration:1
                  }}

                  viewport={{once:true}}

                />

              </div>


            </motion.div>

          ))
        }

      </div>

    </section>

  );
}


export default Skills;