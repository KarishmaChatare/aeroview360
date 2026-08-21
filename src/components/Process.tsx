import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Plane, BarChart3, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description:
      "A detailed project brief — understanding your scope, deliverables, timelines, and site conditions before a single drone lifts off.",
  },
  {
    icon: Plane,
    number: "02",
    title: "Field Survey",
    description:
      "Our certified pilots execute the flight plan, capturing high-resolution imagery and LiDAR data with rigorous GCP placement.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Data Processing",
    description:
      "Raw data processed through photogrammetry pipelines, GIS software, and quality control checks for analysis-ready outputs.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Delivery",
    description:
      "Orthomosaics, 3D models, GIS files, and survey reports — delivered within 48 hours in formats compatible with your workflow.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 50%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-background overflow-hidden">
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
            How It Works
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            From Brief to Deliverable
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined four-step process designed to minimise your involvement
            while maximising output quality.
          </p>
        </motion.div>

        <div ref={lineRef} className="relative">
          {/* Animated connector line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%]">
            <div className="w-full h-px bg-border/40" />
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary/80 to-secondary/60"
            />
          </div>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`card-process-${step.number}`}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Numbered icon bubble */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="relative mb-6 flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary/30 bg-background shadow-[0_0_25px_rgba(34,211,238,0.12)] relative z-10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.05, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                  <span className="absolute -top-2 -right-2 text-[10px] font-extrabold text-primary bg-background border border-primary/20 rounded-full w-5 h-5 flex items-center justify-center leading-none">
                    {i + 1}
                  </span>
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
