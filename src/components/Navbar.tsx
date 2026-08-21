import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/aeroview360-logo.png";

const navLinks = [
  { name: "Home",     href: "/"          },
  { name: "Services", href: "/services"  },
  { name: "Projects", href: "/projects"  },
  { name: "About",    href: "/about"     },
  { name: "Contact",  href: "/contact"   },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/25 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 cursor-pointer focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-primary/20 shadow-[0_0_14px_rgba(27,174,232,0.2)]">
              <img src={logoImg} alt="Aeroview360" className="w-full h-full object-cover" />
            </div>
            <span className="text-[1.05rem] font-bold tracking-tight text-white leading-none">
              Aeroview<span className="text-primary">360</span>
            </span>
          </motion.div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-card/80 border border-border/60"
                    transition={{ type: "spring", stiffness: 340, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/85 font-semibold rounded-full px-6 text-sm shadow-[0_0_20px_rgba(27,174,232,0.22)] hover:shadow-[0_0_34px_rgba(27,174,232,0.4)] transition-shadow duration-300">
                Get Quote
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span key="close"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span key="open"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-border/30"
          >
            <div className="container mx-auto px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-3 py-3 text-base font-medium rounded-lg cursor-pointer transition-colors ${
                      isActive(link.href)
                        ? "text-primary bg-primary/8"
                        : "text-white hover:text-primary hover:bg-card/60"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full mt-3 bg-primary text-primary-foreground rounded-full font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
