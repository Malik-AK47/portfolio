import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-accent">Malik Nadeem</span> 👋
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-2xl md:text-3xl text-textSecondary mb-6"
      >
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer 💻",
              "React Enthusiast ⚛️",
              "MERN Stack Developer 🌐",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent2 hover:text-white transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
