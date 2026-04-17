import {
  Anchor,
  BadgeCheck,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  ClipboardCheck,
  Compass,
  Drill,
  Gauge,
  HardHat,
  LifeBuoy,
  Radar,
  Sailboat,
  Scale,
  ShieldCheck,
  ShipWheel,
  Waves,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "15+", label: "Years of maritime delivery" },
  { value: "120+", label: "Vessels and technical inspections supported" },
  { value: "24/7", label: "Advisory response for critical operations" },
  { value: "30+", label: "Ports and offshore touchpoints served" },
];

export const strengths = [
  {
    title: "Engineering-led vessel stewardship",
    description:
      "Integrated marine engineering, operational control, and lifecycle advisory for owners, operators, and offshore stakeholders.",
    icon: Wrench,
  },
  {
    title: "Compliance-first technical governance",
    description:
      "Survey readiness, class coordination, safety reviews, and documentation discipline aligned to international maritime standards.",
    icon: ShieldCheck,
  },
  {
    title: "Global client communication",
    description:
      "Commercially aware reporting, clear milestones, and professional stakeholder updates for international shipping clients.",
    icon: Compass,
  },
];

export const services = [
  {
    title: "Technical Ship Management",
    description:
      "Planned maintenance, dry dock preparation, budget oversight, and technical performance management for commercial fleets.",
    image:
      "https://images.unsplash.com/photo-1566288623394-377af472d81b?auto=format&fit=crop&w=1200&q=80",
    icon: ShipWheel,
  },
  {
    title: "Crew Management",
    description:
      "Competency-focused crewing support, documentation control, and onboard operational continuity for vessel owners.",
    image:
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=80",
    icon: LifeBuoy,
  },
  {
    title: "Ship Design & Construction",
    description:
      "Feasibility, design detailing, owner representation, and construction-stage technical review for newbuild programs.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
    icon: Anchor,
  },
  {
    title: "Naval Architecture",
    description:
      "Hull form studies, stability inputs, structural assessments, and engineering guidance grounded in practical marine use.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    icon: Waves,
  },
  {
    title: "Marine Consultancy",
    description:
      "Independent technical advice, fleet optimization, owner support, and risk-led recommendations for marine operations.",
    image:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1200&q=80",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ultrasonic Thickness Measurement",
    description:
      "Accurate gauging campaigns and condition assessment reporting to support maintenance planning and compliance readiness.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
    icon: Gauge,
  },
  {
    title: "Hull Structure Surveys",
    description:
      "Targeted structural inspection programs identifying corrosion, fatigue exposure, and integrity risks in critical areas.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    icon: Radar,
  },
  {
    title: "Pre-Purchase Inspections",
    description:
      "Technical due diligence for acquisition decisions covering machinery, structure, records, and operational observations.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    icon: ClipboardCheck,
  },
  {
    title: "Third-Party Vessel Audits",
    description:
      "Independent vessel audits and verification support for chartering confidence, owner review, and management oversight.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    icon: BadgeCheck,
  },
  {
    title: "Offshore Project Services",
    description:
      "Engineering coordination, marine assurance support, and field execution guidance for demanding offshore environments.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    icon: Drill,
  },
];

export const certifications = [
  "IMO-aligned operating practices",
  "Class and flag documentation support",
  "ISM and technical audit readiness",
  "Condition assessment reporting discipline",
  "Offshore HSE and inspection awareness",
  "Structured owner and stakeholder reporting",
];

export const partners = [
  "Oceanic Fleet Partners",
  "BlueHarbor Shipping",
  "Northstar Offshore",
  "Atlas Tankers",
  "Meridian Marine",
  "Global Port Alliance",
];

export const aboutTimeline = [
  {
    year: "2009",
    title: "Established with a technical-first maritime vision",
    description:
      "Tejas Maritime began as a specialist marine engineering and consultancy practice serving vessel owners and operators.",
  },
  {
    year: "2014",
    title: "Expanded into structured vessel inspection programs",
    description:
      "Survey, auditing, and condition assessment capabilities grew to support better commercial and technical decision-making.",
  },
  {
    year: "2019",
    title: "Broadened offshore and project advisory scope",
    description:
      "The company added offshore support and multi-stakeholder technical coordination for more complex marine assignments.",
  },
  {
    year: "Today",
    title: "Trusted by clients seeking dependable maritime execution",
    description:
      "The business now presents an integrated offering spanning ship management, consultancy, engineering, and specialist surveys.",
  },
];

