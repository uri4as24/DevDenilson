import { motion } from "framer-motion";
import { Briefcase, Download, Lock } from "lucide-react";

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Conerney",
    period: "2023 – Present",
    tasks: [
      "Website management, maintenance & ongoing technical support",
      "SEO optimization & performance improvements",
      "Property listing management & content updates",
      "UX improvements driven by analytics and user feedback",
      "Uses AI tools to accelerate development, debugging, and content creation",
      "Leverages AI-assisted workflows to reduce turnaround time and improve output quality",
    ],
  },
  {
    role: "Web Developer",
    company: "Top Style",
    period: "2022 – 2023",
    tasks: [
      "WooCommerce store optimization & product management",
      "Google Ads integration & campaign management",
      "SEO strategies & implementation across the site",
      "UX redesign & ongoing website maintenance",
      "Applied AI-assisted tools for UI decisions, code refactoring, and performance tuning",
      "Leveraged AI to streamline repetitive tasks and improve development speed",
    ],
  },
];

const lockedExperiences = [
  {
    role: "Web Developer Jr. & IT Support",
    company: "Government Municipality",
    period: "2022",
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    period: "2021",
  },
  { role: "IT Support Specialist", company: "Enterprise Corp", period: "2020" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Career
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 pl-14 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 w-10 h-10 rounded-full glass flex items-center justify-center glow ${
                  i % 2 === 0
                    ? "left-0 md:left-auto md:-right-5"
                    : "left-0 md:-left-5"
                }`}
              >
                <Briefcase size={16} className="text-primary" />
              </div>

              <div className="glass rounded-xl p-6 gradient-border">
                <span className="text-xs text-primary font-semibold">
                  {exp.period}
                </span>
                <h3 className="font-display text-lg font-bold mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <ul
                  className={`space-y-1.5 ${i % 2 === 0 ? "md:text-right" : ""}`}
                >
                  {exp.tasks.map((task) => (
                    <li key={task} className="text-sm text-muted-foreground">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Locked experiences tease */}
          {lockedExperiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-8 pl-14 md:pl-0 md:w-1/2 ${
                (experiences.length + i) % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-1 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center ${
                  (experiences.length + i) % 2 === 0
                    ? "left-0 md:left-auto md:-right-5"
                    : "left-0 md:-left-5"
                }`}
              >
                <Lock size={14} className="text-muted-foreground" />
              </div>

              <div className="rounded-xl p-5 border border-dashed border-muted-foreground/20 bg-muted/10 backdrop-blur-sm select-none">
                <span className="text-xs text-muted-foreground/50 font-semibold">
                  {exp.period}
                </span>
                <h3 className="font-display text-base font-bold mt-1 text-muted-foreground/40 blur-[2px]">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground/30 blur-[2px]">
                  {exp.company}
                </p>
                <div className="mt-2 space-y-1">
                  <div className="h-2.5 w-3/4 rounded bg-muted-foreground/10" />
                  <div className="h-2.5 w-1/2 rounded bg-muted-foreground/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CV CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Lock size={14} className="text-primary" />
          </p>
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            <Download size={18} />
            Download Full CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
