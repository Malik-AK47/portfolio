import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import portfolioImg from "../assets/projects-img/portfolio.png";
import newsBlog from "../assets/projects-img/News-blog.png";
import ecommerce from "../assets/projects-img/E-Commerce.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Vite, and Tailwind CSS showcasing my projects and skills.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://malik-nadeem.netlify.app/",
      github: "https://github.com/Malik-AK47/portfolio",
      image: portfolioImg,
    },
    {
      title: "Marathi News Article",
      description:
        "A full-stack blog app with user authentication, post CRUD, and admin dashboard using Ejs stack.",
      tech: ["MongoDB", "Express", "Ejs", "Node"],
      link: "https://yourblogapp.com",
      github: "https://github.com/yourusername/mern-blog",
      image:,
    },
    {
      title: "Marketmate (E-Commerce)",
      description:
        "It provides user auth, product listing, cart, checkout (mock), orders, profile, wishlist, and a simple admin area to manage products and orders.",
      tech: ["React", "Node", "OpenAI API"],
      link: "https://youraiassistant.com",
      github: "https://github.com/Malik-AK47/E-Commerce",
      image: ecommerce,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-bgSecondary text-textPrimary px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My <span className="text-accent">Projects</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-bgPrimary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                {project.title}
              </h3>
              <p className="text-textSecondary mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
 <div className="flex gap-4 mt-auto">

  {/* Code Button - Dark Gray */}
  <a
    href={project.github}
    target="_blank"
    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
  >
    <FiGithub size={20} /> Code
  </a>
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
