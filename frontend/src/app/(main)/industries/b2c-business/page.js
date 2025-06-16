import Industries from "@/components/Industries";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Our Services for B2C Businesses",
    children: [
      {
        name: "Performance Marketing",
        icon: (
          <img
          src="/Industries/B2C Business/Our Services for B2C/Performance-Marketing.png"
            alt="Performance Marketing"
    
           
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Create tailored ad campaigns to maximize ROI.</li>
            <li>
              Leverage platforms like Google, Facebook, and Instagram to target
              the right audience.
            </li>
            <li>Deliver measurable results through data-driven insights.</li>
          </ul>
        ),
      },
      {
        name: "Lead Generation Services",
        icon: (
          <img
          src="/Industries/B2C Business/Our Services for B2C/Lead-Generation-Services.png"
            alt="lead Generation Services"
    
           
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Identify and attract potential customers for your business.</li>
            <li>
              Optimize your digital presence to generate consistent,
              high-quality leads.
            </li>
            <li>
              Use proven techniques to convert leads into loyal customers.{" "}
            </li>
          </ul>
        ),
      },
      {
        name: "Conversion-Optimized Campaigns",
        icon: (
          <img
          src="/Industries/B2C Business/Our Services for B2C/Conversion-Optimized-Campaigns.png"
            alt="Conversion-Optimized Campaigns"
    
           
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Craft marketing funnels designed to increase sales.</li>
            <li>Run A/B testing to ensure top-performing campaigns.</li>
            <li>
              Implement retargeting strategies to convert undecided prospects{" "}
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
      "The Bot Agency’s performance marketing helped us sell 30% more cars in just 3 months. Their lead generation strategy is spot on!",
    name: "Chandra & Sons",
  },
  {
    content:
      "They brought in high-quality real estate leads that matched our property offerings perfectly. We’ve closed more deals than ever before.",
    name: "Ram Estate Agency",
  },
];

const FAQ_DATA = [
  {
    question: "How quickly can I see results from performance marketing?",
    ans: "Results vary based on the campaign and industry, but many of our clients start seeing leads within the first 2 weeks.",
  },
  {
    question: "Can you handle my social media pages too?",
    ans: "Yes, we provide end-to-end digital marketing, including social media management and content creation.",
  },
  {
    question: "Do you work with small-scale businesses?",
    ans: "Absolutely! We craft solutions for businesses of all sizes and help them grow.",
  },
  {
    question: "How do you ensure lead quality?",
    ans: "By targeting the right audience and using advanced profiling techniques, we ensure the leads are relevant and conversion-ready.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">
          Expertise in B2C Marketing:{" "}
        </span>
        Specialized strategies for car resellers, real estate brokers, and
        similar businesses.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Proven Lead Generation: </span>
        High-quality leads that convert into loyal customers.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">
          Performance-Driven Results:{" "}
        </span>
        Data-backed campaigns designed to maximize ROI..{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Customized Solutions: </span>
        Tailored marketing plans to suit your unique business needs.{" "}
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
    name: "Understanding Your Business Goals",
    description:
      "We begin by understanding your objectives and audience to craft a customized marketing strategy.",
     
  },
  {
    name: "Creating Tailored Campaigns",
    description:
      "Develop performance-driven ad campaigns designed to attract and engage your ideal customers.",
  },
  {
    name: "Lead Generation & Nurturing",
    description:
      "Generate high-quality leads and nurture them through email marketing, retargeting, and engaging content.",
  },
  {
    name: "Scaling Results",
    description:
      "Continuously optimize campaigns based on performance analytics to maximize your ROI.",
  },
];

const INDUSTRIES_WE_SERVE = [
  {
    name: "Car Resellers",
    description: (
      <div>
        <div>Create compelling campaigns to highlight your inventory.</div>
        <div>
          Target local and regional buyers looking for reliable vehicles.
        </div>
        <div>Generate consistent inquiries and boost car sales.</div>
      </div>
    ),
    icon: <i class="fa fa-car pe-3" aria-hidden="true"></i>,
  },
  {
    name: "Real Estate Brokers",
    description: (
      <div>
        <div>Showcase properties with engaging visuals and descriptions.</div>
        <div>
          Reach potential buyers and renters through hyper-targeted ads.
        </div>
        <div>
          Drive more appointments and property visits with effective lead
          generation.
        </div>
      </div>
    ),
    icon: (
      <img
      src="/Industries/B2C Business/Industries We Serve/Real Estate Brokers.png"
        alt="Real Estate Brokers"
        className="icon_size_png m-auto"
      />
    ),
  },
];

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

const B2BIndustriesPage = () => {
  return (
    <>
      <TitleBanner
        title={"Accelerate Your B2C Business Growth with Performance Marketing"}
        fontSize="3rem"
        subTitle="Drive High-Quality Leads and Scale Your Business with Targeted Strategies."
        introduction={
          <div>
            <div className="fw-bolder fs-4">
              Empowering B2C Businesses to Succeed
            </div>
            At The Bot Agency, we specialize in helping B2C businesses like car
            resellers and real estate brokers grow through performance-driven
            marketing. By generating high-quality leads and implementing
            strategies tailored to your market, we ensure your business scales
            effectively in a competitive landscape.
          </div>
        }
        bgColor="linear-gradient(to right,rgb(20, 3, 77) 0%,rgb(0, 5, 93) 100%)"
      />
      <Industries
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        bookConsultTitle="CTA: Scale Your B2C Business Today!"
        bookConsultDescription={
          <div>
            🚀 Ready to Grow Your Business? Book a consultation call with us and
            discover how our performance marketing and lead generation services
            can drive your business forward.
          </div>
        }
        serviceData={SERVICES_DATA}
        ourProcess={OUR_PROCESS}
        industriesWeServe={INDUSTRIES_WE_SERVE}
      />
    </>
  );
};

export default B2BIndustriesPage;
