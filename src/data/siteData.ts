import {
  FaHandsHelping,
  FaHome,
  FaGraduationCap,
  FaUsers,
  FaHeart,
  FaGlobe,
  FaBullseye,
  FaLightbulb,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa";

export const navLinks = [
  { name: "How We Help", href: "/services" },
  { name: "Impact", href: "/impact" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How We Help", href: "/services" },
  { name: "Impact", href: "/impact" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: FaHome,
    title: "Settlement Support",
    description:
      "Helping newcomers find housing, navigate government services, and settle into their new communities across Canada.",
    details:
      "We provide comprehensive settlement assistance including finding affordable housing, registering for healthcare, opening bank accounts, obtaining important documents, and understanding Canadian systems and processes.",
  },
  {
    icon: FaGraduationCap,
    title: "Education & Training",
    description:
      "Language classes, skills training, and educational guidance to help newcomers build successful careers in Canada.",
    details:
      "Our education programs include English and French language classes at all levels, computer literacy training, professional certification guidance, resume writing workshops, and interview preparation.",
  },
  {
    icon: FaUsers,
    title: "Community Integration",
    description:
      "Cultural events, mentorship programs, and social gatherings that help build meaningful connections.",
    details:
      "We organize cultural celebration events, community potlucks, sports activities, volunteer matching programs, and one-on-one mentorship pairing with established community members.",
  },
  {
    icon: FaHandsHelping,
    title: "Family Services",
    description:
      "Supporting families with childcare resources, parenting support, and youth development programs.",
    details:
      "Our family services include after-school programs for children, parenting workshops, family counselling referrals, youth leadership development, and summer camp programs.",
  },
  {
    icon: FaHeart,
    title: "Health & Wellness",
    description:
      "Connecting newcomers with healthcare resources, mental health support, and wellness programs.",
    details:
      "We help newcomers access healthcare services, provide mental health support groups, organize wellness workshops, and connect individuals with culturally sensitive healthcare providers.",
  },
  {
    icon: FaGlobe,
    title: "Employment Assistance",
    description:
      "Job search support, networking opportunities, and career counselling for professional growth.",
    details:
      "Our employment services include job search workshops, employer networking events, credential recognition assistance, entrepreneurship support, and ongoing career development coaching.",
  },
];

export const stats = [
  { value: 2500, suffix: "+", label: "Families Supported" },
  { value: 150, suffix: "+", label: "Active Volunteers" },
  { value: 35, suffix: "+", label: "Community Programs" },
  { value: 12, suffix: "", label: "Years of Service" },
];

export const testimonials = [
  {
    quote:
      "SRD Foundation helped my family settle into Canada with so much warmth and support. They guided us through everything from finding a home to enrolling our children in school.",
    name: "Priya Sharma",
    role: "Newcomer from India",
  },
  {
    quote:
      "The language classes and job training programs changed my life. Within six months of arriving, I found meaningful employment thanks to SRD Foundation's guidance.",
    name: "Ahmed Hassan",
    role: "Community Member",
  },
  {
    quote:
      "As a volunteer, I've seen firsthand the incredible impact SRD Foundation has on newcomer families. The dedication of the team is truly inspiring.",
    name: "Sarah Mitchell",
    role: "Volunteer",
  },
  {
    quote:
      "The mentorship program connected me with someone who understood my journey. That personal connection made all the difference in feeling at home in Canada.",
    name: "Maria Rodriguez",
    role: "Program Participant",
  },
];

export const values = [
  {
    icon: FaHeart,
    title: "Compassion",
    description:
      "We approach every individual with empathy and understanding, recognizing the unique challenges faced by newcomers to Canada.",
  },
  {
    icon: FaBullseye,
    title: "Commitment",
    description:
      "We are dedicated to providing consistent, reliable support that makes a real difference in the lives of those we serve.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We continuously improve our programs and services to better meet the evolving needs of our diverse community.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Inclusivity",
    description:
      "We welcome everyone regardless of background, creating a safe and supportive environment for all.",
  },
  {
    icon: FaUsers,
    title: "Community",
    description:
      "We believe in the power of community and work to build connections that strengthen the fabric of Canadian society.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    description:
      "We operate with transparency and accountability, ensuring trust in everything we do.",
  },
];

export const teamMembers = [
  {
    name: "Dr. Rajesh Desai",
    role: "Founder & Executive Director",
    bio: "With over 15 years of experience in community development, Dr. Desai founded SRD Foundation to bridge the gap for newcomers in Canada.",
  },
  {
    name: "Anita Patel",
    role: "Director of Programs",
    bio: "Anita oversees all community programs and ensures each initiative aligns with our mission of supporting newcomer families.",
  },
  {
    name: "Michael Chen",
    role: "Community Outreach Manager",
    bio: "Michael builds partnerships with local organizations and government agencies to expand our reach and impact.",
  },
];

export const impactStories = [
  {
    title: "A New Beginning for the Singh Family",
    story:
      "When the Singh family arrived in Canada with just two suitcases and big dreams, SRD Foundation was there to welcome them. Within three months, they had a home, the children were enrolled in school, and both parents were attending language classes. Today, they are thriving members of their community.",
  },
  {
    title: "From Newcomer to Community Leader",
    story:
      "Maria came to Canada as a refugee with limited English. Through our language programs and mentorship, she gained confidence and skills. Five years later, she now volunteers with SRD Foundation, helping other newcomers navigate their journey — a beautiful full-circle story.",
  },
  {
    title: "Building Bridges Through Culture",
    story:
      "Our annual cultural festival brings together over 500 community members from dozens of different backgrounds. What started as a small gathering has become one of the most anticipated events in the community, showcasing the rich diversity that makes Canada special.",
  },
];

export const donationInfo = {
  title: "Make a Difference Today",
  description:
    "Your generous contribution helps us continue providing essential services to newcomer families across Canada. Every dollar makes a direct impact on someone's journey to a better life.",
  impacts: [
    {
      amount: "$25",
      description: "Provides school supplies for one newcomer child",
    },
    {
      amount: "$50",
      description: "Funds one month of language classes for a newcomer",
    },
    {
      amount: "$100",
      description: "Supports a family's first-week settlement essentials",
    },
    {
      amount: "$250",
      description: "Sponsors a newcomer through our mentorship program",
    },
  ],
  methods: [
    "Online donation through our website",
    "E-Transfer to donate@srdfoundation.ca",
    "Cheque payable to SRD Foundation",
    "Monthly recurring donation program",
  ],
};

export const contactInfo = {
  email: "info@srdfoundation.ca",
  phone: "+1 (647) 247-7735",
  address: "Address - Suite 600, 3300 Highway 7 West, Vaughan, ON, L4L 1A6",
  socialLinks: {
    facebook: "https://facebook.com/srdfoundation",
    twitter: "https://twitter.com/srdfoundation",
    instagram: "https://instagram.com/srdfoundation",
    linkedin: "https://linkedin.com/company/srdfoundation",
  },
};

export const siteMetadata = {
  title: "SRD Foundation - Empowering Newcomers in Canada",
  description:
    "SRD Foundation is a Canadian non-profit dedicated to helping newcomers settle, integrate, and thrive in their new communities through comprehensive support services.",
  url: "https://srdfoundation.ca",
};
