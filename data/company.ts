export interface CompanyInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  subheadline: string;
  headline: string;
  aboutText: string[];
  mission: string;
  vision: string;
  addresses: {
    registeredOffice: {
      title: string;
      street: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    fabricationUnit: {
      title: string;
      street: string;
      landmark: string;
      taluk: string;
      district: string;
      pincode: string;
      country: string;
      full: string;
    };
  };
  contact: {
    primaryPhone: string;
    primaryPhoneDisplay: string;
    email: string;
    keyPersonnel: {
      role: string;
      phone: string;
      phoneDisplay: string;
    }[];
  };
  mapsEmbedUrl: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  socials: {
    name: string;
    href: string;
  }[];
}

export const companyData: CompanyInfo = {
  legalName: "Dunamis Construction and Engineering Private Limited",
  brandName: "Dunamis Engineering",
  tagline: "Building with Precision, Delivering with Commitment",
  subheadline: "Delivering reliable engineering solutions with precision, innovation, and integrity to power progress across industries.",
  headline: "BUILT FOR PRECISION. ENGINEERED FOR PERFORMANCE.",
  aboutText: [
    "Dunamis Construction and Engineering Private Limited is a dynamic and growth-driven engineering company committed to delivering reliable construction, fabrication, and industrial solutions. With a firm foundation and a forward-thinking approach, we continuously move ahead to fulfill our customers’ requirements with precision, speed, and quality.",
    "We constantly strive to adopt new technologies and apply them using the best engineering methodologies and industry standards. Whether it is fabrication, erection, industrial services, or civil works, we maintain strict quality assurance practices to ensure durability, safety, and performance.",
    "Our fabrication infrastructure features a state-of-the-art facility including 5,000 sq.ft. of dedicated covered area and an expansive 70,000 sq.ft. heavy structural fabrication open yard in Kiloy Village, Sriperumbudur."
  ],
  mission: "We are a group of teams endeavor reflecting good ideas over new technologies applying with the best engineering methodologies. Always providing the most robust and dependable solutions for all industrial clients.",
  vision: "We maintain a firm footstep and forward momentum to fulfill customer requirements with excellence. Our highly experienced engineering team delivers top-tier structural solutions at the earliest turnaround times.",
  addresses: {
    registeredOffice: {
      title: "Registered Office",
      street: "19, Indira Nagar",
      city: "Poonamallee, Chennai",
      state: "Tamil Nadu",
      pincode: "600 056",
      country: "India",
      full: "19, Indira Nagar, Poonamallee, Chennai - 600 056, Tamil Nadu, India",
    },
    fabricationUnit: {
      title: "Fabrication Unit & Yard",
      street: "346/1B, Kiloy Village",
      landmark: "Near Sriperumbudur Industrial Corridor",
      taluk: "Sriperumbudur Taluk",
      district: "Kanchipuram District",
      pincode: "602 105",
      country: "India",
      full: "346/1B, Kiloy Village, Sriperumbudur Taluk, Kanchipuram District - 602 105, Tamil Nadu, India",
    },
  },
  contact: {
    primaryPhone: "+919600404562",
    primaryPhoneDisplay: "+91 96004 04562",
    email: "decindiapvtltd@gmail.com",
    keyPersonnel: [
      {
        role: "Sr. General Manager – Operation",
        phone: "+919952053744",
        phoneDisplay: "+91 99520 53744",
      },
      {
        role: "Sr. Executive Purchase",
        phone: "+919840622484",
        phoneDisplay: "+91 98406 22484",
      },
    ],
  },
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.5229053344397!2d79.90365627507698!3d13.002338187315855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1773068967669!5m2!1sen!2sin",
  stats: [
    {
      label: "Open Fabrication Yard",
      value: "70,000+",
      description: "Sq. Ft. heavy open yard capacity",
    },
    {
      label: "Covered Shop Area",
      value: "5,000+",
      description: "Sq. Ft. precision fabrication shop",
    },
    {
      label: "Projects Completed",
      value: "75+",
      description: "Delivered on schedule across South India",
    },
    {
      label: "Engineering Hours",
      value: "3,200+",
      description: "Dedicated on-site & design precision",
    },
  ],
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com" },
    { name: "Facebook", href: "https://www.facebook.com" },
  ],
};
