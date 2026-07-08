import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "Google Ads for Physios",
  description:
    "A guide to how physiotherapy clinics can use Google Ads to generate relevant patient enquiries and avoid common campaign mistakes.",
  path: "/learning-hub/google-ads-for-physios/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Learning Hub", href: "/learning-hub/" },
  { label: "Google Ads for physios", href: "/learning-hub/google-ads-for-physios/" },
];

const faqs = [
  {
    question: "Do Google Ads work for physiotherapy clinics?",
    answer: "Yes, when done correctly. Physio searches are high intent, patients are actively looking for treatment. Well-targeted Google Ads campaigns for specific conditions and locations can produce a consistent flow of new patient enquiries.",
  },
  {
    question: "How much should a physio clinic spend on Google Ads?",
    answer: "Budget depends on your location, local competition, and how many new patients you want per month. Many physio clinics see results starting from a few hundred pounds per month in competitive areas. The key is efficient targeting rather than high spend.",
  },
  {
    question: "What is a good cost per enquiry for a physio Google Ads campaign?",
    answer: "This varies significantly by location and condition. The right benchmark is the patient lifetime value, if a new patient is worth several hundred pounds over time, a cost per enquiry in the range of £15 to £50 is typically justifiable.",
  },
  {
    question: "Should I manage Google Ads myself or use an agency?",
    answer: "Self-managing is possible but time-consuming. Poorly managed campaigns waste budget quickly on irrelevant clicks. A specialist who understands healthcare search behaviour will typically produce better results and lower cost per enquiry than a self-managed campaign.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Google Ads can put your physiotherapy clinic in front of patients who are actively searching for the treatment you offer, right at the moment they are ready to book.
      </p>
      <p>
        This guide explains how physio Google Ads campaigns work, what makes them effective, and how to avoid the most common mistakes.
      </p>
    </>
  );

  const sections = [
    {
      title: "Why Google Ads works well for physiotherapy",
      content: (
        <>
          <p>Physiotherapy is a high-intent category. When someone searches for &quot;physio for shoulder pain near me&quot; or &quot;sports injury physiotherapist [town]&quot;, they are typically not browsing for information, they want to find and book an appointment.</p>
          <p>This is what makes Google Ads particularly effective for physio clinics. Unlike social media advertising, where you interrupt people who are doing something else, search ads appear at the exact moment someone is actively looking for what you offer.</p>
          <p>The result is a more qualified audience. The challenge is reaching that audience efficiently and converting them once they arrive on your website.</p>
        </>
      ),
    },
    {
      title: "The fundamentals of a physio Google Ads campaign",
      content: (
        <>
          <p>A well-structured physio Google Ads campaign has several key components.</p>
          <h3>Keyword targeting</h3>
          <p>The best keywords for physio Google Ads combine a condition or service with a location signal, &quot;sports physio London&quot;, &quot;physio for back pain [town]&quot;, &quot;shoulder physiotherapist near me&quot;. These searches have clear intent and manageable competition.</p>
          <p>Generic terms like &quot;physiotherapy&quot; attract a broad audience and tend to have lower conversion rates at higher cost. Condition-specific and location-specific terms perform better for most clinic campaigns.</p>
          <h3>Ad copy</h3>
          <p>Physio ad copy should match what the patient searched for. An ad shown to someone searching for &quot;knee injury physio&quot; should mention knee injuries, not generic clinic messaging. Specific, relevant copy produces higher click-through rates.</p>
          <h3>Landing pages</h3>
          <p>Sending all ad traffic to the homepage is one of the most common physio Google Ads mistakes. Each ad group should send traffic to a page specifically relevant to the searched condition, a back pain page for back pain searches, a sports injury page for sports injury searches.</p>
          <h3>Call and location extensions</h3>
          <p>Many patients searching for a physio on mobile will call directly. Call extensions in Google Ads display your phone number alongside the ad, enabling a one-tap call. Location extensions show your practice address and can increase click-through rate for local searches.</p>
        </>
      ),
    },
    {
      title: "Common physio Google Ads mistakes",
      content: (
        <>
          <p>Many physio clinics have tried Google Ads and concluded it does not work. Often, the campaigns were set up in ways that made failure likely.</p>
          <ul>
            <li><strong>Too broad a keyword match:</strong> Broad match keywords can trigger ads for irrelevant searches, wasting budget on clicks from people who are not potential patients</li>
            <li><strong>Generic landing pages:</strong> Sending ad traffic to the homepage or a generic services page reduces the relevance of the visit and lowers conversion rates</li>
            <li><strong>No negative keywords:</strong> Excluding irrelevant search terms (NHS, jobs, courses) prevents budget being spent on non-patient searches</li>
            <li><strong>No conversion tracking:</strong> Without tracking which clicks become enquiries or calls, it is impossible to know whether the campaign is working</li>
            <li><strong>Stopping too early:</strong> Google Ads campaigns need data to optimise. Stopping after a few weeks rarely gives the campaign enough time to perform</li>
          </ul>
        </>
      ),
    },
    {
      title: "Setting a physio Google Ads budget",
      content: (
        <>
          <p>The right Google Ads budget for a physio clinic depends on several factors: your local market competition, the average cost per click for the searches you target, and the number of new patients you want per month.</p>
          <p>A simple way to work backwards:</p>
          <ul>
            <li>Estimate how much a new patient is worth over time</li>
            <li>Decide how many new patients per month you want from ads</li>
            <li>Estimate a realistic click-to-enquiry conversion rate (typically 5 to 15 per cent for a good landing page)</li>
            <li>Check approximate cost per click for your target searches</li>
          </ul>
          <p>This gives a starting budget range. It is better to start with a focused, well-targeted campaign on a modest budget than a broad campaign with a large budget and poor structure.</p>
        </>
      ),
    },
    {
      title: "Landing pages that convert physio ad traffic",
      content: (
        <>
          <p>The landing page is where Google Ads campaigns win or lose. A well-targeted ad that sends traffic to a poor landing page wastes the click.</p>
          <p>An effective physio Google Ads landing page:</p>
          <ul>
            <li>Matches the ad copy and search query, if someone searched for &quot;sports physio near me&quot;, the page should be about sports physiotherapy</li>
            <li>States clearly who the service is for and what it helps</li>
            <li>Includes a clear, prominent booking or enquiry call to action above the fold</li>
            <li>Shows practitioner credentials and relevant trust signals</li>
            <li>Answers the most common questions a patient would have before booking</li>
            <li>Loads fast, especially on mobile</li>
          </ul>
          <p>The landing page should make booking feel like the obvious next step, not a hunt.</p>
        </>
      ),
    },
    {
      title: "Tracking and measuring physio Google Ads performance",
      content: (
        <>
          <p>Without conversion tracking, you are flying blind. A physio Google Ads campaign needs to track which clicks result in actual patient enquiries, not just website visits.</p>
          <p>Set up conversion tracking for:</p>
          <ul>
            <li>Form submissions (enquiry and booking forms)</li>
            <li>Phone calls from the ad and from the landing page</li>
            <li>Appointment booking completions if using an online booking system</li>
          </ul>
          <p>With this data, you can see which keywords, ads and landing pages produce actual patient enquiries, and which are spending budget without producing results. Campaigns optimised against real conversion data significantly outperform those optimised against clicks alone.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "Google Ads for clinics service", href: "/google-ads-for-clinics/" },
    { label: "Google Ads for chiropractors", href: "/learning-hub/google-ads-for-chiropractors/" },
    { label: "Physio business growth guide", href: "/learning-hub/physio-business-growth/" },
    { label: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      heroImage="/images/resources/google-ads-physio.jpg"
      eyebrow="Google Ads guide for physios"
      title="Google Ads for physios"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
