import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Local SEO for Physio Clinics | Clinic Evo",
  description:
    "A practical guide to improving local visibility for physiotherapy clinics, covering service pages, Google Business Profile, reviews and location signals.",
  path: "/resources/local-seo-for-physio-clinics/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "Local SEO for physio clinics", href: "/resources/local-seo-for-physio-clinics/" },
];

const faqs = [
  {
    question: "What is local SEO for a physio clinic?",
    answer: "Local SEO is the process of improving your clinic's visibility in location-based searches, for example, 'physiotherapist near me' or 'physio for back pain [town]'. It involves your Google Business Profile, website service pages, reviews and local citations.",
  },
  {
    question: "How long does local SEO take to work for a physio clinic?",
    answer: "Some improvements, like fixing Google Business Profile information, can have an effect within days or weeks. Building strong search rankings for competitive terms typically takes 3 to 6 months of consistent work.",
  },
  {
    question: "What is the most important local SEO factor for a physio?",
    answer: "For most physio clinics, a complete and active Google Business Profile combined with a steady stream of genuine recent reviews has the biggest immediate impact on local visibility.",
  },
  {
    question: "Should I create separate pages for each physiotherapy service?",
    answer: "Yes. Individual pages for each service and condition you treat, back pain, sports injuries, post-surgical rehab, women's health and so on, allow each page to rank for its own set of specific searches. One generic 'physiotherapy' page cannot compete for all of these.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Most new physiotherapy patients start with a local Google search. How visible your clinic is in those results has a direct impact on how many enquiries you receive each month.
      </p>
      <p>
        This guide covers the practical steps that help physio clinics improve their local search visibility and attract more of the right patients.
      </p>
    </>
  );

  const sections = [
    {
      title: "Why local SEO matters more than general SEO for physio clinics",
      content: (
        <>
          <p>Physiotherapy is an inherently local service. Patients want a clinic they can reach easily. The search behaviour reflects this, the majority of new patient searches include a location or a &quot;near me&quot; qualifier.</p>
          <p>This means local SEO, optimising your clinic to appear in location-based searches, is far more valuable than trying to rank nationally for generic terms.</p>
          <p>When a patient in your area searches for physiotherapy, you want your clinic to appear in:</p>
          <ul>
            <li>The Google map pack (the three local business results that appear above organic results)</li>
            <li>The organic search results directly below the map pack</li>
            <li>Google Maps when patients search directly there</li>
          </ul>
          <p>Appearing in all three gives your clinic significantly more visibility than competitors who only appear in one.</p>
        </>
      ),
    },
    {
      title: "Optimise your Google Business Profile",
      content: (
        <>
          <p>Your Google Business Profile (GBP) is the single most important local SEO asset for a physio clinic. It controls how your clinic appears in Google Maps and the local search pack.</p>
          <p>A fully optimised GBP includes:</p>
          <ul>
            <li>Accurate practice name, address and phone number, exactly as they appear on your website</li>
            <li>Correct and complete opening hours, including bank holidays</li>
            <li>A detailed, keyword-rich practice description</li>
            <li>All relevant service categories selected</li>
            <li>High-quality photos of the clinic, practitioners and facilities</li>
            <li>Regular posts, offers, news, condition guides or appointment prompts</li>
            <li>Responses to all reviews, positive and critical</li>
          </ul>
          <p>An incomplete or out-of-date GBP is a common reason why physio clinics with good reputations underperform in local search.</p>
        </>
      ),
    },
    {
      title: "Build condition and service pages that rank locally",
      content: (
        <>
          <p>Your website&apos;s service and condition pages are your primary local SEO content assets. Each page should target a specific treatment or condition, and include location-relevant context.</p>
          <p>For a physio clinic, high-value pages to build include:</p>
          <ul>
            <li>Back pain and lower back pain treatment</li>
            <li>Neck pain physiotherapy</li>
            <li>Sports injury rehabilitation</li>
            <li>Sciatica treatment</li>
            <li>Post-surgical physiotherapy</li>
            <li>Women&apos;s health physiotherapy</li>
            <li>Shoulder, knee and hip rehabilitation</li>
          </ul>
          <p>Each page should be written for patients first, explaining who the service is for, what to expect, and how to book, and optimised for search second, with relevant keywords appearing naturally in headings, body copy and page metadata.</p>
        </>
      ),
    },
    {
      title: "Build and manage your reviews",
      content: (
        <>
          <p>Reviews are a significant local SEO ranking factor and a critical trust signal. Physio clinics with more recent, positive reviews consistently outrank competitors in local search, all else being equal.</p>
          <p>A consistent review-building approach:</p>
          <ul>
            <li>Ask patients at the right moment, typically after a positive outcome or completed course of treatment</li>
            <li>Provide a direct link to your Google review form, not just a request to &quot;leave us a review&quot;</li>
            <li>Respond to every review, thank positive reviewers, handle negative ones professionally and promptly</li>
            <li>Make review requests a regular part of clinic operations, not a one-off campaign</li>
          </ul>
          <p>A drip of 3 to 5 new reviews per month, consistently maintained, will outperform a burst of 20 reviews followed by months of silence.</p>
        </>
      ),
    },
    {
      title: "Ensure consistent local citations",
      content: (
        <>
          <p>A local citation is any mention of your practice name, address and phone number (NAP) on another website. Google uses citation consistency as a trust signal, inconsistent NAP information across directories can suppress local rankings.</p>
          <p>Check and correct your clinic&apos;s information on:</p>
          <ul>
            <li>Google Business Profile</li>
            <li>Bing Places</li>
            <li>Apple Maps</li>
            <li>NHS directory listings (if applicable)</li>
            <li>Yell, Yelp and relevant healthcare directories</li>
            <li>Professional association member directories (CSP, HCPC, etc.)</li>
          </ul>
          <p>The practice name, address and phone number should be identical across all of these. Even small differences, abbreviated road names, old phone numbers, can affect how Google reconciles your location data.</p>
        </>
      ),
    },
    {
      title: "Internal linking and site structure for local SEO",
      content: (
        <>
          <p>Good internal linking between your service pages, condition pages and booking pages helps search engines understand the relationship between content and distribute ranking strength across the site.</p>
          <p>Useful internal linking patterns for physio clinics:</p>
          <ul>
            <li>Link from condition pages to the relevant service pages</li>
            <li>Link from each service page to the booking or contact page</li>
            <li>Link from the homepage to your key service areas</li>
            <li>Link between related conditions where relevant</li>
          </ul>
          <p>A well-linked site also improves the patient journey, helping visitors navigate naturally from interest to booking without dead ends.</p>
        </>
      ),
    },
    {
      title: "Track and improve local SEO over time",
      content: (
        <>
          <p>Local SEO is not a one-time task. Rankings change, competitors improve, and new search patterns emerge. Clinics that review their local visibility regularly and make incremental improvements compound their advantage over time.</p>
          <p>Metrics worth tracking monthly:</p>
          <ul>
            <li>Google Business Profile views and direction requests</li>
            <li>Search impressions and clicks for key terms</li>
            <li>Review volume and average score</li>
            <li>Position for key local search terms</li>
            <li>Enquiries attributed to organic search</li>
          </ul>
          <p>These numbers reveal whether local SEO is moving in the right direction and which areas need more attention.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Local SEO for healthcare clinics", href: "/resources/local-seo-for-healthcare-clinics/" },
    { label: "Physio business growth guide", href: "/resources/physio-business-growth/" },
    { label: "Physiotherapy marketing service", href: "/physiotherapy-marketing/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Local SEO guide for physios"
      title="Local SEO for physio clinics"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
