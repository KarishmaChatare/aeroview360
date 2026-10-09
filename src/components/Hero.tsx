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
import { Link } from "wouter";

/* ─────────────────────────────────────────────
   Subtle Particle Background
───────────────────────────────────────────── */
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

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 28 : 50;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.22 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((particle) => {
        particle.x =
          (particle.x + particle.vx + W) % W;

        particle.y =
          (particle.y + particle.vy + H) % H;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(27,174,232,${particle.opacity})`;

        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 110) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(27,174,232,${0.04 * (1 - distance / 110)
              })`;

            ctx.lineWidth = 0.5;

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
    />
  );
}

/* ─────────────────────────────────────────────
   Hero Stats
───────────────────────────────────────────── */
const STATS = [
  {
    value: "±0.5cm",
    label: "Survey Accuracy",
  },
  {
    value: "48hr",
    label: "Fast Delivery",
  },
  {
    value: "8+",
    label: "Years Experience",
  },
  {
    value: "200+",
    label: "Projects Delivered",
  },
];

/* ─────────────────────────────────────────────
   Hero Heading
───────────────────────────────────────────── */
const WORDS = [
  "See More.",
  "Measure Better.",
  "Build Smarter.",
];

/* ─────────────────────────────────────────────
   Hero Component
───────────────────────────────────────────── */
export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  /* Mouse movement */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.4);

  const smoothX = useSpring(mouseX, {
    stiffness: 30,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 30,
    damping: 22,
  });

  const gridX = useTransform(
    smoothX,
    [0, 1],
    [-5, 5]
  );

  const gridY = useTransform(
    smoothY,
    [0, 1],
    [-5, 5]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) /
      rect.width
    );

    mouseY.set(
      (event.clientY - rect.top) /
      rect.height
    );
  };

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
      data-testid="section-hero"
    >
      {/* Hero Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* ───────── Background Glow ───────── */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_42%,rgba(27,174,232,0.11)_0%,transparent_72%)]" />
      </div>

      {/* ───────── Moving Grid ───────── */}

      <motion.div
        style={{
          x: gridX,
          y: gridY,
        }}
        className="absolute inset-[-2%] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(27,174,232,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(27,174,232,0.04) 1px,transparent 1px)",

            backgroundSize:
              "60px 60px",

            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%,#000 25%,transparent 100%)",

            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%,#000 25%,transparent 100%)",
          }}
        />
      </motion.div>

      {/* Particles */}

      <Particles />

      {/* ───────── Main Hero Content ───────── */}

      <div
        className="
          relative
          z-20
          flex
          flex-col
          items-center
          text-center
          px-5
          sm:px-8
          pt-28
          pb-28
          max-w-6xl
          mx-auto
          w-full
        "
      >

        {/* ───────── Badge ───────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex
            items-center
            gap-2
            border
            border-primary/25
            rounded-full
            px-4
            sm:px-5
            py-2
            mb-6
            sm:mb-8
            bg-primary/[0.05]
            backdrop-blur-sm
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />

          <span
            className="
              text-[10px]
              sm:text-[11px]
              font-bold
              text-primary
              uppercase
              tracking-[0.16em]
              sm:tracking-[0.2em]
            "
          >
            Enterprise Drone Solutions · India
          </span>
        </motion.div>

        {/* ───────── Brand ───────── */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-muted-foreground
            mb-4
          "
        >
          Aeroview360
        </motion.p>

        {/* ───────── Main Heading ───────── */}

        <div className="w-full max-w-5xl">

          <div className="flex flex-col items-center">

            {WORDS.map((word, index) => (
              <div
                key={word}
                className="overflow-hidden leading-none"
              >
                <AnimatePresence>
                  {ready && (
                    <motion.h1
                      initial={{
                        y: "110%",
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay:
                          0.12 +
                          index * 0.1,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className={`
                        font-black
                        tracking-tight
                        leading-[0.98]
                        text-[clamp(2.5rem,6vw,5.8rem)]
                        ${index ===
                          WORDS.length - 1
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
                          : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                        }
                      `}
                    >
                      {word}
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>
        </div>

        {/* ───────── Divider ───────── */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="
            w-16
            sm:w-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/60
            to-transparent
            mt-6
            sm:mt-7
            mb-6
            sm:mb-8
          "
        />

        {/* ───────── Description ───────── */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-muted-foreground
            max-w-2xl
            font-light
            leading-relaxed
            px-2
          "
        >
          Drone surveying, GIS mapping, 3D modelling
          and infrastructure intelligence — helping
          engineering teams make faster and more
          accurate decisions.
        </motion.p>

        {/* ───────── Service Tags ───────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.78,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-2
            sm:gap-3
            mt-6
          "
        >
          {[
            "Drone Survey",
            "GIS Mapping",
            "3D Modelling",
            "Inspection",
          ].map((service) => (
            <span
              key={service}
              className="
                px-3
                py-1.5
                rounded-full
                border
                border-border/40
                bg-card/20
                text-[10px]
                sm:text-xs
                text-muted-foreground
                transition-all
                duration-300
                hover:border-primary/40
                hover:text-primary
              "
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* ───────── CTA Buttons ───────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-3
            mt-8
            sm:mt-9
            w-full
            sm:w-auto
          "
        >

          {/* Primary CTA */}

          <Button asChild size="lg" className="
              h-[52px]
              w-full
              sm:w-auto
              px-8
              sm:px-9
              bg-primary
              text-primary-foreground
              hover:bg-primary/90
              rounded-full
              text-sm
              sm:text-[15px]
              font-semibold
              group
              shadow-[0_0_25px_rgba(27,174,232,0.25)]
              hover:shadow-[0_0_35px_rgba(27,174,232,0.35)]
              transition-all
              duration-300
            "
            data-testid="button-hero-quote"
          >
            <Link href="/contact">
              Request a Quote

              <ArrowRight
                className="
                ml-2
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              />
            </Link>
          </Button>

          {/* Secondary CTA */}

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("projects")}
            className="
              h-[52px]
              w-full
              sm:w-auto
              px-8
              sm:px-9
              border-border/45
              text-white
              hover:bg-card/60
              hover:border-primary/40
              rounded-full
              text-sm
              sm:text-[15px]
              font-medium
              transition-all
              duration-300
            "
            data-testid="button-hero-projects"
          >
            View Our Projects
          </Button>

        </motion.div>

        {/* ───────── Stats ───────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.15,
            duration: 0.7,
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            sm:gap-4
            mt-12
            sm:mt-16
            pt-8
            sm:pt-10
            border-t
            border-border/20
            w-full
            max-w-4xl
          "
        >

          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-xl
                border
                border-border/20
                bg-card/[0.15]
                backdrop-blur-sm
                px-3
                py-4
                sm:py-5
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-card/[0.25]
              "
            >

              <span
                className="
                  block
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-black
                  text-primary
                  leading-none
                  mb-2
                "
              >
                {stat.value}
              </span>

              <span
                className="
                  block
                  text-[9px]
                  sm:text-[10px]
                  text-muted-foreground
                  uppercase
                  tracking-[0.12em]
                  font-medium
                "
              >
                {stat.label}
              </span>

            </div>
          ))}

        </motion.div>

      </div>

      {/* ───────── Bottom Scroll Indicator ───────── */}

      <button
        type="button"
        onClick={() => scrollTo("services")}
        aria-label="Explore services"
        className="
          absolute
          bottom-6
          sm:bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-1.5
          text-muted-foreground/45
          hover:text-primary
          transition-colors
        "
      >

        <span
          className="
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[0.22em]
            font-semibold
          "
        >
          Explore
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>

      </button>

    </section>
  );
}