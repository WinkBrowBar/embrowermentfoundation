import umbreenImg from "@/assets/images/umbreen-sheikh.jpg";
import andlibImg from "@/assets/images/andlib-mohsin.jpg";
import lillianImg from "@/assets/images/lillian-mera.jpg";

/**
 * All website copy follows "Embrowerment Foundation Website Content 2.docx".
 * Edit wording here; the pages render from this file.
 */

export const CONTACT_EMAIL = "info@embrowermentfoundation.org";
export const EIN = "42-2984837";

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/leadership", label: "Leadership" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export const progressionSteps = [
  "Confidence",
  "Knowledge",
  "Connection",
  "Opportunity",
  "Empowerment",
];

/* ---------------- Contact reasons ---------------- */

export const contactReasons = [
  {
    id: "general",
    label: "General Inquiry",
    title: "General Inquiries",
    text: "Questions about Embrowerment Foundation or general organizational information.",
  },
  {
    id: "program",
    label: "Program / Participant Inquiry",
    title: "Program & Participant Inquiries",
    text: "Questions about eligibility, participation, or available programs.",
    note: "This contact form is for initial inquiries and is not a program application.",
  },
  {
    id: "partnership",
    label: "Partnership Inquiry",
    title: "Partnership Inquiries",
    text: "For organizations interested in collaboration.",
  },
  {
    id: "volunteer",
    label: "Volunteer & Mentorship",
    title: "Volunteer & Mentorship",
    text: "For questions about volunteering, mentoring, or sharing professional expertise.",
  },
  {
    id: "media",
    label: "Media / Speaking",
    title: "Media & Speaking Inquiries",
    text: "For interviews, media requests, speaking invitations, or related inquiries.",
  },
  {
    id: "giving",
    label: "Giving & Sponsorship",
    title: "Giving & Sponsorship",
    text: "Questions about donations, sponsorship, employer matching, or fundraising support.",
  },
] as const;

export type ContactReasonId = (typeof contactReasons)[number]["id"];

/* ---------------- Donations ---------------- */

export const donationAmounts = [10, 20, 30, 40];

export const donationFrequencies = [
  { label: "One-Time", period: "donation" },
  { label: "Monthly", period: "month" },
  { label: "Quarterly", period: "quarter" },
  { label: "Annual", period: "year" },
] as const;

export const donationDesignations = ["Where It Is Needed Most", "The First 20 Initiative"];

/* ---------------- Programs ---------------- */

export type Initiative = {
  id: string;
  area: string;
  areaSummary: string;
  name: string;
  shortName: string;
  tagline: string;
  /** Home page "Featured Initiatives" copy */
  homeCopy: string[];
  /** Programs page copy */
  lead?: string;
  body: string[];
  listTitle: string;
  list: { title?: string; text: string }[];
  goal: { value: string; label: string; note: string };
  exploreLabel: string;
};

