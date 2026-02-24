import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiEjs,
  SiMongoose,
} from "react-icons/si";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

function About() {
  const skillIcons = [
    { icon: <SiReact size={60} />, name: "React" },
    { icon: <SiNodedotjs size={60} />, name: "Node.js" },
    { icon: <SiExpress size={60} />, name: "Express" },
    { icon: <SiMongodb size={60} />, name: "MongoDB" },
    { icon: <SiTailwindcss size={60} />, name: "Tailwind" },
    { icon: <SiJavascript size={60} />, name: "JavaScript" },
    { icon: <SiHtml5 size={60} />, name: "HTML" },
    { icon: <SiCss3 size={60}/>, name: "CSS"},
    { icon: <SiEjs size={60}/>, name: "Ejs"},
    { icon: <SiMongoose size={80}/>, name: "Mongoose"},
  ];

  return (
    <section
      id="about"
      className="py-20 bg-bgPrimary text-textPrimary px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About <span className="text-accent">Me</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile + Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <img
            src={profilePic}
            alt="Malik"
            className="w-48 h-48 rounded-full object-cover border-4 border-accent mb-6 shadow-lg items-center"
          />
          <p className="text-lg text-textSecondary leading-relaxed">
            Hi, I’m <span className="text-accent font-semibold">Malik Nadeem</span>, a
            passionate Full-Stack Developer who loves building beautiful,
            high-performance web applications. I enjoy transforming ideas into
            interactive digital experiences using modern technologies.
          </p>

          <p className="mt-4 text-textSecondary">
            Currently, I’m focusing on mastering the MERN stack and React-based animations to create smooth, user-friendly web apps. After that, I’ll move toward Machine Learning.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-6 justify-center md:justify-start mt-4"
        >
          {skillIcons.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center bg-bgPrimary p-4 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 w-24"
            >
              <div className="text-accent mb-2">{skill.icon}</div>
              <span className="text-textSecondary text-sm text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
