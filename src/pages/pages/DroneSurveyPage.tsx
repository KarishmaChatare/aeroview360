import { Link } from "wouter";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Plane,
    CheckCircle2,
} from "lucide-react";

export default function DroneSurveyPage() {
    return (
        <main className="min-h-screen bg-background text-white">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-24 md:py-32">

                <div className="container mx-auto px-5 md:px-8">

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <Plane className="w-7 h-7 text-primary" />
                            </div>

                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                Aerial Survey Solutions
                            </span>

                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                            Drone
                            <span className="text-primary"> Survey</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            Professional aerial surveying solutions for accurate,
                            efficient and detailed site documentation.
                        </p>

                    </motion.div>

                </div>

            </section>


            {/* ================= INTRO ================= */}
            <section className="py-20">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Drone Survey
                        </span>

                        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
                            Aerial Data for Better Surveying
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Drone-based surveying provides detailed aerial information
                            that can be used for mapping, measurement, terrain analysis
                            and project documentation.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= EXISTING CONTENT AREA ================= */}
            <section className="py-20 bg-black/20">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="text-center mb-14">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Survey Outputs
                        </span>

                        <h2 className="text-3xl md:text-5xl font-black mt-4">
                            Drone Survey Deliverables
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                        {/* RTK */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-border bg-card p-7"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                RTK Survey
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                High-accuracy aerial survey data using RTK-based
                                positioning for detailed surveying applications.
                            </p>

                        </motion.div>


                        {/* DSM */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-border bg-card p-7"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                DSM
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                Digital Surface Model outputs for representing
                                terrain and surface features captured during the survey.
                            </p>

                        </motion.div>


                        {/* DTM */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-border bg-card p-7"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                DTM
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                Digital Terrain Model outputs for analysing
                                ground elevation and terrain characteristics.
                            </p>

                        </motion.div>


                        {/* MAPPING */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-border bg-card p-7"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                Aerial Mapping
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                Detailed aerial mapping for site documentation,
                                planning and project analysis.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* ================= FEATURES ================= */}
            <section className="py-20">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto">

                        <div className="text-center mb-12">

                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                Benefits
                            </span>

                            <h2 className="text-3xl md:text-5xl font-black mt-4">
                                Drone Survey Advantages
                            </h2>

                        </div>


                        <div className="grid md:grid-cols-2 gap-5">

                            {[
                                "Detailed aerial data",
                                "Efficient site coverage",
                                "Accurate survey documentation",
                                "RTK-based positioning",
                                "DSM and DTM generation",
                                "Useful for project planning",
                                "Better site visualization",
                                "Digital survey deliverables",
                            ].map((feature) => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                                >

                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                                    <span className="text-sm">
                                        {feature}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-24">

                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto text-center rounded-3xl border border-primary/20 bg-primary/5 p-10 md:p-16">

                        <Plane className="w-12 h-12 text-primary mx-auto mb-6" />

                        <h2 className="text-3xl md:text-5xl font-black mb-5">
                            Need a Drone Survey?
                        </h2>

                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Get detailed aerial survey data for your project and site.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}