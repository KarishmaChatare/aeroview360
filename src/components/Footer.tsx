import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/aeroview360-logo.png";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const services = [
  { label: "Drone Survey", href: "/services" },
  { label: "GIS Mapping", href: "/services" },
  { label: "3D Modelling", href: "/services" },
  { label: "Land Survey", href: "/services" },
  { label: "Construction Monitoring", href: "/services" },
  { label: "Infrastructure Mapping", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aeroview-view-10944b42a/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/aeroview360.in/" },
];

/* ─── Footer ──────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-5 md:px-8 pt-20 pb-10">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 mb-6 cursor-pointer w-fit"
              >
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-primary/20 shadow-[0_0_14px_rgba(27,174,232,0.15)]">
                  <img src={logoImg} alt="Aeroview360" className="w-full h-full object-cover" />
                </div>
                <span className="text-[1.05rem] font-bold tracking-tight text-white leading-none">
                  Aeroview<span className="text-primary">360</span>
                </span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Delivering precision drone surveying, GIS mapping, 3D modelling
              and geospatial solutions that help engineers, developers and
              infrastructure teams make smarter decisions with accurate aerial
              intelligence.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social + CTA */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5 mb-8">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </motion.a>
              ))}
            </div>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-6 h-11 font-semibold text-sm shadow-[0_0_24px_rgba(27,174,232,0.2)] hover:shadow-[0_0_40px_rgba(27,174,232,0.38)] transition-shadow duration-300 group">
                  Request Consultation
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-2 inline-flex"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Aeroview360. All Rights Reserved.</p>
          <p className="text-muted-foreground/60">
            Designed & Developed by{" "}
            <span className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Aeroview360
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
