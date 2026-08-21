import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Home,
  Layers,
  Mountain,
  Landmark,
  Factory,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction" },
  { icon: Home, label: "Real Estate" },
  { icon: Layers, label: "Infrastructure" },
  { icon: Mountain, label: "Mining" },
  { icon: Landmark, label: "Government" },
  { icon: Factory, label: "Industrial Projects" },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 block"
          >
            Sectors
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted across India's most demanding sectors — where accuracy isn't
            optional.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`card-industry-${industry.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="group flex flex-col items-center justify-center gap-4 bg-card border border-border rounded-2xl py-8 px-4 hover:border-primary/35 hover:bg-primary/5 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              <motion.div
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300"
              >
                <industry.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <span className="relative z-10 text-sm font-semibold text-white text-center leading-tight group-hover:text-primary transition-colors duration-300">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