export const initiatives: Initiative[] = [
  {
    id: "first-20",
    area: "Confidence & Restorative Wellness",
    areaSummary:
      "Restorative and confidence-building support for individuals experiencing illness, hardship, transition, or appearance-related changes.",
    name: "The First 20 Initiative",
    shortName: "The First 20",
    tagline: "20 People. $10,000. A New Beginning.",
    homeCopy: [
      "The First 20 Initiative provides complimentary semi-permanent brow restoration services to 20 eligible individuals experiencing brow hair loss following cancer treatment or other qualifying circumstances.",
      "Changes in appearance can affect more than how someone looks. They can influence confidence, identity, and how someone feels moving through everyday life.",
      "For some participants, seeing familiar brows again may represent something deeply personal:",
    ],
    body: [
      "Changes in appearance can affect confidence, identity, self-esteem, and how someone feels moving through everyday life.",
      "The First 20 Initiative provides complimentary semi-permanent brow restoration services to eligible individuals experiencing brow hair loss following cancer treatment or other qualifying circumstances.",
      "For some participants, seeing familiar brows again can represent something deeply personal—a moment of recognition and renewed confidence.",
    ],
    listTitle: "What Participants Receive",
    list: [
      { text: "Complimentary semi-permanent brow restoration services" },
      { text: "Individualized restorative support" },
      { text: "Confidence-centered care focused on dignity and well-being" },
      { text: "Connections to relevant supportive resources where appropriate" },
    ],
    goal: {
      value: "20",
      label: "People Served",
      note: "$10,000 restorative-confidence initiative",
    },
    exploreLabel: "Learn About The First 20",
  },
  {
    id: "rise",
    area: "Education & Opportunity",
    areaSummary:
      "Scholarships, training, certifications, and learning experiences that support personal and professional advancement.",
    name: "The Rise Initiative",
    shortName: "Rise",
    tagline: "Learning Today. Possibility Tomorrow.",
    homeCopy: [
      "Potential is everywhere. Opportunity is not.",
      "The Rise Initiative expands access to scholarships, professional training, certifications, workshops, and practical skill-building that help individuals strengthen their capabilities and future choices.",
    ],
    lead: "Potential is everywhere. Opportunity is not.",
    body: [
      "The Rise Initiative helps reduce barriers to education, training, and practical skill development so individuals can strengthen their capabilities and expand their future choices.",
    ],
    listTitle: "How We Support Learning",
    list: [
      {
        title: "Education Access",
        text: "Scholarships and educational assistance that help reduce financial barriers to learning.",
      },
      {
        title: "Training & Credentials",
        text: "Professional training, vocational pathways, certifications, and other opportunities that strengthen qualifications.",
      },
      {
        title: "Skills & Learning",
        text: "Workshops and practical education in areas such as digital skills, financial capability, entrepreneurship, and personal development.",
      },
    ],
    goal: {
      value: "2,500",
      label: "Learning & Training Opportunities",
      note: "Delivered or facilitated through scholarships, training, certifications, workshops, and skill-building activities",
    },
    exploreLabel: "Explore The Rise Initiative",
  },
  {
    id: "lead-forward",
    area: "Mentorship & Leadership",
    areaSummary:
      "Connections with professionals, entrepreneurs, educators, and community leaders who provide guidance, perspective, and encouragement.",
    name: "The Lead Forward Initiative",
    shortName: "Lead Forward",
    tagline: "Guidance That Moves People Forward.",
    homeCopy: [
      "Lead Forward connects participants with professionals, entrepreneurs, educators, and community leaders who can provide mentorship, practical guidance, encouragement, and professional insight.",
      "These relationships help participants strengthen confidence, expand their networks, navigate important decisions, and develop their leadership potential.",
    ],
    lead: "Opportunity often begins with access to someone willing to share what they know.",
    body: [
      "The Lead Forward Initiative connects participants with professionals, entrepreneurs, educators, mentors, and community leaders who can provide practical guidance, perspective, encouragement, and professional insight.",
    ],
    listTitle: "How Lead Forward Works",
    list: [
      {
        title: "Mentorship",
        text: "Individual and group mentoring that connects participants with experience, perspective, and practical guidance.",
      },
      {
        title: "Leadership Development",
        text: "Activities that strengthen confidence, communication, decision-making, and leadership potential.",
      },
      {
        title: "Professional Connection",
        text: "Career and entrepreneurship guidance, networking, professional exposure, and opportunities to learn from people across different fields.",
      },
    ],
    goal: {
      value: "2,200",
      label: "Mentorship, Leadership & Professional-Development Engagements",
      note: "Including mentoring interactions, group sessions, leadership activities, career conversations, professional exposure, and related participation",
    },
    exploreLabel: "Explore Lead Forward",
  },
  {
    id: "thrive",
    area: "Career & Economic Empowerment",
    areaSummary:
      "Career readiness, entrepreneurship, professional development, financial capability, and skills that strengthen economic independence.",
    name: "The Thrive Initiative",
    shortName: "Thrive",
    tagline: "Skills. Stability. Independence.",
    homeCopy: [
      "The Thrive Initiative supports career readiness, entrepreneurship, professional development, workplace skills, and financial capability.",
      "Participants build practical tools and connections they can use to pursue employment, professional advancement, business opportunities, and greater economic independence.",
    ],
    lead: "Economic opportunity can create more than income. It can create greater stability, choice, confidence, and control over the future.",
    body: [
      "The Thrive Initiative helps individuals strengthen the practical skills, financial capability, and professional connections they can use to pursue employment, professional advancement, entrepreneurship, and greater economic independence.",
    ],
    listTitle: "Thrive Program Tracks",
    list: [
      {
        title: "Career Readiness",
        text: "Career exploration, resume development, interview preparation, workplace readiness, and professional skills.",
      },
      {
        title: "Entrepreneurship",
        text: "Entrepreneurial education, small-business guidance, business skills, and connections to professional resources.",
      },
      {
        title: "Financial Capability",
        text: "Practical financial education that supports informed decision-making and greater economic stability.",
      },
      {
        title: "Digital & Professional Skills",
        text: "Skill-building relevant to education, employment, entrepreneurship, and today's workplace.",
      },
    ],
    goal: {
      value: "5,000",
      label: "Participants Engaged",
      note: "Career readiness, entrepreneurship, professional development, financial-capability, and skill-building activities",
    },
    exploreLabel: "Explore The Thrive Initiative",
  },
  {
    id: "collective-impact",
    area: "Community Empowerment",
    areaSummary:
      "Collaborative programs, referrals, outreach, volunteer engagement, and partnerships that connect people with resources and support.",
    name: "The Collective Impact Initiative",
    shortName: "Collective Impact",
    tagline: "Stronger Connections. Stronger Communities.",
    homeCopy: [
      "Collective Impact brings together nonprofits, businesses, educators, professionals, volunteers, and community leaders to expand access to resources and support.",
      "Through referrals, community education, outreach, collaborative programming, and strategic partnerships, we connect people with resources that may otherwise remain out of reach.",
    ],
    lead: "Communities often already contain valuable organizations, knowledge, professionals, and resources. The challenge is making those resources easier to reach and strengthening the connections between them.",
    body: [
      "The Collective Impact Initiative brings together nonprofits, businesses, educational institutions, professionals, volunteers, and community leaders to connect people with information, services, expertise, and support.",
    ],
    listTitle: "How We Collaborate",
    list: [
      {
        title: "Connect",
        text: "Build referral and resource networks that help individuals identify relevant services and support.",
      },
      {
        title: "Collaborate",
        text: "Work with nonprofits, businesses, educators, and community organizations on outreach, educational activities, events, and joint programming.",
      },
      {
        title: "Contribute",
        text: "Engage volunteers, mentors, professionals, and corporate partners who can contribute time, expertise, services, networks, and resources.",
      },
    ],
    goal: {
      value: "10,000",
      label: "Community Members Reached",
      note: "Through direct engagement, outreach, educational activities, referrals, events, collaborative programming, volunteer engagement, and partner-supported initiatives",
    },
    exploreLabel: "Explore Collective Impact",
  },
];

