import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "How to Market Your Clinic | Clinic Evo",
  description:
    "A practical overview of how private clinics can approach digital marketing without wasting time on disconnected tactics.",
  path: "/resources/how-to-market-your-clinic/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "How to market your clinic", href: "/resources/how-to-market-your-clinic/" },
];

const faqs = [
  {
    question: "What is the most important part of clinic marketing?",
    answer: "The website and patient journey. Without a clear, well-structured website that converts visitors into enquiries, every other marketing channel underperforms. Most clinics benefit most from fixing their digital foundation before increasing ad spend.",
  },
  {
    question: "Should a private clinic use social media?",
    answer: "Social media can build brand awareness and community, but it rarely drives consistent new patient bookings on its own. For most clinics, SEO and Google Ads produce more reliable enquiries. Social media works best as a supporting channel, not a primary growth engine.",
  },
  {
    question: "How long does clinic marketing take to work?",
    answer: "It depends on the channel. Google Ads can produce enquiries within days of launch. SEO typically takes 3 to 6 months to show meaningful results. Website improvements can improve conversion rates relatively quickly once implemented.",
  },
  {
    question: "Do I need an agency to market my clinic?",
    answer: "Not necessarily, but specialist support is valuable. A generalist agency may not understand the specific challenges of private healthcare marketing. Working with someone who understands MSK clinics, patient behaviour and healthcare compliance tends to produce better results.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Private clinic marketing does not have to be complicated. But it does need to be joined up.
      </p>
      <p>
        This guide covers how to think about marketing your clinic in a way that focuses on outcomes rather than activity, and helps you prioritise the changes that are most likely to make a difference.
      </p>
    </>
  );

  const sections = [
    {
      title: "Think about marketing as a system, not a list of tactics",
      content: (
        <>
          <p>The most common clinic marketing mistake is treating each activity, a new website, some Google Ads, a social media page, as a separate project rather than part of an interconnected system.</p>
          <p>A clinic&apos;s digital presence works as a whole. Search visibility brings visitors. The website converts them into enquiries. The booking journey turns enquiries into appointments. Patient communication encourages retention and recall.</p>
          <p>When one part of that system is broken, everything downstream suffers. Driving more traffic to a website that cannot convert is expensive. Running Google Ads without tracking which keywords produce bookings is wasteful. Building a strong website without any SEO means it will be hard to find.</p>
          <p>Effective clinic marketing means understanding which part of the system needs attention first.</p>
        </>
      ),
    },
    {
      title: "Audit your current position honestly",
      content: (
        <>
          <p>Before deciding what to spend on marketing, take stock of where you are now.</p>
          <ul>
            <li>How many new patient enquiries do you receive each month?</li>
            <li>How many of those turn into booked appointments?</li>
            <li>Where do your current patients say they found you?</li>
            <li>How does your clinic appear in a local Google search for your core treatments?</li>
            <li>What does your website look like compared to your local competitors?</li>
            <li>How many Google reviews do you have, and how recent are they?</li>
            <li>When did a past patient last receive any follow-up communication from your clinic?</li>
          </ul>
          <p>These questions reveal where the real problems are. In most cases, one or two issues account for the majority of lost growth.</p>
        </>
      ),
    },
    {
      title: "Get your website working before anything else",
      content: (
        <>
          <p>Your website is the hub of your clinic&apos;s digital presence. Every other marketing channel ultimately sends people to it.</p>
          <p>A clinic website that markets well needs to do three things clearly:</p>
          <h3>Communicate relevance</h3>
          <p>Visitors should immediately understand what conditions you treat, who you help, and where you are. This is surprisingly often unclear on clinic websites.</p>
          <h3>Build trust</h3>
          <p>Reviews, practitioner credentials, before-and-after outcomes, professional associations, clear pricing where appropriate, these all help a visitor feel confident enough to book.</p>
          <h3>Make booking easy</h3>
          <p>The fewer clicks and form fields between a visitor and an enquiry, the more enquiries you will receive. Booking CTAs should appear at multiple points on every service page, not just on a contact page.</p>
        </>
      ),
    },
    {
      title: "Invest in SEO as a long-term foundation",
      content: (
        <>
          <p>Search engine optimisation is the process of making your clinic more visible to people who are actively searching for the treatments and conditions you help with.</p>
          <p>For private clinics, local SEO is particularly valuable. When a patient searches for &quot;physiotherapist in [town]&quot; or &quot;osteopath for back pain near me&quot;, appearing at the top of those results produces consistent, high-intent enquiries without ongoing ad spend.</p>
          <p>The foundations of good clinic SEO are:</p>
          <ul>
            <li>Well-structured service and condition pages</li>
            <li>A complete and active Google Business Profile</li>
            <li>Consistent local information across the web</li>
            <li>Content that matches the searches your patients actually make</li>
            <li>Good internal linking between related pages</li>
          </ul>
          <p>SEO takes time, typically 3 to 6 months before significant results. But once it works, it provides ongoing visibility without the ongoing cost of paid advertising.</p>
        </>
      ),
    },
    {
      title: "Use Google Ads to accelerate when ready",
      content: (
        <>
          <p>Google Ads can put your clinic at the top of search results immediately. For clinics with capacity and a well-converting website, this is one of the most reliable ways to increase enquiries quickly.</p>
          <p>The most common clinic Google Ads mistakes are:</p>
          <ul>
            <li>Running broad campaigns without tight keyword targeting</li>
            <li>Sending ad traffic to a weak or generic landing page</li>
            <li>Not tracking which ads actually produce bookings</li>
            <li>Pausing campaigns before they have enough data to optimise</li>
          </ul>
          <p>Google Ads works best as an accelerant once the underlying website and patient journey are already solid.</p>
        </>
      ),
    },
    {
      title: "Keep past patients connected",
      content: (
        <>
          <p>Many clinic owners focus entirely on new patient acquisition while ignoring a database of past patients who already know and trust them.</p>
          <p>A structured approach to patient recall and reactivation, reaching out to past patients at the right time, with clinically relevant communication, can be one of the most efficient ways to increase appointment bookings.</p>
          <p>It requires less effort to reactivate a satisfied past patient than to attract a completely new one, and the conversion rate is typically higher.</p>
        </>
      ),
    },
    {
      title: "Measure what matters",
      content: (
        <>
          <p>Marketing without measurement is guesswork. At a minimum, clinic marketing should track:</p>
          <ul>
            <li>Number of new patient enquiries per month</li>
            <li>Enquiry source (how they found you)</li>
            <li>Conversion rate from enquiry to booked appointment</li>
            <li>Which services are generating the most enquiries</li>
            <li>Cost per enquiry if running paid campaigns</li>
          </ul>
          <p>These numbers help you understand what is working, what is wasting money and where to invest next.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "How to get more patients to your clinic", href: "/resources/how-to-get-more-patients-to-your-clinic/" },
    { label: "How to market a private practice online", href: "/resources/how-to-market-a-private-practice-online/" },
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Clinic website design", href: "/website-design-for-clinics/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Clinic marketing guide"
      title="How to market your clinic"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
