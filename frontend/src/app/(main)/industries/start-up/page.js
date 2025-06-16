import Industries from "@/components/Industries";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Our Services for Start-Ups",
    children: [
      {
        name: "Brand Guidelines Creation",
        icon: (
          <img
          src="/Industries/StartUp/Our Services for Start-Ups/Brand-Guidelines-Creation.png"
            alt="Brand Guidelines Creation" 
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Define your brand’s voice, tone, and visual identity.</li>
            <li>Ensure consistent communication across all platforms.</li>
          </ul>
        ),
      },
      {
        name: "Market Communications",
        icon: (
          <img
          src="/Industries/StartUp/Our Services for Start-Ups/Market Communications.png"
            alt="Market Communications" 
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Develop impactful messages to connect with your audience.</li>
            <li>
              Craft stories that resonate with potential investors, clients, and
              stakeholders{" "}
            </li>
          </ul>
        ),
      },
      {
        name: "Email Campaigns",
        icon: (
          <img
          src="/Industries/StartUp/Our Services for Start-Ups/Email Campaigns.png"
            alt=" Email Campaigns" 
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>
              Set up effective email marketing campaigns to nurture leads.
            </li>
            <li>
              Drive engagement with personalized and automated communication.
            </li>
          </ul>
        ),
      },
      {
        name: "LinkedIn Outreach",
        icon: (
          <img
          src="/Industries/StartUp/Our Services for Start-Ups/LinkedIn Outreach.png"
            alt="LinkedIn Outreach"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Build relationships with potential clients and partners.</li>
            <li>
              Generate high-quality leads through professional networking
              strategies.
            </li>
          </ul>
        ),
      },
      {
        name: "Fool-Proof Winning Strategy",
        icon: (
          <img
          src="/Industries/StartUp/Our Services for Start-Ups/Fool-Proof-Winning-Strategy.png"
            alt="Fool-Proof Winning Strategy"
            className="icon_size_png m-auto"
          />
        ),
        description: (
          <ul>
            <li>Analyze your market, competition, and opportunities.</li>
            <li>
              Create a step-by-step roadmap tailored to your growth goals.
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
      "The Bot Agency turned our start-up idea into a sustainable business by crafting a market strategy that worked perfectly for us!",
    name: "Siva – Vow water delivery app",
  },
  {
    content:
      "With their help, we defined our brand identity and gained our first 50 clients in just 6 months.",
    name: "Amruth - Greenheap",
  },
];

const FAQ_DATA = [
  {
    question:
      "I’m just starting out and have a limited budget. Can you help me?",
    ans: "Absolutely! We design cost-effective strategies tailored to your start-up’s specific needs and budget.",
  },
  {
    question: "How long does it take to see results?",
    ans: "Results vary based on your goals, but many of our clients see significant improvements in client acquisition and brand visibility within 2-3 months.",
  },
  {
    question: "Do you help with investor presentations?",
    ans: "Yes, we assist in crafting market communication and presentations that resonate with investors.",
  },
  {
    question: "Can you handle execution as well?",
    ans: "Yes, we not only craft strategies but also assist in executing them, such as managing email campaigns, LinkedIn outreach, and brand communication.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">
          Entrepreneur-Friendly Approach:{" "}
        </span>
        We understand your budget constraints and provide cost-effective
        solutions.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">End-to-End Support: </span>
        From branding to execution, we’re your growth partner.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Proven Results: </span>
        We’ve helped start-ups establish sustainable business models and win in
        competitive markets.{" "}
      </span>
    ),
  },
  {
    name: (
      <span>
        <span className="fw-bolder pink_text">Data-Driven Strategies: </span>
        Every plan we create is backed by thorough research and analysis.{" "}
      </span>
    ),
  },
];

const OUR_PROCESS = [];

const HOW_IT_WORKS = [
  {
    icon: "/Industries/Startup/How It Works/Discovery-Session.png",
    name: "Discovery Session",
    content:
      "We learn about your start-up, vision, and challenges to tailor our approach.",
  },
  {
    icon: "/Industries/Startup/How It Works/Strategy-Crafting.png",
    name: "Strategy Crafting",
    content:
      "Develop a comprehensive plan that addresses brand building, market entry, and lead generation.",
  },
  {
    icon: "/Industries/Startup/How It Works/Execution-Support.png",
    name: "Execution Support",
    content:
      "Help execute the plan through email campaigns, LinkedIn outreach, and communication strategies",
  },
  {
    icon: "/Industries/Startup/How It Works/Continuous-Optimization.png",
    name: "Continuous Optimization",
    content:
      "Refine strategies based on performance data to ensure success and scalability.",
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title:
      "Helping Start-Ups Build, Scale, and Achieve Sustainable Growth | The Bot Agency",
    description:
      "Transform your start-up into a thriving business with expert strategies from The Bot Agency. We provide tailored solutions for sustainable growth.",
    keywords: "Start-up Branding Strategies",
  };
}

const StartUpPage = () => {
  return (
    <>
      <TitleBanner
        title={"Empowering Start-Ups to Build, Scale, and Thrive"}
        fontSize="3rem"
        subTitle="Crafting Tailored Strategies to Transform Ideas into Sustainable Businesses."
        introduction={
          <div className="text-center">
            <div className="fw-bolder fs-4">What Does Start-Up Mean?</div>
            <div>
              <div className="py-2">
                A start-up is more than just an idea—it’s a growing business
                that’s still navigating its path. Often, start-ups face
                challenges such as:
              </div>

              <div>Establishing a revenue model.</div>
              <div>Defining a client acquisition strategy.</div>
              <div>
                Limited resources to invest in marketing or brand building.
              </div>
            </div>

            <p>
              At The Bot Agency, we understand these challenges and partner with
              start-ups to lay a solid foundation for success.
            </p>
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
        howItWorks={HOW_IT_WORKS}
      />
    </>
  );
};

export default StartUpPage;
