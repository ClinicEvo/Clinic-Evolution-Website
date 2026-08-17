import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import CampaignJourney from "@/components/sections/CampaignJourney";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";
import PhoneVideoMockup from "@/components/sections/PhoneVideoMockup";
import BrowserFrame from "@/components/sections/mockups/BrowserFrame";
import LaptopFrame from "@/components/sections/mockups/LaptopFrame";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from "@/components/brand/PlatformLogos";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Digital Marketing for MSK Clinics, Coordinated Growth",
  description:
    "Paid social for UK osteopaths, physiotherapists and chiropractors. Clinic Evo builds Facebook, Instagram and TikTok campaigns and the follow-up system that turns the leads into booked patients.",
  path: "/digital-marketing/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing", href: "/digital-marketing/" },
];

// The eight decisions behind a campaign that works, from the revision brief.
// Deliberately a plain list rather than eight icon cards: the point is how many
// there are, and an icon on each would only make that harder to take in.
const factors = [
  { title: "The objective", detail: "Leads, messages or bookings. Choose wrong and the platform optimises for the wrong people." },
  { title: "The offer", detail: "What the patient actually gets for clicking. A clinic name is not an offer." },
  { title: "The audience", detail: "Condition, age, radius. Broad targeting spends your budget on people who will never attend." },
  { title: "The platform", detail: "Where your patients already are, which is rarely all three at once." },
  { title: "The creative", detail: "Video or stills, and whether it looks like the platform or like an advert." },
  { title: "The messaging", detail: "The words that make someone in pain stop scrolling and believe you can help." },
  { title: "The landing experience", detail: "Where the click goes, and how much work it takes to book from there." },
  { title: "What happens next", detail: "Who replies to the lead, how fast, and how many times before they give up." },
];

const platforms = [
  {
    name: "Facebook",
    Logo: FacebookLogo,
    audience: "Where most local patients over 40 still spend their time",
    approach:
      "The strongest platform for tight local radius targeting and in-feed lead forms. Longer copy works here, and a specific offer beats brand awareness every time.",
  },
  {
    name: "Instagram",
    Logo: InstagramLogo,
    audience: "A younger, more visual audience who judge on what they see",
    approach:
      "Treatment, team and results carry the message. Reels and stories reach further than static posts, and the clinic that looks like somewhere you would go wins the click.",
  },
  {
    name: "TikTok",
    Logo: TiktokLogo,
    audience: "The youngest audience, and the one least tolerant of advertising",
    approach:
      "The ad has to look like content or it is scrolled past in half a second. It rewards volume of creative rather than one polished film, which changes how the whole campaign is built.",
  },
];

