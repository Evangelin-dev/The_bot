import CustomImage from "@/components/custom/Image";
import Industries from "@/components/Industries";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Our Services for SaaS Companies",
    children: [
      {
        name: "LinkedIn Page Management",
        icon: (
          <CustomImage
            src={"/saas-company-icons/LinkedIn-Page-Management.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Build a professional and engaging LinkedIn presence to attract
              partners and clients.
            </li>

            <li>
              Share insightful content that showcases your expertise in
              logistics.
            </li>
            <li>Drive leads and establish authority in the industry.</li>
          </ul>
        ),
      },
      {
        name: "Performance Marketing",
        icon: (
          <CustomImage
            src={"/saas-company-icons/Performance-Marketing.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Craft high-performing paid campaigns on social media and search
              platforms.{" "}
            </li>
            <li>
              Maximize ROI with precise targeting and budget optimization.
            </li>
            <li>
              Generate qualified leads that convert into long-term customers.
            </li>
          </ul>
        ),
      },
      {
        name: "Market Survey Analysis",
        icon: (
          <CustomImage
            src={"/saas-company-icons/Market-Survey-Analysis.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Conduct detailed market research to understand customer pain
              points and opportunities.
            </li>
            <li>
              Provide actionable insights that shape effective marketing
              strategies.
            </li>
          </ul>
        ),
      },
      {
        name: "Product Fit Identification",
        icon: (
          <CustomImage
            src={"/saas-company-icons/Product-Fit-Identification.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Analyze your product&apos;s value proposition against market needs.
            </li>
            <li>
              Identify target audiences and tailor messaging to increase
              adoption rates.
            </li>
          </ul>
        ),
      },
      {
        name: "Marketing Consultancy",
        icon: (
          <CustomImage
            src={"/saas-company-icons/Marketing-Consultancy.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Provide strategic guidance for building impactful marketing
              campaigns.
            </li>
            <li>
              Develop short-term and long-term plans that align with your
              business goals.
            </li>
          </ul>
        ),
      },
      {
        name: "Social Media Management",
        icon: (
          <CustomImage
            src={"/saas-company-icons/Social-Media-Management.png"}
            wrapperClss="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Build a robust social media presence to connect with your
              audience.{" "}
            </li>
            <li>
              Create and share compelling content to boost visibility and
              engagement.
            </li>
            <li>
              Leverage platforms like Instagram, Twitter, and Facebook for
              increased brand awareness.
            </li>
          </ul>
        ),
      },
    ],
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The Bot Agency helped us identify our product-market fit and implement a LinkedIn strategy that doubled our lead generation in three months.",
    name: "Leading SaaS Provider",
  },
  {
    content:
      "Their data-driven performance marketing campaigns increased our user acquisition rate by 40% while staying within budget.",
    name: "SaaS Startup Founder",
  },
];

const FAQ_DATA = [
  {
    question: "Can you work with early-stage SaaS startups?",
    ans: "Absolutely! We specialize in helping early-stage companies find their product-market fit and grow effectively.",
  },
  {
    question: "How do you measure the success of marketing campaigns?",
    ans: "We track metrics like lead generation, conversion rates, ROI, and customer engagement to evaluate campaign success.",
  },
  {
    question: "How soon can I expect results?",
    ans: "While performance varies by project, many clients see measurable improvements within the first three months.",
  },
  {
    question: "Can you manage LinkedIn campaigns for multiple SaaS products?",
    ans: "Yes, we can design and execute tailored LinkedIn campaigns for multiple products under your SaaS portfolio.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Specialized for SaaS: </span>
        Years of experience working with SaaS companies of all sizes..{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Data-Driven Approach: </span>
        Leverage analytics to craft fail-proof strategies.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Comprehensive Services: </span>
        From LinkedIn management to performance marketing, we cover it all.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Proven Results: </span>
        We've helped SaaS companies scale by identifying the right strategies
        for growth.{" "}
      </span>
    ),
  },
];

const OUR_PROCESS = [
  {
    name: "Market Analysis",
    description:
      "We begin by analyzing market trends, competitors, and customer behavior to identify the best opportunities for your SaaS product.",
  },
  {
    name: "Product-Market Fit",
    description:
      "We help you determine how your product aligns with customer needs and suggest improvements to increase adoption.",
  },
  {
    name: "Marketing Strategy",
    description:
      "Develop a comprehensive marketing plan tailored to your target audience and business goals.",
  },
  {
    name: "Profiling",
    description:
      "We craft detailed audience personas to ensure precise targeting in all campaigns.",
  },
  {
    name: "Social Media Management",
    description:
      "Execute campaigns across platforms, monitor performance, and adjust strategies to maximize ROI.",
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title:
      "Boost SaaS Business Growth with Data-Driven Marketing Strategies | The Bot Agency",
    description:
      "The Bot Agency specializes in scaling SaaS businesses with tailored marketing strategies. We deliver measurable results that drive user acquisition and business growth.",
    keywords: "SaaS Business Performance Marketing",
  };
}

const SaasCompanyPage = () => {
  return (
    <>
      <TitleBanner
        title={"Powering SaaS Growth with Tailored Marketing Strategies"}
        fontSize="3rem"
        subTitle="Accelerate Your SaaS Success with Data-Driven Marketing, Product Fit Identification, and Strategic Growth Solutions."
        introduction={
          <div>
            <div className="fw-bolder fs-4">
              Comprehensive Services for SaaS Companies
            </div>
            At The Bot Agency, we specialize in creating customized strategies
            to help SaaS businesses thrive in competitive markets. From
            identifying product-market fit to driving leads through targeted
            performance marketing, we're your trusted partner for sustainable
            growth.
          </div>
        }
        bgColor="linear-gradient(to right,rgb(20, 3, 77) 0%,rgb(0, 5, 93) 100%)"
      />
      <Industries
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        bookConsultTitle="CTA: Let's Scale Your SaaS Business Together"
        bookConsultDescription={
          <div>
            🚀 Ready to Transform Your SaaS Growth? Book a consultation today,
            and let's craft a strategy that drives results for your business.
          </div>
        }
        serviceData={SERVICES_DATA}
        ourProcess={OUR_PROCESS}
      />
    </>
  );
};

export default SaasCompanyPage;
