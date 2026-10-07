import { useRef } from "react";
import { Link } from "wouter";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Layers,
  Box,
  ScanEye,
  HardHat,
  Radar,
  Map,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   SERVICES
   360° Virtual Tour is FIRST
───────────────────────────────────────────── */

const services = [
  {
    icon: ScanEye,
    title: "360° Virtual Tour",
    description:
      "Immersive 360-degree virtual walkthroughs of sites and facilities for remote inspection and stakeholder review.",
    slug: "360-virtual-tour",
    href: "/services/360-virtual-tour",
    accent: "#22D3EE",
  },

  {
    icon: Layers,
    title: "3D Model Overlay",
    description:
      "Overlay precise 3D models onto real-world imagery for accurate as-built vs. as-designed comparison and analysis.",
    slug: "3d-model-overlay",
    href: "/services#3d-model-overlay",
    accent: "#22D3EE",
  },

  {
    icon: Box,
    title: "3D Modelling",
    description:
      "Photogrammetry-based 3D terrain and structural models delivering detailed volumetric analysis and visualisation.",
    slug: "3d-modelling",
    href: "/services#3d-modelling",
    accent: "#38BDF8",
  },

  {
    icon: HardHat,
    title: "Construction Monitoring",
    description:
      "Periodic aerial progress monitoring to track construction milestones and detect deviations early.",
    slug: "construction-monitoring",
    href: "/services#construction-monitoring",
    accent: "#38BDF8",
  },

  {
    icon: Radar,
    title: "Drone Survey",
    description:
      "High-resolution aerial surveys using enterprise-grade drones for precise topographic data and site mapping.",
    slug: "drone-survey",
    href: "/services/drone-survey",
    accent: "#22D3EE",
  },

  {
    icon: Map,
    title: "GIS Mapping",
    description:
      "Comprehensive geographic information system mapping with sub-centimeter accuracy for large-scale projects.",
    slug: "gis-mapping",
    href: "/services#gis-mapping",
    accent: "#38BDF8",
  },

  {
    icon: Landmark,
    title: "Land Survey",
    description:
      "Digital land boundary surveys integrating drone data with total-station accuracy for revenue and legal records.",
    slug: "land-survey",
    href: "/services#land-survey",
    accent: "#22D3EE",
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 220,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 220,
      damping: 22,
    }
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={service.href}>
      <motion.div
        ref={cardRef}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={
          inView
            ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
            : {}
        }
        transition={{
          duration: 0.65,
          delay: index * 0.09,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 900,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-testid={`card-service-${service.slug}`}
        className="group relative rounded-2xl p-[1px] cursor-pointer h-full"
      >
        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.accent}25, transparent 40%, transparent 60%, ${service.accent}20)`,
          }}
        />

        {/* Card Body */}
        <div className="relative h-full rounded-2xl bg-[#0B1426] border border-[#1E293B] group-hover:border-[#22D3EE]/25 transition-all duration-500 overflow-hidden">

          {/* Top Glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Background Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${service.accent}08, transparent)`,
            }}
          />

          <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">

            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: [0, -6, 6, 0],
                scale: 1.08,
              }}
              transition={{
                duration: 0.45,
              }}
              className="flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-500 mb-7"
              style={{
                backgroundColor: `${service.accent}10`,
                borderColor: `${service.accent}20`,
              }}
            >
              <service.icon
                className="h-6 w-6 transition-colors duration-300"
                style={{
                  color: service.accent,
                }}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#22D3EE] transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
              {service.description}
            </p>

            {/* Explore */}
            <div className="flex items-center gap-2 mt-7 text-[#22D3EE] text-xs font-semibold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">

              <span>Explore</span>

              <motion.div
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────── */