/* ---------------- Home: impact goals ---------------- */

export const homeImpactGoals = [
  { value: "20", label: "First 20 Participants" },
  { value: "100", label: "Confidence & Wellness Participants" },
  { value: "150", label: "Education & Skill-Building Opportunities" },
  { value: "220", label: "Mentorship & Leadership Connections" },
  { value: "250", label: "Career & Economic Empowerment Participants" },
  { value: "2,000", label: "Community Members Reached" },
];

/* ---------------- Impact page: 2026 progress ---------------- */

export const impactProgress = [
  { current: 7, total: 20, label: "First 20 Participants" },
  { current: 500, total: 2500, label: "Learning & Training Opportunities" },
  {
    current: 700,
    total: 2200,
    label: "Mentorship, Leadership & Professional-Development Engagements",
  },
  { current: 850, total: 5000, label: "Career & Economic Empowerment Participants" },
  { current: 1250, total: 10000, label: "Community Members Reached" },
];

/* ---------------- People ---------------- */

export type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string[];
};

export const leaders: Leader[] = [
  {
    name: "Umbreen Sheikh",
    role: "Founder & President",
    image: umbreenImg,
    bio: [
      "Umbreen Sheikh is the Founder and President of Embrowerment® Foundation and the founder and CEO of Wink Brow Bar.",
      "Her humanitarian involvement has included support for LRBT, an organization providing free eye care and blindness-prevention services in Pakistan, as well as more than a decade of involvement with Developments in Literacy (DIL), which works to expand access to education.",
      "She has also served in an advisory capacity with The Asia Foundation's Lotus Circle, supporting efforts connected to women's advancement and opportunity.",
      "As an entrepreneur, Umbreen has built and led Wink Brow Bar while developing work centered on confidence, personal expression, and client experience.",
      "She is a biomedical science graduate and brings to Embrowerment Foundation experience in organizational leadership, entrepreneurship, partnership development, community engagement, and humanitarian service.",
      "As President, she helps guide the Foundation's mission, strategic direction, partnerships, program development, and long-term growth.",
    ],
  },
  {
    name: "Andlib Mohsin",
    role: "Secretary",
    image: andlibImg,
    bio: [
      "Andlib Mohsin serves as Secretary of Embrowerment® Foundation and brings professional legal experience to the organization's leadership and governance.",
      "A UK barrister, Andlib studied at King's College London and has professional experience across family, criminal, and immigration law.",
      "Her legal background contributes an important analytical and governance perspective to the Foundation's decision-making.",
      "As Secretary, she supports board administration, organizational documentation, governance processes, and responsible oversight.",
      "Her experience strengthens the Foundation's commitment to thoughtful decision-making, accountability, fairness, and respect for the individuals and communities it serves.",
    ],
  },
  {
    name: "Lillian Mera",
    role: "Treasurer",
    image: lillianImg,
    bio: [
      "Lillian Mera serves as Treasurer of Embrowerment® Foundation and brings more than a decade of experience in bookkeeping, accounting, and financial operations.",
      "Her professional background includes bookkeeping, accounting support, and financial administration.",
      "As Treasurer, Lillian supports the Foundation's budgeting, financial oversight, recordkeeping, reporting, and stewardship responsibilities.",
      "Her experience helps strengthen the systems needed to manage charitable resources responsibly, maintain accurate financial records, and support informed organizational decision-making.",
      "She contributes an important financial perspective as Embrowerment Foundation continues to grow its programs, partnerships, and funding relationships.",
    ],
  },
];
