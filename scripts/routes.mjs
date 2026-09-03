// Shared route list for the screenshot loop and the visual-regression suite.
// Deliberately a curated subset rather than every route in the app: these are
// the templates: one of each distinct layout. A page that only differs from one
// of these by its copy adds minutes to every run and catches nothing new.
export const ROUTES = [
  { path: "/",                                            name: "home" },
  { path: "/patient-pulse/",                              name: "patient-pulse" },
  { path: "/seo-for-clinics/",                            name: "seo-for-clinics" },
  { path: "/website-design-for-clinics/",                 name: "website-design" },
  { path: "/call-centre/",                                name: "call-centre" },
  { path: "/digital-marketing/",                          name: "digital-marketing" },
  // One of the three who-we-help pages. Osteopathy, chiropractic and
  // physiotherapy share a template and differ only in copy, so one covers all
  // three for the scan and screenshot loops.
  { path: "/osteopath-marketing/",                        name: "who-we-help" },
  { path: "/case-studies/",                               name: "case-studies-index" },
  { path: "/case-studies/bodyfunction-clinic/",           name: "case-study" },
  { path: "/learning-hub/",                               name: "learning-hub-index" },
  { path: "/learning-hub/how-to-market-your-clinic/",      name: "article" },
  { path: "/free-clinic-audit/",                          name: "audit-form" },
  { path: "/contact/",                                    name: "contact" },
  // Its own template: hero checklist panel, chip field, evidence rows and an
  // application form that exists nowhere else on the site.
  { path: "/graduate/",                                   name: "graduate" },
  { path: "/about/",                                      name: "about" },
  // The PPC ad destinations. These are noindex and off the nav, which is exactly
  // why they need to be on this list: nothing else would ever crawl to them, and
  // they had drifted a long way behind the rest of the site before anyone looked.
  // The three variants share a template and differ only in copy and one FAQ, so
  // one covers all three here, the same as the who-we-help pages above.
  { path: "/lp/physiotherapy-marketing/",                 name: "lp-ads" },
  { path: "/lp/thank-you/",                               name: "lp-thank-you" },
];

// 390 is the iPhone 13/14/15 logical width and the narrowest mainstream phone
// worth designing to. 768 catches the md: breakpoint boundary, where the
// asymmetric desktop layouts are required to collapse. 1440 is the common
// laptop stage.
export const VIEWPORTS = [
  { name: "mobile",  width: 390,  height: 844 },
  { name: "tablet",  width: 768,  height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

export const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
