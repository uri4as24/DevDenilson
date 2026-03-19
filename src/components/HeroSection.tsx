import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {/* Text — Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Based in Dublin, Ireland
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Web Developer
              <span className="block gradient-text mt-2">
                Frontend + WordPress + IT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              I build modern, responsive websites and manage digital solutions for businesses.
              Specialising in WordPress, WooCommerce, and frontend development with a strong
              foundation in IT support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="gradient-btn text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-transform hover:scale-105"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground flex items-center gap-2 hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground flex items-center gap-2 hover:border-primary/50 transition-all duration-300"
              >
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo — Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-md opacity-60 animate-glow-pulse" />
              <img
                src={profileImg}
                alt="Denilson Lopez — Web Developer"
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 shadow-xl shadow-primary/10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
