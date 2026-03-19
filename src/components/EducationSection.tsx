import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "BSc (Hons) in Computing & IT",
    institution: "CCT College Dublin",
    period: "Current",
    isCurrent: true,
  },
  {
    title: "Computer Systems Engineering Technician",
    institution: "ITCA Fepade",
    period: "2019 – 2021",
  },
];

const certifications = [
  {
    title: "CCNA Routing and Switching: Introduction to Networks",
    institution: "Cisco Networking Academy",
    period: "Feb 2021 – Jun 2021",
  },
  {
    title: "IT Essentials",
    institution: "Cisco Networking Academy",
    period: "Feb 2021 – Jun 2021",
  },
  {
    title: "Introduction to Machine Learning",
    institution: "Online Course",
    period: "Nov 2019 – Jan 2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Background
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-glass-border/30 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                    </div>
                    {item.isCurrent ? (
                      <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        Current
                      </span>
                    ) : (
                      <span className="shrink-0 text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-glass-border/30 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
