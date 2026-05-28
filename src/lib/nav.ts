export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/#system-section",
    children: [
      {
        label: "Clinic Websites",
        href: "/website-design-for-clinics/",
        description: "Built for MSK patients — condition pages, trust signals, and booking paths that convert.",
      },
      {
        label: "SEO for Clinics",
        href: "/seo-for-clinics/",
        description: "Own the local search results your patients use before they pick up the phone.",
      },
      {
        label: "Google Ads for Clinics",
        href: "/google-ads-for-clinics/",
        description: "Paid search targeting high-intent MSK patients in your area — not wasted broad terms.",
      },
      {
        label: "Patient Pulse",
        href: "/patient-pulse/",
        description: "Automatic SMS follow-up for every enquiry — within minutes, not the next morning.",
      },
      {
        label: "Call Handling",
        href: "/call-centre/",
        description: "Every call answered by a trained handler who knows your clinic and your availability.",
      },
      {
        label: "AI Integration",
        href: "/ai-integration/",
        description: "Automated reactivation sequences that contact lapsed patients before a competitor does.",
      },
      {
        label: "Digital Marketing",
        href: "/digital-marketing/",
        description: "Coordinated strategy across every channel your patients use to find a clinic.",
      },
    ],
  },
  {
    label: "Who We Help",
    href: "/#who-we-help",
    children: [
      {
        label: "Osteopaths",
        href: "/osteopath-marketing/",
        description: "Marketing built by a GOsC-registered practising osteopath.",
      },
      {
        label: "Physiotherapists",
        href: "/physiotherapy-marketing/",
        description: "SEO and advertising for the most competitive MSK discipline in local search.",
      },
      {
        label: "Chiropractors",
        href: "/chiropractic-marketing/",
        description: "Trust-first marketing built around the longer chiropractic consideration cycle.",
      },
    ],
  },
  { label: "Results", href: "/case-studies/" },
  { label: "Resources", href: "/resources/" },
];

export const ctaNav = {
  label: "Book Your Free Audit",
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
    { label: "Call Handling", href: "/call-centre/" },
    { label: "AI Integration", href: "/ai-integration/" },
    { label: "Digital Marketing", href: "/digital-marketing/" },
    { label: "SEO Maintenance", href: "/seo-maintenance/" },
  ],
  company: [
    { label: "About", href: "/about/" },
    { label: "Results", href: "/case-studies/" },
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
