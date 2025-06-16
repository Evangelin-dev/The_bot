import Branding from "@/components/Services/Branding";
import TitleBanner from "@/components/TitleBanner";

const SERVICES_DATA = [
  {
    name: "Tech Development: Innovate, Automate, Elevate",
    children: [
      {
        name: "Business Process Audit",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "We analyze your existing processes to identify inefficiencies and opportunities for improvement.",
      },
      {
        name: "Custom Application Development",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Tailor-made tech solutions designed to align with your business goals and optimize workflows.",
      },
      {
        name: "Automation & Dashboards",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Simplify operations with dashboards for expense tracking, time management, and productivity enhancement.",
      },
      {
        name: "Proven Results",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
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
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "A well-defined roadmap that ensures your brand stands out and connects with the right audience.",
      },
      {
        name: "Brand Style Guides",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Consistency is key—our style guides cover everything from fonts to tone, ensuring your brand is cohesive across all touchpoints.",
      },
      {
        name: "Brand Design",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Eye-catching designs that resonate with your target audience and reflect your core values.",
      },
      {
        name: "Brand Development",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "From ideation to execution, we bring your brand to life with tailored strategies.",
      },
      {
        name: "Brand Management",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Keep your brand relevant and impactful with ongoing management and evolution.",
      },
      {
        name: "Logo Design",
        icon: <i className="fa fa-btc" aria-hidden="true"></i>,
        description:
          "Memorable logos that make a lasting impression and establish a unique identity.",
      },
    ],
  },
];

const HOW_IT_WORKS = [
  {
    name: "Book a Free Consultation Call",
    content: "Share your goals and challenges with us.",
    icon: "/Services/Social Media Management/How It Works/Book a Free Consultation Call.png"

    
    
  },
  {
    name: "Custom Strategy Development",
    content: "We design a viral content plan for your brand.",
    icon: "/Services/Social Media Management/How It Works/Custom Strategy Development.png"

       
  },
  {
    name: "Execution & Results",
    content: "Sit back while we make your social media accounts thrive",
    icon:"/Services/Social Media Management/How It Works/Execution & Results.png"

    
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "Their social media strategies completely transformed our brand. We saw a 300% increase in engagement within just three months!",
    name: "Mukhund - SaaS Business Owner",
  },
  {
    content:
      "The viral content they created helped us double our followers and generate leads consistently through Linkedin. Truly exceptional!",
    name: " Samer - Chemiplant",
  },
];

const FAQ_DATA = [
  {
    question: "How soon can I see results?",
    ans: "Most clients see noticeable growth within 4-6 weeks of implementation.",
  },
  {
    question: "Will my business type work with your strategies?",
    ans: "Absolutely! Our strategies are tailored to fit every industry, from IT to retail.",
  },
  {
    question: "How do you ensure content goes viral?",
    ans: "We combine audience insights, trending topics, and creative design to craft highly engaging posts.",
  },
];

const WHAT_WE_OFFER = [
  {
    name: "Viral Content Creation",
    content: "Engage your audience with share-worthy, creative posts.",
    icon: "/Services/Social Media Management/What We Offer/Viral-Content-Creation.png"

  },
  {
    name: "Trend-Driven Strategies",
    description:
      "Stay ahead of the competition by leveraging the latest trends.",
      icon: "/Services/Social Media Management/What We Offer/Trend-Driven-Strategies.png"
  
       
  },
  {
    name: "Data-Backed Insights",
    description: "Analyze user behavior to craft content that converts.",
    icon: "/Services/Social Media Management/What We Offer/Data-Backed-Insights.png"

      
  },
  {
    name: "Customized Growth Plans",
    description: "Tailored strategies for your unique business needs.",
    icon: "/Services/Social Media Management/What We Offer/Customized Growth Plans.png"

       
  },
];

const WHY_CHOOSE_US = [
  {
    name: "Proven strategies that deliver measurable results.",
  },
  {
    name: "Expertise in understanding and leveraging platform algorithms.",
  },
  {
    name: "Dedicated social media managers ensuring your brand gets the attention it deserves.",
  },
];

const OUR_RESULTS = [
  {
    name: "100% Growth in Social Media Engagement",
    images: ["/Services/Social Media Management/Our Results/100-Growth-in-Social-Media-Engagement.png"] 
  },
  {
    name: "ROI-Driven Content That Converts",
    images: ["/Services/Social Media Management/Our Results/Increased-Followers,-Leads,-and-Sales-for-50+-Clients.png"] 
  },
  {
    name: "Increased Followers, Leads, and Sales for 50+ Clients",
    images: ["/Services/Social Media Management/Our Results/ROI-Driven-Content-That-Converts.png"] 
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Social Media Management| The Bot Agency",
    description:
      "Social Media Management: From content creation to data-backed insights, we ensure your brand stands out and thrives on every platform.",
    keywords: "Social Media Management",
  };
}

const SocialMediaMgmtPage = () => {
  return (
    <>
      <TitleBanner
        title={"Elevate Your Social Media Game – Drive ROI Like Never Before!"}
        fontSize="3rem"
        subTitle="Transform your social media platforms into ROI-generating machines with viral content and trend-driven strategies."
        introduction={
          <div>
            Struggling to get results from your social media efforts? At The Bot
            Agency, we specialize in creating viral, engaging, and trend-based
            content that not only increases your online presence but also
            skyrockets your return on investment (ROI).
          </div>
        }
        bgColor="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      />
      <Branding
        howItWorks={HOW_IT_WORKS}
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        OurResults={OUR_RESULTS}
        whatWeOffer={WHAT_WE_OFFER}
        bookConsultTitle="Let’s Make Your Brand Viral!"
        bookConsultDescription="Take the first step toward building a powerful social media presence."
      />
    </>
  );
};

export default SocialMediaMgmtPage;
