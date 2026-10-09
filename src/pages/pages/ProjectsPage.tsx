import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";

/* ─── Data ────────────────────────────────────────────────────────────────*/
const projects = [
  {
    image: project1,
    category: "GIS Mapping",
    tag: "GIS Mapping · Urban Infrastructure",
    name: "Pune Metro Corridor Survey",
    location: "Pune, Maharashtra",
    year: "2024",
    outcome:
      "Delivered 42 km of sub-centimeter accurate corridor mapping for Phase 3 metro planning — reducing pre-construction survey time by 60% and saving ₹1.8Cr in traditional survey costs.",
    stat: "42 km",
    statLabel: "Mapped",
    scope: "RTK drone survey, GIS integration, cross-section generation, AutoCAD deliverables.",
  },
  {
    image: project2,
    category: "Drone Survey",
    tag: "Drone Survey · Coastal Mapping",
    name: "Navi Mumbai Coastal Mapping",
    location: "Navi Mumbai, Maharashtra",
    year: "2023",
    outcome:
      "Mapped 18 km of coastline with LiDAR and multispectral payloads for environmental compliance and port expansion clearances. Delivered within a 5-day window during restricted tidal access.",
    stat: "18 km",
    statLabel: "Coastline",
    scope: "LiDAR survey, multispectral analysis, environmental impact overlay, DEM generation.",
  },
  {
    image: project3,
    category: "3D Modelling",
    tag: "3D Modelling · Industrial",
    name: "Nashik Industrial Zone 3D Model",
    location: "Nashik, Maharashtra",
    year: "2024",
    outcome:
      "Generated a high-resolution 3D digital twin of a 340-acre industrial zone, enabling volumetric cut-fill analysis and site planning. Client avoided ₹4.2Cr in over-excavation costs.",
    stat: "340 ac",
    statLabel: "Modelled",
    scope: "Photogrammetry capture, dense point cloud, BIM-ready mesh, cut-fill volumetrics.",
  },
  {
    image: project1,
    category: "Land Survey",
    tag: "Land Survey · Revenue",
    name: "Solapur Revenue Cadastral Survey",
    location: "Solapur, Maharashtra",
    year: "2023",
    outcome:
      "Completed cadastral survey of 1,200 parcels across 3 villages for the Maharashtra revenue department, integrating drone data with DILRMP portal submissions.",
    stat: "1,200",
    statLabel: "Parcels",
    scope: "Boundary demarcation, cadastral mapping, revenue record integration, Bhunaksha update.",
  },
  {
    image: project2,
    category: "Construction Monitoring",
    tag: "Construction · Progress Tracking",
    name: "Aurangabad Ring Road Monitoring",
    location: "Aurangabad, Maharashtra",
    year: "2024",
    outcome:
      "Fortnightly progress monitoring over 18 months for a 64 km ring road project. Detected 11 critical deviations from approved design, saving the client from costly rework.",
    stat: "64 km",
    statLabel: "Monitored",
    scope: "Bi-weekly aerial surveys, change detection, deviation analysis, executive dashboards.",
  },
  {
    image: project3,
    category: "Infrastructure Mapping",
    tag: "Infrastructure · Utilities",
    name: "Kolhapur Water Pipeline Corridor",
    location: "Kolhapur, Maharashtra",
    year: "2023",
    outcome:
      "Mapped 38 km of proposed water pipeline corridor with ROW analysis and encroachment detection, enabling the authority to fast-track land acquisition proceedings.",
    stat: "38 km",
    statLabel: "Corridor",
    scope: "Corridor survey, ROW mapping, encroachment overlay, land acquisition data package.",
  },
];

const CATEGORIES = ["All", "GIS Mapping", "Drone Survey", "3D Modelling", "Land Survey", "Construction Monitoring", "Infrastructure Mapping"];

/* ─── Page header ─────────────────────────────────────────────────────────*/
function PageHeader() {
  return (
    <section className="relative pt-40 pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,174,232,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block"
        >
          Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.04]"
        >
          Projects That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Define Our Standard
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Selected work from India's most demanding infrastructure and
          engineering programmes — where precision is the baseline.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Project card ────────────────────────────────────────────────────────*/
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col"
    >
      {/* Parallax image */}
      <div className="relative h-56 overflow-hidden shrink-0">
        <motion.div style={{ y: imgY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-background/80 border border-primary/20 text-primary rounded-full px-3 py-1 backdrop-blur-sm">
            {project.tag}
          </span>
        </div>

        <div className="absolute bottom-4 right-4">
          <div className="bg-primary/15 border border-primary/30 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
            <div className="text-lg font-extrabold text-primary leading-none">{project.stat}</div>
            <div className="text-[10px] text-primary/70 uppercase tracking-wider">{project.statLabel}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <motion.div whileHover={{ scale: 1.2, rotate: 45 }} transition={{ duration: 0.2 }} className="shrink-0 mt-0.5">
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </div>
        <p className="text-[11px] text-primary/70 font-bold mb-4 uppercase tracking-wider">
          {project.location} · {project.year}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.outcome}</p>

        <div className="pt-4 border-t border-border/50 mt-auto">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Scope</p>
          <p className="text-xs text-muted-foreground/80">{project.scope}</p>
        </div>
      </div>

      <motion.div
        className="h-0.5 bg-gradient-to-r from-primary to-secondary"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </motion.article>
  );
}

/* ─── Stats bar ───────────────────────────────────────────────────────────*/
const stats = [
  { val: "200+", label: "Projects Delivered" },
  { val: "8+",   label: "Years Active" },
  { val: "₹50Cr+", label: "Infrastructure Value" },
  { val: "12+",  label: "States Covered" },
];

function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.val}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ─────────────────────────────────────────────────────────────*/
function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5 md:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(27,174,232,0.3)]"
                  : "bg-transparent border-border text-muted-foreground hover:text-white hover:border-primary/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────────*/
function ProjectsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-28 bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(27,174,232,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Let's build your next case study.
          </h2>
          <p className="text-muted-foreground text-lg mb-9 max-w-xl mx-auto">
            Share your project brief and we'll respond with a detailed proposal within 24 hours.
          </p>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="h-[52px] px-10 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold shadow-[0_0_28px_rgba(27,174,232,0.28)] hover:shadow-[0_0_44px_rgba(27,174,232,0.44)] transition-shadow">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader />
      <StatsBar />
      <Gallery />
      <ProjectsCTA />
    </>
  );
}
