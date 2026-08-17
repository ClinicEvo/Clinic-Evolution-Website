import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Google Ads for Chiropractors",
  description:
    "A chiropractic-specific guide to using Google Ads for high-intent patient searches, new patient acquisition and campaign management.",
  path: "/learning-hub/google-ads-for-chiropractors/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Learning Hub", href: "/learning-hub/" },
  { label: "Google Ads for chiropractors", href: "/learning-hub/google-ads-for-chiropractors/" },
];

const faqs = [
  {
    question: "Are Google Ads effective for chiropractic clinics?",
    answer: "Yes, particularly for new patient acquisition. Chiropractic searches are high intent, people searching for a chiropractor near them are typically ready to book. Well-targeted ads that reach these searches and send traffic to relevant landing pages produce consistent results.",
  },
  {
    question: "What keywords should a chiropractor target with Google Ads?",
    answer: "The best-performing chiropractic Google Ads keywords combine a condition or treatment with a location: 'chiropractor near me', 'back pain chiropractor [town]', 'chiropractic for sciatica [area]'. Specific terms outperform broad ones in both cost and conversion quality.",
  },
  {
    question: "How do I get my chiropractic Google Ads to convert better?",
    answer: "The most impactful improvements are usually on the landing page: match it to the specific condition searched, make booking obvious and easy, include practitioner credentials, and answer the questions a first-time patient would have.",
  },
  {
    question: "Should a chiropractic clinic use Google Ads or SEO?",
    answer: "Both have a role. SEO builds long-term visibility at lower ongoing cost but takes time. Google Ads can generate enquiries quickly but requires ongoing spend. Most clinics benefit from both, SEO as a foundation, ads for faster results and diary gap management.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Patients searching for a chiropractor online are typically in pain and ready to book. Google Ads places your clinic in front of those patients at the exact moment they are looking.
      </p>
      <p>
        This guide explains how chiropractic Google Ads campaigns work and what it takes to make them generate consistent, high-quality patient enquiries.
      </p>
    </>
  );

  const sections = [
    {
      title: "Why chiropractic is well-suited to Google Ads",
      content: (
        <>
          <p>Chiropractic is one of the strongest categories for Google Search Ads. The reasons are:</p>
          <ul>
            <li>High patient intent: people searching for a chiropractor near them are not browsing, they are looking for help with a specific problem</li>
            <li>Local demand: most chiropractic searches include location intent, which is exactly what Google Ads local targeting is designed for</li>
            <li>Relatively contained competition: in most UK towns, chiropractic Google Ads has fewer active advertisers than categories like accountancy or legal services</li>
            <li>Clear commercial value: a new chiropractic patient is worth significantly more than the cost of a click, making the maths work for well-run campaigns</li>
          </ul>
          <p>The challenge is not whether Google Ads works for chiropractic, it is setting campaigns up to target the right searches and convert the traffic they generate.</p>
        </>
      ),
    },
    {
      title: "Keyword strategy for chiropractic Google Ads",
      content: (
        <>
          <p>Keyword selection is the most important decision in a chiropractic Google Ads campaign. The wrong keywords produce irrelevant clicks that cost money without producing patients.</p>
          <p>The most effective chiropractic keywords combine intent signals:</p>
          <ul>
            <li>Condition + location: &quot;back pain chiropractor [town]&quot;, &quot;neck pain chiro [area]&quot;</li>
            <li>Service + location: &quot;chiropractor near me&quot;, &quot;chiropractic clinic [city]&quot;</li>
            <li>Condition-specific: &quot;chiropractic for sciatica&quot;, &quot;chiropractic for headaches&quot;</li>
          </ul>
          <p>Negative keywords are equally important. Excluding searches for NHS services, chiropractic courses, chiropractic jobs and unrelated health topics prevents budget being spent on non-patient traffic.</p>
        </>
      ),
    },
    {
      title: "Addressing patient hesitation in chiropractic ads",
      content: (
        <>
          <p>Chiropractic has a specific characteristic compared to physio or osteopathy: some patients have concerns or preconceptions before booking. They may have questions about safety, whether it will hurt, or whether it is appropriate for their specific issue.</p>
          <p>Effective chiropractic ad copy can address these concerns directly:</p>
          <ul>
            <li>Mention GCC registration (the professional regulator) as a trust signal</li>
            <li>Reference the specific condition in the headline, &quot;Back pain? Registered chiropractors in [town]&quot;</li>
            <li>Use ad extensions to highlight new patient offers, free consultations or transparent pricing</li>
          </ul>
          <p>A landing page that then continues to address patient questions, what to expect, who the practitioners are, what the first appointment involves, will convert ad traffic significantly better than a generic clinic page.</p>
        </>
      ),
    },
    {
      title: "Chiropractic Google Ads campaign structure",
      content: (
        <>
          <p>A well-structured chiropractic Google Ads account makes it easier to optimise performance and allocate budget effectively.</p>
          <p>A practical structure for a chiropractic clinic:</p>
          <ul>
            <li><strong>Campaign 1:</strong> Brand searches (your clinic name), protect against competitors bidding on your name</li>
            <li><strong>Campaign 2:</strong> Core chiropractic searches, &quot;chiropractor near me&quot;, &quot;chiropractor [town]&quot;</li>
            <li><strong>Campaign 3:</strong> Condition-specific searches, back pain, sciatica, neck pain, headaches</li>
          </ul>
          <p>Separating these into distinct campaigns allows independent budget control and cleaner performance data. A condition campaign that converts well can be given more budget without cannibalising core searches.</p>
        </>
      ),
    },
    {
      title: "Landing pages for chiropractic ad traffic",
      content: (
        <>
          <p>The landing page is often the difference between a profitable chiropractic Google Ads campaign and an expensive one.</p>
          <p>Key principles for chiropractic landing pages:</p>
          <ul>
            <li>Match the landing page to the ad and search: a back pain ad should go to a back pain page</li>
            <li>Keep the booking path short, phone number and booking form should be visible without scrolling</li>
            <li>Answer the questions a first-time patient would have: what happens at the first appointment, how many sessions, what the cost is</li>
            <li>Include GCC registration and practitioner credentials prominently</li>
            <li>Use genuine reviews and patient outcomes where professionally appropriate</li>
            <li>Optimise for mobile, most local searches happen on phones</li>
          </ul>
          <p>A patient who arrives from an ad has strong intent. The landing page job is to confirm they are in the right place and make it easy to take the next step.</p>
        </>
      ),
    },
    {
      title: "Measuring chiropractic Google Ads performance",
      content: (
        <>
          <p>Tracking is non-negotiable for any paid campaign. Without it, you cannot tell which keywords are producing patient enquiries and which are simply producing clicks.</p>
          <p>Set up conversion tracking for:</p>
          <ul>
            <li>Form submissions from the landing page</li>
            <li>Phone calls from both the ad and the landing page</li>
            <li>Online booking completions</li>
          </ul>
          <p>Review performance weekly initially, then monthly once the campaign has stabilised. The key metrics are cost per enquiry (not cost per click), enquiry to booking conversion rate, and return on ad spend compared to patient lifetime value.</p>
          <p>Campaigns optimised against real enquiry data consistently outperform those managed by click data alone.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "Google Ads for clinics service", href: "/google-ads-for-clinics/" },
    { label: "Google Ads for physios", href: "/learning-hub/google-ads-for-physios/" },
    { label: "How to market your chiropractic practice", href: "/learning-hub/how-to-market-your-chiropractic-practice/" },
    { label: "Chiropractic marketing service", href: "/chiropractic-marketing/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      schemaDescription={"A chiropractic-specific guide to using Google Ads for high-intent patient searches, new patient acquisition and campaign management."}
      heroImage="/images/resources/google-ads-chiro.jpg"
      eyebrow="Google Ads guide for chiropractors"
      title="Google Ads for chiropractors"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
