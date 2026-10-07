import { useRef, useState, useEffect, Fragment } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Layers, Box, ScanEye, HardHat, Radar, Map, Landmark,
  CheckCircle, ArrowRight, Maximize2, X, MousePointerClick,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Process from "@/components/Process";

/* ─── Gallery images for 3D Model Overlay ──────────────────────────────── */
const overlayGalleryImages = [
  {
    src: "/images/services/overlay-construction.png",
    alt: "3D model overlay on a construction site showing BIM wireframe aligned with real structure",
  },
  {
    src: "/images/services/overlay-infrastructure.png",
    alt: "3D wireframe overlay on highway bridge infrastructure for engineering comparison",
  },
  {
    src: "/images/services/overlay-industrial.png",
    alt: "3D digital model overlay on industrial facility for structural analysis",
  },
];

/* ─── Page header ─────────────────────────────────────────────────────── */
function PageHeader() {
  return (
    <section className="relative pt-40 pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,174,232,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,174,232,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,174,232,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.04]"
        >
          End-to-End{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Geospatial Services
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          From aerial data capture to processed deliverables — every service
          engineered for precision, speed, and compliance.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Service detail sections ──────────────────────────────────────────── */
const serviceDetails = [
  {
    icon: Layers,
    title: "3D Model Overlay",
    slug: "3d-model-overlay",
    tag: "Overlay & Comparison",
    description:
      "Overlay precise 3D models onto real-world imagery for accurate as-built vs. as-designed comparison and analysis. Our advanced overlay technology enables stakeholders to identify deviations instantly.",
    bullets: [
      "As-built vs. as-designed overlay comparison",
      "High-accuracy alignment with geo-referenced imagery",
      "Multi-temporal overlay for progress tracking",
      "Interactive web-based viewer for stakeholders",
    ],
    deliverables: ["Overlay comparison reports", "Deviation maps", "Interactive 3D viewers", "PDF analysis reports"],
    alt: false,
  },
  {
    icon: Box,
    title: "3D Modelling",
    slug: "3d-modelling",
    tag: "Photogrammetry & Digital Twins",
    description:
      "Photogrammetry-based 3D terrain and structural models delivering detailed volumetric analysis and visualisation. Our point clouds and mesh models are used for BIM integration, cut-fill analysis, and digital twin creation.",
    bullets: [
      "Dense point cloud generation (up to 300 pts/m²)",
      "Textured 3D mesh models for BIM integration",
      "Volumetric cut-fill analysis reports",
      "IFC and Revit-compatible export formats",
    ],
    deliverables: ["LAS/LAZ point clouds", "OBJ/FBX meshes", "Volume reports", "Contour maps"],
    alt: true,
  },
  {
    icon: ScanEye,
    title: "360° Virtual Tour",
    slug: "360-virtual-tour",
    tag: "Immersive Walkthroughs",
    description:
      "Immersive 360-degree virtual walkthroughs of sites and facilities for remote inspection and stakeholder review. Navigate entire project sites from anywhere in the world with interactive hotspots and annotations.",
    bullets: [
      "Full 360° spherical panoramic capture",
      "Interactive hotspot navigation and annotations",
      "Multi-floor and multi-zone site coverage",
      "Embeddable web-based viewer for easy sharing",
    ],
    deliverables: ["Interactive virtual tour links", "Embedded tour widgets", "Annotated panoramas", "Tour analytics"],
    alt: false,
  },
  {
    icon: HardHat,
    title: "Construction Monitoring",
    slug: "construction-monitoring",
    tag: "Progress Tracking",
    description:
      "Periodic aerial progress monitoring to track construction milestones and detect deviations early. We provide scheduled flight campaigns with automated change detection and stakeholder-ready reporting.",
    bullets: [
      "Weekly or fortnightly progress flights",
      "Automated change detection between epochs",
      "Deviation reports against approved drawings",
      "Real-time dashboard access for project teams",
    ],
    deliverables: ["Progress orthomosaics", "Change detection overlays", "Milestone reports", "Executive dashboards"],
    alt: true,
  },
  {
    icon: Radar,
    title: "Drone Survey",
    slug: "drone-survey",
    tag: "Aerial Surveying",
    description:
      "High-resolution aerial surveys using enterprise-grade drones for precise topographic data and site mapping. Our RTK-enabled fleet delivers sub-centimeter ground accuracy across any terrain.",
    bullets: [
      "Topographic mapping at 1:500 to 1:5000 scale",
      "RTK GPS base-station workflow for GCP-free accuracy",
      "Large area coverage up to 500 acres per day",
      "DGCA-certified pilots with commercial operations approval",
    ],
    deliverables: ["Orthomosaic maps", "DSM/DTM outputs", "Survey reports", "AutoCAD DXF files"],
    alt: false,
  },
  {
    icon: Map,
    title: "GIS Mapping",
    slug: "gis-mapping",
    tag: "Geographic Information Systems",
    description:
      "Comprehensive geographic information system mapping with sub-centimeter accuracy for large-scale infrastructure and government projects. We deliver spatially referenced datasets that integrate directly into your GIS workflows.",
    bullets: [
      "Multi-layer GIS data collection and integration",
      "Attribute-linked spatial databases",
      "Compatible with ArcGIS, QGIS, and web platforms",
      "Custom CRS and projection support",
    ],
    deliverables: ["GeoTIFF files", "Shapefile packages", "KML/KMZ exports", "PostGIS-ready databases"],
    alt: true,
  },
  {
    icon: Landmark,
    title: "Land Survey",
    slug: "land-survey",
    tag: "Cadastral & Revenue Surveys",
    description:
      "Digital land boundary surveys integrating drone data with total-station accuracy for revenue and legal records. Accepted by Maharashtra revenue authorities and compliant with National Cadastral Survey standards.",
    bullets: [
      "Boundary demarcation with permanent markers",
      "Integration with Bhunaksha and DILRMP portals",
      "Village map preparation and e-Record of Rights",
      "Expert witness support for legal disputes",
    ],
    deliverables: ["Revenue cadastral maps", "7/12 extract data", "Boundary certificates", "Legal boundary reports"],
    alt: false,
  },
];

/* ─── Generic service section ──────────────────────────────────────────── */
function ServiceSection({ svc, index }: { svc: typeof serviceDetails[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id={svc.slug}
      ref={ref}
      style={{ scrollMarginTop: "90px" }}
      className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-card"} relative overflow-hidden`}
    >
      {index % 2 === 0 && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,174,232,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,174,232,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      )}

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${svc.alt ? "lg:flex-row-reverse" : ""}`}>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: svc.alt ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className={svc.alt ? "lg:order-2" : ""}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/25">
                <svc.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {svc.tag}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-[1.05]">
              {svc.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-7">
              {svc.description}
            </p>

            <ul className="space-y-3 mb-8">
              {svc.bullets.map((b) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {b}
                </motion.li>
              ))}
            </ul>

            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-8 font-semibold shadow-[0_0_24px_rgba(27,174,232,0.25)] hover:shadow-[0_0_40px_rgba(27,174,232,0.4)] transition-shadow duration-300">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Deliverables card side */}
          <motion.div
            initial={{ opacity: 0, x: svc.alt ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={svc.alt ? "lg:order-1" : ""}
          >
            <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/25 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Deliverables
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {svc.deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/25 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-white font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Interactive 3D Viewer (for 3D Model Overlay) ─────────────────────── */
function OverlayInteractiveViewer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="py-24 bg-card relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 block">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
              Interactive 3D View
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Explore a real 3D model overlay in your browser. Rotate, zoom, and
              inspect the model from any angle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative group"
          >
            {/* Glow border */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-[#070E1A] border border-border">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#0A1628] border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2 hidden sm:inline">
                    3d-model-overlay-viewer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-primary/70">
                    <MousePointerClick className="h-3 w-3" />
                    <span className="hidden sm:inline">Click & drag to rotate</span>
                  </span>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <iframe
                  src="https://manishwasade.github.io/Sample-11/"
                  title="Interactive 3D Model Overlay Viewer"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[#070E1A]"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-5 right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1628] border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
            >
              <X className="h-4 w-4" />
              Exit Fullscreen
            </button>
            <iframe
              src="https://manishwasade.github.io/Sample-11/"
              title="Interactive 3D Model Overlay Viewer — Fullscreen"
              className="w-full h-full"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Image Gallery (for 3D Model Overlay) ─────────────────────────────── */
function OverlayImageGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section
        ref={ref}
        className="py-24 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
              3D Model Overlay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                in Action
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Visualizing real-world environments with detailed 3D digital
              overlays for clearer project understanding and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            {overlayGalleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setLightbox(i)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 transition-all duration-500"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

                {/* Top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Expand icon */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A1628]/80 border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <Maximize2 className="h-4 w-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[#070E1A]/95 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1628] border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
            >
              <X className="h-4 w-4" />
              Close
            </button>

            {/* Nav buttons */}
            {lightbox > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox - 1);
                }}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#0A1628] border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {lightbox < overlayGalleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox + 1);
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#0A1628] border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            )}

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              src={overlayGalleryImages[lightbox].src}
              alt={overlayGalleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl border border-border shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── 3D Modelling Sub-topics Data & Component ────────────────────────── */
interface SubTopicCategory {
  id: string;
  title: string;
  badge: string;
  folder: string;
  images: { src: string; alt: string; title?: string }[];
}

const modellingSubTopics: SubTopicCategory[] = [
  {
    id: "contour-map",
    title: "Contour Map",
    badge: "Elevation & Topography",
    folder: "/images/services/3d-modelling/contour-map",
    images: [],
  },
  {
    id: "las-laz",
    title: "LAS / LAZ",
    badge: "Point Cloud Data",
    folder: "/images/services/3d-modelling/las-laz",
    images: [],
  },
  {
    id: "obj-fbx-mesh",
    title: "OBJ / FBX Mesh",
    badge: "3D Textured Mesh",
    folder: "/images/services/3d-modelling/obj-fbx-mesh",
    images: [],
  },
  {
    id: "volume-reports",
    title: "Volume Reports",
    badge: "Cut & Fill Analytics",
    folder: "/images/services/3d-modelling/volume-reports",
    images: [],
  },
];

function ThreeDModellingSubtopics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightboxState, setLightboxState] = useState<{
    categoryIndex: number;
    imageIndex: number;
  } | null>(null);

  return (
    <section ref={ref} className="py-20 bg-card/60 border-t border-b border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">
            3D Modelling Deliverables
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Sub-Topic Galleries
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Explore high-resolution deliverables categorised by technical output type.
          </p>
        </motion.div>

        {/* 4 Sub-topics Grid/Stack */}
        <div className="space-y-12">
          {modellingSubTopics.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background/90 border border-border/70 rounded-2xl p-6 md:p-8 relative overflow-hidden group/card"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/25">
                    {cat.badge}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h4>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {cat.images.length} {cat.images.length === 1 ? "Image" : "Images"}
                </span>
              </div>

              {/* Gallery Grid or Ready State */}
              {cat.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.images.map((img, imgIdx) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + imgIdx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setLightboxState({ categoryIndex: catIdx, imageIndex: imgIdx })}
                      className="group relative rounded-xl overflow-hidden border border-border bg-card cursor-pointer shadow-md hover:border-primary/40 transition-all"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                          <span className="text-xs text-white font-medium truncate">{img.alt}</span>
                          <Maximize2 className="h-4 w-4 text-primary shrink-0 ml-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-border/60 bg-card/30 p-8 text-center flex flex-col items-center justify-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 mb-1">
                    <Box className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-white font-semibold">
                    {cat.title} Gallery
                  </p>
                  <p className="text-xs text-muted-foreground max-w-md">
                    Client-provided images for {cat.title} will be rendered here upon upload.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Get a Quote CTA */}
        <div className="pt-4 text-center">
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-8 font-semibold shadow-[0_0_24px_rgba(27,174,232,0.25)] hover:shadow-[0_0_40px_rgba(27,174,232,0.4)] transition-shadow duration-300">
                Get a Quote for 3D Modelling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxState(null)}
          >
            <button
              onClick={() => setLightboxState(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-card border border-border rounded-full p-2.5 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modellingSubTopics[lightboxState.categoryIndex].images[lightboxState.imageIndex]?.src}
                alt={modellingSubTopics[lightboxState.categoryIndex].images[lightboxState.imageIndex]?.alt}
                className="max-h-[80vh] w-auto object-contain mx-auto"
              />
              <div className="p-4 bg-card border-t border-border flex items-center justify-between text-sm">
                <span className="text-white font-medium">
                  {modellingSubTopics[lightboxState.categoryIndex].images[lightboxState.imageIndex]?.alt}
                </span>
                <span className="text-xs text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  {modellingSubTopics[lightboxState.categoryIndex].title}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────── */
function ServicesCTA() {
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
            Not sure which service you need?
          </h2>
          <p className="text-muted-foreground text-lg mb-9 max-w-xl mx-auto">
            Tell us about your project and our team will recommend the right
            solution and send you a proposal within 24 hours.
          </p>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="h-[52px] px-10 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold shadow-[0_0_28px_rgba(27,174,232,0.28)] hover:shadow-[0_0_44px_rgba(27,174,232,0.44)] transition-shadow">
                Talk to Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main page ───────────────────────────────────────────────────────── */
export default function ServicesPage() {
  /* Scroll to hash on mount and on hash change */
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        /* Short delay to ensure DOM is rendered */
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 350);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <PageHeader />
      {serviceDetails.map((svc, i) => (
        <Fragment key={svc.title}>
          <ServiceSection svc={svc} index={i} />
          {/* Render extra detailed content after 3D Model Overlay */}
          {svc.slug === "3d-model-overlay" && (
            <>
              <OverlayInteractiveViewer />
              <OverlayImageGallery />
            </>
          )}
          {/* Render 3D Modelling sub-topic galleries */}
          {svc.slug === "3d-modelling" && (
            <ThreeDModellingSubtopics />
          )}
        </Fragment>
      ))}
      <Process />
      <ServicesCTA />
    </>
  );
}
