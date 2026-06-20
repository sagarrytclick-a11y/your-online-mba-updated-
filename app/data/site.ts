export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logo: {
    text: string;
    suffix: string;
  };
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  year: number;
  socials: SocialLink[];
  legal: {
    disclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Your Online MBA",
  shortName: "YOM",
  tagline: "Online MBA School",
  description:
    "India's trusted platform supporting learners at every stage of their education and career journey.",
  logo: {
    text: "YOM",
    suffix: "Online MBA School",
  },
  phone: "+919839865347",
  phoneDisplay: "+91 9839865347",
  email: "Abhishek@vidyavriddhi.com",
  address: "S0-1, Geniefolks Building (2nd Floor), Block A, Plot No. A-28, Sector 4, Noida, Uttar Pradesh - 201301",
  city: "Noida",
  state: "Uttar Pradesh",
  country: "India",
  year: 2026,
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedin" },
    { name: "Facebook", url: "https://facebook.com", icon: "FaFacebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "FaInstagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "FaYoutube" },
  ],
  legal: {
    disclaimer:
      "This website is a division of Your Online MBA. Your Online MBA acts as an independent education advisory platform and is not a university.",
  },
};
