import Industries from "@/components/Industries";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Our Services for the Logistics Industry",
    children: [
      {
        name: "LinkedIn Page Management",
        icon: (
          <img
          src="/Industries/Logistics business/Our Services for logistics/LinkedIn Page Management.png"
            alt="LinkedIn Page Management"
    
            
            className="icon_size_png m-auto"
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
        name: "Tech Development",
        icon: (
          <img
          src="/Industries/Logistics business/Our Services for logistics/Tech-Development.png"
            alt="Tech Development"
    
            
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Develop customized software to automate your logistics operations.
            </li>
            <li>
              Create dashboards for real-time tracking, expense management, and
              process optimization.
            </li>
            <li>
              Implement systems to improve efficiency and reduce operational
              costs.
            </li>
          </ul>
        ),
      },
      {
        name: "Business Consultancy",
        icon: (
          <img
          src="/Industries/Logistics business/Our Services for logistics/Business Consultancy.png"
            alt="Business Consultancy"
    
            
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Conduct audits of your logistics processes to identify growth
              opportunities.
            </li>
            <li>
              Provide actionable strategies to improve efficiency and
              profitability.
            </li>
            <li>
              Offer guidance on expanding into new markets or optimizing current
              operations
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
      "The Bot Agency developed a custom dashboard for our logistics company that streamlined tracking and reduced operational costs by 10%. Their LinkedIn strategy also helped us connect with major clients.",
    name: "RSLPL",
  },
  {
    content:
      "Their consultancy services helped us identify new growth opportunities and optimize our delivery process. Highly recommended!",
    name: "Gabrin Shipping",
  },
];

const FAQ_DATA = [
  {
    question: "How does LinkedIn management benefit logistics companies?",
    ans: "LinkedIn helps you build credibility, connect with potential clients, and showcase your expertise in the logistics sector.",
  },
  {
    question: "What kind of tech development do you offer?",
    ans: "We develop custom solutions such as tracking dashboards, expense management tools, and process automation systems tailored to your logistics business.",
  },
  {
    question: "Can you help small logistics companies?",
    ans: "Absolutely! We work with businesses of all sizes to provide scalable solutions.",
  },
  {
    question: "How do you measure the success of your strategies?",
    ans: "Success is measured through key metrics like increased leads, improved operational efficiency, and ROI on digital marketing campaigns.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Industry Expertise: </span>
        We understand the unique challenges of the logistics industry and craft
        solutions accordingly.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Tech-Driven Solutions: </span>
        Our tech development services ensure your processes are automated and
        efficient.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Proven Results: </span>
        We’ve helped logistics businesses improve operations, attract new
        clients, and expand their reach.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">End-to-End Support: </span>
        From consultancy to execution, we’re with you at every step.{" "}
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
    name: "Competitor Analysis",
    description:
      "We begin by analyzing your competitors to identify opportunities and differentiate your business.",
  },
  {
    name: "Profiling",
    description:
      "Understand your target audience and craft strategies to engage with them effectively.",
  },
  {
    name: "Strategy Development",
    description:
      "Design a comprehensive growth plan tailored to your business objectives, including technology solutions and digital marketing strategies.",
  },
  {
    name: "Execution",
    description:
      "Implement the strategies, manage LinkedIn campaigns, develop tech solutions, and provide continuous support.",
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
    icon: <i className="fa fa-car pe-3" aria-hidden="true"></i>,
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
    icon: <i className="fa fa-car pe-3" aria-hidden="true"></i>,
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title:
      "Streamline Logistics Business with Tailored Digital Solutions | The Bot Agency",
    description:
      "Empower your logistics business with tech-driven growth strategies from The Bot Agency. We help you optimize operations, attract clients, and scale efficiently.",
    keywords: "Logistics Business Consultancy",
  };
}

const LogisticsBusinessesPage = () => {
  return (
    <>
      <TitleBanner
        title={"Empowering Logistics Businesses with Digital Growth Strategies"}
        fontSize="3rem"
        subTitle="Streamline Your Logistics Operations and Maximize Growth with Tailored Digital Solutions."
        introduction={
          <div>
            <div className="fw-bolder fs-4">
              Transforming Logistics with Our Expertise
            </div>
            At The Bot Agency, we specialize in empowering logistics businesses
            to scale by leveraging technology, expert consultancy, and impactful
            LinkedIn strategies. From building your digital presence to
            optimizing your processes, we provide end-to-end solutions tailored
            to the logistics industry.
          </div>
        }
        bgColor="linear-gradient(to right,rgb(20, 3, 77) 0%,rgb(0, 5, 93) 100%)"
      />
      <Industries
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        bookConsultTitle="CTA: Let’s Optimize Your Logistics Business"
        bookConsultDescription={
          <div>
            🚛 Ready to Streamline Your Operations and Scale Your Business? Book
            a consultation today and let’s craft a winning strategy tailored for
            your logistics needs.
          </div>
        }
        serviceData={SERVICES_DATA}
        ourProcess={OUR_PROCESS}
        // industriesWeServe={INDUSTRIES_WE_SERVE}
      />
    </>
  );
};

export default LogisticsBusinessesPage;
