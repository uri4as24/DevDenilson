import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Experience", href: "#experience" },
{ label: "Contact", href: "#contact" }];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "glass-strong shadow-lg" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="DL Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">

              {link.label}
            </a>
          )}
          <a
            href="#contact"
            className="gradient-btn text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-transform hover:scale-105">
            Download CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground">

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong overflow-hidden">

            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">

                  {link.label}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-btn text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold">

                Hire Me
              </a>
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </motion.header>);

};

export default Header;