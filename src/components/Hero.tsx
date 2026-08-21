import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Particle canvas ────────────────────────────────────────────────────── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      a: Math.random() * 0.4 + 0.07,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27,174,232,${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(27,174,232,${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />
  );
}

/* ─── Scanning horizontal line ───────────────────────────────────────────── */
function ScanLine() {
  return (
    <motion.div
      animate={{
        y: [
          -60,
          typeof window !== "undefined" ? window.innerHeight + 60 : 1000,
        ],
      }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none z-10"
    />
  );
}

/* ─── Stats row ──────────────────────────────────────────────────────────── */
const STATS = [
  { val: "±0.5cm", label: "Survey Accuracy" },
  { val: "48hr", label: "Delivery Turnaround" },
  { val: "8+", label: "Years of Experience" },
  { val: "200+", label: "Projects Delivered" },
];

/* ─── Hero ───────────────────────────────────────────────────────────────── */
const WORDS = ["Advanced", "Aerial", "Intelligence."];

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Mouse-follow glow */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.4);
  const gX = useSpring(mouseX, { stiffness: 30, damping: 22 });
  const gY = useSpring(mouseY, { stiffness: 30, damping: 22 });
  const gridX = useTransform(gX, [0, 1], [-8, 8]);
  const gridY = useTransform(gY, [0, 1], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background"
      onMouseMove={onMouseMove}
      data-testid="section-hero"
    >
      {/* ── Background layers ── */}

      {/* Radial center glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(27,174,232,0.09)_0%,transparent_70%)]" />
      </div>

      {/* Grid — mouse parallax */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-[-3%] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(27,174,232,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(27,174,232,0.05) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%,#000 30%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%,#000 30%,transparent 100%)",
          }}
        />
      </motion.div>

      <Particles />
      <ScanLine />

      {/* ── Hero content — fully centered ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-5 md:px-8 pt-28 pb-32 max-w-5xl mx-auto w-full">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 border border-primary/25 rounded-full px-5 py-2 mb-10 bg-primary/6 backdrop-blur-sm"
        >
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0"
          />
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
            Enterprise Drone Solutions · India
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-6 w-full">
          {/* Preface line */}
          <div className="overflow-hidden mb-2">
            <AnimatePresence>
              {ready && (
                <motion.p
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Aeroview360 —
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Large word-by-word reveal */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {WORDS.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <AnimatePresence>
                  {ready && (
                    <motion.span
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.08 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04]"
                    >
                      {word}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Gradient accent line */}
          <div className="overflow-hidden mt-1">
            <AnimatePresence>
              {ready && (
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.44,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]"
                  style={{ animation: "gradient 5s linear infinite" }}
                >
                  From Above.
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8 origin-center"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl font-light leading-relaxed"
        >
          Sub-centimeter accurate GIS mapping, 3D modelling, drone surveying
          and infrastructure intelligence — delivered to India's most demanding
          engineering projects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-[52px] px-9 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold group shadow-[0_0_28px_rgba(27,174,232,0.3)] hover:shadow-[0_0_46px_rgba(27,174,232,0.46)] transition-shadow duration-300"
              data-testid="button-hero-services"
            >
              Explore Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                className="ml-2 inline-flex"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-[52px] px-9 border-border/45 text-white hover:bg-card/60 hover:border-primary/30 rounded-full text-[15px] font-medium transition-all duration-300"
              data-testid="button-hero-projects"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-5 mt-16 pt-10 border-t border-border/25 w-full"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.07, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl md:text-3xl font-black text-primary leading-none mb-1">
                {s.val}
              </span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/35"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
