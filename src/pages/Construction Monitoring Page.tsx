import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const constructionGroups = [
    {
        title: "Progress Orthomosaic",
        description:
            "High-resolution orthomosaic outputs that provide a clear visual record of construction progress and site conditions over time.",
        images: [
            "/images/services/construction-monitoring/progress-orthomosaic/01.jpg",
            "/images/services/construction-monitoring/progress-orthomosaic/02.jpg",
            "/images/services/construction-monitoring/progress-orthomosaic/03.jpg",
            "/images/services/construction-monitoring/progress-orthomosaic/04.jpg",
            "/images/services/construction-monitoring/progress-orthomosaic/05.jpg",
        ],
    },
    {
        title: "Change Detection Maps",
        description:
            "Visual change-detection outputs help identify differences between survey periods and support construction monitoring and site analysis.",
        images: [
            "/images/services/construction-monitoring/change-detection-maps/01.jpg",
            "/images/services/construction-monitoring/change-detection-maps/02.jpg",
            "/images/services/construction-monitoring/change-detection-maps/03.jpg",
            "/images/services/construction-monitoring/change-detection-maps/04.jpg",
        ],
    },
    {
        title: "Executive Dashboard",
        description:
            "Project dashboards bring construction information together into an accessible visual format for monitoring, reporting and stakeholder review.",
        images: [
            "/images/services/construction-monitoring/executive-dashboard/01.jpg",
            "/images/services/construction-monitoring/executive-dashboard/02.jpg",
            "/images/services/construction-monitoring/executive-dashboard/03.jpg",
            "/images/services/construction-monitoring/executive-dashboard/04.jpg",
            "/images/services/construction-monitoring/executive-dashboard/05.jpg",
            "/images/services/construction-monitoring/executive-dashboard/06.jpg",
        ],
    },
];

export default function ConstructionMonitoringPage() {
    return (
        <main className="min-h-screen bg-[#07111F] text-white">

            {/* HEADER */}
            <section className="relative overflow-hidden py-28 lg:py-36">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-5 md:px-8 relative z-10">

                    <Link href="/services">
                        <div className="inline-flex items-center gap-2 text-[#22D3EE] text-sm font-semibold mb-10 cursor-pointer hover:gap-3 transition-all">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Services
                        </div>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-5">
                            Construction Progress & Site Intelligence
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                            Construction{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
                                Monitoring
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl">
                            Monitor construction sites with accurate aerial survey data,
                            progress orthomosaics, change detection and visual dashboards
                            that support informed project review.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE OVERVIEW */}
            <section className="py-20 lg:py-28 bg-[#07111F]">
                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto mb-16">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">
                            Construction Intelligence
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            Construction Monitoring Data
                        </h2>

                        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
                            Construction monitoring combines repeated site surveys with
                            visual and analytical outputs to document progress, identify
                            changes and provide project stakeholders with a clear view of
                            site conditions.
                        </p>
                    </div>

                    {/* DATA GROUPS */}
                    <div className="space-y-24 max-w-7xl mx-auto">

                        {constructionGroups.map((group, groupIndex) => (
                            <motion.section
                                key={group.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="mb-8">
                                    <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-3">
                                        Monitoring Output {groupIndex + 1}
                                    </span>

                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                        {group.title}
                                    </h2>

                                    <p className="text-[#94A3B8] max-w-3xl leading-relaxed">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.images.map((src, index) => (
                                        <motion.div
                                            key={src}
                                            initial={{ opacity: 0, y: 25 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.45,
                                                delay: index * 0.05,
                                            }}
                                            className="group overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0B1426]"
                                        >
                                            <img
                                                src={src}
                                                alt="Construction Monitoring project visual"
                                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}

                    </div>
                </div>
            </section>

            {/* BACK TO SERVICES */}
            <section className="py-20 bg-[#0B1426] border-t border-[#1E293B]">
                <div className="container mx-auto px-5 md:px-8 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Explore Our Other Services
                    </h2>

                    <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8">
                        Discover the complete range of geospatial solutions available
                        through Zelvoxx.
                    </p>

                    <Link href="/services">
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#22D3EE] text-[#07111F] font-bold hover:bg-[#38BDF8] transition-colors">
                            View All Services
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </Link>

                </div>
            </section>

        </main>
    );
} 