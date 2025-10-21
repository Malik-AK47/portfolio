// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = ["Home", "Projects", "Education", "About", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // detect active section
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].toLowerCase();
        const el = document.getElementById(id);
        if (!el) continue;
        const offsetTop = el.offsetTop;
        if (window.scrollY + 120 >= offsetTop) {
          setActive(id);
          break;
        }
      }
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-bgPrimary/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2">
          Malik 
          <span className="hidden md:inline text-accent">Nadeem</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <li key={link} className="relative">
                <a
                  href={`#${id}`}
                  className={`inline-block px-1 pb-1 transition-colors duration-200 ${
                    isActive ? "text-accent font-semibold opacity-100" : "text-textSecondary opacity-90 hover:text-accent hover:opacity-100"
                  }`}
                >
                  <span className="relative z-10">{link}</span>

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-accent rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    style={{ pointerEvents: "none" }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            className="text-textSecondary hover:text-accent transition"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-bgPrimary/95 backdrop-blur-md flex flex-col gap-4 p-6 text-center"
        >
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive ? "text-accent font-semibold" : "text-textSecondary hover:text-accent"
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </motion.ul>
      )}
    </motion.nav>
  );
}
