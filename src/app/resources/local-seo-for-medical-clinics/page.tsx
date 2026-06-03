import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Local SEO for Medical Clinics | Clinic Evo",
  description:
    "A guide to the core SEO foundations medical and private healthcare clinics need to strengthen local discovery.",
  path: "/resources/local-seo-for-medical-clinics/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "Local SEO for medical clinics", href: "/resources/local-seo-for-medical-clinics/" },
];

const faqs = [
  {
    question: "What is local SEO for a medical clinic?",
    answer: "Local SEO for a medical clinic is the process of improving visibility in location-specific searches. When patients search for private medical care near them, local SEO determines whether your clinic appears, and how prominently.",
  },
  {
    question: "How does Google rank medical clinics in local search?",
    answer: "Google uses several signals: proximity to the searcher, relevance of the clinic profile and website to the search query, and authority signals including reviews, citations and website quality. Medical clinics also face higher content quality expectations due to YMYL classification.",
  },
  {
    question: "Can a small medical clinic compete with large chains in local search?",
    answer: "Yes, often. Local search rewards proximity and relevance, not just authority. A small, well-optimised independent clinic with good reviews and accurate local information can outrank a chain clinic with a weaker local presence.",
  },
  {
    question: "Should medical clinic pages be written by the clinicians?",
    answer: "The clinical content and accuracy should be reviewed by a clinician. The structure, SEO targeting and patient-facing language often benefits from specialist input. Both clinical accuracy and patient relevance are important.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Private medical clinics face a distinctive challenge in online visibility: patients expect clinical authority and trust, while search engines demand relevance and local signals.
      </p>
      <p>
        This guide covers the core local SEO foundations that private medical clinics need to improve their visibility in the searches that matter most.
      </p>
    </>
  );

  const sections = [
    {
      title: "The local search opportunity for medical clinics",
      content: (
        <>
          <p>Private medical care is a growing market. More patients are seeking quicker access to specialists, diagnostic tests, and consultations than the NHS can always provide.</p>
          <p>Many of those patients begin their search on Google. &quot;Private GP near me&quot;, &quot;private orthopaedic surgeon [city]&quot;, &quot;private dermatology clinic [area]&quot;, these are searches with high intent and real commercial value.</p>
          <p>Medical clinics that invest in local SEO can capture a consistent flow of these enquiries. Those that do not will see patients choosing better-optimised competitors, even if the clinical quality is equivalent.</p>
        </>
      ),
    },
    {
      title: "Google Business Profile for medical clinics",
      content: (
        <>
          <p>The Google Business Profile is the gateway to local search visibility. For a medical clinic, it needs particular attention:</p>
          <ul>
            <li>Practice name exactly as registered, avoid keyword stuffing</li>
            <li>Primary category set to the most relevant medical specialty</li>
            <li>All relevant secondary categories added (e.g., private GP, specialist clinic)</li>
            <li>Full opening hours including out-of-hours availability if offered</li>
            <li>A practice description that clearly states specialisms and location</li>
            <li>Professional, high-quality photos of the clinic environment</li>
            <li>Regular posts with clinical news, seasonal health advice or appointment availability</li>
          </ul>
          <p>For multi-practitioner clinics, individual practitioner profiles, where offered by Google, can supplement the main listing and increase visibility for specialist searches.</p>
        </>
      ),
    },
    {
      title: "Medical clinic website pages for local search",
      content: (
        <>
          <p>A medical clinic website needs individual pages for each specialty, service and key condition treated. One generic &quot;our services&quot; page is not sufficient to rank for the range of searches your patients make.</p>
          <p>Each page should:</p>
          <ul>
            <li>Be written around a specific specialty, service or condition</li>
            <li>Name the condition or service clearly in the page title, H1 and opening paragraph</li>
            <li>Include location-specific language where relevant</li>
            <li>Clearly explain what the patient can expect, referral pathways, appointment format, outcomes</li>
            <li>Name and link to the relevant practitioner profile</li>
            <li>Include a clear call to action with a direct booking or enquiry route</li>
          </ul>
          <p>Google assesses medical pages for expertise, authority and trustworthiness. Thin, generic pages will not rank well. Well-researched, clinically accurate pages that serve patient needs consistently outperform them.</p>
        </>
      ),
    },
    {
      title: "Managing reviews for medical clinics",
      content: (
        <>
          <p>Reviews for medical clinics require careful management. They are a significant local SEO ranking signal, but they also carry professional and regulatory sensitivities that require a thoughtful approach.</p>
          <p>Key principles for medical clinic review management:</p>
          <ul>
            <li>Responses must never confirm or deny details of a patient&apos;s care</li>
            <li>Negative reviews should be handled professionally, take complaints offline promptly</li>
            <li>Never incentivise reviews in exchange for discounts or services</li>
            <li>Make the review request process simple, a direct link, not a complex instruction</li>
            <li>Ask at an appropriate point in the patient journey, not immediately after a difficult consultation</li>
          </ul>
          <p>Despite these sensitivities, reviews remain important. A medical clinic that actively and professionally manages its review presence will benefit from both better local rankings and stronger patient trust.</p>
        </>
      ),
    },
    {
      title: "E-E-A-T and medical content standards",
      content: (
        <>
          <p>Google applies higher content quality standards to medical websites through its E-E-A-T framework: Experience, Expertise, Authoritativeness and Trustworthiness.</p>
          <p>For a medical clinic, this means:</p>
          <ul>
            <li>Content should be written or reviewed by qualified clinicians</li>
            <li>Practitioner credentials should be clearly stated on relevant pages</li>
            <li>GMC registration numbers and relevant professional body memberships should be visible</li>
            <li>Clinical claims should be accurate and within professional guidelines</li>
            <li>Contact information, privacy policy and registration details should be readily accessible</li>
          </ul>
          <p>Clinics that invest in credibility signals, not just keyword placement, tend to perform better in medical search than those focused on technical SEO alone.</p>
        </>
      ),
    },
    {
      title: "Local citations and directories for medical clinics",
      content: (
        <>
          <p>Consistent mention of your practice across relevant directories supports local search performance. For medical clinics, this includes both general and healthcare-specific listings.</p>
          <p>Priority citations for medical clinics:</p>
          <ul>
            <li>Google Business Profile (primary)</li>
            <li>NHS Find a Service and referral directories where applicable</li>
            <li>Private Healthcare Information Network (PHIN), mandatory for most regulated private providers</li>
            <li>Doctify, Top Doctors or similar healthcare review platforms</li>
            <li>Professional body member directories (GMC, BMA, relevant specialty societies)</li>
            <li>General business directories: Bing, Yell, Apple Maps</li>
          </ul>
          <p>All listings should have identical contact information. Any variation, an old address, a different phone number, can weaken local SEO performance.</p>
        </>
      ),
    },
    {
      title: "Measuring local SEO success for medical clinics",
      content: (
        <>
          <p>Local SEO performance for a medical clinic should be measured consistently. Useful monthly metrics include:</p>
          <ul>
            <li>Google Business Profile views, search impressions and click actions</li>
            <li>Direction requests and click-to-call events</li>
            <li>Organic search impressions and clicks for key service and location terms</li>
            <li>Review volume and average rating over time</li>
            <li>New patient enquiries attributed to organic or local search</li>
          </ul>
          <p>Tracking these over time gives a clear view of whether the investment in local SEO is producing improved visibility and patient contact, and where further work is most needed.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Local SEO for healthcare clinics", href: "/resources/local-seo-for-healthcare-clinics/" },
    { label: "How to market a private practice online", href: "/resources/how-to-market-a-private-practice-online/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Medical clinic SEO guide"
      title="Local SEO for medical clinics"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
