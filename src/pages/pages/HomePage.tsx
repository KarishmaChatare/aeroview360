import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";

/* ─── CTA Banner ───────────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(27,174,232,0.07)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-6 block">
            Ready to Start?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.05]">
            Your Next Project Deserves{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Precision From Above.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Get a proposal within 24 hours. Tell us your site, scope, and
            timeline — we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="h-[52px] px-10 bg-primary text-primary-foreground hover:bg-primary/85 rounded-full text-[15px] font-semibold shadow-[0_0_30px_rgba(27,174,232,0.3)] hover:shadow-[0_0_50px_rgba(27,174,232,0.45)] transition-shadow duration-300"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/projects">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-[52px] px-10 border-border/45 text-white hover:bg-card/60 hover:border-primary/30 rounded-full text-[15px] font-medium"
                >
                  See Our Work
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Industries />
      <WhyUs />
      <CTASection />
    </>
  );
}
