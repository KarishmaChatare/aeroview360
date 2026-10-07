import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Award, CheckCircle, ArrowRight, Target, Eye, Zap,
  Building2, Home, Layers, Mountain, Landmark, Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/images/founder.png";

/* ─── Page header ────────────────────────────────────────────────────────*/
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
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.04]"
        >
          Precision.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            From Above.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Aeroview360 was founded to bring aerospace-grade measurement precision
          to India's infrastructure sector — one survey at a time.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Company overview ────────────────────────────────────────────────────*/
function CompanyOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,174,232,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,174,232,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-[1.05]">
              India's Leading Geospatial Intelligence Company
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Aeroview360 is a Pune-based geospatial technology company
              specialising in drone surveying, GIS mapping, 3D modelling, and
              infrastructure intelligence. Since 2016, we have delivered over 200
              projects across Maharashtra and beyond for clients in construction,
              government, real estate, mining, and infrastructure.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Our team of DGCA-certified pilots, GIS specialists, and
              photogrammetry engineers operates a fleet of enterprise-grade DJI
              Matrice drones equipped with RTK modules, LiDAR payloads, and
              multispectral cameras — delivering data that others simply cannot
              capture.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: "200+", label: "Projects Delivered" },
                { val: "8+",   label: "Years Experience"   },
                { val: "±0.5cm", label: "Survey Accuracy"  },
                { val: "48hr", label: "Avg. Turnaround"    },
              ].map((s) => (
                <div key={s.label} className="bg-background border border-border rounded-xl p-5">
                  <div className="text-2xl font-black text-primary mb-1">{s.val}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To make aerospace-grade geospatial precision accessible to every infrastructure project in India — replacing slow, expensive traditional surveys with drone-first workflows that deliver faster, more accurate results.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become India's most trusted geospatial intelligence partner — the company that every engineering firm, government body, and developer calls first when they need to understand their site from above.",
              },
              {
                icon: Zap,
                title: "Our Approach",
                text: "We don't just fly drones. We embed as a technical partner from brief to delivery — recommending the right payload, the right methodology, and the right deliverable format for your specific workflow.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/25 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Founder ─────────────────────────────────────────────────────────────*/
const credentials = [
  "DGCA Certified Remote Pilot — Commercial Category",
  "GIS Specialist with advanced post-processing expertise",
  "Led projects worth ₹50Cr+ in infrastructure mapping",
  "8+ years in aerial surveying and geospatial solutions",
  "Clients include government bodies and Fortune 500 contractors",
];

function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            The Person Behind Every Survey
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/20 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div ref={imgRef} className="relative h-72 md:h-auto overflow-hidden">
              <motion.img
                style={{ y: imgY }}
                src={founderImg}
                alt="Manish Ravindra Wasade — Founder, Aeroview360"
                className="w-full h-[115%] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/30" />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Founder & CEO
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
                Manish Ravindra Wasade
              </h3>
              <p className="text-sm text-primary/60 mb-5 italic font-medium">
                "Turning altitude into insight."
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Manish founded Aeroview360 with a single mission: to bring
                aerospace-grade measurement precision to India's infrastructure
                and construction sector. A certified drone pilot and GIS
                specialist, he has personally led surveys across highways, ports,
                smart cities, and industrial zones.
              </p>
              <ul className="space-y-2.5">
                {credentials.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Industries ──────────────────────────────────────────────────────────*/
const industries = [
  { icon: Building2, label: "Construction"      },
  { icon: Home,      label: "Real Estate"       },
  { icon: Layers,    label: "Infrastructure"    },
  { icon: Mountain,  label: "Mining"            },
  { icon: Landmark,  label: "Government"        },
  { icon: Factory,   label: "Industrial"        },
];

function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 block">Sectors</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Industries We Serve
          </h2>
        </motion.div>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col items-center justify-center gap-4 bg-background border border-border rounded-2xl py-8 px-4 hover:border-primary/35 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              <motion.div whileHover={{ scale: 1.15, rotate: -8 }} transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                <ind.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <span className="text-sm font-semibold text-white text-center group-hover:text-primary transition-colors duration-300">
                {ind.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────────*/
function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-28 bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(27,174,232,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Ready to work with us?
          </h2>
          <p className="text-muted-foreground text-lg mb-9 max-w-xl mx-auto">
            Let's discuss your project requirements and build something exceptional together.
          </p>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="h-[52px] px-10 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold shadow-[0_0_28px_rgba(27,174,232,0.28)] hover:shadow-[0_0_44px_rgba(27,174,232,0.44)] transition-shadow">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <CompanyOverview />
      <FounderSection />
      <IndustriesSection />
      <AboutCTA />
    </>
  );
}
