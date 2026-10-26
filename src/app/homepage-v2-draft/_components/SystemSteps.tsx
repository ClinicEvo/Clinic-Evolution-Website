import Link from "next/link";
import type { ComponentType, CSSProperties } from "react";
import FadeUp from "@/components/animations/FadeUp";
import { GoogleLogo, FacebookLogo, InstagramLogo, TiktokLogo } from "@/components/brand/PlatformLogos";

// The four ways patients come in, as the video's own diagram draws them ("Four
// ways in. One system underneath."). Call handling, follow-up and reactivation
// are Patient Pulse's job, so they sit in the bar underneath rather than as
// cards. The draft footer still lists every service, from SYSTEM_STAGES in
// src/lib/nav.ts.
const channels: {
  title: string;
  tag: string;
  body: string;
  service: { label: string; href: string };
  platforms: { name: string; icon: ComponentType<{ size?: number }> }[];
}[] = [
  {
    title: "Clinic website",
    tag: "Forms and live chat",
    body: "A website built to turn visitors into bookings, with enquiry forms and live chat.",
    service: { label: "Clinic Websites", href: "/website-design-for-clinics/" },
    platforms: [],
  },
  {
    title: "SEO for clinics",
    tag: "Map pack and organic",
    body: "Show up on Google Maps and in search results when people nearby look for treatment.",
    service: { label: "SEO for Clinics", href: "/seo-for-clinics/" },
    platforms: [{ name: "Google", icon: GoogleLogo }],
  },
  {
    title: "Google Ads",
    tag: "High-intent search",
    body: "Appear at the top of Google for people searching for treatment right now.",
    service: { label: "Google Ads", href: "/google-ads-for-clinics/" },
    platforms: [{ name: "Google Ads", icon: GoogleLogo }],
  },
  {
    title: "Paid social",
    tag: "Facebook, Instagram, TikTok",
    body: "Reach local people on Facebook, Instagram and TikTok before they start searching.",
    service: { label: "Paid Social", href: "/digital-marketing/" },
    platforms: [
      { name: "Facebook", icon: FacebookLogo },
      { name: "Instagram", icon: InstagramLogo },
      { name: "TikTok", icon: TiktokLogo },
    ],
  },
];

function Arrow({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The system section, straight under the hero, on the white paper ground so
 *  the grey Patient Pulse section after it keeps the page alternating.
 *  It was a navy band for a while; navy read as heavy, even negative.
 *  The four channels hang off a rail, across on desktop and down the left on
 *  phones, and drop into the Patient Pulse bar underneath. */
export default function SystemSteps() {
  return (
    // Tighter than the standard section gap: 64px on phones up to 96px on
    // desktop. Inline, like the line heights below, because .section and the
    // .text-body scale are unlayered CSS and outrank Tailwind utilities.
    <section
      id="system-section"
      className="section border-b border-[var(--color-border)] bg-[var(--color-paper)]"
      // --hover-lift: a draft-only duration for the card hover, longer than
      // --duration-slower. Defined here rather than in globals.css so the
      // live site's motion tokens stay untouched; promote it if it sticks.
      style={{
        paddingBlock: "clamp(var(--space-block), 8vw, var(--space-section-sm))",
        "--hover-lift": "700ms",
      } as CSSProperties}
    >
      <div className="cx-main">
        <FadeUp>
          <p className="eyebrow mb-4">How Clinic Evolution works</p>
          <h2 className="text-h2 mb-4 max-w-[720px] text-balance text-[var(--color-ink)]">
            Four ways in.{" "}
            <span className="sm:whitespace-nowrap">One system underneath.</span>
          </h2>
          {/* Each channel is also sold on its own, which the "one system"
              framing could otherwise hide from someone who only wants SEO. */}
          <p className="text-body-lg mb-12 max-w-[600px] font-medium text-[var(--color-ink)]" style={{ lineHeight: 1.5 }}>
            Use the whole system with Patient Pulse underneath, or just the service
            you need. Each one is also available on its own.
          </p>
        </FadeUp>

        <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* The rail: down the badges' centre on phones, across them from lg.
              The 2×2 tablet grid has no single reading direction, so no rail. */}
          <span aria-hidden className="absolute bottom-6 left-[18px] top-6 w-px bg-[var(--color-border)] sm:hidden" />
          <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-[18px] hidden h-px bg-[var(--color-border)] lg:block" />

          {channels.map((c, i) => (
            <li key={c.title} className="group relative flex gap-4 sm:flex-col lg:gap-5">
              {/* Hovering anywhere on a channel lifts its card and fills its
                  number in coral, so the pointer's position reads along the rail.
                  Timed by --hover-lift (set on the section), slower than any
                  motion token: at 240ms and then 480ms the lift still read as
                  a jump. Circle, card and link share the timing. */}
              <span
                aria-hidden
                className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--color-accent)] bg-[var(--color-paper)] font-display text-[14px] font-semibold text-[var(--color-accent-text)] transition-colors duration-[var(--hover-lift)] ease-[var(--ease-out-quart)] group-hover:bg-[var(--color-accent)] group-hover:text-white lg:self-center"
              >
                {i + 1}
              </span>
              <FadeUp delay={i * 0.06} className="flex-1">
                <div className="relative flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 text-[var(--color-ink)] shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-[var(--hover-lift)] ease-[var(--ease-out-quart)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-card-hover)] motion-reduce:group-hover:translate-y-0">
                  <h3 className="text-h4">{c.title}</h3>
                  <p className="text-label mb-3 mt-1">{c.tag}</p>
                  <p className="text-body mb-5 text-[var(--color-charcoal)]" style={{ lineHeight: 1.5 }}>{c.body}</p>
                  {/* Logos and link pinned to the card foot together, so the logo
                      row lines up across the cards whatever the body length. */}
                  <div className="mt-auto">
                    {c.platforms.length > 0 && (
                      <ul className="mb-5 flex items-center gap-3">
                        {c.platforms.map((p) => (
                          <li key={p.name} className="flex items-center">
                            <p.icon size={20} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* The whole card is the link: the anchor's ::after stretches
                        over the card (the nearest positioned box), so the card
                        stays one link for screen readers rather than two. */}
                    <Link
                      href={c.service.href}
                      className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] after:content-[''] flex items-center gap-1.5 border-t border-[var(--color-border)] pt-4 text-[13px] font-semibold text-[var(--color-ink)] transition-colors duration-[var(--hover-lift)] group-hover:text-[var(--color-accent-text)]"
                    >
                      More on {c.service.label}
                      <Arrow size={10} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
              {/* Drop line into the Patient Pulse bar, desktop only. */}
              <span aria-hidden className="absolute left-1/2 top-full hidden h-8 w-px bg-[var(--color-border)] lg:block" />
            </li>
          ))}
        </ol>

        <FadeUp delay={0.3}>
          <div className="mt-5 flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-8">
            <p className="text-[15px] text-[var(--color-charcoal)]" style={{ lineHeight: 1.5 }}>
              <span className="font-display font-semibold text-[var(--color-ink)]">Patient Pulse, underneath all four.</span>{" "}
              Missed calls caught, every enquiry replied to in minutes, follow-up
              for a year and past patients brought back, all in one place.
            </p>
            <Link
              href="/patient-pulse/"
              className="inline-flex flex-shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent-text)] transition-colors hover:text-[var(--color-accent-dim)]"
            >
              See how Patient Pulse works
              <Arrow size={10} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
