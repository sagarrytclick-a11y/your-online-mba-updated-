import type { Metadata } from "next";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import SpecialisationsSection from "../Components/SpecialisationsSection";
import ComparisonSection from "../Components/ComparisonSection";
import UniversitiesSection from "../Components/UniversitiesSection";
import CareerOptionsSection from "../Components/CareerOptionsSection";
import HiringSection from "../Components/HiringSection";
import CurriculumTimeline from "../Components/CurriculumTimeline";
import SuccessStories from "../Components/SuccessStories";
import FAQSection from "../Components/FAQSection";
import CTASection from "../Components/CTASection";
import JsonLd from "../Components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Your Online MBA",
  url: "https://youronlinemba.com",
  description:
    "India's trusted platform for comparing Online MBA programs from top UGC-approved universities.",
  telephone: "+919839865347",
  email: "Abhishek@vidyavriddhi.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S0-1, Geniefolks Building, Block A, Plot A-28, Sector 4",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com", "https://facebook.com", "https://instagram.com", "https://youtube.com"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Your Online MBA",
  url: "https://youronlinemba.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://youronlinemba.com/reviews?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly does an online MBA program offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An online MBA offers the same curriculum as a full-time program, including leadership training, networking opportunities, and specialized tracks, but with the flexibility to learn from anywhere.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical duration to complete an online MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most programs range from 12 to 24 months, depending on whether you choose an accelerated track or a part-time pace.",
      },
    },
    {
      "@type": "Question",
      name: "Which are the leading Indian colleges providing online MBA courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top institutions include IIM Ahmedabad, IIM Kozhikode, NMIMS Global, and Amity Online, all offering UGC-entitled degrees.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications do you need to join an online MBA program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, you need a Bachelor's degree from a recognized university. Some top-tier programs also require 2-3 years of work experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is the value of an online MBA comparable to a traditional MBA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as long as the program is UGC-DEB approved, it holds the same legal value for government and private sector jobs.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Online MBA - Top UGC-Approved Universities in India 2026",
  description:
    "Compare India's best Online MBA programs from LPU, Amity, NMIMS, Manipal, Chandigarh University & more. UGC-approved, EMI options, placement support. Get free counselling.",
  openGraph: {
    title: "Online MBA - Top UGC-Approved Universities in India 2026",
    description:
      "Compare India's best Online MBA programs. UGC-approved, EMI options, placement support. Get free counselling today.",
  },
};

const page = () => {
  return (
    <div className="flex flex-col items-center bg-white justify-center w-full">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <WhyChooseUs />
      <SpecialisationsSection />
      <ComparisonSection />
      <UniversitiesSection />
      <CareerOptionsSection />
      <HiringSection />
      <CurriculumTimeline />
      <SuccessStories />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default page;