import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, X } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-bgSecondary text-textPrimary px-6 md:px-12"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Get In <span className="text-accent">Touch</span>
      </motion.h2>

      {/* Contact form */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.form
          action="https://formspree.io/f/xovkbena" // Formspree form ID
          method="POST"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-4 bg-bgPrimary p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-bgSecondary text-textPrimary outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-bgSecondary text-textPrimary outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-bgSecondary text-textPrimary outline-none focus:ring-2 focus:ring-accent resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent2 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-6"
        >
          <p className="text-textSecondary text-lg">
            Want to collaborate or just say hi?  
            Feel free to reach out or connect on my social profiles below 👇
          </p>

          <div className="flex space-x-6 text-accent text-3xl">
            <a
              href="mailto:maliknadeem34497@gmail.com"
              className="hover:text-accent2 transition"
              target="_blank"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/Malik-AK47"
              className="hover:text-accent2 transition"
              target="_blank"
            >
              <Github />
            </a>
            {/* <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-accent2 transition"
              target="_blank"
            >
              <Linkedin />
            </a> */}
            <a
              href="https://www.instagram.com/_malik.47_"
              className="hover:text-accent2 transition"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/MalikNadeem_47"
              className="hover:text-accent2 transition"
              target="_blank"
            >
              <X />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16 border-t border-gray-700 pt-8 text-sm text-textSecondary"
      >
        <p>© {new Date().getFullYear()} Malik — All Rights Reserved.</p>
        <p>
          Built with ❤️ using <span className="text-accent">React</span> &{" "}
          <span className="text-accent">Tailwind CSS</span>
        </p>
      </motion.footer>
    </section>
  );
}

export default Contact;
