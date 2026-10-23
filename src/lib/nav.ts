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
    label: "What We Do",
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
      title: "Get a free clinic audit",
      // "shows you where patients are slipping away" was loss framing in a nav
      // callout, which is an offer slot. Reframed with the rest of them.
      description: "A practising osteopath reviews your clinic's online presence and shows you where the biggest gains are.",
      ctaLabel: "Get my free clinic audit",
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
      // The odd one out in this group, deliberately: the three above are
      // disciplines, this is a career stage across all three. It sits here
      // because "who we help" is where a final-year student looks, and a page
      // reachable only by a direct link reads as orphaned to visitors and
      // crawlers alike.
      {
        label: "New Graduates",
        href: "/graduate/",
        icon: "GraduationCap",
        description: "A six-month launch programme for clinicians opening their first practice, at half our normal fee.",
      },
    ],
  },
  { label: "Client Results", href: "/case-studies/" },
  { label: "Learning Hub", href: "/learning-hub/" },
];

/* "Book" implied choosing a calendar slot when the action is submitting a
   clinic for review. Changed 9 Sep 2026 with the same change on the paid
   pages. This one label renders in the header and footer of every page, so it
   was the majority of the site's instances on its own. */
export const ctaNav = {
  label: "Get my free clinic audit",
  href: "/free-clinic-audit/",
};

/** The header and footer CTAs both point at /free-clinic-audit/, which on that
 *  page is a link to itself — the visitor clicks and nothing appears to happen.
 *  Resolve it to the form anchor instead, so the CTA still exists everywhere
 *  but does something useful once the visitor is already there. */
export function resolveCtaHref(pathname?: string | null) {
  return pathname?.replace(/\/?$/, "/") === ctaNav.href ? "#audit-form" : ctaNav.href;
}

export const footerNav = {
  whoWeHelp: [
    { label: "Osteopaths", href: "/osteopath-marketing/" },
    { label: "Physiotherapists", href: "/physiotherapy-marketing/" },
    { label: "Chiropractors", href: "/chiropractic-marketing/" },
    { label: "New Graduates", href: "/graduate/" },
  ],
  services: [
    { label: "Clinic Websites", href: "/website-design-for-clinics/" },
    { label: "SEO for Clinics", href: "/seo-for-clinics/" },
    { label: "Google Ads for Clinics", href: "/google-ads-for-clinics/" },
    { label: "Patient Pulse", href: "/patient-pulse/" },
    { label: "Call Handling & Booking", href: "/call-centre/" },
    { label: "AI Integration", href: "/ai-integration/" },
    { label: "Digital Marketing", href: "/digital-marketing/" },
  ],
  company: [
    { label: "About", href: "/about/" },
    { label: "Team", href: "/team/" },
    { label: "Client Results", href: "/case-studies/" },
    { label: "Learning Hub", href: "/learning-hub/" },
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

/** The homepage draft: an internal review copy of the homepage (noindex,
 *  unlinked). The header, footer and floating buttons switch to the draft's
 *  version on this one path only, so the draft can propose changes to them
 *  without touching the live site or any other page. */
export const HOME_DRAFT_PATH = "/homepage-v2-draft/";

export function isHomeDraftPath(pathname?: string | null) {
  // Matches with or without the trailing slash; trailingSlash: true redirects
  // the bare form, but usePathname() can report either during navigation.
  return pathname?.replace(/\/?$/, "/") === HOME_DRAFT_PATH;
}

/** The homepage draft's nav: same menus, shorter labels, anchors pointed at
 *  the draft's own sections rather than the live homepage. */
const previewLabels: Record<string, { label: string; href: string }> = {
  "What We Do": { label: "Services", href: "#system-section" },
  "Who We Help": { label: "Who we help", href: "#who-we-help" },
  "Client Results": { label: "Results", href: "/case-studies/" },
};

export const previewNav: NavItem[] = mainNav.map((item) =>
  previewLabels[item.label] ? { ...item, ...previewLabels[item.label] } : item,
);

/** The draft uses the company's full name, Clinic Evolution, everywhere it
 *  shows a name. The live site still uses siteConfig.name ("Clinic Evo"). */
export const PREVIEW_BRAND_NAME = "Clinic Evolution";

/** The five stages on the homepage draft, each mapped to the service that
 *  handles it. Shared with the draft footer so its services column follows
 *  the page's structure instead of listing services in a different order. */
export const SYSTEM_STAGES = [
  {
    stage: "Get found",
    body: "Patients find you for what is wrong with them.",
    services: [
      { label: "Clinic Websites", href: "/website-design-for-clinics/" },
      { label: "SEO for Clinics", href: "/seo-for-clinics/" },
    ],
  },
  {
    stage: "Create demand",
    body: "Reach people actively looking for treatment.",
    services: [
      { label: "Google Ads", href: "/google-ads-for-clinics/" },
      { label: "Paid Social", href: "/digital-marketing/" },
    ],
  },
  {
    stage: "Convert",
    body: "Every call answered, every lead called back.",
    services: [{ label: "Call Handling & Booking", href: "/call-centre/" }],
  },
  {
    stage: "Follow up",
    body: "Instant replies, then twelve months of nurture.",
    services: [{ label: "Patient Pulse", href: "/patient-pulse/" }],
  },
  {
    stage: "Bring back",
    body: "Lapsed patients contacted automatically.",
    services: [{ label: "AI reactivation", href: "/ai-integration/" }],
  },
];

/** The draft footer: disciplines only, and the company list without the
 *  consultant page. */
export const previewFooterNav = {
  ...footerNav,
  whoWeHelp: footerNav.whoWeHelp.filter((item) => item.href !== "/graduate/"),
  company: footerNav.company.filter((item) => item.href !== "/healthcare-marketing-consultant/"),
};
