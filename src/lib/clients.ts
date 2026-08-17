/**
 * Where each client's logo links to.
 *
 * One map rather than a URL repeated in each of the three logo strips (the
 * shared ClientLogoStrip, the home page's own layout and the SEO page's). A
 * client whose site is added here becomes a live link in all three at once,
 * which is the only way this stays consistent.
 *
 * Every URL here has to be a domain the client actually owns, checked live —
 * a logo linking to the wrong site is worse than a logo linking nowhere. Both
 * entries below were confirmed by request: 200 on the bare host, no redirect to
 * www, and a title tag naming the right business.
 *
 * Keyed by the `name` the strips already use as the image alt.
 */
export const CLIENT_SITES: Record<string, string> = {
  /* Each one verified 17 Aug 2026: 200 on the host below, no redirect off it,
     and a title tag naming the right business. Note that three of the five are
     canonical on www and two are not — linking the wrong one costs a redirect
     hop, so these are written exactly as they resolve. */

  /* "Osteopathy & Physiotherapy Clinic | Islington" */
  "Bodyfunction Clinic": "https://bodyfunction.co.uk/",
  /* "Osteopath Ryde, Isle of Wight | Lind Street Osteopathy" */
  "Lind Street Osteopathy": "https://lindstreetosteopathy.co.uk/",
  /* "Osteopathy in London Bridge | Body Restore Clinic" */
  "Body Restore Clinic": "https://www.body-restore.co.uk/",
  /* "One-To-One Personal Training in Marylebone, London | One Percent Club" */
  "1 Percent Club": "https://www.the1pc.co.uk/",
  /* "Neometa | WordPress SEO & Web Design for UK Businesses" */
  Neometa: "https://www.neometa.uk/",
};

/** The client's site, or undefined when we have no verified URL for them. */
export function clientSite(name: string): string | undefined {
  return CLIENT_SITES[name];
}
