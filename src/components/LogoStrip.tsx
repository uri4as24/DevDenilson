import { motion } from "framer-motion";

const logos = [
  { name: "TopStyle", url: "https://topstyle.ie" },
  { name: "Conerney", url: "https://conerney.ie" },
  { name: "Itzig Property", url: "https://itzigproperty.com" },
  { name: "GuestGrove", url: "https://guestgrove.com" },
  { name: "Irish Beauty Salons", url: "https://irishbeautysalons.com" },
];

const LogoStrip = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 glass opacity-50" />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-10"
        >
          Trusted By
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, i) => (
            <motion.a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-display text-lg md:text-xl font-semibold grayscale hover:grayscale-0"
            >
              {logo.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
