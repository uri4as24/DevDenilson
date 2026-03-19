import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-14 gradient-border"
        >
          <div className="max-w-4xl">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a project in mind, a question, or just want to say hello?
                Feel free to reach out — I'm always open to discussing new
                opportunities.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="mailto:uriaslopez4141@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={18} className="text-primary" />{" "}
                  uriaslopez4141@gmail.com
                </a>
                <a
                  href="tel:+353852834330"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone size={18} className="text-accent" /> +353 85 283 4330
                </a>
                <a
                  href="https://www.linkedin.com/in/denilson-l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin size={18} className="text-[hsl(210,80%,55%)]" />{" "}
                  LinkedIn
                </a>
                <a
                  href="https://github.com/uri4as24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github size={18} className="text-foreground" /> GitHub
                </a>
              </div>

              <a
                href="mailto:uriaslopez4141@gmail.com"
                className="mt-8 inline-flex gradient-btn text-primary-foreground px-6 py-3.5 rounded-xl font-semibold items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <ArrowRight size={18} /> Email Me Directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
