import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Chiropractic Marketing Case Study | Clinic Evo",
  description:
    "An overview of the digital marketing approach Clinic Evo applies to chiropractic clinics, covering website structure, SEO, patient journey and enquiry growth.",
  path: "/resources/chiropractic-marketing-case-study/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "Chiropractic marketing case study", href: "/resources/chiropractic-marketing-case-study/" },
];

const faqs = [
  {
    question: "What does a chiropractic marketing case study involve?",
    answer: "A chiropractic marketing case study examines how a specific clinic improved its digital presence, patient enquiry flow, local search visibility or conversion rate through structured marketing work. It shows what was done, why, and what changed as a result.",
  },
  {
    question: "What are the most common marketing problems for chiropractic clinics?",
    answer: "The most common issues are: a website that does not address patient concerns effectively, weak local search visibility, inconsistent or absent review management, and no patient reactivation system for past patients.",
  },
  {
    question: "How long does it take to see results from chiropractic marketing?",
    answer: "Google Ads can produce enquiries quickly. SEO and website improvements typically take 3 to 6 months to show meaningful ranking and traffic changes. Patient reactivation can generate bookings from an existing database relatively quickly with the right approach.",
  },
  {
    question: "Does Clinic Evo work with chiropractic clinics?",
    answer: "Yes. Clinic Evo supports osteopathy, physiotherapy and chiropractic clinics with website design, SEO, Google Ads and patient reactivation. Work is adapted to the specific clinical and marketing context of each clinic.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Chiropractic clinics face specific challenges in digital marketing: patient hesitation before booking, a need to communicate clinical credibility clearly, and significant reliance on local search in competitive markets.
      </p>
      <p>
        This resource outlines the Clinic Evo approach to chiropractic clinic marketing and what effective digital growth looks like in practice for this type of clinic.
      </p>
    </>
  );

  const sections = [
    {
      title: "The chiropractic marketing challenge",
      content: (
        <>
          <p>Chiropractic clinics occupy an interesting position in the private healthcare market. The clinical outcomes are well-evidenced for many musculoskeletal conditions, but public awareness and trust varies significantly.</p>
          <p>This creates a specific marketing challenge. A chiropractic website needs to do more than list services. It needs to educate, reassure and build credibility before a patient is ready to book.</p>
          <p>The clinics that do this well, that explain clearly what chiropractic helps with, who the practitioners are, what patients can expect, and why the service can be trusted, consistently attract more enquiries than those with generic, thin websites.</p>
        </>
      ),
    },
    {
      title: "What Clinic Evo reviews in a chiropractic audit",
      content: (
        <>
          <p>When Clinic Evo reviews a chiropractic clinic&apos;s digital presence, the audit covers several interconnected areas.</p>
          <h3>Website structure and content</h3>
          <p>Are there dedicated pages for the conditions the clinic treats? Does the website explain who the service is for and what to expect? Are GCC registration and practitioner credentials visible? Is the booking journey clear?</p>
          <h3>Local search visibility</h3>
          <p>How does the clinic appear for local chiropractic searches? Is the Google Business Profile complete and active? How does the review profile compare to local competitors?</p>
          <h3>Patient journey and conversion</h3>
          <p>Is the path from visiting the website to making an enquiry simple and frictionless? Do calls to action appear at the right points? Is the booking process easy to complete on mobile?</p>
          <h3>Past patient engagement</h3>
          <p>Does the clinic have any system for following up with past patients? Is there a patient reactivation approach in place?</p>
        </>
      ),
    },
    {
      title: "Common improvements for chiropractic clinic websites",
      content: (
        <>
          <p>Across chiropractic clinic audits, several issues appear consistently.</p>
          <ul>
            <li>A single general &quot;chiropractic&quot; page where individual condition pages would perform far better</li>
            <li>Practitioner pages that list qualifications without explaining clinical approach, interests or communication style</li>
            <li>A booking journey that requires too many steps or directs patients to a third-party system without context</li>
            <li>No explanation of what the first appointment involves, which is one of the most common patient hesitation points</li>
            <li>A Google Business Profile that is incomplete, lacking recent photos or posts</li>
            <li>A review profile that is sparse or has unanswered negative reviews visible</li>
          </ul>
          <p>These are not problems unique to any one clinic. They are patterns that affect a large proportion of chiropractic practices in the UK. Addressing them creates a meaningfully stronger digital foundation.</p>
        </>
      ),
    },
    {
      title: "How SEO improvement works for chiropractic clinics",
      content: (
        <>
          <p>SEO for a chiropractic clinic focuses primarily on local visibility. The goal is to appear in the searches patients make when they are looking for chiropractic care in a specific location.</p>
          <p>For most chiropractic clinics, the highest-priority SEO work includes:</p>
          <ul>
            <li>Creating dedicated pages for each condition and service area</li>
            <li>Improving Google Business Profile completeness and review frequency</li>
            <li>Strengthening internal linking between condition, service and booking pages</li>
            <li>Building consistent local citations across relevant directories</li>
            <li>Improving page titles, headings and metadata to match patient search terms</li>
          </ul>
          <p>SEO changes for a chiropractic clinic do not produce overnight results. But they build a search presence that grows over time and generates enquiries without ongoing ad spend.</p>
        </>
      ),
    },
    {
      title: "Patient reactivation for chiropractic clinics",
      content: (
        <>
          <p>Many chiropractic clinics have a database of past patients who completed a course of treatment and then drifted away. Some of these patients may have had their issue recur, may be experiencing a new problem, or may benefit from maintenance care.</p>
          <p>A structured patient reactivation approach, identifying suitable past patients and communicating with them at the right time, can generate a meaningful number of booked appointments from an existing database.</p>
          <p>For chiropractic, where patients often present with recurring MSK conditions, the clinical rationale for recall is often strong. The challenge is implementing a system that is timely, clinically appropriate and easy to manage operationally.</p>
        </>
      ),
    },
    {
      title: "What results chiropractic clinics can expect",
      content: (
        <>
          <p>The impact of a structured approach to chiropractic digital marketing varies by clinic, market and starting point. In general, clinics working with Clinic Evo can expect:</p>
          <ul>
            <li>A clearer, more professionally structured website that better reflects clinical quality</li>
            <li>Improved visibility in local chiropractic searches over time</li>
            <li>A more consistent flow of new patient enquiries</li>
            <li>Higher conversion from website visitor to enquiry</li>
            <li>Improved review profile and local trust signals</li>
            <li>A patient reactivation system that runs without heavy manual effort</li>
          </ul>
          <p>These outcomes are built incrementally. The goal is a stronger digital foundation that supports sustainable clinic growth, not a short-term traffic spike.</p>
        </>
      ),
    },
    {
      title: "How to assess your chiropractic clinic's digital position",
      content: (
        <>
          <p>The fastest way to understand where your chiropractic clinic stands digitally is to search for what your patients would search. Try:</p>
          <ul>
            <li>&quot;chiropractor [your town]&quot;, where do you appear?</li>
            <li>&quot;back pain chiropractor near me&quot;, are you visible?</li>
            <li>Your own practice name, does the Google Business Profile look complete and current?</li>
          </ul>
          <p>Then look at your own website as a new patient would. Is it immediately clear what you offer and who it is for? Is booking obvious? Are there trust signals and practitioner information visible without hunting?</p>
          <p>These two exercises will quickly reveal the main gaps. A Clinic Evo free clinic audit can then provide a more structured assessment of where the strongest opportunities are.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "Bodyfunction Clinic case study", href: "/case-studies/bodyfunction-clinic/" },
    { label: "Chiropractic marketing service", href: "/chiropractic-marketing/" },
    { label: "How to market your chiropractic practice", href: "/resources/how-to-market-your-chiropractic-practice/" },
    { label: "Google Ads for chiropractors", href: "/resources/google-ads-for-chiropractors/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Chiropractic marketing"
      title="Chiropractic marketing case study"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
