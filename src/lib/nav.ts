export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Who We Help",
    href: "/#who-we-help",
    children: [
      { label: "Osteopaths", href: "/osteopath-marketing/" },
      { label: "Physiotherapists", href: "/physiotherapy-marketing/" },
      { label: "Chiropractors", href: "/chiropractic-marketing/" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "SEO for Clinics", href: "/seo-for-clinics/" },
      { label: "Google Ads for Clinics", href: "/google-ads-for-clinics/" },
      { label: "Clinic Website Design", href: "/website-design-for-clinics/" },
      { label: "AI Patient Reactivation", href: "/ai-patient-reactivation/" },
      { label: "Healthcare Marketing Consultant", href: "/healthcare-marketing-consultant/" },
    ],
  },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Resources", href: "/resources/" },
  {
    label: "Company",
    href: "/about/",
    children: [
      { label: "About ClinicEvo", href: "/about/" },
      { label: "Contact Us", href: "/contact/" },
    ],
  },
];

export const ctaNav = {
  label: "Free Clinic Audit",
  href: "/free-clinic-audit/",
};

export const footerNav = {
  whoWeHelp: [
    { label: "Osteopaths", href: "/osteopath-marketing/" },
    { label: "Physiotherapists", href: "/physiotherapy-marketing/" },
    { label: "Chiropractors", href: "/chiropractic-marketing/" },
  ],
  services: [
    { label: "SEO for Clinics", href: "/seo-for-clinics/" },
    { label: "Google Ads for Clinics", href: "/google-ads-for-clinics/" },
    { label: "Clinic Website Design", href: "/website-design-for-clinics/" },
    { label: "AI Patient Reactivation", href: "/ai-patient-reactivation/" },
    { label: "Healthcare Marketing Consultant", href: "/healthcare-marketing-consultant/" },
  ],
  company: [
    { label: "About", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Resources", href: "/resources/" },
    { label: "Contact", href: "/contact/" },
    { label: "Free Clinic Audit", href: "/free-clinic-audit/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
    { label: "Terms", href: "/terms/" },
  ],
};
