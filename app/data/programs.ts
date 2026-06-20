export interface SubProgram {
  title: string;
  university: string;
  duration: string;
  imageUrl: string;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  highlights: string[];
  careerOutcomes: string[];
  subPrograms: SubProgram[];
}

export const programs: Program[] = [
  {
    id: "data-science-analytics",
    title: "Data Science & Analytics",
    slug: "data-science-analytics",
    description: "Uncover the power of data. Learn Python, SQL, machine learning, data visualization, and real-world analytics tools.",
    duration: "12-18 months",
    format: "100% Online + Live Projects",
    level: "Post Graduate / Master's Program",
    highlights: [
      "Live Projects",
      "Expert Mentorship",
      "Career Support",
      "Industry Certifications"
    ],
    careerOutcomes: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist"
    ],
    subPrograms: [
      {
        title: "Post Graduate Program in Data Science & AI",
        university: "IIIT Bangalore",
        duration: "13 Months",
        imageUrl: "https://i.pinimg.com/736x/51/f2/33/51f233f4e9ceab328fda4882eb6457ad.jpg"
      },
      {
        title: "Master of Science in Data Science",
        university: "IIIT Bangalore",
        duration: "18 Months",
        imageUrl: "https://i.pinimg.com/1200x/4e/74/45/4e744597e7502de681268be0b2e319b3.jpg"
      },
      {
        title: "Executive PG Program in Business Analytics",
        university: "LIBA",
        duration: "12 Months",
        imageUrl: "https://i.pinimg.com/736x/5b/65/94/5b6594893ae53fec584371dbdb090962.jpg"
      }
    ]
  },
  {
    id: "ai-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    slug: "ai-machine-learning",
    description: "Master advanced neural networks, NLP, deep learning models, and computer vision with high-performance production frameworks.",
    duration: "12-24 months",
    format: "100% Online + Hands-on Labs",
    level: "Post Graduate / Master's Program",
    highlights: [
      "GPU Cloud Labs",
      "Expert Mentorship",
      "Career Support",
      "Industry Certifications"
    ],
    careerOutcomes: [
      "AI Engineer",
      "ML Specialist",
      "NLP Engineer"
    ],
    subPrograms: [
      {
        title: "Post Graduate Program in Machine Learning & NLP",
        university: "IIIT Bangalore",
        duration: "13 Months",
        imageUrl: "https://i.pinimg.com/736x/d6/1d/43/d61d43db0f2aa2090f8bbf35a894766c.jpg"
      },
      {
        title: "Executive PG Program in Artificial Intelligence",
        university: "Amity Online",
        duration: "12 Months",
        imageUrl: "https://i.pinimg.com/1200x/f4/d6/11/f4d611822567362e6fad9e72339611b5.jpg"
      },
      {
        title: "M.Tech in AI and Machine Learning",
        university: "BITS Pilani",
        duration: "24 Months",
        imageUrl: "https://i.pinimg.com/736x/3f/68/48/3f684852a3474b0127539eeede3f72d5.jpg"
      }
    ]
  },
  {
    id: "mba",
    title: "MBA (Master of Business Administration)",
    slug: "mba",
    description: "Prepare for executive leadership with modules in finance, strategic management, cross-functional operations, and organizational culture.",
    duration: "2 Years",
    format: "100% Online + Executive Workshops",
    level: "Master's Degree",
    highlights: [
      "Live Workshops",
      "Alumni Network",
      "Career Support",
      "UGC-Entitled Degree"
    ],
    careerOutcomes: [
      "Business Development Manager",
      "Marketing Head",
      "Strategy Consultant"
    ],
    subPrograms: [
      {
        title: "Online MBA in General Management",
        university: "Manipal University",
        duration: "2 Years",
        imageUrl: "https://i.pinimg.com/1200x/26/30/97/2630975665e0d4186bc427a09b6df808.jpg"
      },
      {
        title: "Online MBA in Marketing & Finance",
        university: "Amity Online",
        duration: "2 Years",
        imageUrl: "https://i.pinimg.com/736x/ba/b1/80/bab180c78e708477d0240f3a1b41876b.jpg"
      },
      {
        title: "Online MBA in HR & Operations",
        university: "LPU Online",
        duration: "2 Years",
        imageUrl: "https://i.pinimg.com/736x/39/23/c5/3923c5ffe32fd8c3e0f6c9b3d14b1ae4.jpg"
      }
    ]
  },
  {
    id: "software-technology",
    title: "Software & Technology",
    slug: "software-technology",
    description: "Learn full-stack software development, cloud systems engineering, cybersecurity architecture, and distributed microservices.",
    duration: "9-18 months",
    format: "100% Online + Coding bootcamps",
    level: "Post Graduate / Master's Program",
    highlights: [
      "Coding Bootcamps",
      "GitHub Reviews",
      "Career Support",
      "Industry Certifications"
    ],
    careerOutcomes: [
      "Full-Stack Developer",
      "Cloud Architect",
      "Software Lead"
    ],
    subPrograms: [
      {
        title: "Post Graduate Program in Full Stack Development",
        university: "IIIT Bangalore",
        duration: "11 Months",
        imageUrl: "https://i.pinimg.com/736x/4f/fd/3c/4ffd3cb2376522b88092a85349673375.jpg"
      },
      {
        title: "Master of Science in Computer Science",
        university: "Liverpool John Moores",
        duration: "18 Months",
        imageUrl: "https://i.pinimg.com/736x/34/b6/8f/34b68f71c0e7eae0478794981c7144b2.jpg"
      },
      {
        title: "Executive PG Program in Cyber Security",
        university: "IIIT Bangalore",
        duration: "12 Months",
        imageUrl: "https://i.pinimg.com/736x/6a/92/c2/6a92c2c53f7df542f804f1e8324f5e64.jpg"
      }
    ]
  },
  {
    id: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    slug: "digital-marketing-growth",
    description: "Acquire high-ROI conversion copywriting, user acquisition, growth hacking, SEO, brand positioning, and analytics skills.",
    duration: "6 Months",
    format: "100% Online + Live Campaigns",
    level: "Professional Certification",
    highlights: [
      "Live Campaigns",
      "Ad Spend Budget",
      "Career Support",
      "Industry Certifications"
    ],
    careerOutcomes: [
      "Growth Marketing Lead",
      "SEO/SEM Expert",
      "Brand Coordinator"
    ],
    subPrograms: [
      {
        title: "Post Graduate Program in Digital Marketing",
        university: "MICA Ahmedabad",
        duration: "6 Months",
        imageUrl: "https://i.pinimg.com/736x/c9/a9/10/c9a910e3e884c6236ddf53af69725d80.jpg"
      },
      {
        title: "Executive Certificate in Growth Hacking",
        university: "IIIT Bangalore",
        duration: "5 Months",
        imageUrl: "https://i.pinimg.com/736x/70/52/ad/7052ad5f76a69b85133af4569959dc32.jpg"
      },
      {
        title: "Advanced Certificate in Digital Marketing",
        university: "Amity Online",
        duration: "6 Months",
        imageUrl: "https://i.pinimg.com/1200x/3b/cc/58/3bcc58a79cde7a5739a74f6f879b03a1.jpg"
      }
    ]
  },
  {
    id: "management-leadership",
    title: "Management & Leadership (Certificates)",
    slug: "management-leadership",
    description: "Develop executive decision-making, strategic problem solving, change management, conflict resolution, and public speaking skills.",
    duration: "6-11 months",
    format: "100% Online + Industry Mentorship",
    level: "Executive Certification",
    highlights: [
      "Peer Networking",
      "Expert Mentorship",
      "Career Support",
      "Industry Certifications"
    ],
    careerOutcomes: [
      "Team Manager",
      "Operations Director",
      "Management Consultant"
    ],
    subPrograms: [
      {
        title: "Executive Program in Leadership & Management",
        university: "IIM Raipur",
        duration: "6 Months",
        imageUrl: "https://i.pinimg.com/736x/0e/93/b5/0e93b513ab369530d69e56fe55e6a93f.jpg"
      },
      {
        title: "Post Graduate Certificate in Management",
        university: "IMT Ghaziabad",
        duration: "11 Months",
        imageUrl: "https://i.pinimg.com/736x/3c/e1/bf/3ce1bf359a7d3b4991d40bb1cc1e03cd.jpg"
      },
      {
        title: "Executive Program in Strategic Management",
        university: "IIM Kozhikode",
        duration: "8 Months",
        imageUrl: "https://i.pinimg.com/1200x/40/ac/c3/40acc3c45b41dcf651f7b1aa14e896c0.jpg"
      }
    ]
  },
  {
    id: "global-mba",
    title: "Master’s Program (Global MBA)",
    slug: "global-mba",
    description: "Study across global modules covering international finance, cross-border trade, and international operations with double-accredited degrees.",
    duration: "18-24 months",
    format: "100% Online + International Faculty",
    level: "Dual Master's Degree",
    highlights: [
      "Dual Degree",
      "Global Alumni",
      "Career Support",
      "International Faculty"
    ],
    careerOutcomes: [
      "International Consultant",
      "Global Operations Lead",
      "Multinational Brand Executive"
    ],
    subPrograms: [
      {
        title: "Global MBA (Dual Degree Program)",
        university: "SSBM Geneva",
        duration: "18 Months",
        imageUrl: "https://i.pinimg.com/1200x/08/9a/09/089a096290f1f5ca72993f397a7d20fd.jpg"
      },
      {
        title: "MBA from Liverpool Business School",
        university: "Liverpool Business School",
        duration: "18 Months",
        imageUrl: "https://i.pinimg.com/736x/bb/6e/9a/bb6e9a7fe4c2e628ea19caa1b0200b08.jpg"
      },
      {
        title: "Global MBA in International Business",
        university: "Amity Online",
        duration: "2 Years",
        imageUrl: "https://i.pinimg.com/736x/83/7f/26/837f26b9686a2ea89cfbdbed33898062.jpg"
      }
    ]
  }
];
