import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: "Experienced" | "Comfortable" | "Learning";
  category: string;
}

const skills: Skill[] = [
  // Web
  { name: "HTML5", level: "Experienced", category: "Web" },
  { name: "CSS3", level: "Experienced", category: "Web" },
  { name: "JavaScript", level: "Comfortable", category: "Web" },
  { name: "React", level: "Learning", category: "Web" },
  { name: "Vite", level: "Comfortable", category: "Web" },
  // CMS
  { name: "WordPress", level: "Experienced", category: "CMS" },
  { name: "WooCommerce", level: "Experienced", category: "CMS" },
  { name: "Divi", level: "Experienced", category: "CMS" },
  // Tools
  { name: "Git", level: "Comfortable", category: "Tools" },
  { name: "GitHub", level: "Comfortable", category: "Tools" },
  { name: "APIs", level: "Comfortable", category: "Tools" },
  { name: "Agile / SCRUM", level: "Comfortable", category: "Tools" },
  // Databases
  { name: "MySQL", level: "Comfortable", category: "Databases" },
  { name: "SQL Server", level: "Comfortable", category: "Databases" },
  // IT
  { name: "Windows Server", level: "Comfortable", category: "IT" },
  { name: "Debian", level: "Comfortable", category: "IT" },
  { name: "Networking", level: "Comfortable", category: "IT" },
  { name: "Cloud Basics", level: "Learning", category: "IT" },
  // Design
  { name: "Figma", level: "Comfortable", category: "Design" },
  { name: "VS Code", level: "Experienced", category: "Design" },
  { name: "Command Line", level: "Comfortable", category: "Design" },
  { name: "Canva", level: "Comfortable", category: "Design" },
  // AI
  { name: "Gemini", level: "Comfortable", category: "AI" },
  { name: "ChatGPT", level: "Comfortable", category: "AI" },
  { name: "Claude", level: "Comfortable", category: "AI" },
  { name: "Lovable", level: "Comfortable", category: "AI" },
  { name: "Nano", level: "Comfortable", category: "AI" },
];

const levelColors: Record<string, string> = {
  Experienced: "text-primary",
  Comfortable: "text-accent",
  Learning: "text-muted-foreground",
};

const categories = ["Web", "CMS", "Tools", "Databases", "IT", "Design", "AI"];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Skills & Technologies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            My Tech Stack
          </h2>
        </motion.div>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-lg font-semibold text-muted-foreground mb-5 uppercase tracking-wider"
            >
              {cat}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills
                .filter((s) => s.category === cat)
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5, rotate: 2 }}
                    className="glass rounded-xl p-4 text-center cursor-default hover:glow transition-all duration-300 gradient-border"
                  >
                    <p className="font-semibold text-foreground text-sm mb-1">
                      {skill.name}
                    </p>
                    <span
                      className={`text-xs font-medium ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
