// Future Minds Academy - School Constants
// Source: /context/website_content_final.md, future_minds_academy_research.md

export const SCHOOL = {
  name: "Future Minds Academy",
  fullName: "Future Minds Academy of Mandaluyong City, Inc.",
  shortName: "FMA",
  tagline: "Ensuring a strong foundation for every child's educational journey from preschool to primary school",
  headline: "Building Strong Foundations for 20 Years",
  founded: 2005,
  yearsInOperation: 20,
  schoolHead: "Mr. Orlando Francisco Fumera Jr.",
  depedId: "503484047",
} as const;

export const CONTACT = {
  address: {
    line1: "Ground Floor (Unit 100), Ma. Isabel Building",
    line2: "650 Boni Avenue, Barangay Plainview",
    city: "Mandaluyong City",
    region: "Metro Manila",
    country: "Philippines",
    full: "Ground Floor (Unit 100), Ma. Isabel Building, 650 Boni Avenue, Barangay Plainview, Mandaluyong City, Metro Manila",
  },
  landmark: "Near BDO Ligaya branch",
  phone: {
    landline1: "(02) 746-12-91",
    landline2: "(02) 7949-7084",
    mobile: "0919-810-1658",
  },
  coordinates: {
    lat: 14.5761,
    lng: 121.03805,
  },
  social: {
    facebook: "https://www.facebook.com/FUTUREMINDSACADEMY",
    facebookAlt: "https://www.facebook.com/fmamandaluyong",
  },
} as const;

export const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "DepEd", label: "Recognized" },
  { value: "N-G6", label: "Grade Levels" },
  { value: "2,783+", label: "FB Community" },
] as const;

export const PROGRAMS = {
  preschool: {
    name: "Preschool Program",
    levels: ["Nursery", "Kindergarten"],
    description: "Building early foundations through play-based learning",
  },
  elementary: {
    name: "Elementary Program",
    levels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
    description: "Comprehensive K-12 curriculum with values integration",
  },
} as const;

export const CURRICULUM = {
  main: "DepEd K-12 Curriculum",
  transitioning: "MATATAG Curriculum",
  features: [
    "Phonics-based reading instruction",
    "Values integration",
    "Filipino and English instruction",
    "Quarterly grading system",
  ],
} as const;

export const ADMISSION = {
  levels: ["Preschool: Nursery & Kindergarten", "Elementary: Grades 1-6", "Summer Classes: Available"],
  requirements: [
    { item: "Birth Certificate (PSA)", icon: "file-text" },
    { item: "Report Card (SF9) from previous school", icon: "clipboard" },
    { item: "Certificate of Good Moral Character", icon: "award" },
    { item: "2x2 ID photos", icon: "image" },
    { item: "Medical clearance", icon: "heart-pulse" },
  ],
  cta: "Become a part of the FMA Family! Interested applicants are encouraged to visit the school for the application.",
} as const;

export const AFFILIATIONS = [
  {
    name: "CEdNet",
    fullName: "Christian Educators' Network",
    description: "Member school committed to values-based education",
  },
  {
    name: "DepEd NCR",
    fullName: "Department of Education NCR",
    description: "Recognized with annual permit renewal",
  },
] as const;

export const EVENTS = [
  {
    title: "Goldenberg Concert Series XX",
    date: "November 7, 2025",
    description: "FMA students attended PCSO Vocal Ensemble at Malacañang",
    featured: true,
    media: ["Manila Bulletin", "GMA News"],
  },
  {
    title: "20th Commencement & Moving Up Ceremony",
    date: "2025",
    description: "Celebrating 20 years of shaping young minds",
    featured: false,
  },
  {
    title: "CEdNet NATCON 5 Participation",
    date: "2025",
    description: "Living the Virtues, Leading the Future",
    featured: false,
  },
  {
    title: "Nutrition Month Celebration",
    date: "August 2025",
    description: "Annual health and nutrition awareness activities",
    featured: false,
  },
  {
    title: "Earthquake Drill",
    date: "October 3, 2025",
    description: "Pre-school to Elementary safety preparedness",
    featured: false,
  },
] as const;

export const FACULTY = {
  schoolHead: {
    name: "Mr. Orlando Francisco Fumera Jr.",
    position: "School Head / Administrator",
    image: null, // Placeholder - needs school photo
  },
  teachers: [
    { name: "Joylin Valerio", position: "Teacher", image: null },
    { name: "Lenilyn Cea", position: "Teacher", image: null },
  ],
} as const;

export const TIMELINE = [
  { year: 2005, event: "Future Minds Academy founded" },
  { year: 2015, event: "Listed in DepEd Mandaluyong as RECOGNIZED" },
  { year: 2023, event: "Government Permit and Recognition renewed" },
  { year: 2025, event: "20th Anniversary Celebration" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admission", label: "Admission" },
  { href: "/events", label: "Events" },
  { href: "/faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
] as const;

export const SEO = {
  home: {
    title: "Future Minds Academy | Preschool & Elementary in Mandaluyong",
    description: "Future Minds Academy - 20 years of quality education in Mandaluyong. DepEd-recognized preschool and elementary school. Enroll now!",
  },
  about: {
    title: "About FMA | 20 Years of Excellence in Education",
    description: "Learn about Future Minds Academy's 20-year legacy of quality education, CEdNet membership, and values-based learning in Mandaluyong City.",
  },
  academics: {
    title: "Academic Programs | Preschool & Elementary Education",
    description: "Discover FMA's comprehensive preschool and elementary programs following DepEd K-12 and MATATAG curriculum.",
  },
  admission: {
    title: "Enroll at Future Minds Academy | Admission Open",
    description: "Join the FMA Family! Now accepting enrollment for preschool and elementary. Visit us at 650 Boni Avenue, Mandaluyong.",
  },
  events: {
    title: "School Events & News | Future Minds Academy",
    description: "Stay updated with FMA's latest events, activities, and achievements including the Goldenberg Concert at Malacañang.",
  },
  faculty: {
    title: "Our Faculty | Future Minds Academy",
    description: "Meet the dedicated teachers and staff of Future Minds Academy committed to nurturing young minds.",
  },
  contact: {
    title: "Contact Us | Future Minds Academy",
    description: "Get in touch with Future Minds Academy. Visit us at 650 Boni Avenue, Mandaluyong or call (02) 746-12-91.",
  },
} as const;
