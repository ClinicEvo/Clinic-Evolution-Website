import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "How to Get More Patients to Your Clinic | Clinic Evo",
  description:
    "A practical guide to the digital levers that help private clinics attract more patient enquiries, covering local search, service pages, SEO and conversion.",
  path: "/resources/how-to-get-more-patients-to-your-clinic/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "How to get more patients to your clinic", href: "/resources/how-to-get-more-patients-to-your-clinic/" },
];

const faqs = [
  {
    question: "What is the fastest way to get more patients to a clinic?",
    answer: "Google Ads can drive enquiries quickly if the landing page is strong. However, for most clinics, fixing the core website and improving local SEO first gives a more sustainable and cost-effective result.",
  },
  {
    question: "How important is Google Business Profile for a clinic?",
    answer: "Very. Most local patients search for clinics on Google Maps or the local pack. A complete, well-managed Google Business Profile with good reviews directly increases how often your clinic appears and how many people contact you.",
  },
  {
    question: "Why is my clinic website getting traffic but no enquiries?",
    answer: "Usually because the booking journey is unclear, the service pages are too generic, the calls to action are weak, or the page does not match what the visitor was actually searching for.",
  },
  {
    question: "Do I need to blog to get more patients?",
    answer: "Not necessarily. Well-structured service and condition pages with good SEO targeting often generate more enquiries than a blog. Content is useful when it matches specific patient questions and links to relevant service pages.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Most clinics want more patients but are not always sure which digital changes will actually move the dial.
      </p>
      <p>
        This guide covers the main levers: the ones that help private osteopathy, physiotherapy and chiropractic clinics attract more of the right enquiries and convert them into booked appointments.
      </p>
    </>
  );

  const sections = [
    {
      title: "Start with the website, not the traffic",
      content: (
        <>
          <p>Most clinics instinctively look for more traffic when they want more patients. More visitors, more bookings. But if your website is not converting the visitors it already gets, sending more traffic will just make the leaks bigger.</p>
          <p>Before spending on ads or chasing more SEO clicks, ask:</p>
          <ul>
            <li>Is it immediately clear what conditions and treatments you offer?</li>
            <li>Do visitors know where you are and who you are?</li>
            <li>Is there a clear, easy way to book or enquire?</li>
            <li>Do the service pages answer the questions patients actually have before booking?</li>
            <li>Do your reviews and trust signals reassure first-time visitors?</li>
          </ul>
          <p>A website that converts well makes every other marketing channel more effective. Fix the foundation before increasing the flow.</p>
        </>
      ),
    },
    {
      title: "Improve your local search visibility",
      content: (
        <>
          <p>The single most common way patients find a new clinic is through a local Google search. &quot;Physio near me&quot;, &quot;osteopath in [town]&quot;, &quot;back pain treatment [location]&quot;, these are high-intent searches from people who are ready to book.</p>
          <p>Appearing well in these searches depends on several things working together:</p>
          <ul>
            <li>A Google Business Profile that is complete, accurate and regularly updated</li>
            <li>Reviews that are recent, genuine and responded to</li>
            <li>Website pages that mention specific treatments, your location and the conditions you help</li>
            <li>Consistent name, address and phone number (NAP) information across the web</li>
            <li>Location-specific service pages where relevant</li>
          </ul>
          <p>Local SEO does not require big budgets. It requires accurate information, relevant pages and a managed reputation.</p>
        </>
      ),
    },
    {
      title: "Build service pages that match patient intent",
      content: (
        <>
          <p>Generic &quot;services&quot; pages are one of the most common conversion problems for clinic websites.</p>
          <p>Patients do not search for &quot;physiotherapy services&quot;. They search for &quot;help with sciatica&quot;, &quot;shoulder pain treatment London&quot;, &quot;knee injury physio near me&quot;. Each of those searches needs a page that speaks directly to what they are looking for.</p>
          <p>A strong service or condition page should:</p>
          <ul>
            <li>Name the condition or treatment clearly in the title and headings</li>
            <li>Explain who the service is for</li>
            <li>Describe what to expect from treatment</li>
            <li>Answer common questions patients have before booking</li>
            <li>Build trust with practitioner credentials or patient outcomes</li>
            <li>Include a clear and direct booking call to action</li>
          </ul>
          <p>Well-structured service pages can rank well in search and convert strongly once a visitor arrives. They work around the clock without any additional spend.</p>
        </>
      ),
    },
    {
      title: "Make your booking journey as simple as possible",
      content: (
        <>
          <p>One of the most underrated reasons clinics lose patients is a complicated or unclear booking process.</p>
          <p>If a potential patient has to hunt for a phone number, navigate through multiple pages to find a booking form, or is unsure how the process works, many will give up and try a different clinic.</p>
          <p>Improvements to look for:</p>
          <ul>
            <li>A visible phone number and booking link in the site header</li>
            <li>Clear calls to action on every key page, not just the contact page</li>
            <li>A booking form that asks only what is necessary</li>
            <li>Fast response to enquiries, ideally within a few hours</li>
            <li>Clear information about what happens after booking (confirmation, what to bring, what to expect)</li>
          </ul>
          <p>The easier you make it to take the next step, the more visitors will take it.</p>
        </>
      ),
    },
    {
      title: "Use Google Ads to reach patients who are ready to book",
      content: (
        <>
          <p>If your website converts well and you have clinic capacity, Google Ads can accelerate patient acquisition by placing your clinic in front of people who are actively searching for treatment.</p>
          <p>The most effective clinic Google Ads campaigns focus on:</p>
          <ul>
            <li>High-intent keywords (condition + location, treatment type + area)</li>
            <li>Ads that match the specific search query, not generic clinic messaging</li>
            <li>Landing pages that are relevant, clear and easy to book from</li>
            <li>Call extensions and location extensions to support mobile searchers</li>
            <li>Conversion tracking so you know which campaigns are producing bookings</li>
          </ul>
          <p>Google Ads can produce results quickly, but they require ongoing management. Without good targeting and landing pages, the cost per enquiry can become high quickly.</p>
        </>
      ),
    },
    {
      title: "Do not overlook past patients",
      content: (
        <>
          <p>New patient acquisition gets most of the attention, but for many clinics, the fastest route to more appointments is reconnecting with past patients.</p>
          <p>People who have already visited your clinic already know you, trust you and have experienced your care. Many of them may benefit from a follow-up appointment, seasonal treatment or a reminder that you are available.</p>
          <p>A patient reactivation system helps identify which past patients may be suitable for follow-up, and communicates with them in a clinically appropriate and well-timed way.</p>
          <p>In many cases, reactivation can deliver a meaningful increase in booked appointments with less effort than attracting entirely new patients.</p>
        </>
      ),
    },
    {
      title: "Build your online reputation steadily",
      content: (
        <>
          <p>Reviews are one of the most influential factors in whether a new patient chooses your clinic over another.</p>
          <p>Patients searching online will often compare clinics based on reviews before they even visit your website. A clinic with 40 recent reviews will typically attract more enquiries than one with 8 older ones, even if the quality of care is equal.</p>
          <p>Build your review presence by:</p>
          <ul>
            <li>Making it easy for patients to leave a review (direct link, simple request)</li>
            <li>Asking at the right moment, after a positive appointment outcome</li>
            <li>Responding to all reviews professionally</li>
            <li>Keeping your Google Business Profile active with updated information</li>
          </ul>
          <p>Reputation is a long-term growth asset. A clinic with a strong, current review presence has a structural advantage over competitors who are not actively managing theirs.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "How much should a clinic spend on marketing?", href: "/resources/how-much-should-a-clinic-spend-on-marketing/" },
    { label: "Patient recall system guide", href: "/resources/patient-recall-system/" },
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Google Ads for clinics", href: "/google-ads-for-clinics/" },
    { label: "AI patient reactivation", href: "/ai-integration/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Patient acquisition guide"
      title="How to get more patients to your clinic"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
