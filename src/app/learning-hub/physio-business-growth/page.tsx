import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Physio Business Growth: The Complete Guide",
  description:
    "A guide for physiotherapy clinic owners who want to improve patient acquisition, local visibility and diary flow.",
  path: "/learning-hub/physio-business-growth/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Learning Hub", href: "/learning-hub/" },
  { label: "Physio business growth", href: "/learning-hub/physio-business-growth/" },
];

const faqs = [
  {
    question: "What is the best way to grow a physiotherapy clinic?",
    answer: "There is no single answer, but a consistent approach involves improving the website and patient journey first, building strong local SEO, generating and managing reviews, and running patient reactivation alongside new acquisition campaigns.",
  },
  {
    question: "How do I get more physiotherapy referrals?",
    answer: "GP referrals are increasingly difficult to depend on. Building a strong online presence, good reviews, clear service pages, local search visibility, creates direct patient enquiry flow that does not rely on referral relationships.",
  },
  {
    question: "How long does it take to grow a physio clinic?",
    answer: "With the right foundations in place, Google Ads can produce new enquiries within days. SEO typically produces meaningful results over 3 to 6 months. Patient reactivation can generate bookings from an existing database relatively quickly.",
  },
  {
    question: "Should a physio clinic invest in a new website?",
    answer: "If the current website is unclear, slow, has weak service pages or is not generating enquiries, yes. A well-structured website is the foundation that all other marketing builds on. Without it, every other channel underperforms.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Growing a physiotherapy business requires more than clinical excellence. The clinics that grow most consistently are the ones that have a clear digital presence, a structured approach to patient acquisition, and a system for retaining the patients they work hard to attract.
      </p>
      <p>
        This guide covers the key areas of physio business growth, from website and SEO foundations through to patient recall and paid advertising.
      </p>
    </>
  );

  const sections = [
    {
      title: "What holds physio clinics back from growing",
      content: (
        <>
          <p>If you run a physiotherapy clinic, the barrier to growth is rarely your clinical work. It is the systems and the visibility around it that decide whether patients find you and come back.</p>
          <p>The most common growth blockers for physio clinics include:</p>
          <ul>
            <li>A website that is not structured around patient search behaviour</li>
            <li>Weak or inconsistent local search visibility</li>
            <li>No proactive approach to reviews or online reputation</li>
            <li>A booking journey that creates unnecessary friction</li>
            <li>No patient recall or reactivation system</li>
            <li>Reliance on GP referrals or word of mouth alone</li>
            <li>Marketing spend without proper tracking or measurement</li>
          </ul>
          <p>Identifying which of these applies to your clinic is the starting point for a more effective growth approach.</p>
        </>
      ),
    },
    {
      title: "Build a website that works as a patient acquisition tool",
      content: (
        <>
          <p>Most physio clinic websites are designed to look professional rather than to generate enquiries. The distinction matters.</p>
          <p>A physio website that performs as a growth tool needs:</p>
          <h3>Specific service and condition pages</h3>
          <p>Patients search for help with specific problems, back pain, sports injuries, post-surgical rehab, women&apos;s health physio. A website with one generic &quot;physiotherapy&quot; page misses all of these searches. Individual pages for each service and condition can each rank and convert independently.</p>
          <h3>A clear patient journey</h3>
          <p>From landing on the page to making an enquiry, the journey should be intuitive. Phone number visible, booking link prominent, clear information about what to expect from a first appointment.</p>
          <h3>Trust signals that reassure</h3>
          <p>Practitioner profiles with qualifications, patient reviews, professional associations, and transparency about pricing all reduce the hesitation that stops potential patients from booking.</p>
        </>
      ),
    },
    {
      title: "Improve local search visibility for physiotherapy",
      content: (
        <>
          <p>The majority of new physio patients come from local Google searches. When someone searches &quot;physiotherapist near me&quot; or &quot;sports physio [town]&quot;, they are typically ready to book. Appearing well in those results is one of the highest-value outcomes in physio marketing.</p>
          <p>Key local SEO foundations for physio clinics:</p>
          <ul>
            <li>Google Business Profile, complete, accurate, regularly updated with posts and photos</li>
            <li>Service pages that include location-specific language and relevant treatment terms</li>
            <li>Reviews, recent, genuine and responded to by the practice</li>
            <li>Local citations, consistent practice name, address and phone number across directories</li>
            <li>FAQs and content that answers the questions patients search before booking</li>
          </ul>
          <p>Clinics that take local SEO seriously can significantly outrank competitors with larger practices simply by being more thorough with the fundamentals.</p>
        </>
      ),
    },
    {
      title: "Use Google Ads to fill diary gaps quickly",
      content: (
        <>
          <p>For physio clinics with available appointment capacity, Google Search Ads can be one of the fastest ways to increase patient enquiries.</p>
          <p>The most effective physio Google Ads campaigns focus on:</p>
          <ul>
            <li>High-intent searches: condition + location, treatment type + area</li>
            <li>Ads that match the search closely, not generic &quot;award-winning physio&quot; copy</li>
            <li>Landing pages specific to the searched condition or service</li>
            <li>Call and booking extensions that make the next step obvious</li>
            <li>Conversion tracking linked to actual enquiries and bookings</li>
          </ul>
          <p>Without proper targeting and landing pages, Google Ads for physio can become expensive quickly. With them, it can produce reliable, measurable patient acquisition.</p>
        </>
      ),
    },
    {
      title: "Manage and grow your review presence",
      content: (
        <>
          <p>Reviews are both a trust signal and a local SEO factor. A physio clinic with 80 recent, positive Google reviews will typically rank better and convert more enquiries than a competitor with 15 old reviews.</p>
          <p>Building a strong review profile requires:</p>
          <ul>
            <li>Asking patients at the right moment, after a positive outcome or completed course</li>
            <li>Making it easy, a direct link to the review form, not a general instruction to leave feedback</li>
            <li>Responding to all reviews, positive and negative, professionally and promptly</li>
            <li>Never incentivising reviews or using third-party services to generate fake ones</li>
          </ul>
          <p>A steady drip of genuine reviews over time is more effective and more credible than a large number appearing at once.</p>
        </>
      ),
    },
    {
      title: "Grow through patient retention and recall",
      content: (
        <>
          <p>Physio clinics often treat patients for an episode of care, then lose them. The patient recovers, life returns to normal, and they do not think about physio again until the next injury or flare-up, at which point they may search online and find a different clinic.</p>
          <p>A patient recall system prevents this. It identifies past patients who may benefit from returning, maintenance appointments, seasonal check-ins, follow-up after a resolved episode, and reaches out with relevant, clinically appropriate communication.</p>
          <p>For a physio clinic with a database of 300 past patients, even a 10 to 15 per cent reactivation rate can meaningfully increase booked appointments with very little acquisition cost.</p>
        </>
      ),
    },
    {
      title: "Hiring, capacity and the growth ceiling",
      content: (
        <>
          <p>Marketing can only grow a clinic up to the limits of its clinical capacity. If the practice is already fully booked, the answer is not more marketing, it is more capacity: an additional practitioner, extended hours, or better diary management.</p>
          <p>Conversely, marketing investment makes most sense when there is available capacity to fill. A clinic with two practitioners and significant diary gaps is a good candidate for a more active acquisition approach.</p>
          <p>Growth planning for a physio clinic should take both sides of this into account, building the patient pipeline and ensuring the clinical capacity exists to receive it.</p>
        </>
      ),
    },
    {
      title: "Tracking physio business growth",
      content: (
        <>
          <p>You cannot improve what you do not measure. Physio business growth should be tracked with a small set of consistent metrics:</p>
          <ul>
            <li>New patient enquiries per month and source</li>
            <li>Conversion rate from enquiry to booked appointment</li>
            <li>Average number of sessions per patient</li>
            <li>Patient lifetime value</li>
            <li>Diary utilisation rate</li>
            <li>Review volume and average score</li>
          </ul>
          <p>These numbers, reviewed monthly, give a clear picture of whether the clinic is growing, where patients are coming from, and where they are being lost.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "How to get more patients to your clinic", href: "/learning-hub/how-to-get-more-patients-to-your-clinic/" },
    { label: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
    { label: "Google Ads for physios", href: "/learning-hub/google-ads-for-physios/" },
    { label: "Physiotherapy marketing service", href: "/physiotherapy-marketing/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      heroImage="/images/resources/physio-growth.jpg"
      eyebrow="Physio business growth guide"
      title="Physio business growth: the complete guide"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
