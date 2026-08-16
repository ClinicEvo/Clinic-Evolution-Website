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
  { path: "/case-studies/",                               name: "case-studies-index" },
  { path: "/case-studies/bodyfunction-clinic/",           name: "case-study" },
  { path: "/learning-hub/",                               name: "learning-hub-index" },
  { path: "/learning-hub/how-to-market-your-clinic/",      name: "article" },
  { path: "/free-clinic-audit/",                          name: "audit-form" },
  { path: "/contact/",                                    name: "contact" },
  { path: "/about/",                                      name: "about" },
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
