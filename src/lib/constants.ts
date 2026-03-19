import {
  User,
  Building2,
  BookOpen,
  Briefcase,
  TrendingUp,
  Shield,
} from "lucide-react";

export const BUSINESS = {
  name: "Edward & Associates",
  phone: "(416) 975-8578",
  phoneTel: "+14169758578",
  email: "edwardo@bellnet.ca",
  address: {
    street: "398 Bloor St W",
    city: "Toronto",
    province: "ON",
    postalCode: "M5S 1X4",
    country: "CA",
    full: "398 Bloor St W, Toronto, ON M5S 1X4",
  },
  hours: {
    weekday: "Monday – Friday: 10:30 AM – 7:30 PM",
    saturday: "Saturday: 10:30 AM – 5:30 PM",
    sunday: "Sunday: Closed",
  },
  url: "https://edwardandassociates.ca",
  geo: { lat: 43.6661, lng: -79.4071 },
  stats: {
    years: 15,
    clients: 1000,
    rating: 4.9,
    reviews: 35,
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Personal Tax Returns", href: "/services/personal-tax-returns" },
      { label: "Business Tax Services", href: "/services/business-tax-services" },
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Corporate Tax", href: "/services/corporate-tax" },
      { label: "Tax Planning", href: "/services/tax-planning" },
      { label: "CRA Dispute Resolution", href: "/services/cra-dispute-resolution" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Personal Tax Returns",
    href: "/services/personal-tax-returns",
    icon: User,
    description:
      "Accurate, thorough personal tax preparation that maximises your refund and ensures full compliance with CRA requirements.",
  },
  {
    title: "Business Tax Services",
    href: "/services/business-tax-services",
    icon: Building2,
    description:
      "Complete T2 corporate returns, HST filing, payroll remittances, and year-end financial reporting for growing businesses.",
  },
  {
    title: "Bookkeeping",
    href: "/services/bookkeeping",
    icon: BookOpen,
    description:
      "Professional bookkeeping services that keep your financial records organised, accurate, and ready for tax season.",
  },
  {
    title: "Corporate Tax",
    href: "/services/corporate-tax",
    icon: Briefcase,
    description:
      "Strategic corporate tax preparation and planning to minimise your business tax liability within the bounds of Canadian law.",
  },
  {
    title: "Tax Planning",
    href: "/services/tax-planning",
    icon: TrendingUp,
    description:
      "Forward-looking tax strategies designed to reduce your overall tax burden and protect your wealth year over year.",
  },
  {
    title: "CRA Dispute Resolution",
    href: "/services/cra-dispute-resolution",
    icon: Shield,
    description:
      "Expert representation during CRA audits, reassessments, and disputes. We stand by your side until the matter is resolved.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Morteza Ghodrat",
    rating: 5,
    text: "I have used Tax accountant assistance for over 25 years, and Edward tops them all. He is professional, knows his stuff, and very dedicated to get you the best result no matter what it takes. He stood by my side for 18 months to settle disputes with CRA on backdated taxes and helped me win my case.",
  },
  {
    name: "Dorothy Ng'ang'a",
    rating: 5,
    text: "Edward has provided my family in tax filing for over 15 years and I'm confident with his work and professional demeanor. Thank you Edward for all you do for us. I recommend his services to anyone who needs a tax accountant who knows his stuff.",
  },
  {
    name: "Fiona Lui",
    rating: 5,
    text: "Edward is an honest, straight shooter, who has been helping me complete my taxes for over 15 years. Edward takes the time to be thorough, using his unwavering knowledge to offer the best advice to suit your needs. Located in the heart of downtown Toronto.",
  },
  {
    name: "Melo Family",
    rating: 5,
    text: "Edward has been completing our taxes for at least 10 years, if not more. He was able to help us problem solve for necessary documents that we had lost and assisted in getting us up to date with our taxes. We appreciate his patience, time and expertise.",
  },
  {
    name: "Tilo Mitra",
    rating: 5,
    text: "Edward is really good at solving tax issues! I went to him with a complex issue involving cross-border taxes and fixing some really old returns. He was patient at understanding my problem and helped me work with the CRA to get my issue resolved. I highly recommend him for personal tax issues.",
  },
  {
    name: "Christian Mburanumwe",
    rating: 5,
    text: "Does my taxes for me since 2001. I used to go do my taxes with my kids since they were very young, that time my baby 1 month old today Edward also do taxes for my kids even the baby one that time. He is a great man, very honest, reliable.",
  },
] as const;
