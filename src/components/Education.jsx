import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Engineering",
      college: "SSVPS's BS deore college of Engineering, Dhule",
      year: "2024 - 2027",
      description: "Focus on Software Development, Data Structures, Algorithms, Full-Stack Development, and Learning new Technologies",
    },
    {
      degree: "Diploma in Computer Engineering",
      college: "SSVPS's BS deore polytechnic, Dhule",
      year: "2022 - 2024",
      description: "Focus on Full-Stack Development through Industrial training Where I learn HTML, CSS, JS, PHP, and MySQL",
      CGPA: "CGPA: 8.8",
    },
  ];

  return (
    <section id="education" className="py-20 bg-bgPrimary text-textPrimary px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My <span className="text-accent">Education</span>
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 w-1 bg-accent h-full hidden md:block"></div>

        {/* Education Cards */}
        <div className="space-y-12">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative md:flex md:items-center md:gap-6"
            >
              {/* Icon */}
              <div className="absolute md:relative left-0 top-0 md:left-6 flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full shadow-md">
                <FaGraduationCap size={20} />
              </div>

              {/* Card */}
              <div className="mt-6 md:mt-0 bg-bgSecondary p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 md:ml-16">
                <h3 className="text-2xl font-semibold text-accent">{edu.degree}</h3>
                <p className="text-textSecondary font-medium">{edu.college}</p>
                <p className="text-textSecondary text-sm mb-2">{edu.year}</p>
                <p className="text-textSecondary mb-2">{edu.description}</p>
                <p className="text-textSecondary">{edu.CGPA}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
