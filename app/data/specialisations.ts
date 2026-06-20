export interface Specialisation {
  slug: string;
  title: string;
  salaryRange: string;
  colorTheme: 'rose' | 'emerald' | 'violet' | 'blue' | 'amber' | 'teal';
  iconName: 'Users' | 'Globe' | 'TrendingUp' | 'Heart' | 'LineChart' | 'Settings' | 'Laptop' | 'BarChart3' | 'Cpu' | 'Building' | 'ClipboardList' | 'Megaphone';
  duration: string;
  universitiesCount: number;
  placementRate: string;
  overview: string;
  whyChoose: string;
  eligibility: string;
  entranceExam: string;
  emiAvailable: boolean;
  feesRange: string;
  hiringCompanies: string[];
}

export const specialisations: Specialisation[] = [
  {
    slug: "hr-management",
    title: "HR Management",
    salaryRange: "₹6-15 LPA",
    colorTheme: "rose",
    iconName: "Users",
    duration: "2 Years",
    universitiesCount: 15,
    placementRate: "85%",
    overview: "Designed for individuals looking to lead people operations, human resource planning, talent acquisition, and organizational development. This specialization focuses on employee relations, strategic human resource management, and workplace wellness programs in modern corporate spaces.",
    whyChoose: "Human Resource Management is the backbone of any organization. As organizations adapt to hybrid work environments and digital transformation, skilled HR managers are in high demand to design employee-centric strategies, resolve conflicts, and drive corporate culture.",
    eligibility: "Bachelor's degree in any stream from a recognized university, minimal corporate experience preferred.",
    entranceExam: "CAT, MAT, XAT, GMAT or University Entrance Test",
    emiAvailable: true,
    feesRange: "₹1.0 - 1.5 Lakhs",
    hiringCompanies: ["Deloitte", "TCS", "Accenture", "Infosys", "Cognizant"]
  },
  {
    slug: "international-business-management",
    title: "International Business Management",
    salaryRange: "₹8-18 LPA",
    colorTheme: "rose",
    iconName: "Globe",
    duration: "2 Years",
    universitiesCount: 13,
    placementRate: "88%",
    overview: "Designed for working professionals ready to go global and recent graduates with cross-cultural ambitions, this Online MBA covers international markets, foreign trade policies, global finance, and cultural intelligence. Interactive webinars and global faculty bring international perspectives straight to your device—offering professionals critical tools for international advancement, and giving new entrants insight and adaptability for global business landscapes.",
    whyChoose: "International Business Management prepares learners to build careers without borders. Professionals can leverage the specialization to pivot into cross-border business roles or expand their global vision, while graduates emerge workplace-ready for multinational teams or companies. The program's flexibility and networking opportunities allow each learner to benefit at every career stage.",
    eligibility: "Bachelor's degree (any stream), some technical knowledge preferred",
    entranceExam: "CAT, MAT, XAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.2 - 1.7 Lakhs",
    hiringCompanies: ["HSBC", "Deloitte", "Amazon", "HDFC Bank", "Mahindra"]
  },
  {
    slug: "marketing-and-sales",
    title: "Marketing and Sales",
    salaryRange: "₹7-20 LPA",
    colorTheme: "rose",
    iconName: "TrendingUp",
    duration: "2 Years",
    universitiesCount: 18,
    placementRate: "90%",
    overview: "Focuses on market research, brand building, sales strategy, and consumer behavior. This specialization is built to equip learners with standard marketing theories alongside tactical sales negotiation techniques to drive revenue growth in fast-paced retail, B2B, and service sectors.",
    whyChoose: "Businesses succeed or fail based on their ability to market and sell. A specialization in Marketing and Sales opens doors to key leadership positions like Brand Manager, Sales Director, and Business Development Manager across global markets.",
    eligibility: "Bachelor's degree (any stream) from a recognized university.",
    entranceExam: "CAT, MAT, XAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.1 - 1.6 Lakhs",
    hiringCompanies: ["Unilever", "P&G", "Coca-Cola", "PepsiCo", "Nestle"]
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management",
    salaryRange: "₹7-16 LPA",
    colorTheme: "emerald",
    iconName: "Heart",
    duration: "2 Years",
    universitiesCount: 10,
    placementRate: "82%",
    overview: "Prepares candidates to manage operations, logistics, health informatics, and corporate management in hospitals, pharmaceutical companies, healthcare consulting organizations, and wellness clinics.",
    whyChoose: "The global healthcare industry is growing rapidly, requiring management professionals who understand medical ethics, clinical workflows, and healthcare regulations to optimize operational efficiency and patient care quality.",
    eligibility: "Bachelor's degree in medical, pharmaceutical, life sciences or any other stream.",
    entranceExam: "CAT, MAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.3 - 1.8 Lakhs",
    hiringCompanies: ["Apollo Hospitals", "Max Healthcare", "Pfizer", "Cipla", "Fortis"]
  },
  {
    slug: "data-science",
    title: "Data Science",
    salaryRange: "₹10-25 LPA",
    colorTheme: "violet",
    iconName: "LineChart",
    duration: "2 Years",
    universitiesCount: 12,
    placementRate: "92%",
    overview: "Combines business analytics, machine learning algorithms, database management, and predictive modeling. Designed to bridge the gap between technical data scientists and business decisions.",
    whyChoose: "Data is the new oil. Enterprises require leaders who can extract, analyze, and interpret large data arrays to make strategic business recommendations, making this one of the highest-paying MBA paths.",
    eligibility: "Bachelor's degree with Mathematics, Statistics, or Engineering background preferred.",
    entranceExam: "CAT, GMAT, GRE",
    emiAvailable: true,
    feesRange: "₹1.5 - 2.2 Lakhs",
    hiringCompanies: ["Google", "Microsoft", "Meta", "IBM", "Fractal Analytics"]
  },
  {
    slug: "operations-management",
    title: "Operations Management",
    salaryRange: "₹8-20 LPA",
    colorTheme: "blue",
    iconName: "Settings",
    duration: "2 Years",
    universitiesCount: 14,
    placementRate: "89%",
    overview: "Concentrates on supply chain logistics, lean management, production planning, and quality control. Ideal for individuals looking to streamline business processes and improve organizational capacity.",
    whyChoose: "Effective operations are critical to product and service delivery. Operation managers leverage process optimization methodologies to eliminate wastes, improve speed, and ensure high operational yields.",
    eligibility: "Bachelor's degree in engineering, commerce, science or related stream.",
    entranceExam: "CAT, MAT, XAT",
    emiAvailable: true,
    feesRange: "₹1.1 - 1.6 Lakhs",
    hiringCompanies: ["Amazon", "DHL", "FedEx", "Reliance Industries", "Tata Motors"]
  },
  {
    slug: "it-management",
    title: "IT Management",
    salaryRange: "₹9-22 LPA",
    colorTheme: "blue",
    iconName: "Laptop",
    duration: "2 Years",
    universitiesCount: 16,
    placementRate: "89%",
    overview: "Focuses on IT governance, software project delivery, cybersecurity policy, and enterprise architecture. Connects technology engineering with core corporate management methods.",
    whyChoose: "As global business relies heavily on software infrastructures, leaders who can align IT roadmaps with business goals are key drivers of organizational transformation and digital strategy.",
    eligibility: "Bachelor's degree (BCA, BTech, BSc IT, or related degree preferred).",
    entranceExam: "CAT, MAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.2 - 1.8 Lakhs",
    hiringCompanies: ["Wipro", "TCS", "Tech Mahindra", "Infosys", "Capgemini"]
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    salaryRange: "₹9-22 LPA",
    colorTheme: "amber",
    iconName: "BarChart3",
    duration: "2 Years",
    universitiesCount: 15,
    placementRate: "91%",
    overview: "Equips students with analytical tools, database systems (SQL), statistical models, and data visualization platforms (Tableau, PowerBI) to interpret customer data and business metrics.",
    whyChoose: "Business Analytics helps companies make decisions based on historical patterns and statistics. This field sits at the intersection of business, marketing, and data systems.",
    eligibility: "Bachelor's degree in any stream with standard quantitative background.",
    entranceExam: "CAT, MAT, XAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.3 - 1.9 Lakhs",
    hiringCompanies: ["Deloitte", "EY", "KPMG", "PwC", "Mu Sigma"]
  },
  {
    slug: "ai-and-machine-learning",
    title: "AI and Machine Learning (Dual)",
    salaryRange: "₹12-30 LPA",
    colorTheme: "rose",
    iconName: "Cpu",
    duration: "2 Years",
    universitiesCount: 8,
    placementRate: "94%",
    overview: "An advanced, forward-looking curriculum covering neural networks, deep learning models, natural language processing, and AI ethics, alongside strategic corporate scaling frameworks.",
    whyChoose: "Artificial Intelligence is rewriting industrial operations. Managers specializing in AI & ML will lead tech deployment, product innovations, and R&D pipelines at the world's leading tech companies.",
    eligibility: "Bachelor's degree in computer science, mathematics, or statistics preferred.",
    entranceExam: "CAT, GMAT, GRE",
    emiAvailable: true,
    feesRange: "₹1.6 - 2.5 Lakhs",
    hiringCompanies: ["OpenAI", "Nvidia", "Adobe", "Intel", "Salesforce"]
  },
  {
    slug: "finance-management",
    title: "Finance Management",
    salaryRange: "₹8-22 LPA",
    colorTheme: "emerald",
    iconName: "Building",
    duration: "2 Years",
    universitiesCount: 17,
    placementRate: "90%",
    overview: "Covers corporate finance, investment banking, portfolio management, risk evaluation, and financial auditing. Prepares managers for CFO tracks and capital markets.",
    whyChoose: "Finance is the lifeblood of business. A finance specialization equips you with global accounting knowledge, market risk formulas, and investment logic to steer corporate wealth.",
    eligibility: "Bachelor's degree in commerce, business administration, science, or engineering.",
    entranceExam: "CAT, MAT, XAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.1 - 1.7 Lakhs",
    hiringCompanies: ["Goldman Sachs", "J.P. Morgan", "HDFC Bank", "ICICI Bank", "Citi"]
  },
  {
    slug: "project-management",
    title: "Project Management",
    salaryRange: "₹8-21 LPA",
    colorTheme: "blue",
    iconName: "ClipboardList",
    duration: "2 Years",
    universitiesCount: 12,
    placementRate: "86%",
    overview: "Designed around agile frameworks, scrum leadership, project budget controls, resource scheduling, and risk mitigation methodologies. Aligns closely with PMI certifications.",
    whyChoose: "Successful initiatives rely on project delivery. Certified project managers who can orchestrate cross-functional teams to finish projects on schedule and budget are highly sought after.",
    eligibility: "Bachelor's degree in any discipline from a recognized university.",
    entranceExam: "CAT, MAT, XAT",
    emiAvailable: true,
    feesRange: "₹1.0 - 1.5 Lakhs",
    hiringCompanies: ["L&T", "Siemens", "Honeywell", "General Electric", "ABB"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    salaryRange: "₹6-18 LPA",
    colorTheme: "rose",
    iconName: "Megaphone",
    duration: "2 Years",
    universitiesCount: 14,
    placementRate: "88%",
    overview: "Provides deep knowledge of SEO, search engine marketing, social media algorithms, content pipelines, email marketing strategies, and conversion analytics.",
    whyChoose: "Modern marketing is fundamentally digital. Brands spend heavily on online acquisition channels, creating a massive demand for executives who can design profitable digital funnels.",
    eligibility: "Bachelor's degree in any stream.",
    entranceExam: "CAT, MAT, XAT, GMAT",
    emiAvailable: true,
    feesRange: "₹1.0 - 1.5 Lakhs",
    hiringCompanies: ["Meta", "Amazon", "GroupM", "Dentsu", "Publicis Groupe"]
  }
];

export function getSpecialisationBySlug(slug: string): Specialisation | undefined {
  return specialisations.find(s => s.slug === slug);
}
