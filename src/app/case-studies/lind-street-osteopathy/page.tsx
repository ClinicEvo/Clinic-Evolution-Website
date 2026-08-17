import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import { StatTiles } from "@/components/case-studies/CaseStudyCharts";
import LaptopFrame from "@/components/sections/mockups/LaptopFrame";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

/*
 * Lind Street Osteopathy — the standing-start story, written for a clinic owner.
 *
 * This is a case study, not a search report. It is aimed squarely at the reader
 * who thinks proper marketing is only for big multi-practitioner clinics with
 * budgets to match, and its job is to show them otherwise.
 *
 * Two sources, kept in separate lanes on purpose. Ahrefs supplies every ranking
 * position, via the tracked-keyword screenshot Danny asked for. Google Search
 * Console supplies clicks and click-through rate, which Ahrefs cannot see.
 *
 * Do not mix them on a single claim. Ahrefs reports a position in a specified
 * location; GSC reports an average across every impression, device and place,
 * so GSC always reads worse for the same term — "osteopath ryde" is position 1
 * in Ahrefs and 4.9 in GSC. Quoting both invites an obvious contradiction.
 *
 * The July 2026 click dip is deliberately not charted — it is mostly new
 * impressions on broader terms dragging the average position, but it has not
 * been explained well enough to put in front of a prospect.
 */

export const metadata = buildMetadata({
  title: "Osteopath Marketing Case Study | Lind Street Osteopathy",
  description:
    "A brand new single-practitioner osteopathy clinic in Ryde opened with no logo, no website and no search presence. Twelve months later it owns page one across its whole catchment.",
  path: "/case-studies/lind-street-osteopathy/",
});

const faqs = [
  {
    question: "Does this work for a single-practitioner clinic?",
    answer:
      "This is the case study for exactly that. One osteopath, one treatment room, a brand new business with no reputation online. You are not trying to beat the internet — you are trying to be the obvious choice within about fifteen miles, and that is a fight you can win.",
  },
  {
    question: "How long before a new clinic starts getting patients from Google?",
    answer:
      "Lind Street was on page one for its core local searches inside twelve months of opening, with movement showing well before that. A brand new website always takes longer than an established one, which is why we run paid social alongside so the diary is not sitting empty while search catches up.",
  },
  {
    question: "Do I need a page for every condition I treat?",
    answer:
      "The condition pages were the best performers here by a distance. The pages covering fibromyalgia, hypermobility and TMJ outrank the general osteopathy and sports massage pages. Patients search for the thing that is wrong with them, not for a category of treatment, so a page that names their problem wins.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Then you are ahead of where this clinic started. A free clinic audit will show you what your existing site is already ranking for, what your local competitors are taking that you are not, and whether it is worth rebuilding or refining what you have.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Lind Street Osteopathy", href: "/case-studies/lind-street-osteopathy/" },
];

const headlineStats = [
  {
    display: "Page one",
    label: "For every core osteopathy search in her catchment",
    source: "GSC — from no search presence at all",
  },
  {
    value: 570,
    prefix: "+",
    suffix: "%",
    label: "Growth in people arriving from Google, half on half",
    source: "GSC — 86 clicks rising to 576",
  },
  {
    display: "No. 1",
    label: "For six of her local searches, including “osteopath ryde”",
    source: "Ahrefs — all ten tracked terms sit in the top four",
  },
  {
    value: 67,
    suffix: "%",
    label: "Of people who see her name in Google click it",
    source: "GSC — 113 clicks, position 1.0",
  },
];

const buildScope = [
  {
    title: "The brand and logo",
    body: "There was no identity to start from. We built the logo, the palette and the whole look, drawn from the Victorian townhouse the clinic works out of rather than the interchangeable clinical stock look most osteopathy practices end up with.",
  },
  {
    title: "The website",
    body: "Built around the conditions patients search for, not a list of treatments. Every core condition got a proper page of its own, with booking never more than one click away from any of them.",
  },
  {
    title: "Getting found",
    body: "We researched the Isle of Wight market before building anything, then shaped the pages, titles and content around what people there actually type. That research is why her click-through rates run well above what her positions alone would earn.",
  },
  {
    title: "Ads while search caught up",
    body: "Facebook and Instagram campaigns from day one, so the diary was filling while the search results matured. A new clinic cannot afford to wait six months for Google to catch up.",
  },
];

