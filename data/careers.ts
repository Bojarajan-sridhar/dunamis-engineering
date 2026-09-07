export interface CareerRole {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const careersData: {
  headline: string;
  subheadline: string;
  description: string;
  applicationEmail: string;
  roles: CareerRole[];
} = {
  headline: "BUILD YOUR FUTURE WITH DUNAMIS",
  subheadline: "Engineering Careers Built on Precision, Integrity & Growth",
  description:
    "A culture built on innovation, collaboration, and a relentless drive for excellence, where every team member is empowered to grow, make a meaningful impact, and succeed together. Join our engineering teams at our Chennai offices and Kiloy Village fabrication yard.",
  applicationEmail: "decindiapvtltd@gmail.com",
  roles: [
    {
      id: "civil-engineer",
      title: "Civil Engineer",
      department: "Civil & Structural Engineering",
      type: "Full-Time / On-Site",
      location: "Chennai & Project Sites (Tamil Nadu)",
      experience: "2 - 6 Years",
      overview:
        "Responsible for on-site structural execution, foundation layout surveys, concrete grade inspections, bar-bending verification, and site coordination for PEB and industrial civil construction projects.",
      responsibilities: [
        "Oversee day-to-day civil construction and structural erection activities at client locations.",
        "Review architectural and structural drawings, ensuring execution conforms strictly to tolerances.",
        "Perform bar bending schedule checks, concrete cube casting, and slump tests.",
        "Coordinate with client representatives, consultants, and subcontractors for milestone clearances.",
        "Maintain site measurement books, daily progress reports (DPR), and material consumption logs.",
      ],
      requirements: [
        "B.E. / B.Tech or Diploma in Civil Engineering.",
        "Hands-on experience in industrial building construction, PEB foundations, and RCC framing.",
        "Proficiency in reading structural blueprints and AutoCAD.",
        "Strong leadership, on-site problem-solving, and contractor management skills.",
      ],
    },
    {
      id: "electrical-supervisor",
      title: "Electrical Supervisor",
      department: "Electrical & Plant Operations",
      type: "Full-Time",
      location: "Kiloy Fabrication Yard / Project Sites",
      experience: "3 - 7 Years",
      overview:
        "Lead electrical installations, heavy welding generator feeds, overhead gantry crane power tracks, switchgear maintenance, and compliance with statutory electrical safety standards.",
      responsibilities: [
        "Supervise electrical wiring, cable tray laying, panel installation, and plant power distribution.",
        "Conduct scheduled maintenance of heavy fabrication machinery, submerged arc welders, and cranes.",
        "Enforce strict electrical lockout/tagout (LOTO) protocols across fabrication yards and client sites.",
        "Oversee electrical testing, insulation resistance checks, and earthing pit resistance measurements.",
      ],
      requirements: [
        "Diploma or Degree in Electrical & Electronics Engineering (EEE).",
        "Valid Electrical Supervisor Competency Certificate / License (C-License / B-License preferred).",
        "Experience in industrial HT/LT distribution networks, motor control centers (MCC), and plant machinery.",
        "Familiarity with Indian Electricity Rules and industrial safety regulations.",
      ],
    },
    {
      id: "electrician",
      title: "Industrial Electrician",
      department: "Plant Electrical & Maintenance",
      type: "Full-Time",
      location: "Kiloy Fabrication Yard & On-Site Projects",
      experience: "1 - 5 Years",
      overview:
        "Execute hands-on electrical installations, cable terminations, motor testing, conduit routing, and troubleshooting across fabrication equipment and building electrical packages.",
      responsibilities: [
        "Install electrical conduit, cable trays, junction boxes, and industrial luminaires.",
        "Perform single and three-phase motor connections, starters, and emergency shutoff wiring.",
        "Assist in crane busbar installation, conductor maintenance, and limit switch calibration.",
        "Adhere to personal protective equipment (PPE) requirements and site electrical safety standards.",
      ],
      requirements: [
        "ITI in Electrician Trade or equivalent qualification.",
        "Valid Wireman License / Electrical certification.",
        "Strong practical experience in industrial machinery wiring, welding machines, and DBs.",
        "Ability to work safely in shifts and at elevated industrial structures.",
      ],
    },
    {
      id: "instrument-technician",
      title: "Instrument Technician",
      department: "Instrumentation & Process Automation",
      type: "Full-Time",
      location: "Project Sites (Industrial & Chemical Facilities)",
      experience: "2 - 5 Years",
      overview:
        "Calibrate, install, and service field instrumentation, process transmitters, pressure sensors, pneumatic valve actuators, and control room loop integrations.",
      responsibilities: [
        "Install and calibrate process gauges, pressure transmitters, temperature sensors, and flow meters.",
        "Route instrument air tubing, impulse piping, and multi-core signal cables.",
        "Perform loop continuity checks, pneumatic leakage testing, and calibration record documentation.",
        "Support commissioning engineers during plant testing and turnkey handover.",
      ],
      requirements: [
        "ITI or Diploma in Instrumentation & Control / Electronics Engineering.",
        "Prior experience in process plants, chemical complexes, or heavy industrial piping projects.",
        "Proficiency in tube bending, pneumatic fitting, and handheld calibrator tools.",
        "Attention to detail and commitment to statutory safety compliance.",
      ],
    },
  ],
};
