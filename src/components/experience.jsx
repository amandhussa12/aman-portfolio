import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    title: "B.Sc. Computer Science",
    company: "Savitribai Phule Pune University",
    description:
      "Learning web development, React, JavaScript, databases and software engineering.",
  },
  {
    year: "2025",
    title: "React Portfolio Project",
    company: "Personal Project",
    description:
      "Built a modern portfolio using React, Tailwind CSS and Framer Motion.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-cyan-400 text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700"
            >
              <p className="text-cyan-400 font-semibold">{item.year}</p>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.company}</p>
              <p className="mt-4 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;