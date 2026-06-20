export interface University {
  name: string;
  slug: string;
  logo: string;
  emi: string;
  accreditation: string;
  description?: string;
  highlights?: string[];
}

export const universities: University[] = [
  {
    name: "Manipal University",
    slug: "manipal-university",
    logo: "/colleges/Manipal_University.jpg",
    emi: "₹7291*",
    accreditation: "UGC, NAAC A++",
    description: "Manipal University offers a comprehensive Online MBA program designed for working professionals.",
    highlights: ["NAAC A++ Accredited", "UGC Recognized", "Placement Assistance"],
  },
  {
    name: "Amity University",
    slug: "amity-university",
    logo: "/colleges/amity.jpg",
    emi: "₹5400*",
    accreditation: "UGC, NAAC A+",
    description: "Amity University Online MBA is one of the most sought-after programs with global recognition.",
  },
  {
    name: "Jain University",
    slug: "jain-university",
    logo: "/colleges/sanskriti.jpg",
    emi: "₹8166*",
    accreditation: "UGC, NAAC A++",
  },
  {
    name: "Shoolini University",
    slug: "shoolini-university",
    logo: "/colleges/shoolini.jpg",
    emi: "₹6200*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "LPU Online",
    slug: "lpu-online",
    logo: "/colleges/lpu_online.jpg",
    emi: "₹4500*",
    accreditation: "UGC, NAAC A++",
  },
  {
    name: "DY Patil University",
    slug: "dy-patil-university",
    logo: "/colleges/dypatil.jpg",
    emi: "₹7229*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "SRM University",
    slug: "srm-university",
    logo: "/colleges/SRM_University.jpg",
    emi: "₹5900*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "Christ University",
    slug: "christ-university",
    logo: "/colleges/christ.jpg",
    emi: "₹6800*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "NMIMS University",
    slug: "nmims-university",
    logo: "/colleges/NMIMS.jpg",
    emi: "₹8500*",
    accreditation: "UGC, NAAC A++",
  },
  {
    name: "Parul University",
    slug: "parul-university",
    logo: "/colleges/Parul.jpg",
    emi: "₹3900*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "Alliance University",
    slug: "alliance-university",
    logo: "/colleges/Alliance_University_Bangalore.jpg",
    emi: "₹5100*",
    accreditation: "UGC, NAAC A+",
  },
  {
    name: "Kalinga University",
    slug: "kalinga-university",
    logo: "/colleges/kalinga_university.jpg",
    emi: "₹4292*",
    accreditation: "UGC, NAAC A+",
  },
];

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}
