import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "How to Market Your Chiropractic Practice | ClinicEvo",
  description:
    "A chiropractic-specific guide covering visibility, trust, patient education and ways to reduce reliance on referral-only growth.",
  path: "/resources/how-to-market-your-chiropractic-practice/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "How to market your chiropractic practice", href: "/resources/how-to-market-your-chiropractic-practice/" },
];

const faqs = [
  {
    question: "Why do chiropractic practices struggle with online marketing?",
    answer: "Many chiropractic websites are generic and do not address the specific concerns patients have before booking. Patients often have questions about whether chiropractic is right for their condition, what treatment involves, and whether it is safe. Websites that answer those questions convert significantly better.",
  },
  {
    question: "How important is local SEO for a chiropractic practice?",
    answer: "Very important. Most new patients search locally before booking. Appearing prominently for searches like 'chiropractor near me' or 'chiropractic for back pain [town]' drives consistent, high-intent enquiries with no ongoing ad cost.",
  },
  {
    question: "Should a chiropractor use Google Ads?",
    answer: "Google Ads can be effective for chiropractic practices with available capacity. The key is targeting high-intent local searches, using specific landing pages for each service, and tracking which ads produce actual bookings.",
  },
  {
    question: "How do chiropractic practices get more referrals?",
    answer: "GP and healthcare referrals are harder to rely on than they once were. Building a strong online presence — good reviews, clear service pages, local visibility — means patients can find you directly rather than waiting for a referral.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Chiropractic practices face a specific marketing challenge: patients often have questions and doubts before they book that other healthcare services do not encounter to the same degree.
      </p>
      <p>
        Effective chiropractic marketing addresses those questions, builds trust, and makes it easy for the right patients to find you and take the first step.
      </p>
    </>
  );

  const sections = [
    {
      title: "Understand the chiropractic patient journey",
      content: (
        <>
          <p>Before a patient books with a chiropractor for the first time, they often go through a longer consideration process than they would for, say, a physio appointment.</p>
          <p>Common questions and hesitations include:</p>
          <ul>
            <li>Is chiropractic appropriate for my specific issue?</li>
            <li>What does a chiropractic session involve?</li>
            <li>Is it safe for my age, condition or history?</li>
            <li>How many sessions will I need?</li>
            <li>What are the qualifications of the chiropractor?</li>
          </ul>
          <p>Marketing that addresses these questions directly — through well-written service and condition pages, practitioner profiles and clear FAQs — significantly reduces the barrier to booking.</p>
          <p>The clinic that answers patient questions most completely often wins the enquiry, regardless of whether it ranks first in Google.</p>
        </>
      ),
    },
    {
      title: "Build condition pages that speak to patient concerns",
      content: (
        <>
          <p>Generic &quot;chiropractic services&quot; pages do not convert well. Patients search for help with their specific problem, not for a general treatment category.</p>
          <p>High-value condition pages for chiropractic practices typically cover:</p>
          <ul>
            <li>Back pain and lower back pain</li>
            <li>Neck pain and stiffness</li>
            <li>Sciatica</li>
            <li>Shoulder and arm pain</li>
            <li>Headaches and migraines related to the spine</li>
            <li>Sports injuries and maintenance</li>
            <li>Postural problems</li>
          </ul>
          <p>Each page should explain who the condition affects, how chiropractic can help, what to expect from treatment, and how to book. Pages written around the patient&apos;s experience outperform those written around the treatment itself.</p>
        </>
      ),
    },
    {
      title: "Local SEO for chiropractic practices",
      content: (
        <>
          <p>Most new chiropractic patients come from local searches. Someone experiencing back pain or neck stiffness will search &quot;chiropractor near me&quot; or &quot;chiropractic [town]&quot; and choose from the results they see.</p>
          <p>To appear well in those results, a chiropractic practice needs:</p>
          <ul>
            <li>A Google Business Profile that is complete, accurate and regularly maintained</li>
            <li>A steady stream of genuine, recent reviews</li>
            <li>Website pages that mention specific treatments and the local area</li>
            <li>Clear NAP (name, address, phone) consistency across the web</li>
            <li>Service pages that include condition-specific and location-specific content</li>
          </ul>
          <p>Local SEO is not a one-time task. Practices that maintain their profile and review presence consistently outperform those that set it up once and leave it.</p>
        </>
      ),
    },
    {
      title: "Build practitioner credibility into your marketing",
      content: (
        <>
          <p>Patients choosing a chiropractor for the first time pay close attention to credentials and professional background. Unlike some other services where brand trust is paramount, in healthcare the individual practitioner often matters as much as the practice itself.</p>
          <p>Effective chiropractic marketing makes practitioner credibility visible:</p>
          <ul>
            <li>Practitioner bio pages with qualifications, GCC registration, clinical interests and approach</li>
            <li>Photos that show a professional, approachable environment</li>
            <li>Membership of professional associations clearly displayed</li>
            <li>Specific areas of expertise or conditions regularly treated</li>
            <li>Patient outcomes described (within appropriate professional guidelines)</li>
          </ul>
          <p>A patient who feels they understand who they are booking with is more likely to book, and more likely to return.</p>
        </>
      ),
    },
    {
      title: "Reduce dependence on referrals",
      content: (
        <>
          <p>Many chiropractic practices historically relied on GP referrals, word of mouth and professional networks. These still matter, but they are less reliable as sole growth sources than they once were.</p>
          <p>GP referrals to chiropractic are inconsistent across areas. Word of mouth is difficult to control and scale. A practice that can generate its own direct patient enquiries online has a more stable growth foundation.</p>
          <p>Building direct online enquiry flow — through local SEO, a well-converting website and, where appropriate, Google Ads — means the practice is not dependent on any single referral source it cannot influence.</p>
        </>
      ),
    },
    {
      title: "Google Ads for chiropractic patient acquisition",
      content: (
        <>
          <p>When the website and patient journey are working well, Google Ads can accelerate new patient acquisition for chiropractic practices significantly.</p>
          <p>The most effective approach for chiropractic Google Ads focuses on:</p>
          <ul>
            <li>Condition and location-specific search terms rather than broad match</li>
            <li>Landing pages that are specific to the searched condition</li>
            <li>A clear, fast booking or call path on the landing page</li>
            <li>Tracking that shows which searches produce actual bookings</li>
          </ul>
          <p>Chiropractic searches often have strong commercial intent. Patients searching for a chiropractor are typically ready to book if they find the right match. A well-run ads campaign can generate consistent enquiries from those searches.</p>
        </>
      ),
    },
    {
      title: "Patient retention and recall for chiropractic",
      content: (
        <>
          <p>Chiropractic patients often benefit from ongoing care, maintenance treatment and seasonal check-ins. Practices that actively stay in contact with past patients capture more of this value than those that only focus on new acquisition.</p>
          <p>A patient reactivation approach for chiropractic might include:</p>
          <ul>
            <li>Maintenance appointment reminders for patients who completed a course of treatment</li>
            <li>Seasonal check-in communications for patients with recurring conditions</li>
            <li>Follow-up for patients who did not complete a recommended course</li>
            <li>Educational content that keeps the practice visible and relevant</li>
          </ul>
          <p>Patients who feel connected to a practice are more likely to rebook when they need treatment, and more likely to refer others.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "How to market your clinic", href: "/resources/how-to-market-your-clinic/" },
    { label: "Google Ads for chiropractors", href: "/resources/google-ads-for-chiropractors/" },
    { label: "Chiropractic marketing service", href: "/chiropractic-marketing/" },
    { label: "Patient recall system guide", href: "/resources/patient-recall-system/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Chiropractic marketing guide"
      title="How to market your chiropractic practice"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