export default function LindStreetCaseStudyPage() {
  return (
    <>
      <ServiceSchema
        name="Lind Street Osteopathy Case Study"
        description="How a new single-practitioner osteopathy clinic in Ryde reached page one for every core local search within twelve months of opening."
        url="/case-studies/lind-street-osteopathy/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
        <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/3 translate-x-20 skew-x-[-12deg] bg-[var(--color-surface)] lg:block" />

        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <FadeUp>
                <Breadcrumb items={crumbs} />
                <p className="eyebrow mb-5 mt-6">Case study</p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="text-h1 mb-6 tracking-tight text-[var(--color-ink)]">
                  One osteopath. One room. Page one across her whole island.
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="max-w-xl space-y-6">
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Serena Gower-Johnson opened Lind Street Osteopathy in Ryde with no
                    logo, no website and no reputation online. Google had never
                    recorded a single search for her practice.
                  </p>
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Twelve months later, if you are on the Isle of Wight and you search
                    for an osteopath, you find her. Every core local search, page one.
                    This is how, and it is the same playbook whatever size your clinic
                    is.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                  <Button href="/free-clinic-audit/" size="lg">
                    Get a free clinic audit
                  </Button>
                  <Button href="/seo-for-clinics/" variant="outline" size="lg">
                    See how we do it
                  </Button>
                </div>
              </FadeUp>
            </div>

            <div className="relative lg:col-span-6">
              <FadeUp delay={0.2}>
                {/* In a device shell rather than a bare screenshot — the site is
                    the deliverable on this page, and a laptop says "this is a
                    real website" before anyone reads a word. */}
                <LaptopFrame>
                  <Image
                    src="/images/lind-street/homepage-banner.png"
                    alt="The Lind Street Osteopathy website, brand and site built by Clinic Evo"
                    width={1440}
                    height={810}
                    className="w-full"
                    priority
                  />
                </LaptopFrame>
                <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── If you think this isn't for you ──────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">Why this one is worth reading</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Proper marketing is not just for the big clinics
                </h2>
                <div className="space-y-5">
                  <p className="text-body-lg text-[var(--color-muted)]">
                    The most common thing we hear from smaller practices is that this
                    kind of work is for multi-practitioner clinics with budgets to
                    match. This project is the argument against that.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    One osteopath, opening cold, with no existing patients finding her
                    online and nothing for Google to go on. Within a year she was the
                    clinic that came up when her neighbours needed one.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <StatTiles items={headlineStats} />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we built ────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">What we built</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Everything a patient sees, built as one thing
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Brand, website, search and paid social were one job, not four
                  suppliers who never speak. For a new clinic that matters more than
                  for an established one, because there is nothing already working to
                  fall back on if a piece is missing.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-white">
                    <Image
                      src="/images/lind-street/serena-portrait.png"
                      alt="Serena Gower-Johnson, founder of Lind Street Osteopathy"
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-body font-semibold text-[var(--color-ink)]">
                      Serena Gower-Johnson
                    </p>
                    <p className="text-body-sm text-[var(--color-muted)]">
                      M.Ost, Registered Osteopath
                    </p>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Founder, Lind Street Osteopathy, Ryde
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {buildScope.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div className="card-surface flex h-full flex-col p-7 md:p-8">
                      <h3 className="text-h3 mb-3 text-[var(--color-ink)]">{item.title}</h3>
                      <p className="text-body text-[var(--color-muted)]">{item.body}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local rankings ───────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">The result</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  She owns the searches her patients actually make
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    These are the exact things somebody on the Isle of Wight types when
                    their back has gone and they want it seen this week. Every one of
                    them now sits in the top four, and six of them are at number one.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Notice the pattern in the change column. Almost every term moved
                    from second to first in the last period. That is what it looks like
                    when a clinic stops competing for its own area and starts owning
                    it.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    Two thirds of her local searches now return her clinic first.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <figure className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
                      Tracked keyword positions
                    </span>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Ahrefs, lindstreetosteopathy.co.uk
                    </p>
                  </figcaption>
                  {/* Cropped to the columns that carry meaning — the original
                      export trails six columns of N/A. */}
                  <Image
                    src="/images/case-studies/lind-street-ahrefs-keywords.png"
                    alt="Ahrefs keyword report for Lind Street Osteopathy showing position 1 for back pain osteopath ryde, osteopath ryde, women's health osteopath ryde, neck pain osteopath ryde, registered osteopath ryde and shoulder pain osteopath ryde"
                    width={1075}
                    height={1022}
                    className="w-full"
                  />
                </figure>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The finding ──────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The lesson worth stealing</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Patients search for the problem
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    Her best performing pages are not the ones named after treatments.
                    They are the ones named after problems. The fibromyalgia,
                    hypermobility and TMJ pages all outrank the general osteopathy and
                    sports massage pages.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Patients do not search for a category of treatment. They search for
                    the thing that is wrong with them, often in the exact words their GP
                    or a forum used. A page that names their condition meets them where
                    they are. A treatments page covering everything meets nobody.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    In a catchment this size that is the whole game. There is not enough
                    search volume to win on breadth, so the depth of each page is what
                    earns the visibility. It is also the cheapest advantage available to
                    a small clinic, because most competitors will not bother.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <figure className="m-0">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg">
                    <Image
                      src="/images/lind-street/clinic-sign.png"
                      alt="The brass Lind Street Osteopathy clinic sign in Ryde, listing back pain, neck pain, sciatica, arthritis and other conditions treated"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                  <figcaption className="mt-4 text-body-sm text-[var(--color-muted)]">
                    The plaque outside the clinic in Ryde. The conditions on it are the
                    same ones the website is built around, and the same ones bringing
                    patients in from Google.
                  </figcaption>
                </figure>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── What it means for the reader ─────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="eyebrow mb-5">What this means for your clinic</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  You are not competing with the internet. Just your postcode.
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    A single-practitioner clinic does not need thousands of visitors. It
                    needs the people within a fifteen-mile radius who are looking for an
                    osteopath this week to find it first. That is a far smaller and far
                    more winnable target than most clinic owners assume.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    Serena now has close to full coverage of her local market from a
                    standing start, inside a year. In a town the size of Ryde, that is
                    worth more than a national traffic figure would be.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    What made it work was doing the research before the build,
                    giving each condition a properly written page, and
                    running paid social alongside so the diary filled while search
                    matured.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    If a brand new clinic can take page one across its catchment in
                    twelve months, an established one with existing patients and
                    reviews is starting from further ahead than she was.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="card-surface p-8">
                  <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                    The same approach, applied to your clinic
                  </h3>
                  <p className="text-body mb-6 text-[var(--color-muted)]">
                    Brand, website, search visibility and paid social, all one job
                    with one team.
                  </p>
                  <div className="flex flex-col gap-4">
                    <ArrowLink href="/seo-for-clinics/">SEO for clinics</ArrowLink>
                    <ArrowLink href="/website-design-for-clinics/">
                      Clinic website design
                    </ArrowLink>
                    <ArrowLink href="/digital-marketing/">
                      Social and paid advertising
                    </ArrowLink>
                    <ArrowLink href="/case-studies/bodyfunction-clinic/">
                      See an established clinic scale up
                    </ArrowLink>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section !pb-10 bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-5 justify-center">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  What clinic owners ask us about this
                </h2>
              </div>
            </FadeUp>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="Starting from nothing, or starting again?"
        subheading="A free clinic audit shows you where your clinic stands in local search right now, what your competitors are ranking for that you are not, and what it would take to be the one patients find first."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}
