export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Fabrication" | "Construction" | "Erection" | "Projects" | "Site Works";
  src: string;
  fullSrc: string;
  dimensions?: string;
}

export const galleryCategories = [
  "All",
  "Fabrication",
  "Construction",
  "Erection",
  "Projects",
  "Site Works",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sri Perumbudur Canteen Shed",
    subtitle: "4,500 Sq. Ft. Pre-Engineered Building",
    category: "Projects",
    src: "/images/projects/project-1.jpg",
    fullSrc: "/images/projects/project-big-1.jpg",
    dimensions: "4,500 Sq. Ft.",
  },
  {
    id: "gal-2",
    title: "Sri Perumbudur Canteen Erection",
    subtitle: "Structural Assembly & Frame Alignment",
    category: "Erection",
    src: "/images/projects/project-2.jpg",
    fullSrc: "/images/projects/project-big-2.jpg",
    dimensions: "Frame Alignment",
  },
  {
    id: "gal-3",
    title: "Sri Perumbudur Manufacturing Shed",
    subtitle: "40,000 Sq. Ft. Heavy Industrial Bay",
    category: "Fabrication",
    src: "/images/projects/project-3.jpg",
    fullSrc: "/images/projects/project-big-3.jpg",
    dimensions: "40,000 Sq. Ft.",
  },
  {
    id: "gal-4",
    title: "High-Bay Roof & Cladding",
    subtitle: "Self-threading Screw Profile Sheeting",
    category: "Site Works",
    src: "/images/projects/project-4.jpg",
    fullSrc: "/images/projects/project-big-4.jpg",
    dimensions: "Weather-tight Enclosure",
  },
  {
    id: "gal-5",
    title: "Sri Perumbudur Production Unit",
    subtitle: "10,800 Sq. Ft. PEB Structure",
    category: "Projects",
    src: "/images/projects/project-5.jpg",
    fullSrc: "/images/projects/project-big-5.jpg",
    dimensions: "10,800 Sq. Ft.",
  },
  {
    id: "gal-6",
    title: "Internal Framework & Purlins",
    subtitle: "Cold-Formed Z & C Purlin Installation",
    category: "Fabrication",
    src: "/images/projects/project-6.jpg",
    fullSrc: "/images/projects/project-big-6.jpg",
    dimensions: "Secondary Framing",
  },
  {
    id: "gal-7",
    title: "HL Mando RCS Cabin",
    subtitle: "1,300 Sq. Ft. Acoustic & Thermal Enclosure",
    category: "Construction",
    src: "/images/projects/project-7.jpg",
    fullSrc: "/images/projects/project-big-7.jpg",
    dimensions: "1,300 Sq. Ft.",
  },
  {
    id: "gal-8",
    title: "RCS Cabin Testing Hall",
    subtitle: "Vibration Dampened Cleanroom Enclosure",
    category: "Site Works",
    src: "/images/projects/project-8.jpg",
    fullSrc: "/images/projects/project-big-8.jpg",
    dimensions: "Testing Enclosure",
  },
  {
    id: "gal-9",
    title: "French Village Court — ECR",
    subtitle: "Turnkey Civil & Structural Construction",
    category: "Construction",
    src: "/images/projects/project-9.jpg",
    fullSrc: "/images/projects/project-big-9.jpg",
    dimensions: "ECR Chennai",
  },
  {
    id: "gal-10",
    title: "French Village Structural Foundation",
    subtitle: "Reinforced Plinth & Beam Framing",
    category: "Site Works",
    src: "/images/projects/project-10.jpg",
    fullSrc: "/images/projects/project-big-10.jpg",
    dimensions: "RCC Foundation",
  },
  {
    id: "gal-11",
    title: "Gudiyatham Heavy Industrial Shed",
    subtitle: "45,000 Sq. Ft. Wide-Span Lattice Truss Shed",
    category: "Projects",
    src: "/images/projects/project-11.jpg",
    fullSrc: "/images/projects/project-big-11.jpg",
    dimensions: "45,000 Sq. Ft.",
  },
  {
    id: "gal-12",
    title: "Gudiyatham Heavy Truss Erection",
    subtitle: "Tandem Crane Structural Lift Operations",
    category: "Erection",
    src: "/images/projects/project-12.jpg",
    fullSrc: "/images/projects/project-big-12.jpg",
    dimensions: "Heavy Lift",
  },
  {
    id: "gal-13",
    title: "KIA Motors Heavy Press Work",
    subtitle: "Automotive Stamping Tooling & Base Plates",
    category: "Fabrication",
    src: "/images/projects/project-13.jpg",
    fullSrc: "/images/projects/project-big-13.jpg",
    dimensions: "Automotive Press",
  },
  {
    id: "gal-14",
    title: "KEC Pipe Rack Structure",
    subtitle: "Multi-Tier Pipe & Cable Tray Steel Rack",
    category: "Erection",
    src: "/images/projects/project-14.jpg",
    fullSrc: "/images/projects/project-big-14.jpg",
    dimensions: "Modular Pipe Rack",
  },
  {
    id: "gal-15",
    title: "Thirumalai Chemical Limited Plant",
    subtitle: "25,000 Sq. Ft. Chemical Process Shed",
    category: "Projects",
    src: "/images/projects/project-15.jpg",
    fullSrc: "/images/projects/project-big-15.jpg",
    dimensions: "25,000 Sq. Ft.",
  },
  {
    id: "gal-16",
    title: "KK Nagar PUF Panel Fixing",
    subtitle: "High-Density Thermal Insulation Sandwich Panels",
    category: "Site Works",
    src: "/images/projects/project-16.jpg",
    fullSrc: "/images/projects/project-big-16.jpg",
    dimensions: "Insulated Envelope",
  },
];
