import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Crosshair, CalendarCheck, Cpu, Zap } from "lucide-react";

const reasons = [
  {
    icon: Crosshair,
    stat: "0.5",
    unit: "cm",
    title: "Sub-Centimeter Accuracy",
    description:
      "GPS-grade precision on every deliverable. RTK-enabled drones and rigorous ground control workflows guarantee measurement accuracy that holds up in court and on-site.",
  },
  {
    icon: CalendarCheck,
    stat: "8",
    unit: "+ Yrs",
    title: "Industry Experience",
    description:
      "Since 2016, we have delivered surveys for highways, smart cities, ports, and industrial zones across Maharashtra and beyond.",
  },
  {
    icon: Cpu,
    stat: "DJI",
    unit: "",
    title: "Latest Technology",
    description:
      "DJI Matrice series, LiDAR payloads, and photogrammetry-grade cameras — the hardware that gives our clients data others can't capture.",
  },
  {
    icon: Zap,
    stat: "48",
    unit: "hrs",
    title: "Fast Turnaround",
    description:
      "Processed reports, orthomosaics, and 3D models delivered within 48 hours of field completion — because your project timeline can't wait.",
  },
];

function AnimatedCounter({ target, unit, inView }: { target: string; unit: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericTarget = parseFloat(target);
  const isNumeric = !isNaN(numericTarget);

  useEffect(() => {
    if (!inView || !isNumeric) {
      if (!isNumeric) setDisplay(target);
      return;
    }
    let start = 0;
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setDisplay(numericTarget % 1 === 0 ? String(numericTarget) : numericTarget.toFixed(1));
        clearInterval(timer);
      } else {
        setDisplay(numericTarget % 1 === 0 ? String(Math.floor(current)) : current.toFixed(1));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, numericTarget, isNumeric]);

  return (
    <div className="text-4xl font-extrabold text-primary tracking-tight leading-none mb-1">
      {display}
      <span className="text-2xl font-bold text-primary/70 ml-1">{unit}</span>
    </div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="whyus" className="py-32 bg-card relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
            Why Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Built on Precision. Proven on Scale.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four fundamentals that define every project we deliver.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`card-why-${reason.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                whileHover={{ scale: 1.08, rotate: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/15 transition-colors duration-300"
              >
                <reason.icon className="h-5 w-5 text-primary" />
              </motion.div>
              <AnimatedCounter target={reason.stat} unit={reason.unit} inView={inView} />
              <h3 className="text-sm font-bold text-white mb-3 mt-2">{reason.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
