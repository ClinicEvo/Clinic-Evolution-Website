import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

/* This guide absorbed /learning-hub/local-seo-for-medical-clinics/, which was
   the same article with "medical" swapped for "healthcare" — same seven-section
   skeleton, five identical headings, and the two competing for one query intent.
   The material that was genuinely only on the medical page came across with it:
   the private-GP and specialist framing, GMC registration, and the PHIN, Doctify
   and Top Doctors citations. The old URL 301s here. */
export const metadata = buildMetadata({
  title: "Local SEO for Healthcare Clinics",
  description:
    "A guide to local SEO for healthcare and private medical clinics that want to appear more consistently for relevant local patient searches.",
  path: "/learning-hub/local-seo-for-healthcare-clinics/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Learning Hub", href: "/learning-hub/" },
  { label: "Local SEO for healthcare clinics", href: "/learning-hub/local-seo-for-healthcare-clinics/" },
];

const faqs = [
  {
    question: "What is local SEO for healthcare clinics?",
    answer: "Local SEO for healthcare clinics is the process of improving how your practice appears in location-based search results. This includes your Google Business Profile, website content, local reviews and citation consistency across healthcare and general directories.",
  },
  {
    question: "Do healthcare clinics need specialist SEO?",
    answer: "Yes. Healthcare SEO has specific considerations around clinical accuracy, YMYL (your money or your life) content standards, professional compliance and how patients search for treatment. Generic SEO advice does not always translate directly to private healthcare.",
  },
  {
    question: "How do patients find healthcare clinics online?",
    answer: "Primarily through local Google searches, Google Maps and recommendations. Patients searching for a clinic are typically high-intent, they want to book an appointment, not just research. Appearing well for those searches is one of the most valuable marketing outcomes for a private clinic.",
  },
  {
    question: "Is Google Business Profile important for healthcare clinics?",
    answer: "Very. For most local searches, the Google Business Profile and the map pack appear before organic search results. A complete, active and well-reviewed profile has a direct impact on how often your clinic is seen and contacted.",
  },
  {
    question: "Can a small clinic compete with large chains in local search?",
    answer: "Yes, often. Local search rewards proximity and relevance, not just authority. A small, well-optimised independent clinic with good reviews and accurate local information can outrank a chain with a weaker local presence.",
  },
  {
    question: "Should clinic pages be written by the clinicians?",
    answer: "The clinical content and accuracy should be reviewed by a clinician. The structure, search targeting and patient-facing language usually benefit from specialist input. Both clinical accuracy and patient relevance matter, and they are not the same skill.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        For a healthcare clinic, local search visibility is one of the most valuable digital assets you can build. The patients who find you through local search are typically ready to book, they are looking for a specific type of care near them.
      </p>
      <p>
        This guide covers how private healthcare clinics can improve their local SEO and attract more of the right patients from search.
      </p>
    </>
  );

  const sections = [
    {
      title: "How local search works for healthcare clinics",
      content: (
        <>
          <p>When a patient searches for a healthcare service in Google, &quot;osteopath near me&quot;, &quot;chiropractor [town]&quot;, &quot;physio for shoulder pain&quot;, Google typically shows a mix of results:</p>
          <ul>
            <li>The map pack: three local business listings with a map</li>
            <li>Organic search results: website pages ranked by relevance</li>
            <li>Sometimes paid ads at the very top</li>
          </ul>
          <p>For a healthcare clinic, appearing in the map pack is often the highest-priority outcome. These three listings receive a significant share of all clicks on local searches, and the patients they send are typically high intent.</p>
          <p>Appearing in organic search results below the map pack provides additional visibility. A clinic that appears in both the map pack and the organic results gets substantially more exposure than one that only appears in one.</p>
        </>
      ),
    },
    {
      title: "Private medical and specialist clinics",
      content: (
        <>
          <p>Private medical care is a growing market. More patients are seeking quicker access to specialists, diagnostics and consultations than the NHS can always provide, and most of them begin on Google.</p>
          <p>&quot;Private GP near me&quot;, &quot;private orthopaedic surgeon [city]&quot;, &quot;private dermatology clinic [area]&quot; — these are high-intent searches with real commercial value, and they behave differently from a symptom search. The patient has already decided to pay; they are choosing where.</p>
          <p>Clinics that invest in local visibility capture a consistent flow of these enquiries. Those that do not lose them to better-optimised competitors, even where the clinical quality is equivalent.</p>
          <p>For multi-practitioner clinics, individual practitioner profiles — where Google offers them — supplement the main listing and pick up specialist searches the practice-level profile will not.</p>
        </>
      ),
    },
    {
      title: "Google Business Profile for healthcare clinics",
      content: (
        <>
          <p>The Google Business Profile (GBP) is the foundation of local search visibility for any healthcare clinic. It controls your appearance in the map pack and in Google Maps searches directly.</p>
          <p>For a healthcare clinic, the GBP should include:</p>
          <ul>
            <li>Accurate practice name, address and phone number</li>
            <li>Correct and detailed opening hours</li>
            <li>A clear description that mentions your main services and location</li>
            <li>All relevant healthcare service categories</li>
            <li>High-quality photos of the clinic, waiting area and practitioners</li>
            <li>Regular Google Posts, news, seasonal content, offers</li>
            <li>A steady stream of managed reviews</li>
          </ul>
          <p>Healthcare clinics face specific GBP considerations: marking individual practitioners correctly, handling multiple location profiles if applicable, and ensuring service descriptions are accurate and compliant.</p>
        </>
      ),
    },
    {
      title: "Healthcare website pages for local search",
      content: (
        <>
          <p>Your website&apos;s content is the other major pillar of local SEO. For a healthcare clinic, the most valuable pages are those that target specific searches patients make when looking for treatment.</p>
          <p>Each service and condition your clinic treats should have its own page. A single generic &quot;our services&quot; page cannot compete for the range of specific searches your patients make.</p>
          <p>Effective local SEO content for healthcare pages includes:</p>
          <ul>
            <li>The specific condition or treatment in the page title and main headings</li>
            <li>The location where relevant (&quot;back pain treatment in [town]&quot;)</li>
            <li>Content that genuinely answers patient questions before booking</li>
            <li>Practitioner credentials relevant to the condition</li>
            <li>A clear call to action and booking path</li>
          </ul>
          <p>Google evaluates healthcare content carefully for quality, accuracy and trustworthiness. Thin or vague pages rarely rank well, regardless of how well-optimised the metadata is.</p>
        </>
      ),
    },
    {
      title: "Reviews and trust in healthcare SEO",
      content: (
        <>
          <p>Reviews play an outsized role in healthcare local SEO compared to many other industries. This is because:</p>
          <ul>
            <li>Reviews directly influence local search rankings</li>
            <li>Healthcare patients research carefully before booking, reviews affect conversion as much as ranking</li>
            <li>Review recency matters, a clinic with regular new reviews outperforms one with older ones</li>
          </ul>
          <p>For healthcare clinics, managing reviews requires additional care:</p>
          <ul>
            <li>Responses must maintain patient confidentiality, never confirm or deny treatment details in a response</li>
            <li>Negative reviews should be handled professionally and promptly</li>
            <li>Reviews must be genuine, fake reviews risk Google penalties and regulatory scrutiny</li>
          </ul>
          <p>A clinic with a strong, current and genuine review presence has a significant structural advantage in local healthcare search.</p>
        </>
      ),
    },
    {
      title: "Healthcare-specific local SEO considerations",
      content: (
        <>
          <p>Healthcare SEO has specific requirements that general SEO guidance does not always address.</p>
          <h3>YMYL content</h3>
          <p>Google classifies healthcare content as &quot;Your Money or Your Life&quot;, content where poor quality or inaccuracy could harm users. This means healthcare pages are held to a higher standard of expertise, authority and trustworthiness (known as E-E-A-T in Google&apos;s guidelines).</p>
          <h3>Practitioner credibility signals</h3>
          <p>Practitioner profiles with clear qualifications, registration numbers (GMC, GPhC, HCPC, GCC, GOsC, etc.) and professional affiliations help Google assess the credibility of healthcare content. For regulated medical practice, GMC registration numbers should be visible on the relevant practitioner pages, alongside contact details, privacy policy and registration information.</p>
          <h3>Content accuracy</h3>
          <p>Healthcare pages that make inaccurate clinical claims or promise specific outcomes can both harm patients and damage search performance. Content should be clinically accurate and within the scope of what the practice genuinely offers.</p>
        </>
      ),
    },
    {
      title: "Local citations for healthcare clinics",
      content: (
        <>
          <p>Citations, mentions of your practice name, address and phone number on other websites, help Google verify that your clinic is a legitimate, established business in a specific location.</p>
          <p>For healthcare clinics, citations appear across several types of directories:</p>
          <ul>
            <li>General business directories: Google, Bing, Yell, Yelp, Apple Maps</li>
            <li>Healthcare-specific directories: NHS Find a Service listings, Doctolib, Doctify, Top Doctors, the Physio Rooms</li>
            <li>Private Healthcare Information Network (PHIN) — mandatory for most regulated private providers</li>
            <li>Professional association member directories: GMC, BMA, HCPC, GCC, GOsC, CSP and relevant specialty societies</li>
          </ul>
          <p>Consistency matters. Your practice name, address and phone number should be identical across all of these. Any discrepancies can confuse Google&apos;s local relevance signals.</p>
        </>
      ),
    },
    {
      title: "Measuring local SEO performance for healthcare",
      content: (
        <>
          <p>Local SEO for healthcare clinics should be measured with metrics that reflect actual patient behaviour, not just search data.</p>
          <p>Useful metrics include:</p>
          <ul>
            <li>Google Business Profile views, searches and click-to-call actions</li>
            <li>Direction requests (a strong intent signal)</li>
            <li>Organic search impressions and clicks for key local terms</li>
            <li>Review volume, average rating and recency</li>
            <li>Enquiries attributed to organic search</li>
          </ul>
          <p>Reviewing these monthly helps identify whether local SEO effort is translating into actual visibility and patient contact, and where further work is needed.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
    { label: "How to market a private practice online", href: "/learning-hub/how-to-market-a-private-practice-online/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      schemaDescription={"A guide to local SEO for healthcare and private medical clinics that want to appear more consistently for relevant local patient searches."}
      heroImage="/images/resources/local-seo-healthcare.jpg"
      eyebrow="Healthcare local SEO guide"
      title="Local SEO for healthcare clinics"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
