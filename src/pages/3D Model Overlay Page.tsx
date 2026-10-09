import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const overlayImages = [
    "/images/services/overlay-construction.png",
    "/images/services/overlay-infrastructure.png",
    "/images/services/overlay-industrial.png",
];

export default function ThreeDModelOverlayPage() {
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
                            Immersive Visualization & Digital Twin Solutions
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                            3D Model{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
                                Overlay
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl">
                            Bring architectural and infrastructure projects to life by
                            overlaying accurate 3D models onto real-world 360° panoramas
                            and imagery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE DATA */}
            <section className="py-20 lg:py-28 bg-[#07111F]">
                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">
                            3D Visualization
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            3D Model Overlay
                        </h2>

                        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
                            Overlay precise 3D models onto real-world imagery for accurate
                            as-built versus as-designed comparison and analysis. The supplied
                            project data supports interactive visualisation, before-and-after
                            comparison and stakeholder presentations.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

                        <div className="rounded-2xl border border-[#1E293B] bg-[#0B1426] p-7">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Real-World Overlay
                            </h3>
                            <p className="text-[#94A3B8] leading-relaxed">
                                Accurately place 3D models over real-world imagery to create
                                an intuitive view of planned and existing conditions.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#1E293B] bg-[#0B1426] p-7">
                            <h3 className="text-xl font-bold text-white mb-3">
                                As-Built Comparison
                            </h3>
                            <p className="text-[#94A3B8] leading-relaxed">
                                Compare the planned design with actual site conditions for
                                project review and coordination.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#1E293B] bg-[#0B1426] p-7">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Stakeholder Visualization
                            </h3>
                            <p className="text-[#94A3B8] leading-relaxed">
                                Present complex architectural and infrastructure information
                                through clear visual outputs.
                            </p>
                        </div>

                    </div>

                    {/* IMAGE GALLERY */}
                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">
                                Project Visuals
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                3D Model Overlay — In Action
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {overlayImages.map((src, index) => (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0B1426]"
                                >
                                    <img
                                        src={src}
                                        alt="3D Model Overlay project visual "
                                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}

                        </div>
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