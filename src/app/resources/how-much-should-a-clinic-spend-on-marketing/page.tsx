import { buildMetadata } from "@/lib/metadata";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export const metadata = buildMetadata({
  title: "How Much Should a Clinic Spend on Marketing? | ClinicEvo",
  description:
    "A practical guide to clinic marketing budgets for private practice owners, covering SEO, Google Ads, websites, patient acquisition and how to invest sensibly.",
  path: "/resources/how-much-should-a-clinic-spend-on-marketing/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
  { label: "How Much Should a Clinic Spend on Marketing?", href: "/resources/how-much-should-a-clinic-spend-on-marketing/" },
];

const faqs = [
  {
    question: "How much should a private clinic spend on marketing?",
    answer: "There is no single correct amount. A sensible private clinic marketing budget depends on your growth goals, clinic capacity, average patient value, current website quality, search visibility and how quickly you want to generate more enquiries.",
  },
  {
    question: "Should a clinic invest in SEO or Google Ads first?",
    answer: "If the website and core service pages are weak, SEO and website improvements are usually the better first step. If the website already converts well and the clinic has capacity, Google Ads can help generate enquiries more quickly.",
  },
  {
    question: "What is the biggest waste of marketing budget for clinics?",
    answer: "One of the biggest wastes is paying for traffic before fixing the booking journey. If the website is unclear, slow or difficult to use, more traffic will not necessarily become more booked appointments.",
  },
  {
    question: "Can patient reactivation reduce marketing costs?",
    answer: "Yes. Patient reactivation can help clinics reconnect with suitable past patients, which may reduce the need to rely only on new patient acquisition. It works best when communication is clinically appropriate, well-timed and properly managed.",
  },
  {
    question: "How do I know if my clinic marketing is working?",
    answer: "Track enquiries, booked appointments, source of enquiry, conversion rate, patient value and repeat bookings. Website traffic is useful, but the real measure is whether marketing produces the right patients and supports clinic growth.",
  },
];

export default function ArticlePage() {
  const intro = (
    <>
      <p className="mb-4">
        Most private clinics know they need to invest in marketing, but the harder question is how much to spend.
      </p>
      <p className="mb-4">
        Spend too little, and nothing changes. Spend without a plan, and you can waste money on traffic that does not become enquiries. The right budget depends on your clinic&apos;s capacity, average patient value, local competition, current visibility and how quickly you want to grow.
      </p>
      <p>
        This guide gives you a practical way to think about marketing spend for a private clinic, especially if you run an osteopathy, physiotherapy or chiropractic practice.
      </p>
    </>
  );

  const sections = [
    {
      title: "There is no perfect clinic marketing budget",
      content: (
        <>
          <p>There is no single number that works for every clinic.</p>
          <p>
            A solo practitioner working three days a week does not need the same marketing budget as a multi-practitioner clinic with empty rooms, multiple services and capacity to take on dozens of new patients each month.
          </p>
          <p>The better question is not &quot;what should we spend?&quot;</p>
          <p>It is:</p>
          <ul>
            <li>How many more patient enquiries do we need?</li>
            <li>Which services do we want to grow?</li>
            <li>What is a new patient worth over time?</li>
            <li>How many enquiries currently turn into bookings?</li>
            <li>What marketing foundations are already working?</li>
            <li>Where are we losing potential patients before they book?</li>
          </ul>
          <p>A sensible clinic marketing budget starts with these answers.</p>
        </>
      ),
    },
    {
      title: "Start with your growth goal, not the agency quote",
      content: (
        <>
          <p>Before deciding on a marketing budget, define the commercial goal.</p>
          <p>For example, your clinic may want to:</p>
          <ul>
            <li>increase new patient bookings</li>
            <li>fill a new practitioner&apos;s diary</li>
            <li>grow a specific service</li>
            <li>improve local visibility</li>
            <li>reduce reliance on referrals</li>
            <li>reactivate past patients</li>
            <li>make the website convert better</li>
            <li>generate more consistent enquiries each month</li>
          </ul>
          <p>Each goal needs a different investment pattern.</p>
          <p>
            If your website is weak, sending paid traffic to it may not be the best first move. If your website is strong but nobody sees it, SEO or Google Ads may become the priority. If you have a large database of past patients, patient reactivation may generate faster returns than chasing completely new enquiries.
          </p>
          <p>The right budget depends on what is currently blocking growth.</p>
        </>
      ),
    },
    {
      title: "The simple clinic marketing budget framework",
      content: (
        <>
          <p>A useful way to think about clinic marketing spend is to look at four numbers.</p>
          
          <h3>1. Your average patient value</h3>
          <p>A new patient is rarely worth only the first appointment fee.</p>
          <p>
            For many MSK clinics, one new patient may book an initial appointment, follow-up sessions and future maintenance appointments. They may also refer friends or family.
          </p>
          <p>
            That means your marketing budget should be judged against the realistic value of a patient relationship, not just the cost of getting one enquiry.
          </p>

          <h3>2. Your clinic capacity</h3>
          <p>Marketing only makes sense if you have room to take on more patients.</p>
          <p>
            A clinic with spare capacity can justify a more active growth budget. A clinic that is already fully booked may need a different focus, such as improving service mix, increasing patient lifetime value, recruiting practitioners, or reactivating suitable past patients.
          </p>

          <h3>3. Your conversion rate</h3>
          <p>If 100 people visit your website and only one contacts you, traffic is not the only problem.</p>
          <p>
            Your website may need clearer messaging, stronger service pages, better trust signals, simpler booking routes or more specific local SEO content.
          </p>
          <p>A poor conversion journey can make every marketing channel feel expensive.</p>

          <h3>4. Your current visibility</h3>
          <p>
            Some clinics already have a decent website but weak search visibility. Others have plenty of traffic but unclear copy. Some have strong reviews but poor service pages.
          </p>
          <p>Your budget should focus on the weakest part of the growth system first.</p>
        </>
      ),
    },
    {
      title: "What should your marketing budget include?",
      content: (
        <>
          <p>
            Clinic marketing spend should usually cover more than one activity. A stronger growth system often includes a blend of foundation work, visibility work and conversion work.
          </p>

          <h3>Website improvements</h3>
          <p>
            Your website needs to explain who you help, what you treat, where you are based and why patients should trust you. It should also make booking easy.
          </p>
          <p>
            If the website is slow, vague, dated or difficult to navigate, improving it may be the best starting point.
          </p>
          <p>
            <a href="/website-design-for-clinics/">Explore clinic website design services</a>
          </p>

          <h3>SEO</h3>
          <p>
            SEO helps your clinic appear for the searches patients make when they are looking for treatment, advice or a local practitioner.
          </p>
          <p>
            For clinics, this usually includes service pages, condition pages, local SEO, Google Business Profile improvements, internal linking and content that matches patient intent.
          </p>
          <p>
            <a href="/seo-for-clinics/">Learn more about SEO for clinics</a>
          </p>

          <h3>Google Ads</h3>
          <p>
            Google Ads can help clinics reach people who are actively searching for treatment now. It is often useful when the clinic has a clear offer, strong landing page and capacity to handle new enquiries.
          </p>
          <p>
            <a href="/google-ads-for-clinics/">Find out about Google Ads for clinics</a>
          </p>

          <h3>Patient reactivation</h3>
          <p>
            Many clinics focus only on new patients while ignoring past patients who may still need support. A patient recall or reactivation system can help identify suitable patients and encourage them to return at the right time.
          </p>
          <p>
            <a href="/ai-patient-reactivation/">Read about patient reactivation systems</a>
          </p>

          <h3>Measurement</h3>
          <p>
            Your marketing budget should also include proper tracking. Without measurement, it is difficult to know which channels are producing enquiries and which are simply creating activity.
          </p>
        </>
      ),
    },
    {
      title: "How much should a small private clinic spend?",
      content: (
        <>
          <p>As a practical starting point, many small private clinics should think in terms of three budget levels.</p>

          <h3>Foundation budget</h3>
          <p>A foundation budget is for clinics that need to fix the basics first.</p>
          <p>
            This may include improving the website, rewriting core service pages, setting up tracking, improving Google Business Profile and making sure the clinic can be found properly online.
          </p>
          <p>
            This is usually the right starting point if the clinic has poor messaging, weak service pages or no clear booking journey.
          </p>

          <h3>Growth budget</h3>
          <p>A growth budget is for clinics that already have the basics in place and want more consistent enquiries.</p>
          <p>
            This may include SEO content, landing pages, Google Ads, local SEO, review strategy, conversion optimisation and stronger internal linking.
          </p>
          <p>This is usually the right stage for clinics with capacity to take on new patients.</p>

          <h3>Expansion budget</h3>
          <p>An expansion budget is for clinics with multiple practitioners, multiple services, larger capacity or a plan to grow across locations.</p>
          <p>
            This may involve deeper SEO, paid ads, service-line campaigns, content production, reporting, automation and patient reactivation systems.
          </p>
          <p>
            The larger the growth goal, the more important it becomes to track cost per enquiry, cost per booked patient and return on marketing spend.
          </p>
        </>
      ),
    },
    {
      title: "When spending more makes sense",
      content: (
        <>
          <p>A higher marketing budget can make sense when your clinic has:</p>
          <ul>
            <li>spare appointment capacity</li>
            <li>a clear booking process</li>
            <li>strong reception follow-up</li>
            <li>good reviews and trust signals</li>
            <li>high-value services to promote</li>
            <li>a competitive local market</li>
            <li>a weak current search presence</li>
            <li>a plan to recruit or grow the team</li>
          </ul>
          <p>
            In these situations, marketing spend is not just a cost. It is a way to fill underused capacity and build a more predictable enquiry pipeline.
          </p>
        </>
      ),
    },
    {
      title: "When spending less is the better decision",
      content: (
        <>
          <p>A lower budget may be more sensible when the foundations are not ready.</p>
          <p>For example, it may be better to delay Google Ads if:</p>
          <ul>
            <li>the website is unclear</li>
            <li>the booking process is confusing</li>
            <li>nobody answers enquiries quickly</li>
            <li>the clinic has very limited availability</li>
            <li>the service pages do not explain the offer properly</li>
            <li>there is no tracking in place</li>
          </ul>
          <p>
            In these cases, the best first step is not to buy more traffic. It is to fix the patient journey so future marketing has a better chance of working.
          </p>
        </>
      ),
    },
    {
      title: "Common clinic marketing budget mistakes",
      content: (
        <>
          <h3>Mistake 1: Spending without knowing the goal</h3>
          <p>A clinic should know whether the aim is more enquiries, better bookings, service-line growth, improved visibility or patient reactivation.</p>

          <h3>Mistake 2: Treating all enquiries as equal</h3>
          <p>A general enquiry is not the same as a high-intent patient looking for a specific treatment in your area.</p>

          <h3>Mistake 3: Running ads before fixing the website</h3>
          <p>Google Ads can work well, but weak landing pages make paid traffic expensive.</p>

          <h3>Mistake 4: Ignoring past patients</h3>
          <p>Past patients already know the clinic. In many cases, patient reactivation can be one of the most practical growth opportunities.</p>

          <h3>Mistake 5: Measuring traffic instead of bookings</h3>
          <p>Traffic is useful, but clinics need to understand whether marketing is producing enquiries, booked appointments and repeat value.</p>
        </>
      ),
    },
  ];

  const relatedLinks = [
    { label: "How to get more patients to your clinic", href: "/resources/how-to-get-more-patients-to-your-clinic/" },
    { label: "SEO for clinics", href: "/seo-for-clinics/" },
    { label: "Google Ads for clinics", href: "/google-ads-for-clinics/" },
    { label: "AI patient reactivation", href: "/ai-patient-reactivation/" },
  ];

  return (
    <ArticleLayout
      breadcrumbs={crumbs}
      eyebrow="Clinic marketing budget guide"
      title="How much should a clinic spend on marketing?"
      intro={intro}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