const faqs = [
  {
    question: "I have tried Facebook ads before and wasted money. What is different here?",
    answer:
      "Usually one part of the campaign was wrong, and there is no way to tell which from inside your own account. A campaign depends on the objective, the offer, the audience, the platform, the creative, the messaging, the landing page and what happens after the lead arrives. Clinic Evo has already spent years and a substantial budget finding out which combinations work for clinics, so your budget is not the one paying for that education. Just as importantly, the follow-up is part of the service, so leads are worked rather than left to go cold.",
  },
  {
    question: "Which platform should my clinic advertise on?",
    answer:
      "It depends on who you treat. Facebook still reaches most local patients over 40 and has the strongest local targeting. Instagram suits clinics whose treatment, team or results are visual. TikTok reaches the youngest audience and needs native-looking video rather than polished adverts. Most clinics start on one platform, prove it, then extend. Running all three from day one usually just spreads the budget too thin to learn anything.",
  },
  {
    question: "How much should a clinic spend on paid social?",
    answer:
      "Enough for the platform to gather data on who responds, which means a consistent daily budget over several weeks rather than a large one-off push. The right number depends on your treatment prices, your capacity and how competitive your area is. We set it with you during the audit rather than quoting a figure that suits every clinic, because it does not.",
  },
  {
    question: "What does digital marketing for a clinic include?",
    answer:
      "For an MSK clinic it usually combines SEO, Google Ads, paid social, website design, immediate enquiry follow-up, inbound and outbound call handling that books patients into the diary, and patient reactivation. Clinic Evo coordinates these as one system rather than treating them as separate, disconnected services.",
  },
  {
    question: "Why coordinate channels instead of buying them separately?",
    answer:
      "Most clinics lose patients in the gaps between suppliers, the enquiry that arrives after hours and never gets a reply, or the caller who reaches voicemail. When traffic, follow-up, calls and retention are run by one team, every handoff is covered and nothing falls through.",
  },
  {
    question: "Do I have to take every service at once?",
    answer:
      "No. Clinic Evo can start with the weakest part of the chain, then connect the others over time. The plan is built around where your clinic is losing patients now, not a fixed package.",
  },
  {
    question: "Is this suitable for osteopaths, physios and chiropractors?",
    answer:
      "Yes. Clinic Evo works exclusively with MSK clinics. Each discipline has different patient decision-making, search behaviour and competition, so the marketing is built for those differences rather than a generic healthcare template.",
  },
  {
    question: "How do you measure whether it is working?",
    answer:
      "Every channel is tied back to booked appointments, not vanity metrics. You see how traffic becomes enquiries, how enquiries become bookings, and how patients are retained, so spend stays connected to revenue.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Marketing for MSK Clinics"
        description="Paid social and coordinated digital marketing for UK osteopaths, physiotherapists and chiropractors. Facebook, Instagram and TikTok campaigns connected to follow-up and booking."
        url="/digital-marketing/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* H1 kept verbatim: it carries the page's target keyword and the revision
          brief is explicit that it stays until keyword research says otherwise.
          The secondary "See all services" action is gone and the tick points
          have moved below the fold line, both per the same brief. */}
      <PageHero
        badge="Facebook, Instagram & TikTok"
        heading={
          <>
            Digital marketing that works as a{" "}
            <em className="not-italic text-[var(--color-accent)]">
              connected system
            </em>
          </>
        }
        subtext="Paid social campaigns built for MSK clinics, and the follow-up that turns the leads into booked patients. Most clinics buy the advertising and end up owning the gap that comes after it."
        bullets={[
          "Campaigns built around one condition and one audience at a time",
          "Offer, targeting and creative handled for you",
          "Every lead followed up and tracked through to a booking",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanelWidth="1.1fr"
        bulletsBelow
        rightPanel={
          <LaptopFrame label="Clinic Evo's own Meta ad account: eight campaigns, £68,539 spent, 9.3 million impressions.">
            <BrowserFrame
              label="Meta Ads Manager — Clinic Evo"
              flush
              scrollOnMobile
              scrollMinWidth="44rem"
              scrollLabel="Meta Ads Manager screenshot, scroll sideways to read"
            >
              {/* The top 62px of the capture is Ads Manager's own toolbar — tabs,
                  Create, Duplicate, A/B test. None of it is the evidence, and at
                  this size it competes with the numbers that are. Cropped here
                  rather than in the file so the original capture stays intact:
                  a percentage margin resolves against width, so -4.93% of 1258px
                  is exactly those 62 rows at any rendered scale. */}
              <div className="overflow-hidden" style={{ aspectRatio: "1258 / 529" }}>
                <Image
                  src="/images/digital-marketing/digital-marketing-hero.png"
                  alt="Clinic Evo's Meta Ads Manager account showing eight campaigns with their spend, leads, cost per lead and impressions"
                  width={1258}
                  height={591}
                  className="h-auto w-full"
                  style={{ marginTop: "-4.93%" }}
                  priority
                  sizes="(max-width: 1024px) 44rem, 55vw"
                />
              </div>
            </BrowserFrame>
          </LaptopFrame>
        }
      />

      {/* Why paid social goes wrong.
          Replaces "the problem with single-channel agencies", which argued the
          homepage's argument on a page that is supposed to sell paid social.
          This is the pain point the brief asks for: the owner who knows this
          works for other clinics and does not want to fund another experiment. */}
      <section className="section bg-[var(--color-paper)]">
        {/* Two columns rather than a heading block with the right half empty.
            The list is the argument the heading makes — "it is eight decisions"
            — so running them alongside each other lets the reader see the length
            of the list while reading the claim, and fills the row. */}
        <div className="cx-main">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-5">Why paid social goes wrong</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  You have probably tried this before, and it cost you.
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Almost every clinic owner has run a boosted post or a month of
                  Facebook ads, watched the money leave and the diary stay the
                  same, and quietly decided it does not work for clinics. It does.
                  It just rarely works the way it is usually attempted.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  A campaign is not one decision. It is eight, and they all have
                  to be right at the same time. Get seven right and the eighth
                  still spends your budget on the wrong people.
                </p>
              </div>
            </FadeUp>

            <ol className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
              {factors.map((f, i) => (
                <li
                  key={f.title}
                  className="border-t border-[var(--color-border)] py-5"
                >
                  <FadeUp delay={(i % 2) * 0.05}>
                    <div className="flex gap-4">
                      <span className="font-display text-[0.72rem] font-semibold tabular-nums text-[var(--color-accent-text)] pt-[3px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
                          {f.title}
                        </p>
                        <p className="mt-1.5 text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
                          {f.detail}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </li>
              ))}
            </ol>
          </div>

          <FadeUp>
            <p className="text-h3 mt-14 max-w-3xl text-balance font-medium text-[var(--color-ink)]">
              We run with the platform&apos;s algorithm rather than against it.{" "}
              <span className="text-[var(--color-accent)]">
                Nothing here is worked out on your budget.
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Platform differences.
          Stacked rows rather than three cards side by side: the house rules ban
          the equal three-column grid, and Danny's point about generic icon boxes
          applies double when the real platform logos exist and say it better. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          {/* The marks sit beside the heading rather than leaving the right half
              blank — and at this size they say what the section is about before
              a word of it is read. */}
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Three different platforms</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5 leading-tight">
                  Facebook, Instagram and TikTok are not the same channel
                </h2>
                <p className="text-body-lg text-[var(--color-charcoal)]">
                  Different audiences, different formats, different algorithms and
                  different offers. The same campaign copied across all three is
                  the fastest way to waste a budget on two of them.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex items-center justify-start gap-7 lg:justify-end lg:gap-9">
                <FacebookLogo size={58} />
                <InstagramLogo size={58} />
                <TiktokLogo size={58} />
              </div>
            </FadeUp>
          </div>

          <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {platforms.map((p, i) => (
              <li key={p.name}>
                <FadeUp delay={i * 0.07}>
                  <div className="grid gap-4 py-8 md:grid-cols-[13rem_1fr] md:gap-10">
                    <div className="flex items-center gap-3">
                      <p.Logo size={26} />
                      <span className="font-display text-[1.05rem] font-semibold text-[var(--color-ink)]">
                        {p.name}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
                        {p.audience}
                      </p>
                      <p className="mt-2 text-body text-[var(--color-muted)]">
                        {p.approach}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Real campaigns. Two genuine assets side by side — a live video ad in the
          phone it is watched on, and a currently running static ad — rather than
          two separate sections each pairing one asset with a column of prose. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          {/* Copy beside the phone rather than stacked above it with the right
              half of the row empty, and the two ad formats no longer sit side by
              side at wildly different scales. */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Real campaigns, running now</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  One campaign per condition
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Search captures people already looking for treatment. Paid social
                  reaches the ones who have not started looking yet but match your
                  patient exactly: the right age, the right condition, the right
                  few miles of road.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Both of the ads here are live for Bodyfunction Clinic in
                  Islington. Neither uses stock photography, because the
                  practitioners a patient will actually meet, and a recommendation
                  from someone nearby, carry more weight locally than anything
                  bought from a library.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <PhoneVideoMockup src="/videos/social-ads-arthritis-55plus.mp4" />
                <p className="mx-auto mt-5 max-w-[300px] text-center text-body-sm text-[var(--color-muted)]">
                  A video campaign for patients aged 55 and over about arthritis,
                  exactly as it appears in the feed.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeUp>
              <figure className="m-0 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <div className="relative aspect-[940/788]">
                  <Image
                    src="/images/digital-marketing/ad-example.png"
                    alt="Live Facebook and Instagram ad for Bodyfunction Clinic in Islington, featuring the real clinic team and the message: the treatment more Islington locals are recommending to friends"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-paper)] px-5 py-3.5 text-body-sm text-[var(--color-muted)]">
                  A currently running Facebook and Instagram ad for Bodyfunction
                  Clinic.
                </figcaption>
              </figure>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-h3 text-[var(--color-ink)] mb-4 leading-tight">
                  What happens after the click
                </h3>
                <p className="text-body text-[var(--color-muted)]">
                  Every social ad Clinic Evo builds is connected to the same
                  system. The click lands on a page designed to convert, the
                  enquiry gets an automatic reply within minutes, and the outcome
                  is tracked through to a booked appointment rather than a like.
                  An agency that hands you the creative and stops has done the
                  part that was never the problem.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Evidence.
          This slot held a StatBand reading "6 growth channels, 5 stages, 1 team"
          — a count of our own service menu presented as proof. The figures below
          are the account totals visible in the hero screenshot, with the source
          named, which is what the brief means by verifying a spend claim before
          publishing it. */}
      <ProofBand
        eyebrow="The spend behind the strategy"
        stat={{
          value: "£68,539",
          label: "spent through Clinic Evo's own Meta ad account, across eight campaigns",
        }}
        body="9.3 million impressions and more than sixteen thousand leads, at a cost per lead running from £3.31 on the campaigns that worked to £14.03 on the ones that needed rebuilding. Learning which ads work costs real money. It has already been spent, and not by a clinic."
        source="Clinic Evo Meta Ads Manager, account totals"
        image="/images/bodyfunction-physiotherapy-strength-conditioning-floor-exercise-02.jpg"
        imageAlt="A physiotherapy strength and conditioning session at Bodyfunction Clinic"
        ctaLabel="Get a free clinic audit"
        ctaHref="/free-clinic-audit/"
      />

      {/* Ad → Lead → Patient Pulse → Follow-up → Booking, the journey the brief
          asks this page to show. Replaces the invented funnel figures. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          {/* Headline and its supporting paragraph across the row, so the
              section does not open on half a screen of nothing. */}
          <FadeUp>
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-4">Where the lead goes</p>
                <h2 className="text-h2 text-[var(--color-ink)] leading-tight">
                  The advert is the first five seconds of the job
                </h2>
              </div>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Buying advertising on its own hands you a lead and leaves you the
                rest. This is the part that decides whether it becomes a patient,
                and it is the reason clinics come to us rather than to an agency
                that stops at the click.
              </p>
            </div>
          </FadeUp>
          <CampaignJourney />
          <FadeUp>
            <p className="mt-10 text-body text-[var(--color-muted)]">
              The middle of that chain is{" "}
              <Link href="/patient-pulse/" className="text-[var(--color-accent-text)] hover:underline">
                Patient Pulse
              </Link>
              , and it is the part almost nobody else includes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-5">Discipline-specific</p>
                <h2 className="text-h2 text-[var(--color-ink)] leading-tight">
                  For osteopaths, physios and chiropractors
                </h2>
              </div>
              <p className="text-body text-[var(--color-muted)]">
                Each MSK discipline has different patient decision-making patterns,
                different search behaviour, different regulatory requirements and different
                competitive landscapes. Clinic Evo builds for those differences, not a
                generic healthcare template applied to every clinic.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Osteopaths",
                href: "/osteopath-marketing/",
                cta: "Marketing for Osteopaths",
                watermarkImg: "/images/watermark-osteopath.jpg",
                blurb:
                  "Half your market still is not sure what an osteopath treats, so the campaign has to answer the condition before it sells the clinic. GOsC advertising rules shape what the copy can claim.",
              },
              {
                title: "Physiotherapists",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
                watermarkImg: "/images/watermark-physio.jpg",
                blurb:
                  "You are competing with an NHS waiting list rather than only with the clinic down the road, so the offer has to make paying privately the obvious next step this week.",
              },
              {
                title: "Chiropractors",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic Marketing",
                watermarkImg: "/images/watermark-chiro.jpg",
                blurb:
                  "More scepticism to overcome than either of the others, which means reviews, named practitioners and clear pricing do more work in the ad than clinical language ever will.",
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.09}>
                <Link
                  href={item.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-[2px]"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image src={item.watermarkImg} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 288px" />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  {/* The drawn spine/dumbbell glyph that sat beside this label is
                      gone, and a line saying why the discipline is different has
                      taken its place. Removing the icon on its own left a card
                      1,200px wide holding two words and a link. */}
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <p className="eyebrow mb-4">{item.title}</p>
                    <p className="text-body text-[var(--color-muted)] mb-6 max-w-[52ch]">
                      {item.blurb}
                    </p>
                    <span className="inline-flex w-fit items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                      {item.cta}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)] !pb-10">
        <div className="cx-main">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Digital marketing for clinics FAQs
                </h2>
              </div>
            </FadeUp>
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] px-6 sm:px-10 py-2">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="See the whole system working for your clinic"
        subheading="Book a free clinic audit. We review every part of your current digital presence and show you honestly where growth is being lost, and what a connected system would do differently."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}