export const values = [
  {
    title: "Mission",
    description:
      "To provide technically rigorous and commercially practical maritime solutions that improve vessel safety, reliability, and value.",
    icon: BellRing,
  },
  {
    title: "Vision",
    description:
      "To be the preferred technical partner for shipowners and offshore clients seeking dependable, global-standard marine expertise.",
    icon: Sailboat,
  },
  {
    title: "Values",
    description:
      "Integrity, engineering discipline, responsiveness, and clear accountability in every survey, recommendation, and managed task.",
    icon: Scale,
  },
];

export const expertise = [
  "Marine engineering and dry dock planning",
  "Owner representation and vessel assessments",
  "Technical documentation and statutory support",
  "Naval architecture coordination",
  "Inspection, auditing, and reporting systems",
  "Offshore project execution support",
];

export const standards = [
  "IMO conventions and best-practice frameworks",
  "Class society coordination support",
  "Port state and flag state readiness awareness",
  "Risk-based inspection planning",
  "Structured HSE communication protocols",
];

export const projects = [
  {
    title: "Bulk Carrier Hull Rehabilitation Assessment",
    category: "Hull Structure Survey",
    outcome: "Reduced repair uncertainty and accelerated dry dock planning for a regional operator.",
    metrics: ["18% faster repair planning", "4 critical zones prioritized", "Class-ready reporting package"],
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pre-Purchase Evaluation for Coastal Tanker Acquisition",
    category: "Pre-Purchase Inspection",
    outcome: "Delivered technical due diligence that supported valuation adjustment and risk controls before purchase.",
    metrics: ["2 major capex risks identified", "7-day assessment window", "Board-ready executive summary"],
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Newbuild Design Review for Multipurpose Vessel",
    category: "Ship Design Case Study",
    outcome: "Improved design coordination between owner, yard, and technical representatives during construction review.",
    metrics: ["3 design revisions resolved", "Cross-team issue tracking", "Enhanced lifecycle maintainability"],
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ultrasonic Gauging Campaign for Aging Fleet Segment",
    category: "Ultrasonic Testing Project",
    outcome: "Generated actionable thickness data for proactive steel renewal planning and budgeting.",
    metrics: ["1,200+ readings logged", "Predictive repair planning", "Clear owner dashboard output"],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
];

export const faqs = [
  {
    question: "Do you support both vessel owners and ship managers?",
    answer:
      "Yes. Our services are structured for owners, operators, ship managers, offshore stakeholders, and buyers needing reliable technical guidance.",
  },
  {
    question: "Can Tejas Maritime mobilize for urgent inspections?",
    answer:
      "We support urgent technical review requests and emergency marine support coordination based on project scope and location.",
  },
  {
    question: "What types of reports do clients receive?",
    answer:
      "Clients receive concise executive findings, technical observations, photographic records where required, and action-focused recommendations.",
  },
  {
    question: "Do you provide ongoing consultancy after surveys?",
    answer:
      "Yes. We can extend into corrective planning, project coordination, compliance support, and broader technical advisory work.",
  },
];

export const contactDetails = {
  address: "Tejas Maritime Pvt Ltd, Chennai, Tamil Nadu, India",
  phone: "+91 98400 00000",
  email: "info@tejashmaritime.com",
  emergency: "+91 90000 00000",
  whatsapp: "https://wa.me/919840000000",
};

export const seoCopy = {
  title: "Tejas Maritime Pvt Ltd | Marine Engineering, Ship Management & Consultancy",
  description:
    "Tejas Maritime Pvt Ltd delivers premium marine engineering, ship management, vessel inspection, and maritime consultancy services for global shipping and offshore clients.",
};

export const differentiators = [
  {
    title: "Single technical partner, multiple maritime disciplines",
    description:
      "Clients can combine management, engineering, inspection, and consultancy under one accountable maritime partner.",
    icon: HardHat,
  },
  {
    title: "Executive-ready reporting for decision makers",
    description:
      "Every output is built for action, balancing engineering precision with commercial readability and urgency.",
    icon: BarChart3,
  },
  {
    title: "Field realism backed by corporate presentation quality",
    description:
      "We combine operational experience on the marine side with trust-building client communication expected by international stakeholders.",
    icon: ShipWheel,
  },
];
