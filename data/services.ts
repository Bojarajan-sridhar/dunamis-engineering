export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  capabilities: string[];
  applications: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "peb-fabrication",
    slug: "peb-fabrication",
    number: "01",
    title: "PEB Fabrication & Erection",
    shortDescription:
      "Engineered Pre-Engineered Building solutions designed for rapid deployment, structural integrity, and architectural precision across industrial warehouses and manufacturing facilities.",
    fullDescription:
      "Our experience in delivering large scale construction and intricate detailing ensures we deliver world-class Pre-Engineered Building (PEB) fabrication and erection services. From foundation anchoring and primary structural steel framing to secondary members, purlins, and wall girts, our PEB structures are engineered for superior strength-to-weight ratios, seismic resilience, and rapid on-site assembly.",
    image: "/images/projects/project-3.jpg",
    highlights: [
      "Custom primary and secondary structural frame engineering",
      "Rigid quality inspection at every weld and bolt junction",
      "Rapid on-site erection with certified heavy rigging equipment",
      "Optimized span clear-heights and architectural configurations",
    ],
    capabilities: [
      "Built-up welded I-sections and portal frames",
      "Z and C cold-formed secondary purlins and girts",
      "Anchor bolt layout casting and survey verification",
      "High-tensile structural bolted connections",
    ],
    applications: [
      "Industrial Warehouses & Distribution Hubs",
      "Automotive Assembly Plants",
      "Heavy Machinery Manufacturing Sheds",
      "Commercial Logistic Parks",
    ],
    deliverables: [
      "Structural 3D model shop drawings & fabrication schedules",
      "Mill test certificates for all steel raw materials",
      "Complete on-site crane-assisted erection supervision",
      "Final handover safety & structural integrity certification",
    ],
  },
  {
    id: "structural-fabrication",
    slug: "structural-fabrication",
    number: "02",
    title: "Structural Fabrication",
    shortDescription:
      "Comprehensive structural fabrication backed by a 5,000 sq.ft. covered workshop and a 70,000 sq.ft. heavy open yard capable of large-scale industrial shed fabrication.",
    fullDescription:
      "We undertake all types of structural steel fabrication with dedicated covered facilities spanning 5,000 sq.ft. and an expansive heavy structural fabrication open yard up to 70,000 sq.ft. in Sriperumbudur. Dunamis offers a comprehensive range of industrial shed fabrication and heavy steel framework services. Our certified fabricators make constant efforts to deliver precision within promised project schedules.",
    image: "/images/projects/project-5.jpg",
    highlights: [
      "70,000+ sq.ft. heavy structural open fabrication yard",
      "5,000 sq.ft. precision covered workshop",
      "Advanced plasma cutting, shearing, and submerged arc welding",
      "Heavy column, truss, and gantry girder fabrication",
    ],
    capabilities: [
      "Heavy structural trusses, columns, and rafters",
      "Overhead crane gantry girders and crane runways",
      "Mezzanine floors and industrial access platforms",
      "Custom steel canopies and equipment skids",
    ],
    applications: [
      "Chemical Processing Plants",
      "Steel & Metal Foundries",
      "Automotive Ancillary Units",
      "Multi-level Industrial Platforms",
    ],
    deliverables: [
      "WPS (Welding Procedure Specification) documentation",
      "Ultrasonic & magnetic particle testing reports",
      "Anti-corrosive primer and topcoat application records",
      "Dimensional tolerance inspection reports",
    ],
  },
  {
    id: "equipment-fabrication",
    slug: "equipment-fabrication",
    number: "03",
    title: "Equipment Fabrication",
    shortDescription:
      "Custom fabrication of large heavy equipment parts, mechanical assemblies, and CNC-machined process equipment engineered for demanding operational environments.",
    fullDescription:
      "Dunamis is a trusted fabricator of large heavy equipment parts, process vessels, and complex mechanical assemblies. We provide a decisive competitive advantage to heavy industry through state-of-the-art metal cutting, forming, and specialized welding of exotic metals, alongside precision CNC machining and comprehensive mechanical integration.",
    image: "/images/projects/project-13.jpg",
    highlights: [
      "Vast metallurgy experience in welding diverse metals",
      "Precision CNC machining and tight-tolerance component finishing",
      "Turnkey assembly, load-testing, and dynamic alignment",
      "On-time delivery and dedicated technical support",
    ],
    capabilities: [
      "Machine chassis, presses, and base frames",
      "Industrial hoppers, chutes, and material handling bins",
      "Custom mechanical skids and hydraulic powerpack frames",
      "Precision CNC milling, turning, and boring operations",
    ],
    applications: [
      "Automobile Press Shops & Stamping Lines",
      "Material Handling & Conveyor Systems",
      "Process Manufacturing Equipment",
      "Mining & Aggregate Processing Hardware",
    ],
    deliverables: [
      "Material test reports (MTR) and chemical analysis",
      "Hydrostatic and load test verification certificates",
      "Precision CMM coordinate inspection records",
      "Custom packaging and surface preservation for transit",
    ],
  },
  {
    id: "erection-works",
    slug: "erection-works",
    number: "04",
    title: "Erection Works",
    shortDescription:
      "Certified heavy rigging and structural erection services executed under stringent safety protocols and surveillance by veteran engineering professionals.",
    fullDescription:
      "Dunamis is widely recognized for delivering safe, zero-incident structural erection works. Performed under the close surveillance of our deft engineering supervisors in tandem with international market standards and statutory safety norms, our teams utilize modern rigging techniques, synchronized crane maneuvers, and precision laser alignment.",
    image: "/images/projects/project-1.jpg",
    highlights: [
      "Zero-compromise EHS (Environment, Health & Safety) compliance",
      "Experienced riggers, crane operators, and certified signalers",
      "Precision laser leveling and total-station alignment",
      "Turnkey execution under tight operational plant shutdown windows",
    ],
    capabilities: [
      "Heavy column and roof truss placement",
      "Precast and steel modular structure assembly",
      "High-elevation rigging and tensioning",
      "Temporary bracing, shoring, and stabilizing systems",
    ],
    applications: [
      "High-bay Industrial Warehouses",
      "Manufacturing Plant Expansions",
      "Brownfield Structural Upgrades",
      "Specialty Architectural Steel Projects",
    ],
    deliverables: [
      "Method statements & lift study analysis",
      "Daily safety toolbox records & hazard identification logs",
      "Torque wrench calibration and bolt tightness reports",
      "Final plumbness and elevation survey data",
    ],
  },
  {
    id: "roof-sheet-erection",
    slug: "roof-sheet-erection",
    number: "05",
    title: "Roof Sheet Erection",
    shortDescription:
      "High-durability single and double-skin roof sheet installation utilizing specialized self-threading fasteners and weather-tight profiling systems.",
    fullDescription:
      "We provide premium industrial roof sheet installation and clad envelope services. Rendered by our dexterous team of roofing specialists using sophisticated profiled sheets, our installations meet stringent international weather-proofing standards. We employ corrosion-resistant self-threading screws with EPDM washers to ensure long-term durability, leak resistance, and optimal acoustic insulation.",
    image: "/images/projects/project-4.jpg",
    highlights: [
      "Single and double-skin profiled sheeting solutions",
      "Self-threading screws with UV-resistant EPDM sealing washers",
      "Flashing, ridge capping, and gutter drainage integration",
      "Engineered thermal and acoustic under-roof insulation",
    ],
    capabilities: [
      "Standing seam and trapezoidal profile roofing",
      "Polycarbonate daylight skylight sheet integration",
      "Ridge ventilators and turbo exhaust cowl installation",
      "Rainwater gutters, downspouts, and fascia panels",
    ],
    applications: [
      "Commercial Warehouses & Logistics Hubs",
      "Food Processing and Cold Storage Facilities",
      "Automobile Ancillary Sheds",
      "Agricultural Processing Sheds",
    ],
    deliverables: [
      "Water-tightness spray test certifications",
      "Fastener torque and weather-seal verification",
      "Manufacturer warranty documents for coating longevity",
      "As-built gutter layout and drainage plan",
    ],
  },
  {
    id: "pipeline-works",
    slug: "pipeline-works",
    number: "06",
    title: "Pipe Line Works",
    shortDescription:
      "Industrial piping fabrication and site erection according to isometric alignment drawings across CS, SS, Alloy Steel, GRE, GRP, and HDPE systems.",
    fullDescription:
      "Dunamis delivers turnkey fabrication and erection of industrial piping networks strictly following client isometrics and alignment sheets. We handle on-site welding, pipe support fabrication, structural bridging, and field jointing. Our expertise covers carbon steel (CS), stainless steel (SS), alloy steel, as well as composite materials including GRE, GRP, and HDPE.",
    image: "/images/projects/project-14.jpg",
    highlights: [
      "Fabrication strictly aligned to client Isometric drawings",
      "Metallurgy: CS, SS (304/316/316L), Alloy Steel, GRE, GRP, HDPE",
      "Certified 6G high-pressure welders and orbital jointing",
      "Comprehensive pipe rack support structure manufacturing",
    ],
    capabilities: [
      "High-pressure steam and condensate piping networks",
      "Chemical dosing and process fluid circulation lines",
      "Utility compressed air and cooling water circuits",
      "Underground and overhead pipeline trenching and rack routing",
    ],
    applications: [
      "Chemical Processing & Specialty Refineries",
      "Textile & Dyeing Industrial Plants",
      "Water Treatment & Desalination Facilities",
      "Automotive Paint Shop Utility Feeds",
    ],
    deliverables: [
      "Weld mapping & Isometric traceability records",
      "Radiographic / Dye Penetrant non-destructive testing reports",
      "Hydrostatic and pneumatic pressure test certificates",
      "Piping flushing, pickling, and passivation logs",
    ],
  },
  {
    id: "construction-works",
    slug: "construction-works",
    number: "07",
    title: "Construction Works",
    shortDescription:
      "Full-spectrum architectural, civil, and industrial construction services delivering value-engineered, space-saving, and cost-effective facility builds.",
    fullDescription:
      "As an established construction engineering company in Chennai, we provide architecture and turnkey civil construction services. Every project starts with a meticulous planning phase driven by our registered engineers and designers who develop space-efficient, cost-saving solutions tailored to industrial, commercial, and residential facilities.",
    image: "/images/projects/project-9.jpg",
    highlights: [
      "End-to-end civil engineering and structural RCC construction",
      "Industrial heavy-duty flooring and machine foundation casting",
      "Space-optimized architectural layouts reducing construction overhead",
      "Experienced project managers ensuring rigorous timeline control",
    ],
    capabilities: [
      "Reinforced cement concrete (RCC) foundations and frames",
      "Heavy machine plinths, trenches, and vibrating bases",
      "Retaining walls, boundary perimeters, and internal paved roads",
      "Industrial flooring with laser screeding and hardener finishes",
    ],
    applications: [
      "Industrial Factory Buildings & Control Rooms",
      "Commercial Administration Complexes",
      "Substations & Transformer Yards",
      "Employee Canteens & Recreation Centers",
    ],
    deliverables: [
      "Concrete cube compressive strength testing results",
      "Structural engineering design calculations & soil reports",
      "Stage-wise inspection sign-offs and bar bending schedules",
      "Building completion and occupancy handover documentation",
    ],
  },
  {
    id: "rock-wool-panel-fixing",
    slug: "rock-wool-panel-fixing",
    number: "08",
    title: "Rock Wool Panel Fixing",
    shortDescription:
      "Engineered thermal insulation and fire-rated acoustic wall/roof paneling for control rooms, acoustic chambers, and specialized industrial buildings.",
    fullDescription:
      "Dunamis Rockwool Panel Systems deliver a comprehensive one-step insulated wall and roofing solution for fast, modular construction. Ideal for control rooms, turbine-generator halls, power projects, drying ovens, compressor enclosures, and acoustic test cells, our rockwool panels boast exceptional sound attenuation, thermal resistance, and superior fire safety ratings.",
    image: "/images/projects/project-16.jpg",
    highlights: [
      "Exceptional sound proofing and noise attenuation properties",
      "Non-combustible fire-rated rockwool core material",
      "Thermal insulation minimizing HVAC energy consumption",
      "Modular interlocking panels for quick, clean installation",
    ],
    capabilities: [
      "Acoustic panel installation for heavy equipment rooms",
      "Fire-barrier wall construction up to 2-hour and 4-hour ratings",
      "Drying oven and furnace enclosure thermal insulation",
      "Cleanroom partition fixing and sealing",
    ],
    applications: [
      "Turbine & Generator Enclosures",
      "Compressor Rooms & Testing Cells",
      "Power Plants & Substation Control Rooms",
      "Cold Storage & Environment Chambers",
    ],
    deliverables: [
      "Fire resistance and thermal conductivity rating sheets",
      "Acoustic decibel reduction measurement verification",
      "Joint sealing and vapor barrier integrity checklist",
      "Detailed panel layout and elevation drawings",
    ],
  },
  {
    id: "hvac-system",
    slug: "hvac-system",
    number: "09",
    title: "HVAC System",
    shortDescription:
      "Turnkey industrial air conditioning, ducting, and ventilation solutions designed to optimize thermal control, cleanroom airflow, and energy efficiency.",
    fullDescription:
      "Dunamis’ experienced engineers design, supply, and install industrial air conditioning and HVAC systems to the highest standards of workmanship. Our scope spans thermal load calculations, duct design, procurement, precision chilled-water piping, air handling unit (AHU) installation, and air balancing to deliver optimal climate control.",
    image: "/images/services/ind1.jpg",
    highlights: [
      "Detailed CFM and thermal load calculations tailored to facility volumes",
      "High-grade GI duct fabrication and acoustic lining",
      "Precision AHU, chiller, and VRF/VRV system integration",
      "Testing, adjusting, and balancing (TAB) of air distribution networks",
    ],
    capabilities: [
      "Centralized chilled water and DX air conditioning",
      "Industrial exhaust and ventilation systems",
      "Cleanroom positive-pressure airflow management",
      "Smart thermostat and BMS integration",
    ],
    applications: [
      "Pharmaceutical Clean Rooms",
      "Automotive Paint Shops & Clean Zones",
      "Data Centers & Server Rooms",
      "Corporate Headquarters & Control Cabins",
    ],
    deliverables: [
      "Psychrometric and CFM load calculation sheets",
      "Duct pressure leakage test reports",
      "Air balancing and diffuser airflow verification records",
      "Equipment commissioning and maintenance manuals",
    ],
  },
  {
    id: "fire-fighting-system",
    slug: "fire-fighting-system",
    number: "10",
    title: "Fire Fighting System",
    shortDescription:
      "Turnkey fire protection systems designed, installed, and commissioned in compliance with NFPA guidelines and local Fire Service statutory codes.",
    fullDescription:
      "We provide complete turnkey fire fighting solutions encompassing consultancy, hydraulic design, detailed engineering, procurement, installation, testing, and commissioning. Fully conforming to NFPA benchmarks and state fire regulations, our solutions safeguard high-rise complexes, commercial facilities, hospitals, and heavy manufacturing factories.",
    image: "/images/projects/project-14.jpg",
    highlights: [
      "Turnkey execution: Consultancy, Design, Supply, and Commissioning",
      "Strict compliance with NFPA guidelines & Indian Fire Safety Codes",
      "Hydrant networks, wet sprinkler systems, and foam deluge systems",
      "Diesel and electric fire pump skid installation & automation",
    ],
    capabilities: [
      "Automatic fire sprinkler network installation",
      "Internal and external yard hydrant valve networks",
      "CO2 and clean agent gas flooding for server and electrical rooms",
      "Fire alarm detection sensors and MCP integration",
    ],
    applications: [
      "Heavy Manufacturing & Assembly Factories",
      "High-rise Commercial Buildings",
      "Hospitals and Healthcare Facilities",
      "Chemical Storage & Flammable Material Warehouses",
    ],
    deliverables: [
      "Hydraulic calculation sheets and NFPA compliance notes",
      "Hydrostatic pressure testing certification of ring mains",
      "Fire pump performance curve and flow rate testing records",
      "Statutory Fire Department NOC liaison support documentation",
    ],
  },
];