/* ─── Service data galleries ───────────────────────────────────────────── */
const serviceDataSections = [
  { id: "3d-model-overlay", title: "3D Model Overlay", tag: "Overlay & Comparison", groups: [
    { title: "Project Overlay Examples", images: [
      "/images/services/overlay-construction.png",
      "/images/services/overlay-infrastructure.png",
      "/images/services/overlay-industrial.png",
    ] },
  ] },
  { id: "3d-modelling", title: "3D Modelling", tag: "Photogrammetry & Digital Twins", groups: [
    { title: "OBJ / FBX Mesh", images: [
      "/images/services/3d-modelling/obj-fbx-mesh/obj-fbx-01.jpg",
      "/images/services/3d-modelling/obj-fbx-mesh/obj-fbx-02.jpg",
      "/images/services/3d-modelling/obj-fbx-mesh/obj-fbx-03.jpg",
    ] },
    { title: "LAS / LAZ", images: [
      "/images/services/3d-modelling/las-laz/las-laz-01.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-02.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-03.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-04.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-05.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-06.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-07.jpg",
      "/images/services/3d-modelling/las-laz/las-laz-08.jpg",
    ] },
    { title: "Volume Reports", images: [
      "/images/services/3d-modelling/volume-reports/volume-01.jpg",
      "/images/services/3d-modelling/volume-reports/volume-02.jpg",
      "/images/services/3d-modelling/volume-reports/volume-03.jpg",
      "/images/services/3d-modelling/volume-reports/volume-04.jpg",
      "/images/services/3d-modelling/volume-reports/volume-05.jpg",
    ] },
    { title: "Contour Map", images: [
      "/images/services/3d-modelling/contour-map/contour-01.jpg",
      "/images/services/3d-modelling/contour-map/contour-02.jpg",
      "/images/services/3d-modelling/contour-map/contour-03.jpg",
      "/images/services/3d-modelling/contour-map/contour-04.jpg",
      "/images/services/3d-modelling/contour-map/contour-05.jpg",
      "/images/services/3d-modelling/contour-map/contour-06.jpg",
      "/images/services/3d-modelling/contour-map/contour-07.jpg",
    ] },
  ] },
  { id: "construction-monitoring", title: "Construction Monitoring", tag: "Progress Tracking", groups: [
    { title: "Progress Orthomosaic", images: [
      "/images/services/construction-monitoring/progress-orthomosaic/progress-01.jpg",
      "/images/services/construction-monitoring/progress-orthomosaic/progress-02.jpg",
      "/images/services/construction-monitoring/progress-orthomosaic/progress-03.jpg",
      "/images/services/construction-monitoring/progress-orthomosaic/progress-04.jpg",
      "/images/services/construction-monitoring/progress-orthomosaic/progress-05.jpg",
    ] },
    { title: "Change Detection Maps", images: [
      "/images/services/construction-monitoring/change-detection-maps/change-01.jpg",
      "/images/services/construction-monitoring/change-detection-maps/change-02.jpg",
      "/images/services/construction-monitoring/change-detection-maps/change-03.jpg",
      "/images/services/construction-monitoring/change-detection-maps/change-04.jpg",
    ] },
    { title: "Executive Dashboard", images: [
      "/images/services/construction-monitoring/executive-dashboard/dashboard-01.jpg",
      "/images/services/construction-monitoring/executive-dashboard/dashboard-02.jpg",
      "/images/services/construction-monitoring/executive-dashboard/dashboard-03.jpg",
      "/images/services/construction-monitoring/executive-dashboard/dashboard-04.jpg",
      "/images/services/construction-monitoring/executive-dashboard/dashboard-05.jpg",
      "/images/services/construction-monitoring/executive-dashboard/dashboard-06.jpg",
    ] },
  ] },
  { id: "gis-mapping", title: "GIS Mapping", tag: "Geographic Information Systems", groups: [
    { title: "Shapefile (.SHP)", images: [
      "/images/services/gis-mapping/shapefile-1.jpg",
      "/images/services/gis-mapping/shapefile-2.jpg",
      "/images/services/gis-mapping/shapefile-3.jpg",
      "/images/services/gis-mapping/shapefile-4.jpg",
    ] },
    { title: "GeoTIFF Orthomosaic", images: [
      "/images/services/gis-mapping/geotiff-orthomosaic-1.jpg",
      "/images/services/gis-mapping/geotiff-orthomosaic-2.jpg",
      "/images/services/gis-mapping/geotiff-orthomosaic-3.jpg",
      "/images/services/gis-mapping/geotiff-orthomosaic-4.jpg",
    ] },
    { title: "KML / KMZ", images: [
      "/images/services/gis-mapping/kml-kmz-1.jpg",
      "/images/services/gis-mapping/kml-kmz-2.jpg",
      "/images/services/gis-mapping/kml-kmz-3.jpg",
    ] },
    { title: "PostGIS Database", images: [
      "/images/services/gis-mapping/postgis-database-1.jpg",
      "/images/services/gis-mapping/postgis-database-2.jpg",
      "/images/services/gis-mapping/postgis-database-3.jpg",
      "/images/services/gis-mapping/postgis-database-4.jpg",
    ] },
  ] },
  { id: "land-survey", title: "Land Survey", tag: "Cadastral & Revenue Surveys", groups: [
    { title: "Geo-referenced CAD Files", images: [
      "/images/services/land-survey/geo-referenced-cad/cad-01.jpg",
      "/images/services/land-survey/geo-referenced-cad/cad-02.jpg",
      "/images/services/land-survey/geo-referenced-cad/cad-03.jpg",
      "/images/services/land-survey/geo-referenced-cad/cad-04.jpg",
    ] },
    { title: "712 & Property Records", images: [
      "/images/services/land-survey/property-records/property-01.jpg",
      "/images/services/land-survey/property-records/property-02.jpg",
      "/images/services/land-survey/property-records/property-03.jpg",
    ] },
    { title: "Boundary Demarcation Plan", images: [
      "/images/services/land-survey/boundary-demarcation/boundary-01.jpeg",
      "/images/services/land-survey/boundary-demarcation/boundary-02.jpeg",
      "/images/services/land-survey/boundary-demarcation/boundary-03.jpeg",
      "/images/services/land-survey/boundary-demarcation/boundary-04.jpeg",
      "/images/services/land-survey/boundary-demarcation/boundary-05.jpeg",
      "/images/services/land-survey/boundary-demarcation/boundary-06.jpeg",
    ] },
    { title: "Cadastral Survey Maps", images: [
      "/images/services/land-survey/cadastral-maps/cadastral-01.jpg",
      "/images/services/land-survey/cadastral-maps/cadastral-02.jpg",
      "/images/services/land-survey/cadastral-maps/cadastral-03.jpg",
      "/images/services/land-survey/cadastral-maps/cadastral-04.jpg",
      "/images/services/land-survey/cadastral-maps/cadastral-05.jpg",
    ] },
  ] },
];

function ServiceDataGallery({
  id,
  title,
  tag,
  groups,
}: {
  id: string;
  title: string;
  tag: string;
  groups: { title: string; images: string[] }[];
}) {
  return (
    <section id={id} className="py-24 bg-[#07111F] border-t border-[#1E293B]" style={{ scrollMarginTop: "90px" }}>
      <div className="container mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-4">{tag}</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{title}</h2>
          <p className="text-[#94A3B8]">Project data and visual deliverables supplied for this service.</p>
        </div>
        <div className="space-y-10 max-w-6xl mx-auto">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-[#1E293B] bg-[#0B1426] p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">{group.title}</h3>
                <span className="text-xs text-[#94A3B8]">{group.images.length} images</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.images.map((src, index) => (
                  <div key={src} className="overflow-hidden rounded-xl border border-[#1E293B] bg-black/20">
                    <img src={src} alt={`${group.title} ${index + 1}`} loading="lazy" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {serviceDataSections.map((item) => (
      <ServiceDataGallery
        key={item.id}
        id={item.id}
        title={item.title}
        tag={item.tag}
        groups={item.groups}
      />
    ))}
    </>
  );
}

export default function Services() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
    <section
      id="services"
      className="py-32 lg:py-40 bg-[#07111F] relative overflow-hidden"
    >

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20 lg:mb-24"
        >

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={
              inView
                ? {
                  opacity: 1,
                  scale: 1,
                }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-5"
          >
            What We Do
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            End-to-End Geospatial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
              Services
            </span>
          </h2>

          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            From aerial data capture to processed deliverables — every service
            engineered for precision and speed.
          </p>

        </motion.div>

        {/* 
          SERVICE ORDER:

          1. 360° Virtual Tour
          2. 3D Model Overlay
          3. 3D Modelling
          4. Construction Monitoring
          5. Drone Survey
          6. GIS Mapping
          7. Land Survey
        */}

        {/* First 6 Services */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* 7th Service */}
        <div className="mt-6 lg:mt-8 flex justify-center">

          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">

            <ServiceCard
              service={services[6]}
              index={6}
              inView={inView}
            />

          </div>

        </div>

      </div>
    </section>
  );
}