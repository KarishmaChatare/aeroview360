import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";

const projects = [
  {
    image: project1,
    tag: "GIS Mapping · Urban Infrastructure",
    name: "Pune Metro Corridor Survey",
    location: "Pune, Maharashtra",
    outcome:
      "Delivered 42 km of sub-centimeter accurate corridor mapping for Phase 3 metro planning — reducing pre-construction survey time by 60%.",
    stat: "42 km",
    statLabel: "Mapped",
  },
  {
    image: project2,
    tag: "Drone Survey · Coastal Mapping",
    name: "Navi Mumbai Coastal Mapping",
    location: "Navi Mumbai, Maharashtra",
    outcome:
      "Mapped 18 km of coastline with LiDAR and multispectral payloads for environmental compliance and port expansion clearances.",
    stat: "18 km",
    statLabel: "Coastline",
  },
  {
    image: project3,
    tag: "3D Modelling · Industrial",
    name: "Nashik Industrial Zone 3D Model",
    location: "Nashik, Maharashtra",
    outcome:
      "Generated a high-resolution 3D digital twin of a 340-acre industrial zone, enabling volumetric cut-fill analysis and site planning.",
    stat: "340 ac",
    statLabel: "Modelled",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`card-project-${project.name.replace(/\s+/g, "-").toLowerCase()}`}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      {/* Parallax image */}
      <div className="relative h-56 overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-background/80 border border-primary/20 text-primary rounded-full px-3 py-1 backdrop-blur-sm"
          >
            {project.tag}
          </motion.span>
        </div>

        {/* Stat badge */}
        <div className="absolute bottom-4 right-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary/15 border border-primary/30 backdrop-blur-sm rounded-xl px-3 py-2 text-center"
          >
            <div className="text-lg font-extrabold text-primary leading-none">{project.stat}</div>
            <div className="text-[10px] text-primary/70 uppercase tracking-wider">{project.statLabel}</div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <motion.div
            className="shrink-0 mt-0.5"
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </div>
        <p className="text-xs text-primary/70 font-semibold mb-4 uppercase tracking-wider">
          {project.location}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.outcome}
        </p>
      </div>

      {/* Bottom hover line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 bg-background overflow-hidden">
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
            Case Studies
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Projects That Define Our Standard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected work from India's most demanding infrastructure and
            engineering programmes.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
