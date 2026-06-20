export interface CollegeReview {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalReviews: string;
  ratingDistribution: {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
  };
  location: string;
  coursesCount: string;
  entranceExam: string;
  estd: string;
    fees: string;
  description: string;
}

export const collegeReviews: CollegeReview[] = [
  {
    id: "lpu-online",
    name: "LPU Online",
    image: "https://happenings.lpu.in/wp-content/uploads/2025/07/lpu-admissions-for-2025-26-academic-session.jpg",
    rating: 4.2,
    totalReviews: "8,134",
    ratingDistribution: {
      fiveStar: 76,
      fourStar: 15,
      threeStar: 5,
      twoStar: 2,
      oneStar: 2
    },
    location: "Jalandhar, Punjab",
    coursesCount: "90+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2005",
    fees: "₹1,61,600",
    description: "Lovely Professional University offers diverse online programs with strong industry connections and a highly integrated learning management system."
  },
  {
    id: "amity-online",
    name: "Amity University Online",
    image: "https://images.shiksha.com/mediadata/images/articles/1663141472phpCZG1Ea.jpeg",
    rating: 4.4,
    totalReviews: "12,450",
    ratingDistribution: {
      fiveStar: 80,
      fourStar: 12,
      threeStar: 4,
      twoStar: 2,
      oneStar: 2
    },
    location: "Noida, Uttar Pradesh",
    coursesCount: "50+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2005",
    fees: "₹2,25,000",
    description: "Amity University Online is highly acclaimed for its global faculty, rigorous academic curriculums, and excellent career support services."
  },
  {
    id: "nmims-online",
    name: "NMIMS Global Access",
    image: "https://www.onlineuniversitiess.com/media/1275/nmims-online-banner.webp",
    rating: 4.5,
    totalReviews: "15,820",
    ratingDistribution: {
      fiveStar: 82,
      fourStar: 11,
      threeStar: 4,
      twoStar: 2,
      oneStar: 1
    },
    location: "Mumbai, Maharashtra",
    coursesCount: "40+ Courses",
    entranceExam: "Merit Based",
    estd: "Estd 1981",
    fees: "₹1,96,000",
    description: "NMIMS Global Access is a premium destination for executive programs, celebrated for its corporate acceptability and exceptional case-study based curriculum."
  },
  {
    id: "dy-patil-online",
    name: "DY Patil University Online",
    image: "https://cache.careers360.mobi/media/presets/1200X675/article_images/2025/1/17/Dr_DY_Patil_University_Admission_Open_for_2025_Apply_Now.jpg",
    rating: 4.1,
    totalReviews: "6,940",
    ratingDistribution: {
      fiveStar: 72,
      fourStar: 16,
      threeStar: 6,
      twoStar: 3,
      oneStar: 3
    },
    location: "Navi Mumbai, Maharashtra",
    coursesCount: "30+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2003",
    fees: "₹1,89,400",
    description: "DY Patil Online provides high-quality business and healthcare administration courses designed to fit the schedules of working professionals."
  },
  {
    id: "manipal-online",
    name: "Manipal University Online",
    image: "https://images.indianexpress.com/2022/03/manipal-lead-1.jpg",
    rating: 4.3,
    totalReviews: "9,210",
    ratingDistribution: {
      fiveStar: 78,
      fourStar: 13,
      threeStar: 5,
      twoStar: 2,
      oneStar: 2
    },
    location: "Jaipur, Rajasthan",
    coursesCount: "25+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2011",
    fees: "₹1,80,000",
    description: "Online Manipal brings top-tier UGC-entitled degrees with live classes, expert webinars, and a robust job placement program with global reach."
  },
  {
    id: "shoolini-online",
    name: "Shoolini University Online",
    image: "https://shooliniuniversity.com/media/1733911556-THE-Online-Learning-Rankings-2024.jpg",
    rating: 4.0,
    totalReviews: "4,510",
    ratingDistribution: {
      fiveStar: 68,
      fourStar: 18,
      threeStar: 8,
      twoStar: 3,
      oneStar: 3
    },
    location: "Solan, Himachal Pradesh",
    coursesCount: "20+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2009",
    fees: "₹1,58,000",
    description: "Shoolini University is widely recognized for its research-focused business curriculum and scenic campus legacy, now available online."
  },
  {
    id: "parul-online",
    name: "Parul University Online",
    image: "https://distancembahub.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-11.51.33-AM.jpeg",
    rating: 3.9,
    totalReviews: "3,890",
    ratingDistribution: {
      fiveStar: 65,
      fourStar: 20,
      threeStar: 9,
      twoStar: 3,
      oneStar: 3
    },
    location: "Vadodara, Gujarat",
    coursesCount: "35+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2015",
    fees: "₹1,50,000",
    description: "Parul University Online is highly popular for its affordable pricing packages, comprehensive study material, and active digital student community."
  },
  {
    id: "srm-online",
    name: "SRM University Online",
    image: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fweb_cms_content%2Fsrmbanner_6a172baa13%2Fsrmbanner_6a172baa13.webp&w=3840&q=75",
    rating: 4.2,
    totalReviews: "7,560",
    ratingDistribution: {
      fiveStar: 75,
      fourStar: 15,
      threeStar: 6,
      twoStar: 2,
      oneStar: 2
    },
    location: "Chennai, Tamil Nadu",
    coursesCount: "45+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 1985",
    fees: "₹1,89,000",
    description: "SRM Online provides globally benchmarked business and technical education with flexible learning paths designed for modern executive learners."
  },
  {
    id: "iim-indore",
    name: "IIM Indore (Executive)",
    image: "https://amba.ams3.cdn.digitaloceanspaces.com/content/AA3B37B069CD78B5A49E08286B2E0AB3/4571-2048.webp",
    rating: 4.7,
    totalReviews: "2,150",
    ratingDistribution: {
      fiveStar: 88,
      fourStar: 8,
      threeStar: 2,
      twoStar: 1,
      oneStar: 1
    },
    location: "Indore, Madhya Pradesh",
    coursesCount: "12+ Courses",
    entranceExam: "Written Test/Interview",
    estd: "Estd 1996",
    fees: "₹26,76,800",
    description: "IIM Indore offers premier online executive certificates and post-graduate programs with campus immersion and elite peer networking."
  },
  {
    id: "iim-kozhikode",
    name: "IIM Kozhikode (Executive)",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1406189210Campus-2.jpg",
    rating: 4.8,
    totalReviews: "3,420",
    ratingDistribution: {
      fiveStar: 90,
      fourStar: 7,
      threeStar: 2,
      twoStar: 1,
      oneStar: 0
    },
    location: "Kozhikode, Kerala",
    coursesCount: "15+ Courses",
    entranceExam: "Profile Evaluation",
    estd: "Estd 1996",
    fees: "₹13,22,000",
    description: "IIM Kozhikode is internationally recognized for its highly ranked online management credentials, rigorous selection, and high ROI."
  },
  {
    id: "imt-ghaziabad",
    name: "IMT Ghaziabad (CDL)",
    image: "https://www.imt.edu/wp-content/uploads/2018/05/IMT-homepage-bg1.jpg",
    rating: 4.3,
    totalReviews: "5,820",
    ratingDistribution: {
      fiveStar: 77,
      fourStar: 14,
      threeStar: 5,
      twoStar: 2,
      oneStar: 2
    },
    location: "Ghaziabad, Uttar Pradesh",
    coursesCount: "10+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 1980",
    fees: "₹1,60,000",
    description: "IMT CDL Ghaziabad is one of India's oldest and most respected distance learning programs, providing massive corporate networking and strong alumni support."
  },
  {
    id: "op-jindal",
    name: "OP Jindal Global University",
    image: "https://images.indianexpress.com/2021/07/JGU-Campus.jpg",
    rating: 4.4,
    totalReviews: "1,980",
    ratingDistribution: {
      fiveStar: 81,
      fourStar: 12,
      threeStar: 4,
      twoStar: 2,
      oneStar: 1
    },
    location: "Sonipat, Haryana",
    coursesCount: "8+ Courses",
    entranceExam: "Interview Based",
    estd: "Estd 2009",
    fees: "₹1,75,000",
    description: "OP Jindal Global University offers top-tier online management courses with heavily globalized curriculum structures and world-renowned faculty."
  },
  {
    id: "chandigarh-university",
    name: "Chandigarh University Online",
    image: "https://collegebandhu.com/wp-content/uploads/2025/09/Chandigarh-University-scaled.webp",
    rating: 4.7,
    totalReviews: "8,720",
    ratingDistribution: {
      fiveStar: 85,
      fourStar: 10,
      threeStar: 3,
      twoStar: 1,
      oneStar: 1
    },
    location: "Mohali, Punjab",
    coursesCount: "26+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2012",
    fees: "₹1,65,000",
    description: "Chandigarh University Online offers a UGC-entitled MBA with NAAC A+ accreditation, live weekend classes, and strong placement support with 300+ hiring partners."
  },
  {
    id: "jain-university",
    name: "Jain University Online",
    image: "https://distanceeducationschool.com/wp-content/uploads/2024/07/jain-online-university-page.png",
    rating: 4.6,
    totalReviews: "6,766",
    ratingDistribution: {
      fiveStar: 82,
      fourStar: 12,
      threeStar: 4,
      twoStar: 1,
      oneStar: 1
    },
    location: "Bangalore, Karnataka",
    coursesCount: "20+ Courses",
    entranceExam: "Merit Based",
    estd: "Estd 1990",
    fees: "₹1,96,000",
    description: "Jain University Online provides UGC-entitled MBA programs with 20+ specialisations, NAAC A++ accreditation, and flexible learning options for working professionals."
  },
  {
    id: "upes-online",
    name: "UPES Online",
    image: "https://static.boostmytalent.com/img/univ/upes-online-mba-admission.webp",
    rating: 4.3,
    totalReviews: "2,140",
    ratingDistribution: {
      fiveStar: 75,
      fourStar: 16,
      threeStar: 5,
      twoStar: 2,
      oneStar: 2
    },
    location: "Dehradun, Uttarakhand",
    coursesCount: "4+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2003",
    fees: "₹1,75,000",
    description: "UPES Online delivers UGC-entitled MBA programs with specialisations in Oil & Gas, Digital Business, and Supply Chain — backed by strong industry connections."
  },
  {
    id: "symbiosis-scdl",
    name: "Symbiosis SCDL",
    image: "https://staticprintenglish.theprint.in/wp-content/uploads/2021/11/symbiosis-centre-for-distance-learning-a-modern-education-hub.jpg",
    rating: 4.0,
    totalReviews: "4,500",
    ratingDistribution: {
      fiveStar: 68,
      fourStar: 20,
      threeStar: 7,
      twoStar: 3,
      oneStar: 2
    },
    location: "Pune, Maharashtra",
    coursesCount: "10+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 2001",
    fees: "₹74,000",
    description: "Symbiosis Centre for Distance Learning is one of India's most respected distance education institutions, offering AICTE-approved MBA-equivalent programs with NAAC A++ heritage."
  },
  {
    id: "christ-university",
    name: "Christ University Online",
    image: "https://images.shiksha.com/mediadata/images/1746504440phpnMwCvR.jpeg",
    rating: 4.1,
    totalReviews: "3,250",
    ratingDistribution: {
      fiveStar: 70,
      fourStar: 18,
      threeStar: 7,
      twoStar: 3,
      oneStar: 2
    },
    location: "Bangalore, Karnataka",
    coursesCount: "5+ Courses",
    entranceExam: "Merit Based",
    estd: "Estd 1969",
    fees: "₹2,50,000",
    description: "Christ University Online brings its 55+ years of academic excellence to online MBA programs with NAAC A+ accreditation, live interactive sessions, and global faculty."
  },
  {
    id: "ignou",
    name: "IGNOU",
    image: "https://www.ignou.ac.in/assets/img/ignouPic.jpg",
    rating: 4.0,
    totalReviews: "25,000",
    ratingDistribution: {
      fiveStar: 65,
      fourStar: 22,
      threeStar: 8,
      twoStar: 3,
      oneStar: 2
    },
    location: "New Delhi, Delhi",
    coursesCount: "200+ Courses",
    entranceExam: "Open Admission",
    estd: "Estd 1985",
    fees: "₹66,000",
    description: "IGNOU is India's largest open university offering an affordable, NAAC A++ accredited online MBA with flexible duration and nationwide recognition for government and corporate jobs."
  },
  {
    id: "annamalai-university",
    name: "Annamalai University",
    image: "https://annamalaiuniversity.ac.in/assets/img/slideshow/2.jpg",
    rating: 3.8,
    totalReviews: "4,350",
    ratingDistribution: {
      fiveStar: 62,
      fourStar: 22,
      threeStar: 10,
      twoStar: 4,
      oneStar: 2
    },
    location: "Chidambaram, Tamil Nadu",
    coursesCount: "30+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 1929",
    fees: "₹32,000",
    description: "Annamalai University is one of India's largest and oldest distance education providers, offering affordable UGC-entitled MBA programs with flexible learning options."
  },
  {
    id: "sikkim-manipal",
    name: "Sikkim Manipal University",
    image: "https://hikeeducation.com/wp-content/uploads/2026/01/SMU-M-1024x441.webp",
    rating: 4.0,
    totalReviews: "3,800",
    ratingDistribution: {
      fiveStar: 68,
      fourStar: 19,
      threeStar: 8,
      twoStar: 3,
      oneStar: 2
    },
    location: "Gangtok, Sikkim",
    coursesCount: "15+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 1995",
    fees: "₹1,20,000",
    description: "Sikkim Manipal University (SMU) offers UGC-DEB approved online MBA programs with flexible EMI options, live online classes, and dedicated student support services."
  },
  {
    id: "amrita-ahead",
    name: "Amrita AHEAD",
    image: "https://distanceeducationschool.com/wp-content/uploads/2024/08/amrita-university-page.webp",
    rating: 4.4,
    totalReviews: "2,890",
    ratingDistribution: {
      fiveStar: 78,
      fourStar: 14,
      threeStar: 5,
      twoStar: 2,
      oneStar: 1
    },
    location: "Coimbatore, Tamil Nadu",
    coursesCount: "10+ Courses",
    entranceExam: "Merit Based",
    estd: "Estd 1994",
    fees: "₹1,76,000",
    description: "Amrita AHEAD offers NAAC A++ accredited online MBA programs with UGC entitlement, world-class faculty, and a curriculum ranked among top 10 in NIRF."
  },
  {
    id: "bharathidasan-university",
    name: "Bharathidasan University",
    image: "https://www.bduedu.in/_next/image?url=https%3A%2F%2Fpages.bduonline.in%2Fabout%2520us%2520image.png&w=750&q=75",
    rating: 3.9,
    totalReviews: "2,100",
    ratingDistribution: {
      fiveStar: 64,
      fourStar: 21,
      threeStar: 9,
      twoStar: 4,
      oneStar: 2
    },
    location: "Tiruchirappalli, Tamil Nadu",
    coursesCount: "20+ Courses",
    entranceExam: "No Entrance Exam",
    estd: "Estd 1982",
    fees: "₹40,000",
    description: "Bharathidasan University offers affordable UGC-DEB approved online MBA programs with NAAC A++ accreditation and a strong focus on research-based management education."
  }
];

export function getCollegeBySlug(slug: string): CollegeReview | undefined {
  return collegeReviews.find((c) => c.id === slug);
}
