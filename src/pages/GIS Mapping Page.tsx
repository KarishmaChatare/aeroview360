import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const gisGroups = [
    {
        title: "Shapefile (.SHP)",
        description:
            "Structured GIS vector data used for mapping, spatial analysis and visualization of geographic features.",
        images: [
            "/images/services/gis-mapping/shapefile-1.jpg",
            "/images/services/gis-mapping/shapefile-2.jpg",
            "/images/services/gis-mapping/shapefile-3.jpg",
            "/images/services/gis-mapping/shapefile-4.jpg",
        ],
    },
    {
        title: "GeoTIFF Orthomosaic",
        description:
            "Georeferenced orthomosaic imagery suitable for detailed mapping, site analysis and spatial measurements.",
        images: [
            "/images/services/gis-mapping/geotiff-orthomosaic-1.jpg",
            "/images/services/gis-mapping/geotiff-orthomosaic-2.jpg",
            "/images/services/gis-mapping/geotiff-orthomosaic-3.jpg",
            "/images/services/gis-mapping/geotiff-orthomosaic-4.jpg",
        ],
    },
    {
        title: "KML / KMZ",
        description:
            "GIS data prepared in KML and KMZ formats for geographic visualization, sharing and map-based presentations.",
        images: [
            "/images/services/gis-mapping/kml-kmz-1.jpg",
            "/images/services/gis-mapping/kml-kmz-2.jpg",
            "/images/services/gis-mapping/kml-kmz-3.jpg",
        ],
    },
    {
        title: "PostGIS Database",
        description:
            "Spatial database outputs designed for managing, querying and working with geographic information in GIS workflows.",
        images: [
            "/images/services/gis-mapping/postgis-database-1.jpg",
            "/images/services/gis-mapping/postgis-database-2.jpg",
            "/images/services/gis-mapping/postgis-database-3.jpg",
            "/images/services/gis-mapping/postgis-database-4.jpg",
        ],
    },
];

export default function GISMappingPage() {
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
                            Geographic Information & Spatial Data
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                            GIS{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
                                Mapping
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl">
                            Convert spatial and survey information into accurate,
                            georeferenced GIS data for mapping, visualization, analysis
                            and decision-making.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE OVERVIEW */}
            <section className="py-20 lg:py-28 bg-[#07111F]">
                <div className="container mx-auto px-5 md:px-8">

                    <div className="max-w-4xl mx-auto mb-16">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">
                            Spatial Data Solutions
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            Complete GIS Mapping Data
                        </h2>

                        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
                            Our GIS mapping outputs organize geographic information into
                            practical digital formats that can be used for mapping,
                            visualization, spatial analysis, data management and project
                            planning.
                        </p>
                    </div>

                    {/* GIS DATA GROUPS */}
                    <div className="space-y-24 max-w-7xl mx-auto">

                        {gisGroups.map((group, groupIndex) => (
                            <motion.section
                                key={group.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="mb-8">
                                    <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-3">
                                        GIS Output {groupIndex + 1}
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
                                                alt="GIS Mapping project visual"
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