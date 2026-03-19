import { motion } from "framer-motion";
import { Globe, Code2, TrendingUp, Wrench } from "lucide-react";

const services = [
{
  num: "01",
  icon: Globe,
  title: "WordPress & WooCommerce",
  description: "Building and maintaining high-performance e-commerce and business websites",
  accent: "from-primary/20 to-accent/10",
  iconColor: "text-amber-400",
  iconBg: "bg-amber-400/10"
},
{
  num: "02",
  icon: Code2,
  title: "Frontend Development",
  description: "Creating responsive interfaces with HTML, CSS, JavaScript, and React",
  accent: "from-accent/20 to-primary/10",
  iconColor: "text-emerald-400",
  iconBg: "bg-emerald-400/10"
},
{
  num: "03",
  icon: TrendingUp,
  title: "SEO & Performance",
  description: "Optimizing websites for search engines and lightning-fast load times",
  accent: "from-primary/15 to-accent/10",
  iconColor: "text-primary",
  iconBg: "bg-primary/10"
},
{
  num: "04",
  icon: Wrench,
  title: "IT Support & Networking",
  description: "Managing networks, servers, and providing technical support",
  accent: "from-accent/15 to-primary/10",
  iconColor: "text-violet-400",
  iconBg: "bg-violet-400/10"
}];


const WhatIDoSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Combining technical expertise with a passion for creating seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) =>
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-glass-border/30 bg-card/50 backdrop-blur-sm p-7 transition-all duration-300 hover:border-primary/40 overflow-hidden">

              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-3">
                  


                  <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center mb-2`}>
                    <service.icon size={20} className={service.iconColor} />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhatIDoSection;