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
   Existing Drone Survey + 360° Virtual Tour are untouched.
───────────────────────────────────────────── */

const services = [
  { icon: ScanEye, title: "360° Virtual Tour", description: "Immersive 360-degree virtual walkthroughs of sites and facilities for remote inspection and stakeholder review.", slug: "360-virtual-tour", href: "/services/360-virtual-tour", accent: "#22D3EE" },
  { icon: Layers, title: "3D Model Overlay", description: "Overlay precise 3D models onto real-world imagery for accurate as-built vs. as-designed comparison and analysis.", slug: "3d-model-overlay", href: "/services#3d-model-overlay", accent: "#22D3EE" },
  { icon: Box, title: "3D Modelling", description: "Photogrammetry-based 3D terrain and structural models delivering detailed volumetric analysis and visualisation.", slug: "3d-modelling", href: "/services#3d-modelling", accent: "#38BDF8" },
  { icon: HardHat, title: "Construction Monitoring", description: "Periodic aerial progress monitoring to track construction milestones and detect deviations early.", slug: "construction-monitoring", href: "/services#construction-monitoring", accent: "#38BDF8" },
  { icon: Radar, title: "Drone Survey", description: "High-resolution aerial surveys using enterprise-grade drones for precise topographic data and site mapping.", slug: "drone-survey", href: "/services/drone-survey", accent: "#22D3EE" },
  { icon: Map, title: "GIS Mapping", description: "Comprehensive geographic information system mapping with sub-centimeter accuracy for large-scale projects.", slug: "gis-mapping", href: "/services#gis-mapping", accent: "#38BDF8" },
  { icon: Landmark, title: "Land Survey", description: "Digital land boundary surveys integrating drone data with total-station accuracy for revenue and legal records.", slug: "land-survey", href: "/services#land-survey", accent: "#22D3EE" },
];

function ServiceCard({ service, index, inView }: { service: (typeof services)[0]; index: number; inView: boolean; }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 220, damping: 22 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return (
    <Link href={service.href}>
      <motion.div ref={cardRef} initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }} style={{ rotateX, rotateY, transformPerspective: 900 }} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} data-testid={`card-service-${service.slug}`} className="group relative rounded-2xl p-[1px] cursor-pointer h-full">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${service.accent}25, transparent 40%, transparent 60%, ${service.accent}20)` }} />
        <div className="relative h-full rounded-2xl bg-[#0B1426] border border-[#1E293B] group-hover:border-[#22D3EE]/25 transition-all duration-500 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${service.accent}08, transparent)` }} />
          <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">
            <motion.div whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }} transition={{ duration: 0.45 }} className="flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-500 mb-7" style={{ backgroundColor: `${service.accent}10`, borderColor: `${service.accent}20` }}>
              <service.icon className="h-6 w-6 transition-colors duration-300" style={{ color: service.accent }} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#22D3EE] transition-colors duration-300">{service.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">{service.description}</p>
            <div className="flex items-center gap-2 mt-7 text-[#22D3EE] text-xs font-semibold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
              <span>Explore</span><motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}><ArrowUpRight className="h-3.5 w-3.5" /></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

type GalleryGroup = { title: string; description: string; images: string[] };

function DataGallerySection({ id, title, eyebrow, description, groups }: { id: string; title: string; eyebrow: string; description: string; groups: GalleryGroup[]; }) {
  return (
    <section id={id} className="py-24 lg:py-28 bg-[#07111F] relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-5">{eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">{title}</h2>
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">{description}</p>
        </div>
        <div className="space-y-8 max-w-6xl mx-auto">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-[#1E293B] bg-[#0B1426] p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{group.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-6">{group.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.images.map((src, i) => (
                  <div key={src} className="overflow-hidden rounded-xl border border-[#1E293B] bg-[#07111F]">
                    <img src={src} alt={`${group.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const overlayGroups: GalleryGroup[] = [{ title: "3D Model Overlay — In Action", description: "Bring architectural and infrastructure projects to life by overlaying accurate 3D models onto real-world imagery. The supplied project data supports interactive visualisation, before/after comparison and stakeholder presentations.", images: ["/images/services/overlay-construction.png", "/images/services/overlay-infrastructure.png", "/images/services/overlay-industrial.png"] }];
const modelingGroups: GalleryGroup[] = [
  { title: "OBJ / FBX Mesh", description: "3D mesh outputs for detailed visualisation and model-based project review.", images: MODELING_OBJ },
  { title: "LAS / LAZ", description: "Point-cloud data outputs for terrain, surface and spatial analysis.", images: MODELING_LAS },
  { title: "Volume Reports", description: "Processed volumetric outputs for measurement and project quantity analysis.", images: MODELING_VOLUME },
  { title: "Contour Map", description: "Contour and elevation outputs for understanding terrain form and level changes.", images: MODELING_CONTOUR },
];
const constructionGroups: GalleryGroup[] = [
  { title: "Progress Orthomosaic", description: "Aerial orthomosaic outputs for clear site-wide construction progress documentation.", images: CONSTRUCTION_PROGRESS },
  { title: "Change Detection Maps", description: "Visual comparison outputs that help identify changes across monitoring periods.", images: CONSTRUCTION_CHANGE },
  { title: "Executive Dashboard", description: "Dashboard-style outputs for concise stakeholder and management review.", images: CONSTRUCTION_DASHBOARD },
];
const gisGroups: GalleryGroup[] = [
  { title: "Shapefile (.SHP)", description: "Vector mapping outputs for geographic features and spatial datasets.", images: ["/images/services/gis-mapping/shapefile-1.jpg", "/images/services/gis-mapping/shapefile-2.jpg", "/images/services/gis-mapping/shapefile-3.jpg", "/images/services/gis-mapping/shapefile-4.jpg"] },
  { title: "GeoTIFF Orthomosaic", description: "Georeferenced raster outputs for detailed mapping and spatial analysis.", images: ["/images/services/gis-mapping/geotiff-orthomosaic-1.jpg", "/images/services/gis-mapping/geotiff-orthomosaic-2.jpg", "/images/services/gis-mapping/geotiff-orthomosaic-3.jpg", "/images/services/gis-mapping/geotiff-orthomosaic-4.jpg"] },
  { title: "KML / KMZ", description: "Portable geospatial layers for map-based viewing and project sharing.", images: ["/images/services/gis-mapping/kml-kmz-1.jpg", "/images/services/gis-mapping/kml-kmz-2.jpg", "/images/services/gis-mapping/kml-kmz-3.jpg"] },
  { title: "PostGIS Database", description: "Spatial database visualisations for organised GIS data management and analysis.", images: ["/images/services/gis-mapping/postgis-database-1.jpg", "/images/services/gis-mapping/postgis-database-2.jpg", "/images/services/gis-mapping/postgis-database-3.jpg", "/images/services/gis-mapping/postgis-database-4.jpg"] },
];
const landGroups: GalleryGroup[] = [
  { title: "Geo-referenced CAD Files", description: "Geo-referenced CAD outputs for accurate site and land documentation.", images: LAND_CAD },
  { title: "712 & Property Records", description: "Visual documentation supporting property and land-record workflows.", images: LAND_PROPERTY },
  { title: "Boundary Demarcation Plan", description: "Boundary planning and demarcation outputs for clear land identification.", images: LAND_BOUNDARY },
  { title: "Cadastral Survey Maps", description: "Cadastral mapping outputs for land parcels and property documentation.", images: LAND_CADASTRAL },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <main>
      <section id="services" className="py-32 lg:py-40 bg-[#07111F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-20 lg:mb-24">
            <motion.span initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-5">What We Do</motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">End-to-End Geospatial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">Services</span></h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">From aerial data capture to processed deliverables — every service engineered for precision and speed.</p>
          </motion.div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} inView={inView} />)}
          </div>
          <div className="mt-6 lg:mt-8 flex justify-center"><div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"><ServiceCard service={services[6]} index={6} inView={inView} /></div></div>
        </div>
      </section>

      <DataGallerySection id="3d-model-overlay" title="3D Model Overlay" eyebrow="Immersive Visualization & Digital Twin Solutions" description="Bring architectural and infrastructure projects to life by overlaying accurate 3D models onto real-world 360° panoramas and imagery. The supplied service data supports model integration, before/after comparison, multiple design options and web-based viewing." groups={overlayGroups} />
      <DataGallerySection id="3d-modelling" title="3D Modelling" eyebrow="Photogrammetry & 3D Data" description="Detailed 3D terrain and structural modelling using the supplied OBJ/FBX mesh, LAS/LAZ, volume-report and contour-map outputs." groups={modelingGroups} />
      <DataGallerySection id="construction-monitoring" title="Construction Monitoring" eyebrow="Progress & Site Intelligence" description="Periodic visual monitoring of construction sites using progress orthomosaics, change-detection maps and executive dashboard outputs." groups={constructionGroups} />
      <DataGallerySection id="gis-mapping" title="GIS Mapping" eyebrow="Geographic Information Systems" description="Structured GIS mapping outputs including shapefiles, GeoTIFF orthomosaics, KML/KMZ layers and PostGIS database visualisations." groups={gisGroups} />
      <DataGallerySection id="land-survey" title="Land Survey" eyebrow="Digital Land & Property Survey" description="Digital land survey deliverables combining geo-referenced CAD, property records, boundary demarcation and cadastral survey maps." groups={landGroups} />
    </main>
  );
}

const MODELING_OBJ = ["/images/services/3d-modelling/obj-fbx-mesh/01.jpg", "/images/services/3d-modelling/obj-fbx-mesh/02.jpg", "/images/services/3d-modelling/obj-fbx-mesh/03.jpg"];
const MODELING_LAS = ["/images/services/3d-modelling/las-laz/01.jpg", "/images/services/3d-modelling/las-laz/02.jpg", "/images/services/3d-modelling/las-laz/03.jpg", "/images/services/3d-modelling/las-laz/04.jpg", "/images/services/3d-modelling/las-laz/05.jpg", "/images/services/3d-modelling/las-laz/06.jpg", "/images/services/3d-modelling/las-laz/07.jpg", "/images/services/3d-modelling/las-laz/08.jpg"];
const MODELING_VOLUME = ["/images/services/3d-modelling/volume-reports/01.jpg", "/images/services/3d-modelling/volume-reports/02.jpg", "/images/services/3d-modelling/volume-reports/03.jpg", "/images/services/3d-modelling/volume-reports/04.jpg", "/images/services/3d-modelling/volume-reports/05.jpg"];
const MODELING_CONTOUR = ["/images/services/3d-modelling/contour-map/01.jpg", "/images/services/3d-modelling/contour-map/02.jpg", "/images/services/3d-modelling/contour-map/03.jpg", "/images/services/3d-modelling/contour-map/04.jpg", "/images/services/3d-modelling/contour-map/05.jpg", "/images/services/3d-modelling/contour-map/06.jpg", "/images/services/3d-modelling/contour-map/07.jpg"];
const CONSTRUCTION_PROGRESS = ["/images/services/construction-monitoring/progress-orthomosaic/01.jpg", "/images/services/construction-monitoring/progress-orthomosaic/02.jpg", "/images/services/construction-monitoring/progress-orthomosaic/03.jpg", "/images/services/construction-monitoring/progress-orthomosaic/04.jpg", "/images/services/construction-monitoring/progress-orthomosaic/05.jpg"];
const CONSTRUCTION_CHANGE = ["/images/services/construction-monitoring/change-detection-maps/01.jpg", "/images/services/construction-monitoring/change-detection-maps/02.jpg", "/images/services/construction-monitoring/change-detection-maps/03.jpg", "/images/services/construction-monitoring/change-detection-maps/04.jpg"];
const CONSTRUCTION_DASHBOARD = ["/images/services/construction-monitoring/executive-dashboard/01.jpg", "/images/services/construction-monitoring/executive-dashboard/02.jpg", "/images/services/construction-monitoring/executive-dashboard/03.jpg", "/images/services/construction-monitoring/executive-dashboard/04.jpg", "/images/services/construction-monitoring/executive-dashboard/05.jpg", "/images/services/construction-monitoring/executive-dashboard/06.jpg"];
const LAND_CAD = ["/images/services/land-survey/geo-referenced-cad/01.jpg", "/images/services/land-survey/geo-referenced-cad/02.jpg", "/images/services/land-survey/geo-referenced-cad/03.jpg", "/images/services/land-survey/geo-referenced-cad/04.jpg"];
const LAND_PROPERTY = ["/images/services/land-survey/property-records/01.jpg", "/images/services/land-survey/property-records/02.jpg", "/images/services/land-survey/property-records/03.jpg"];
const LAND_BOUNDARY = ["/images/services/land-survey/boundary-demarcation/01.jpeg", "/images/services/land-survey/boundary-demarcation/02.jpeg", "/images/services/land-survey/boundary-demarcation/03.jpeg", "/images/services/land-survey/boundary-demarcation/04.jpeg", "/images/services/land-survey/boundary-demarcation/05.jpeg", "/images/services/land-survey/boundary-demarcation/06.jpeg"];
const LAND_CADASTRAL = ["/images/services/land-survey/cadastral-maps/01.jpg", "/images/services/land-survey/cadastral-maps/02.jpg", "/images/services/land-survey/cadastral-maps/03.jpg", "/images/services/land-survey/cadastral-maps/04.jpg", "/images/services/land-survey/cadastral-maps/05.jpg"];
