export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  area?: string;
  location?: string;
  scope: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  specs: {
    label: string;
    value: string;
  }[];
  relatedServices: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "sri-perumbudur-shed-canteen",
    slug: "sri-perumbudur-canteen-shed",
    title: "Sri Perumbudur Shed — Canteen Facility",
    category: "PEB Fabrication",
    client: "Industrial Partner",
    area: "4,500 Sq. Ft.",
    location: "Sriperumbudur Industrial Belt, Tamil Nadu",
    scope: "Structural steel design, fabrication, on-site erection, and roofing envelope.",
    description:
      "A fast-track turnkey industrial canteen structure spanning 4,500 sq.ft. engineered with pre-engineered steel frames, high-strength columns, insulated roof sheeting, and optimized interior open spans for employee welfare.",
    thumbnail: "/images/projects/project-1.jpg",
    gallery: [
      "/images/projects/project-1.jpg",
      "/images/projects/project-2.jpg",
      "/images/projects/project-big-1.jpg",
      "/images/projects/project-big-2.jpg",
    ],
    specs: [
      { label: "Built-up Area", value: "4,500 Sq. Ft." },
      { label: "Structural Type", value: "Pre-Engineered Building (PEB)" },
      { label: "Location", value: "Sriperumbudur, Tamil Nadu" },
      { label: "Execution Time", value: "Strict schedule delivery" },
    ],
    relatedServices: ["PEB Fabrication", "Roof Sheet Erection", "Erection Works"],
  },
  {
    id: "sri-perumbudur-shed-40k",
    slug: "sri-perumbudur-shed-40000-sqft",
    title: "Sri Perumbudur Shed — Manufacturing Hall",
    category: "Heavy Structural",
    client: "Tier-1 Industrial Client",
    area: "40,000 Sq. Ft.",
    location: "Sriperumbudur, Tamil Nadu",
    scope: "Heavy structural fabrication, portal frame erection, high-clearance crane runways, and cladding.",
    description:
      "Massive industrial manufacturing shed measuring 40,000 sq.ft. featuring high-clearance bays designed to house overhead gantry cranes, heavy industrial machinery, and extensive material handling systems.",
    thumbnail: "/images/projects/project-3.jpg",
    gallery: [
      "/images/projects/project-3.jpg",
      "/images/projects/project-4.jpg",
      "/images/projects/project-big-3.jpg",
      "/images/projects/project-big-4.jpg",
    ],
    specs: [
      { label: "Built-up Area", value: "40,000 Sq. Ft." },
      { label: "Clear Span Height", value: "High-bay industrial clearance" },
      { label: "Structural Type", value: "Heavy Portal Frame Steel" },
      { label: "Enclosure", value: "Profiled Industrial Sheeting" },
    ],
    relatedServices: ["Structural Fabrication", "PEB Fabrication", "Erection Works"],
  },
  {
    id: "sri-perumbudur-shed-10k",
    slug: "sri-perumbudur-shed-10800-sqft",
    title: "Sri Perumbudur Shed — Production Unit",
    category: "PEB Fabrication",
    client: "Industrial Client",
    area: "10,800 Sq. Ft.",
    location: "Sriperumbudur, Tamil Nadu",
    scope: "Design, primary and secondary steel fabrication, roof decking, and rainwater systems.",
    description:
      "A complete 10,800 sq.ft. production shed featuring precision fabricated I-beams, cold-formed purlins, and robust foundation baseplates engineered for seamless manufacturing operations.",
    thumbnail: "/images/projects/project-5.jpg",
    gallery: [
      "/images/projects/project-5.jpg",
      "/images/projects/project-6.jpg",
      "/images/projects/project-big-5.jpg",
      "/images/projects/project-big-6.jpg",
    ],
    specs: [
      { label: "Built-up Area", value: "10,800 Sq. Ft." },
      { label: "Application", value: "Precision Production Facility" },
      { label: "Roofing", value: "Self-threading screw profile sheeting" },
      { label: "Steel Grades", value: "High-tensile structural steel" },
    ],
    relatedServices: ["PEB Fabrication", "Roof Sheet Erection"],
  },
  {
    id: "gudiyatham-shed-45k",
    slug: "gudiyatham-shed-45000-sqft",
    title: "Gudiyatham Heavy Industrial Shed",
    category: "Heavy Structural",
    client: "Regional Manufacturing Leader",
    area: "45,000 Sq. Ft.",
    location: "Gudiyatham, Tamil Nadu",
    scope: "Turnkey structural fabrication, truss fabrication, erection, and perimeter cladding.",
    description:
      "One of Dunamis’ largest single-span structural undertakings, encompassing 45,000 sq.ft. of covered industrial area with custom lattice trusses and weather-sealed roof systems.",
    thumbnail: "/images/projects/project-11.jpg",
    gallery: [
      "/images/projects/project-11.jpg",
      "/images/projects/project-12.jpg",
      "/images/projects/project-big-11.jpg",
      "/images/projects/project-big-12.jpg",
    ],
    specs: [
      { label: "Built-up Area", value: "45,000 Sq. Ft." },
      { label: "Location", value: "Gudiyatham, Tamil Nadu" },
      { label: "Truss Span", value: "Engineered wide clear-span" },
      { label: "Safety Record", value: "Zero incidents during assembly" },
    ],
    relatedServices: ["Structural Fabrication", "Erection Works", "Roof Sheet Erection"],
  },
  {
    id: "kia-motors-press-work",
    slug: "kia-motors-press-work",
    title: "KIA Motors — Heavy Press Work & Tooling",
    category: "Equipment Fabrication",
    client: "KIA Motors Vendor Ecosystem",
    area: "Heavy Machine Fitout",
    location: "Automotive Industrial Corridor",
    scope: "Heavy press machine base framing, mechanical fixture fabrication, and precision alignment.",
    description:
      "High-precision equipment fabrication and installation for automotive stamping and press operations at KIA Motors supply chain facility. Executed to strict dimensional tolerances.",
    thumbnail: "/images/projects/project-13.jpg",
    gallery: [
      "/images/projects/project-13.jpg",
      "/images/projects/project-big-13.jpg",
    ],
    specs: [
      { label: "Client Sector", value: "Automotive Stamping & Press" },
      { label: "Tolerances", value: "Sub-millimeter CNC precision" },
      { label: "Weld Standards", value: "Certified multi-pass ultrasonic tested" },
      { label: "Category", value: "Heavy Equipment Fabrication" },
    ],
    relatedServices: ["Equipment Fabrication", "Erection Works"],
  },
  {
    id: "kec-pipe-rack",
    slug: "kec-pipe-rack-structure",
    title: "KEC — Heavy Pipe Rack Structure",
    category: "Pipeline & Racks",
    client: "KEC International",
    area: "Multi-tier Rack Network",
    location: "Infrastructure Project Site",
    scope: "Heavy pipe rack steel structure fabrication, galvanized support framing, and elevated pipe installation.",
    description:
      "Fabrication and erection of heavy multi-tier pipe rack structures supporting industrial piping runs, cabling trays, and high-pressure utility lines across critical plant corridors.",
    thumbnail: "/images/projects/project-14.jpg",
    gallery: [
      "/images/projects/project-14.jpg",
      "/images/projects/project-big-14.jpg",
    ],
    specs: [
      { label: "Client", value: "KEC" },
      { label: "Structure", value: "Elevated Modular Pipe Rack" },
      { label: "Piping Integration", value: "High-pressure utility lines" },
      { label: "Finish", value: "Industrial protective coating & galvanizing" },
    ],
    relatedServices: ["Pipeline Works", "Structural Fabrication", "Erection Works"],
  },
  {
    id: "thirumalai-chemical",
    slug: "thirumalai-chemical-shed",
    title: "Thirumalai Chemical Limited — Industrial Plant",
    category: "Structural Fabrication",
    client: "Thirumalai Chemicals Limited",
    area: "25,000 Sq. Ft.",
    location: "Chemical Corridor, Tamil Nadu",
    scope: "Chemical-resistant structural steel fabrication, protective coatings, and industrial shed erection.",
    description:
      "Specialized structural fabrication covering 25,000 sq.ft. engineered with anti-corrosive protective systems tailored for chemical plant environments and thermal exposure.",
    thumbnail: "/images/projects/project-15.jpg",
    gallery: [
      "/images/projects/project-15.jpg",
      "/images/projects/project-big-15.jpg",
    ],
    specs: [
      { label: "Client", value: "Thirumalai Chemicals Limited" },
      { label: "Covered Area", value: "25,000 Sq. Ft." },
      { label: "Environment", value: "Chemical Processing Facility" },
      { label: "Coating Spec", value: "Specialized chemical-resistant epoxy" },
    ],
    relatedServices: ["Structural Fabrication", "Erection Works", "Pipeline Works"],
  },
  {
    id: "hl-mando-rcs-cabin",
    slug: "hl-mando-rcs-cabin",
    title: "HL Mando — RCS Cabin & Clean Enclosure",
    category: "Enclosures & Cabins",
    client: "HL Mando Corporation",
    area: "1,300 Sq. Ft.",
    location: "Automotive Precision Plant",
    scope: "Structural framing, insulated rockwool paneling, vibration dampening, and acoustic ceiling.",
    description:
      "Precision-built 1,300 sq.ft. RCS cabin designed for automotive testing and quality control environments requiring sound isolation, thermal stability, and cleanroom air balance.",
    thumbnail: "/images/projects/project-7.jpg",
    gallery: [
      "/images/projects/project-7.jpg",
      "/images/projects/project-8.jpg",
      "/images/projects/project-big-7.jpg",
      "/images/projects/project-big-8.jpg",
    ],
    specs: [
      { label: "Client", value: "HL Mando" },
      { label: "Enclosure Area", value: "1,300 Sq. Ft." },
      { label: "Panel System", value: "Acoustic Fire-Rated Rockwool" },
      { label: "Use Case", value: "Automotive Test & Inspection Cabin" },
    ],
    relatedServices: ["Rock Wool Panel Fixing", "HVAC System", "Construction Works"],
  },
  {
    id: "french-village-court-ecr",
    slug: "french-village-court-ecr",
    title: "French Village Court — Architectural Construction",
    category: "Construction Works",
    client: "Private Development",
    area: "Architectural Complex",
    location: "ECR (East Coast Road), Chennai",
    scope: "Turnkey architectural civil construction, specialized structural elements, and premium finishing.",
    description:
      "A coastal construction development on Chennai's East Coast Road (ECR) combining precision civil construction, structural steel enhancements, and durable coastal weatherproofing.",
    thumbnail: "/images/projects/project-9.jpg",
    gallery: [
      "/images/projects/project-9.jpg",
      "/images/projects/project-10.jpg",
      "/images/projects/project-big-9.jpg",
      "/images/projects/project-big-10.jpg",
    ],
    specs: [
      { label: "Location", value: "ECR, Chennai, Tamil Nadu" },
      { label: "Scope", value: "Civil, Structural & Architectural Execution" },
      { label: "Durability", value: "Marine-grade anti-corrosive treatment" },
    ],
    relatedServices: ["Construction Works", "Structural Fabrication"],
  },
  {
    id: "kk-nagar-puf-panel",
    slug: "kk-nagar-puf-panel-fixing",
    title: "KK Nagar — Thermal PUF Panel Installation",
    category: "Insulation & Cladding",
    client: "Commercial & Cold Chain Facility",
    area: "Insulated Facility",
    location: "KK Nagar, Chennai",
    scope: "High-density polyurethane foam (PUF) wall and roof panel fixing with hermetic vapor sealing.",
    description:
      "Turnkey installation of interlocking thermal PUF panels delivering superior temperature retention, airtight insulation, and rapid clean construction.",
    thumbnail: "/images/projects/project-16.jpg",
    gallery: [
      "/images/projects/project-16.jpg",
      "/images/projects/project-big-16.jpg",
    ],
    specs: [
      { label: "Location", value: "KK Nagar, Chennai" },
      { label: "System", value: "Interlocking PUF Sandwich Panels" },
      { label: "Thermal Value", value: "Ultra-low thermal conductivity" },
    ],
    relatedServices: ["Rock Wool Panel Fixing", "Roof Sheet Erection"],
  },
];
