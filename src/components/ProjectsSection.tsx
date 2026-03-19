import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectTopstyle from "@/assets/project-topstyle.jpg";
import projectConerney from "@/assets/project-conerney.jpg";
import projectItzig from "@/assets/project-itzig.jpg";
import projectGuestgrove from "@/assets/project-guestgrove.jpg";
import projectIrishbeauty from "@/assets/project-irishbeauty.jpg";
import projectSantatecla from "@/assets/project-santatecla.jpg";

const techIcons: Record<string, { svg: React.ReactNode; bg: string }> = {
  WordPress: {
    bg: "bg-[#21759B]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.248.256-2.436.718-3.516l3.95 10.822C5.143 17.707 3.009 15.07 3.009 12zm8.991 9c-.91 0-1.79-.135-2.622-.385l2.784-8.089 2.852 7.813a.42.42 0 00.032.063A8.963 8.963 0 0112 21zm1.244-13.214c.558-.03 1.061-.089 1.061-.089.5-.059.441-.793-.059-.764 0 0-1.502.118-2.472.118-.912 0-2.442-.118-2.442-.118-.5-.029-.559.734-.059.764 0 0 .474.059.973.089l1.445 3.961-2.03 6.085L6.458 8.786c.558-.03 1.061-.089 1.061-.089.5-.059.441-.793-.059-.764 0 0-1.502.118-2.472.118-.174 0-.378-.005-.593-.013A8.96 8.96 0 0112 3.009c2.329 0 4.453.891 6.047 2.35-.039-.002-.076-.008-.117-.008-1.029 0-1.759.895-1.759 1.857 0 .862.497 1.591 1.026 2.453.398.697.853 1.59.853 2.88 0 .894-.344 1.931-.8 3.378l-1.049 3.505L12 7.786zM17.7 18.48l2.834-8.186A8.902 8.902 0 0020.991 12c0 2.477-1.007 4.718-2.634 6.346l-.003.003.346-1.869z"/></svg>,
  },
  WooCommerce: {
    bg: "bg-[#96588A]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M2.227 4.857A2.228 2.228 0 000 7.089v7.887a2.228 2.228 0 002.227 2.232h7.993l1.78 1.933 1.78-1.933h7.993A2.228 2.228 0 0024 14.976V7.089a2.228 2.228 0 00-2.227-2.232H2.227z"/></svg>,
  },
  Elementor: {
    bg: "bg-[#DB3157]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 16V8h2v8H9zm4-8h2v8h-2V8z"/></svg>,
  },
  "Yoast SEO": {
    bg: "bg-[#A4286A]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>,
  },
  "Contact Form 7": {
    bg: "bg-[#0073AA]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
  },
  GenerateBlocks: {
    bg: "bg-[#1E40AF]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>,
  },
  CSS3: {
    bg: "bg-[#2965F1]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.796 7.886.003-.098 1.106-4.702 1.263-.032.008H7.066l.21 2.358 3.988 1.076 3.025-.856.255-2.849h2.088l-.488 5.518-4.869 1.356-4.867-1.357-.338-3.786h2.05l.172 1.924 2.983.83 2.987-.834.312-3.484-7.93-.001-.36-4.07h12.054L16.9 6.424z"/></svg>,
  },
  MySQL: {
    bg: "bg-[#F29111]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M4 6h2v12H4V6zm4 0h2v12H8V6zm5 0h1.5l2.5 6-2.5 6H13l2.5-6L13 6zm5 0h2v12h-2V6z"/></svg>,
  },
  JavaScript: {
    bg: "bg-[#F7DF1E]",
    svg: <svg viewBox="0 0 24 24" fill="#000" className="w-4 h-4"><path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.79 2.53-2.42V11h-1.7v6.1c0 .8-.33 1.02-.86 1.02-.52 0-.74-.34-.98-.75l-1.53.67zm5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.49 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.78z"/></svg>,
  },
  "WP Rocket": {
    bg: "bg-[#F56640]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2L4 20h4l1.5-4h5L16 20h4L12 2zm0 6l2 6h-4l2-6z"/></svg>,
  },
  Wordfence: {
    bg: "bg-[#4B5563]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 10.99h6c-.53 3.49-3 6.54-6 7.53V13H6V6.3l6-2.25v8.94z"/></svg>,
  },
  "Site Kit": {
    bg: "bg-[#4285F4]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
  },
  "Smash Balloon": {
    bg: "bg-[#EB5757]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>,
  },
  "Essential Addons": {
    bg: "bg-[#6C63FF]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  },
  Chaty: {
    bg: "bg-[#25D366]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>,
  },
  APIs: {
    bg: "bg-primary",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-foreground"><path d="M14 12l-2 2-2-2 2-2 2 2zM12 6l2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6l2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5 2.5L6 12zm12 0l-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6l-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z"/></svg>,
  },
  Divi: {
    bg: "bg-[#7C3AED]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4"/></svg>,
  },
  HTML: {
    bg: "bg-[#E44D26]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302l-.173-2.028 7.26-.002.173-2.028H7.352l.521 5.89h6.28l-.241 2.742-1.93.533-1.92-.533-.12-1.423H7.93l.24 2.768 3.81 1.082 3.83-1.08.506-5.921H9.402z"/></svg>,
  },
  jQuery: {
    bg: "bg-[#0769AD]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M3.46 11.12a10.07 10.07 0 004.76 5.65l-1.13-.09a8.2 8.2 0 01-4.86-5.03c-.59-1.7-.5-3.22.02-4.76A8.53 8.53 0 015.42 3.3l.33-.27c-1.67 2.1-2.42 4.6-2.29 8.09zm3.87 1.23a6.83 6.83 0 003.07 3.23c-2.48-.47-4.26-1.92-5.26-4.23-.6-1.4-.67-2.86-.24-4.31A6.4 6.4 0 017.05 4.8l.42-.42c-.98 1.62-1.49 3.5-.14 7.97zm3.46.6a4.5 4.5 0 002.04 1.54c-1.56-.09-2.74-.87-3.54-2.21a4.47 4.47 0 01-.38-3.19 5.07 5.07 0 011.34-2.26c-.44 1.09-.71 2.22.54 6.12z"/></svg>,
  },
  PHP: {
    bg: "bg-[#777BB4]",
    svg: <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 5.601c-5.523 0-10 2.687-10 6s4.477 6 10 6 10-2.687 10-6-4.477-6-10-6zm-2.172 8.4H8.6l.429-2.2H7.8c-.443 0-.77-.087-.981-.261-.212-.174-.28-.455-.205-.843l.471-2.296h1.236l-.414 2.014c-.028.135-.012.233.047.293.059.06.165.09.318.09h1.1l-.544 3.203zm4.272-3.6c-.074.36-.244.64-.511.84-.267.2-.614.3-1.041.3h-1.02l-.283 1.46H10.01l.93-4.8h2.257c.435 0 .754.1.957.3.203.2.267.487.192.86l-.246 1.04zm3.272 0c-.074.36-.244.64-.511.84-.267.2-.614.3-1.041.3h-1.02l-.283 1.46h-1.236l.93-4.8h2.257c.435 0 .754.1.957.3.203.2.267.487.192.86l-.245 1.04z"/></svg>,
  },
};

const projects = [
  {
    title: "TopStyle.ie",
    company: "Top Style Fashion",
    url: "https://topstyle.ie",
    description: "WooCommerce e-commerce store with product management, SEO optimization, and Google Ads integration.",
    tech: ["WordPress", "WooCommerce", "Yoast SEO", "MySQL", "Smash Balloon", "Essential Addons", "Elementor", "WP Rocket", "Chaty", "Wordfence", "Site Kit"],
    image: projectTopstyle,
  },
  {
    title: "Conerney.ie",
    company: "Conerney Roofing",
    url: "https://conerney.ie",
    description: "Corporate website with property listings, performance optimization, and ongoing technical support.",
    tech: ["WordPress", "GenerateBlocks", "Yoast SEO", "Elementor", "Contact Form 7"],
    image: projectConerney,
  },
  {
    title: "ItzigProperty.com",
    company: "Itzig Property",
    url: "https://itzigproperty.com",
    description: "Property listing platform with advanced search, responsive design, and content management.",
    tech: ["WordPress", "APIs", "CSS3", "JavaScript"],
    image: projectItzig,
  },
  {
    title: "GuestGrove.com",
    company: "GuestGrove",
    url: "https://guestgrove.com",
    description: "Guest accommodation platform with booking integration and modern, clean design.",
    tech: ["WordPress", "WooCommerce", "Divi"],
    image: projectGuestgrove,
  },
  {
    title: "IrishBeautySalons.com",
    company: "Irish Beauty Salons",
    url: "https://irishbeautysalons.com",
    description: "Beauty salon directory with listing management, search functionality, and responsive layout.",
    tech: ["WordPress", "CSS3", "JavaScript", "MySQL"],
    image: projectIrishbeauty,
  },
  {
    title: "SantaTecla.gob.sv",
    company: "Government Municipality",
    url: "https://santatecla.gob.sv",
    description: "Government municipal website with WordPress, Divi, API integrations, and IT infrastructure support.",
    tech: ["WordPress", "Divi", "HTML", "CSS3", "jQuery", "PHP", "APIs"],
    image: projectSantatecla,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden gradient-border transition-all duration-300 hover:glow-strong block"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                {/* Tech icon badges */}
                <div className="absolute bottom-2 right-2 flex items-center -space-x-2">
                  {project.tech.slice(0, 4).map((t) => {
                    const icon = techIcons[t];
                    if (!icon) return null;
                    return (
                      <div
                        key={t}
                        title={t}
                        className={`w-10 h-10 rounded-full ${icon.bg} flex items-center justify-center border-2 border-card shadow-md`}
                      >
                        {icon.svg}
                      </div>
                    );
                  })}
                  {project.tech.length > 4 && (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-card shadow-md text-xs font-bold text-muted-foreground">
                      +{project.tech.length - 4}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-muted-foreground">{project.company}</p>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
