import Branding from "@/components/Services/Branding";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Tech Development: Innovate, Automate, Elevate",
    children: [
      {
        name: "Business Process Audit",
        icon: (
          <img
          src="/Services/Branding/Tech Development/Business-Process-Audit.png"
    
            alt="Custom Solutions"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "We analyze your existing processes to identify inefficiencies and opportunities for improvement.",
      },
      {
        name: "Custom Application Development",
        icon: (
          <img
          src="/Services/Branding/Tech Development/Custom-Application-Development.png"
    
            alt="Custom-Application-Development"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Tailor-made tech solutions designed to align with your business goals and optimize workflows.",
      },
      {
        name: "Automation & Dashboards",
        icon: (
          <img
          src="/Services/Branding/Tech Development/Automation-&-Dashboards.png"
    
            alt="Automation-&-Dashboards"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Simplify operations with dashboards for expense tracking, time management, and productivity enhancement.",
      },
      {
        name: "Proven Results",
        icon: (
          <img
          src="/Services/Branding/Tech Development/Proven-Results.png"
    
            alt="Proven-Results"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Clients save up to 5% in operational costs, boosting profitability and efficiency.",
      },
    ],
  },
  {
    name: "Brand Strategy & Development: Build a Brand That Inspires",
    children: [
      {
        name: "Brand Strategy",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Brand-Strategy.png"

            alt="Brand-Strategy"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "A well-defined roadmap that ensures your brand stands out and connects with the right audience.",
      },
      {
        name: "Brand Style Guides",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Brand-Style-Guides.png"

            alt="Brand-Style-Guides"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Consistency is key—our style guides cover everything from fonts to tone, ensuring your brand is cohesive across all touchpoints.",
      },
      {
        name: "Brand Design",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Brand-Design.png"

            alt="Brand-Design"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Eye-catching designs that resonate with your target audience and reflect your core values.",
      },
      {
        name: "Brand Development",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Brand-Development.png"

            alt="Brand-Development"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "From ideation to execution, we bring your brand to life with tailored strategies.",
      },
      {
        name: "Brand Management",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Brand-Management.png"

            alt="Brand-Management"
            className="icon_size_png m-auto"
          />
        ),
        description:
          "Keep your brand relevant and impactful with ongoing management and evolution.",
      },
      {
        name: "Logo Design",
        icon: (
          <img
          src="/Services/Branding/Brand Strategy & Development/Logo-Design.png"

            alt="Logo Design"
            className="icon_size_png m-auto"
          />
        ),
        
        description:
          "Memorable logos that make a lasting impression and establish a unique identity.",
      },
    ],
  },
];

const HOW_IT_WORKS = [
  {
    name: "Discovery Call",
    icon:
      "/Services/Branding/How It Works/Discovery-Call.png",

      
    content: "Understand your business goals, challenges, and vision.",
  },
  {
    name: "Audit & Analysis",
    icon: "/Services/Branding/How It Works/Audit & Analysis.png",

       
    content:
      "Conduct a detailed assessment of your processes and market positioning.",
  },
  {
    name: "Custom Solutions",
    icon:"/Services/Branding/How It Works/Custom Solutions.png",
    content:
      "Develop a personalized strategy for tech implementation and brand creation.",
  },
  {
    name: "Execution",
    icon:"/Services/Branding/How It Works/Execution.png",
    content:
      "Roll out solutions seamlessly while keeping you informed every step of the way.",
  },
  {
    name: "Growth",
    icon: "/Services/Branding/How It Works/Growth.png",
    content:
      "Measure success and refine strategies to ensure continuous improvement.",
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The Bot Agency completely streamlined our business with their custom tech solutions. The dashboard they built saved us hours of manual work and cut down costs significantly!",
    name: "Surendra – Makin Exports",
  },
  {
    content:
      "Our rebranding project was a huge success thanks to The Bot Agency. The new logo and design have helped us attract a much larger audience.",
    name: "Vow -Water Tech Company",
  },
];

const FAQ_DATA = [
  {
    question: "How long does it take to develop a custom tech application?",
    ans: "The timeline depends on the project scope but typically ranges from 4 to 8 weeks.",
  },
  {
    question: "Can I get branding services without opting for tech solutions?",
    ans: "Yes, our branding services are available as standalone solutions to fit your needs.",
  },
  {
    question: "How do you ensure branding consistency?",
    ans: "Our detailed brand style guides ensure all your marketing and communication materials stay aligned with your brand identity.",
  },
  {
    question: "Will I need to hire a team to manage the tech solutions?",
    ans: "Our solutions are user-friendly, and we provide training to ensure your team can manage them seamlessly.",
  },
];

const WHAT_WE_OFFER = [
  {
    name: "Custom Website Design",
    content: "Beautiful, responsive, and tailored to your brand identity.",
  },
  {
    name: "SEO-Optimized Content Strategy",
    description:
      "Content designed to rank high on search engines and engage visitors.",
  },
  {
    name: "Lead-Focused Designs",
    description: "Every website element is crafted to drive conversions.",
  },
  {
    name: "Industry-Specific Expertise",
    description:
      "Stand out in your field with a website designed for your target audience.",
  },
  {
    name: "Fast Load Times & Mobile-Friendly Design",
    description: "Perfect performance on all devices.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: "Websites That Gain Traffic & Generate Leads",
  },
  {
    name: "Tailored Content Strategies to Make You an Industry Leader",
  },
  {
    name: "Proven Expertise Across Domains (Manufacturers, IT, SaaS, etc.)",
  },
];

const WHAT_SETS_UP = [
  {
    name: "Dot-to-Design Expertise: We transform ideas into stunning realities, from concept to final execution",
    
  },
  {
    
    name: "Data-Driven Approach: Every decision is backed by analytics, ensuring maximum impact.",
  },
  {
    name: "End-to-End Solutions: From branding to technology, we cover it all under one roof.",
    
  },
  {
    name: "Proven Track Record: 50+ successful projects with measurable results across industries.",
    // icon: "fa-headset",
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Branding Strategy Service | The Bot Agency",
    description:
      "At The Bot Agency, we specialize in creating unique and memorable brands. From crafting brand strategies and designs to developing strong brand identities, we help businesses stand out and connect with their audience effectively.",
    keywords: "Branding Strategy",
  };
}

const BrandingPage = () => {
  return (
    <>
      <TitleBanner
        title={
          "From Concept to Creation: Crafting Tech Solutions and Iconic Brands"
        }
        fontSize="3rem"
        subTitle="Empowering Businesses with Tailor-Made Tech Solutions and Distinctive Branding Strategies"
        introduction={
          <div>
            At The Bot Agency, we combine cutting-edge technology with creative
            branding expertise to help businesses thrive. Whether it’s building
            innovative tech applications or establishing a memorable brand
            identity, our solutions are crafted to meet your unique needs and
            deliver exceptional results.
          </div>
        }
        bgColor="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      />
      <Branding
        serviceData={SERVICES_DATA}
        howItWorks={HOW_IT_WORKS}
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whatSetsUp={WHAT_SETS_UP}
      />
    </>
  );
};

export default BrandingPage;
