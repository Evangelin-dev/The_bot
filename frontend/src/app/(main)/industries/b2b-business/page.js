import Industries from "@/components/Industries";
import TitleBanner from "@/components/TitleBanner";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title:
      "Comprehensive Growth Strategies for B2B Businesses | The Bot Agency",
    description:
      "Discover how The Bot Agency empowers B2B businesses with market analysis, LinkedIn outreach, SEO, and email marketing to drive growth, build connections, and stay ahead of the competition.",
    keywords: "B2B Business Growth Solutions",
  };
}

const SERVICES_DATA = [
  {
    name: "Our Services for B2B Businesses",
    children: [
      {
        name: "Market Analysis",
        icon: (
          <img
          src="/Industries/B2B business/Our Services for B2B/Market Analysis.png"
    
            alt="Fast Load Times & Mobile-Friendly Design"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Detailed research to identify industry trends, market gaps, and
              opportunities.
            </li>
            <li>
              Competitive analysis to position your business strategically.
            </li>
            <li>
              Insights into customer behavior to create targeted campaigns.
            </li>
          </ul>
        ),
      },
      {
        name: "LinkedIn Outreach for Business Growth",
        icon: (
          <img
          src="/Industries/B2B business/Our Services for B2B/LinkedIn Outreach for Business Growth.png"
    
            alt="Fast Load Times & Mobile-Friendly Design"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Building a strong LinkedIn presence to connect with
              decision-makers.
            </li>
            <li>
              Personalized outreach campaigns to expand your professional
              network.
            </li>
            <li>
              Strategies to nurture leads and convert connections into clients.
            </li>
          </ul>
        ),
      },
      {
        name: "Search Engine Optimization (SEO)",
        icon: (
          <img
          src="/Industries/B2B business/Our Services for B2B/Search-Engine-Optimization-(SEO).png"
    
            alt="Fast Load Times & Mobile-Friendly Design"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Optimize your website to rank higher on search engines.</li>
            <li>Keyword research to target the right audience effectively.</li>
            <li>
              On-page and off-page SEO strategies to drive organic traffic.
            </li>
          </ul>
        ),
      },
      {
        name: "Email Marketing",
        icon: (
          <img
          src="/Industries/B2B business/Our Services for B2B/Email Marketing.png"
    
            alt="Fast Load Times & Mobile-Friendly Design"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Crafting high-impact email campaigns that engage and convert.
            </li>
            <li>Automated email sequences for lead nurturing.</li>
            <li>Regular performance tracking and optimization.</li>
          </ul>
        ),
      },
    ],
  },
];

const HOW_IT_WORKS = [
  {
    name: "Book a Consultation Call",
    content: "Share your business challenges and goals.",
  },
  {
    name: "Business Process Audit",
    content: "We analyze your workflows to identify areas for improvement.",
  },
  {
    name: "Tailor-Made Tech Development",
    content:
      "Receive a custom-built application designed to optimize your operations.",
  },
  {
    name: "Implementation & Support",
    content:
      "Launch the solution and start saving costs while boosting productivity.",
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The Bot Agency’s LinkedIn outreach campaigns helped us connect with high-value clients we couldn’t reach before. Their market analysis gave us clarity and direction!",
    name: "Chemiplant",
  },
  {
    content:
      "With their SEO strategies, our website now ranks on the first page of Google. We’ve seen a 40% increase in organic leads.",
    name: "Sudhir brothers",
  },
];

const FAQ_DATA = [
  {
    question: "How long does it take to see results with your services?",
    ans: "Results vary depending on the service, but most clients see significant improvements within 3 to 6 months.",
  },
  {
    question: "Can you work with businesses in niche B2B industries?",
    ans: "Absolutely! Our tailored strategies are designed to meet the unique needs of every industry.",
  },
  {
    question: "Do you provide standalone services, or is it a package?",
    ans: "Both options are available. You can choose individual services or a comprehensive package based on your requirements.",
  },
  {
    question: "How do you ensure the success of LinkedIn outreach campaigns?",
    ans: "We use advanced profiling, personalized messaging, and follow-ups to maximize response rates and conversions.",
  },
];

const WHAT_WE_OFFER = [
  {
    name: "Business Process Audits",
    content:
      "A deep dive into your operations to identify inefficiencies and opportunities.",
  },
  {
    name: "Custom Application Development",
    description:
      "Tailor-made software solutions perfectly aligned with your business needs.",
  },
  {
    name: "Automation Solutions",
    description:
      "Reduce manual effort and improve efficiency by automating routine tasks.",
  },
  {
    name: "Expense & Time Tracking Dashboards",
    description:
      "Stay on top of your operations with real-time insights into expenses and time management.",
  },
  {
    name: "Cost Optimization",
    description:
      "Save at least 5% on operational costs with our tech solutions.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">
          Expertise in B2B Marketing:{" "}
        </span>
        Years of experience helping B2B businesses achieve exponential growth.
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Data-Driven Approach: </span>Every
        decision is backed by thorough research and analytics{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">End-to-End Solutions: </span>From
        strategy creation to execution, we handle everything.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Proven Results: </span>Our
        strategies have increased ROI for numerous B2B businesses.{" "}
      </span>
    ),
  },
];

const OUR_RESULTS = [
  {
    name: "5% Operational Cost Savings for Clients on Average",
  },
  {
    name: "Streamlined Processes Across Industries",
  },
  {
    name: "Increased Profitability & Time Efficiency for Over 50+ Businesses",
  },
];

const OUR_PROCESS = [
  {
    name: "Market Analysis",
    description:
      "We start by understanding your industry, identifying trends, and evaluating competitors. This helps us craft a strategy tailored to your business goals.",
  },
  {
    name: "Profiling",
    description:
      "Using the insights from market research, we create detailed profiles of your ideal clients and target audience to guide outreach and marketing efforts.",
  },
  {
    name: "Execution",
    description:
      "With a clear strategy in place, we execute campaigns across multiple platforms, including LinkedIn, email, and search engines. Our data-driven execution ensures maximum ROI.",
  },
];

const B2BIndustriesPage = () => {
  return (
    <>
      <TitleBanner
        title={"Powering B2B Businesses with Tailored Growth Strategies"}
        fontSize="3rem"
        subTitle="Drive Growth, Build Connections, and Dominate Your Industry with Proven Marketing Solutions"
        introduction={
          <div>
            <div className="fw-bolder fs-4">
              Transforming B2B Businesses with Comprehensive Services
            </div>
            At The Bot Agency, we understand the unique challenges faced by B2B
            businesses. Our services are designed to help you connect with the
            right audience, streamline your marketing efforts, and accelerate
            growth. With a data-driven approach and years of expertise, we
            ensure your business stays ahead of the competition.
          </div>
        }
        bgColor="linear-gradient(to right,rgb(20, 3, 77) 0%,rgb(0, 5, 93) 100%)"
      />
      <Industries
        // howItWorks={HOW_IT_WORKS}
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        // OurResults={OUR_RESULTS}
        // whatWeOffer={WHAT_WE_OFFER}
        bookConsultTitle="Let’s Scale Your B2B Business Today"
        bookConsultDescription="DDiscover how our proven strategies can help your B2B business achieve remarkable growth."
        serviceData={SERVICES_DATA}
        ourProcess={OUR_PROCESS}
      />
    </>
  );
};

export default B2BIndustriesPage;
