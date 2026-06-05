export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
  groups?: NavGroup[];
  callout?: NavCallout;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface NavCallout {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export const mainNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/#system-section",
    groups: [
      {
        label: "Get Found",
        items: [
          {
            label: "Clinic Websites",
            href: "/website-design-for-clinics/",
            icon: "Monitor",
            description: "Built for MSK patients, condition pages, trust signals, and booking paths that convert.",
          },
          {
            label: "SEO for Clinics",
            href: "/seo-for-clinics/",
            icon: "MagnifyingGlass",
            description: "Own the local search results your patients use before they pick up the phone.",
          },
          {
            label: "Google Ads for Clinics",
            href: "/google-ads-for-clinics/",
            icon: "Target",
            description: "Paid search targeting high-intent MSK patients in your area, not wasted broad terms.",
          },
        ],
      },
      {
        label: "Convert Enquiries",
        items: [
          {
            label: "Patient Pulse",
            href: "/patient-pulse/",
            icon: "ChatCircleDots",
            description: "Automatic SMS follow-up for every enquiry, within minutes, not the next morning.",
          },
          {
            label: "Call Handling & Booking",
            href: "/call-centre/",
            icon: "Phone",
            description: "Every call answered, every ad lead called back, and patients booked straight into your diary.",
          },
        ],
      },
      {
        label: "Grow & Retain",
        items: [
          {
            label: "AI Integration",
            href: "/ai-integration/",
            icon: "Sparkle",
            description: "Automated reactivation sequences that contact lapsed patients before a competitor does.",
          },
          {
            label: "Digital Marketing",
            href: "/digital-marketing/",
            icon: "ChartLineUp",
            description: "Every channel above, run as one coordinated strategy for ongoing growth.",
          },
        ],
      },
    ],
    callout: {
      eyebrow: "Not sure where to start?",
      title: "Book a free clinic audit",
      description: "A practising osteopath reviews your clinic's online presence and shows you where patients are slipping away.",
      ctaLabel: "Get your audit",
      href: "/free-clinic-audit/",
    },
  },
  {
    label: "Who We Help",
    href: "/#who-we-help",
    children: [
      {
        label: "Osteopaths",
        href: "/osteopath-marketing/",
        icon: "OsteopathIcon",
        description: "Marketing built by a GOsC-registered practising osteopath.",
      },
      {
        label: "Physiotherapists",
        href: "/physiotherapy-marketing/",
        icon: "PhysioIcon",
        description: "SEO and advertising for the most competitive MSK discipline in local search.",
      },
      {
        label: "Chiropractors",
        href: "/chiropractic-marketing/",
        icon: "ChiroIcon",
        description: "Trust-first marketing built around the longer chiropractic consideration cycle.",
      },
    ],
  },
  { label: "Client Results", href: "/case-studies/" },
  { label: "Resources", href: "/resources/" },
];

export const ctaNav = {
  label: "Book a free clinic audit",
  href: "/free-clinic-audit/",
};

export const footerNav = {
  whoWeHelp: [
    { label: "Osteopaths", href: "/osteopath-marketing/" },
    { label: "Physiotherapists", href: "/physiotherapy-marketing/" },
    { label: "Chiropractors", href: "/chiropractic-marketing/" },
  ],
  services: [
    { label: "Clinic Websites", href: "/website-design-for-clinics/" },
    { label: "SEO for Clinics", href: "/seo-for-clinics/" },
    { label: "Google Ads for Clinics", href: "/google-ads-for-clinics/" },
    { label: "Patient Pulse", href: "/patient-pulse/" },
    { label: "Call Handling & Booking", href: "/call-centre/" },
    { label: "AI Integration", href: "/ai-integration/" },
    { label: "Digital Marketing", href: "/digital-marketing/" },
    { label: "SEO Maintenance", href: "/seo-maintenance/" },
  ],
  company: [
    { label: "About", href: "/about/" },
    { label: "Client Results", href: "/case-studies/" },
    { label: "Resources", href: "/resources/" },
    { label: "Contact", href: "/contact/" },
    { label: "Healthcare Marketing Consultant", href: "/healthcare-marketing-consultant/" },
    { label: "Free Clinic Audit", href: "/free-clinic-audit/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
    { label: "Terms", href: "/terms/" },
  ],
};
