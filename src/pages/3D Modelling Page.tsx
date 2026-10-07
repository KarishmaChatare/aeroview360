import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const modellingGroups = [
    {
        title: "OBJ / FBX Mesh",
        description:
            "High-quality 3D mesh outputs in OBJ and FBX formats for visualization, modelling and project presentation.",
        images: [
            "/images/services/3d-modelling/obj-fbx-mesh/01.jpg",
            "/images/services/3d-modelling/obj-fbx-mesh/02.jpg",
            "/images/services/3d-modelling/obj-fbx-mesh/03.jpg",
        ],
    },
    {
        title: "LAS / LAZ",
        description:
            "Point-cloud data in LAS and LAZ formats for detailed terrain analysis, surveying and 3D reconstruction.",
        images: [
            "/images/services/3d-modelling/las-laz/01.jpg",
            "/images/services/3d-modelling/las-laz/02.jpg",
            "/images/services/3d-modelling/las-laz/03.jpg",
            "/images/services/3d-modelling/las-laz/04.jpg",
            "/images/services/3d-modelling/las-laz/05.jpg",
            "/images/services/3d-modelling/las-laz/06.jpg",
            "/images/services/3d-modelling/las-laz/07.jpg",
            "/images/services/3d-modelling/las-laz/08.jpg",
        ],
    },
    {
        title: "Volume Reports",
        description:
            "Detailed volume reports generated from 3D survey data to support earthwork calculations, stockpile analysis and project monitoring.",
        images: [
            "/images/services/3d-modelling/volume-reports/01.jpg",
            "/images/services/3d-modelling/volume-reports/02.jpg",
            "/images/services/3d-modelling/volume-reports/03.jpg",
            "/images/services/3d-modelling/volume-reports/04.jpg",
            "/images/services/3d-modelling/volume-reports/05.jpg",
        ],
    },
    {
        title: "Contour Map",
        description:
            "Accurate contour maps derived from surveyed elevation data for terrain understanding, planning and engineering applications.",
        images: [
            "/images/services/3d-modelling/contour-map/01.jpg",
            "/images/services/3d-modelling/contour-map/02.jpg",
            "/images/services/3d-modelling/contour-map/03.jpg",
            "/images/services/3d-modelling/contour-map/04.jpg",
            "/images/services/3d-modelling/contour-map/05.jpg",
            "/images/services/3d-modelling/contour-map/06.jpg",
            "/images/services/3d-modelling/contour-map/07.jpg",
        ],
    },
];

export default function ThreeDModellingPage() {
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
                            Digital 3D Reconstruction & Geospatial Modelling
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                            3D{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
                                Modelling
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl">
                            Transform survey and drone data into accurate 3D models,
                            point clouds, terrain information and measurable project
                            outputs for engineering, planning and analysis.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE OVERVIEW */}
            <section className="py-20 lg:py-28 bg-[#07111F]">
                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto mb-16">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">
                            3D Modelling Solutions
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            Complete 3D Modelling Data
                        </h2>

                        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
                            Our 3D modelling workflow converts captured survey information
                            into useful digital outputs including textured meshes,
                            point-cloud datasets, volume reports and contour maps. These
                            outputs can support visualization, measurement, terrain
                            analysis, engineering and project planning.
                        </p>
                    </div>

                    {/* DATA GROUPS */}
                    <div className="space-y-24 max-w-7xl mx-auto">

                        {modellingGroups.map((group, groupIndex) => (
                            <motion.section
                                key={group.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="mb-8">
                                    <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-3">
                                        Data Output {groupIndex + 1}
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
                                                alt="3D Modelling project visual"
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