import { Link } from "wouter";
import { motion } from "framer-motion";
import {
    ScanEye,
    ArrowLeft,
    ArrowRight,
    Building2,
    Trees,
    Landmark,
    HardHat,
    CheckCircle2,
} from "lucide-react";

const virtualTourSections = [
    {
        icon: Building2,
        title: "Real Estate Virtual Tours",
        description:
            "Interactive property walkthroughs for residential, commercial, villas, apartments, and township projects.",
        items: [
            "Apartments",
            "Villas",
            "Commercial Buildings",
            "Club House",
            "Amenities",
            "Sales Gallery",
        ],
    },

    {
        icon: Trees,
        title: "Open Area Virtual Tours",
        description:
            "Virtual tours for open land, layouts, industrial parks, solar plants, farms, and tourism locations.",
        items: [
            "Open Plots",
            "Industrial Land",
            "Solar Parks",
            "Farms",
            "Resorts",
            "Tourist Locations",
        ],
    },

    {
        icon: Landmark,
        title: "Government Project Virtual Tours",
        description:
            "Interactive documentation and presentation of government infrastructure, public buildings, heritage sites, and smart city projects.",
        items: [
            "Government Offices",
            "Heritage Sites",
            "Schools",
            "Hospitals",
            "Smart City Projects",
            "Public Infrastructure",
        ],
    },

    {
        icon: HardHat,
        title: "Construction Monitoring Virtual Tours",
        description:
            "Track project progress with 360° virtual tours captured at regular intervals, allowing stakeholders to review site development remotely.",
        items: [
            "Monthly Progress Tours",
            "Before & After Comparison",
            "Construction Timeline",
            "Site Documentation",
            "Client Review",
            "Project Archive",
        ],
    },
];

export default function VirtualTourPage() {
    return (
        <main className="min-h-screen bg-background">

            {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

            <section className="relative pt-36 pb-24 overflow-hidden">

                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.10)_0%,transparent_65%)] pointer-events-none" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                <div className="container mx-auto px-5 md:px-8 relative z-10">

                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <Link href="/services">
                            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                <ArrowLeft className="h-4 w-4" />
                                All Services
                            </span>
                        </Link>
                    </motion.div>

                    {/* Icon + label */}
                    <div className="flex items-center gap-4 mb-7">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/25"
                        >
                            <ScanEye className="h-6 w-6 text-primary" />
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xs font-bold uppercase tracking-[0.25em] text-primary"
                        >
                            Immersive Walkthroughs
                        </motion.span>

                    </div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-7 leading-[1.04]"
                    >
                        360° Virtual{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Tour
                        </span>
                    </motion.h1>

                    {/* Main description */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed"
                    >
                        Immersive 360-degree virtual walkthroughs of sites and facilities
                        for remote inspection and stakeholder review. Navigate entire
                        project sites from anywhere in the world with interactive
                        hotspots and annotations.
                    </motion.p>

                </div>
            </section>


            {/* ─────────────────────────────────────────
          INTRO
      ───────────────────────────────────────── */}

            <section className="py-20 bg-card border-y border-border">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-3xl mx-auto text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            360° Virtual Experience
                        </span>

                        <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-5">
                            Explore Every Space Remotely
                        </h2>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            Our 360° virtual tours provide an interactive way to explore,
                            document, present, and monitor properties, open areas,
                            government projects, and construction sites without requiring
                            stakeholders to be physically present.
                        </p>

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────────────────
          SERVICE CATEGORIES
      ───────────────────────────────────────── */}

            <section className="py-24 relative overflow-hidden">

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

                <div className="container mx-auto px-5 md:px-8 relative z-10">

                    <div className="text-center mb-16">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Our Applications
                        </span>

                        <h2 className="text-3xl md:text-5xl font-black text-white mt-4">
                            Virtual Tours For Every Project
                        </h2>

                        <p className="text-muted-foreground max-w-2xl mx-auto mt-5 leading-relaxed">
                            Choose from our specialised 360° virtual tour applications,
                            designed for different project and documentation requirements.
                        </p>

                    </div>


                    {/* Category cards */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

                        {virtualTourSections.map((section, index) => {

                            const Icon = section.icon;

                            return (
                                <motion.article
                                    key={section.title}
                                    initial={{
                                        opacity: 0,
                                        y: 35,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        margin: "-80px",
                                    }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative"
                                >

                                    {/* Glow border */}
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-full bg-[#0B1426] border border-border rounded-2xl p-7 md:p-9 overflow-hidden group-hover:border-primary/25 transition-colors duration-500">

                                        {/* Top glow */}
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Header */}

                                        <div className="flex items-start gap-5 mb-6">

                                            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>

                                            <div>

                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                                    {section.title}
                                                </h3>

                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {section.description}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Includes */}

                                        <div>

                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                                Includes
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                                {section.items.map((item) => (
                                                    <div
                                                        key={item}
                                                        className="flex items-center gap-2.5 rounded-xl bg-background border border-border px-4 py-3 hover:border-primary/25 transition-colors duration-200"
                                                    >

                                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />

                                                        <span className="text-sm text-white font-medium">
                                                            {item}
                                                        </span>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </motion.article>
                            );
                        })}

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────────────────
          FEATURES
      ───────────────────────────────────────── */}

            <section className="py-24 bg-card border-y border-border">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {[
                            "Full 360° spherical panoramic capture",
                            "Interactive hotspot navigation and annotations",
                            "Multi-floor and multi-zone site coverage",
                            "Embeddable web-based viewer for easy sharing",
                        ].map((feature, index) => (

                            <motion.div
                                key={feature}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="rounded-xl border border-border bg-background p-6"
                            >

                                <CheckCircle2 className="h-5 w-5 text-primary mb-4" />

                                <p className="text-sm text-white leading-relaxed">
                                    {feature}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}

            <section className="py-24 relative overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(34,211,238,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-5 md:px-8 text-center relative z-10">

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
                        Ready to Create an Immersive Experience?
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        Get a professional 360° virtual tour for your property, project,
                        infrastructure, or construction site.
                    </p>

                    <Link href="/contact">

                        <motion.span
                            whileHover={{
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-semibold shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300 cursor-pointer"
                        >
                            Get a Quote
                            <ArrowRight className="h-4 w-4" />
                        </motion.span>

                    </Link>

                </div>

            </section>

        </main>
    );
}
