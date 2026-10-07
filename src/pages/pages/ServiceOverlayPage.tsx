import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Layers,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Maximize2,
  X,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Gallery images ──────────────────────────────────────────────────── */
const galleryImages = [
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

/* ─── Deliverables data ───────────────────────────────────────────────── */
const deliverables = [
  "Overlay comparison reports",
  "Deviation maps",
  "Interactive 3D viewers",
  "PDF analysis reports",
];

const bullets = [
  "As-built vs. as-designed overlay comparison",
  "High-accuracy alignment with geo-referenced imagery",
  "Multi-temporal overlay for progress tracking",
  "Interactive web-based viewer for stakeholders",
];

/* ─── Page header ─────────────────────────────────────────────────────── */
function PageHeader() {
  return (
    <section className="relative pt-40 pb-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/25"
          >
            <Layers className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-primary"
          >
            Overlay & Comparison
          </motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.04]"
        >
          3D Model{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Overlay
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
        >
          Overlay precise 3D models onto real-world imagery for accurate
          as-built vs. as-designed comparison and analysis. Our advanced overlay
          technology enables stakeholders to identify deviations instantly.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Content + Deliverables ──────────────────────────────────────────── */
function ContentSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-4 mb-8">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 text-[15px] text-muted-foreground"
                >
                  <CheckCircle className="h-[18px] w-[18px] text-primary shrink-0 mt-0.5" />
                  {b}
                </motion.li>
              ))}
            </ul>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-8 font-semibold shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Deliverables card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/25 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Deliverables
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-2.5 bg-background border border-border rounded-xl px-4 py-3 hover:border-primary/25 transition-colors duration-200"
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

/* ─── Interactive 3D View ─────────────────────────────────────────────── */
function InteractiveViewer() {
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

/* ─── Image Gallery ───────────────────────────────────────────────────── */
function ImageGallery() {
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
            {galleryImages.map((img, i) => (
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
            {lightbox < galleryImages.length - 1 && (
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
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl border border-border shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────── */
function OverlayCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-28 bg-card border-t border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(34,211,238,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Ready to overlay your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              3D models?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-9 max-w-xl mx-auto">
            Share your project details and our team will prepare a tailored
            proposal for your 3D model overlay requirements.
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="h-[52px] px-10 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold shadow-[0_0_28px_rgba(34,211,238,0.28)] hover:shadow-[0_0_44px_rgba(34,211,238,0.44)] transition-shadow"
              >
                Get a Quote
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
export default function ServiceOverlayPage() {
  return (
    <>
      <PageHeader />
      <ContentSection />
      <InteractiveViewer />
      <ImageGallery />
      <OverlayCTA />
    </>
  );
}
