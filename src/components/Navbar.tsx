import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const logoImg = "/images/logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-background/85 backdrop-blur-2xl border-b border-border/25 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-8">
        {/* LOGO */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex cursor-pointer items-center gap-2.5 focus:outline-none"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <img
                src={logoImg}
                alt="Aeroview360 Logo"
                width={48}
                height={48}
                className="block h-full w-full object-contain"
                onError={(event) => {
                  console.error(
                    "Aeroview360 logo could not load:",
                    event.currentTarget.src
                  );
                }}
              />
            </div>

            <span className="text-[1.05rem] font-bold leading-none tracking-tight text-white">
              Aeroview<span className="text-primary">360</span>
            </span>
          </motion.div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
                  }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg border border-border/60 bg-card/80"
                    transition={{
                      type: "spring",
                      stiffness: 340,
                      damping: 34,
                    }}
                  />
                )}

                <span className="relative z-10">{link.name}</span>

                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* GET QUOTE */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button className="rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(27,174,232,0.22)] transition-shadow duration-300 hover:bg-primary/85 hover:shadow-[0_0_34px_rgba(27,174,232,0.4)]">
                Get Quote
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-1 text-white focus:outline-none md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border/30 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link, index) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`cursor-pointer rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive(link.href)
                      ? "bg-primary/8 text-primary"
                      : "text-white hover:bg-card/60 hover:text-primary"
                      }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}

              <Link href="/contact">
                <Button className="mt-3 w-full rounded-full bg-primary font-semibold text-primary-foreground">
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