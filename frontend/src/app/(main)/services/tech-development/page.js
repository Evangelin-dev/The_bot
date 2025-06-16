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
    name: "Book a Consultation Call",
    content: "Share your business challenges and goals.",
    icon: "/Services/Tech Development/How It Works/Book a Free Consultation Call.png"

     
  },
  {
    name: "Business Process Audit",
    content: "We analyze your workflows to identify areas for improvement.",
    icon: "/Services/Tech Development/How It Works/Business Process Audit.png"

     
  },
  {
    name: "Tailor-Made Tech Development",
    content:
      "Receive a custom-built application designed to optimize your operations.",
      icon: "/Services/Tech Development/How It Works/Tailor-Made-Tech-Development.png"
  
         
  },
  {
    name: "Implementation & Support",
    content:
      "Launch the solution and start saving costs while boosting productivity.",
      icon: "/Services/Tech Development/How It Works/Implementation & Support.png"
  
       
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The custom dashboard they developed helped us reduce time loss by 10%. Our business operations have never been smoother!",
    name: "Chemiplant Manufacturer",
  },
  {
    content:
      "Their tailored app saved us 7% in operational costs in just 6 months. Highly recommended!",
    name: "Install tec",
  },
];

const FAQ_DATA = [
  {
    question: "How long does it take to develop a custom application?",
    ans: "Development time varies based on complexity but typically ranges from 4-8 weeks.",
  },
  {
    question: "Can you integrate the solution with our existing systems?",
    ans: "Yes, our solutions are designed to seamlessly integrate with your current tools and workflows.",
  },
  {
    question: "Will I get training for the application?",
    ans: "Absolutely! We provide full training and ongoing support for your team to ensure smooth implementation.",
  },
];

const WHAT_WE_OFFER = [
  {
    name: "Business Process Audits",
    content:
      "A deep dive into your operations to identify inefficiencies and opportunities.",
      icon: "/Services/Tech Development/What We Offer/Business-Process-Audit.png"
  
       
      
  },
  {
    name: "Custom Application Development",
    description:
      "Tailor-made software solutions perfectly aligned with your business needs.",
      icon: "/Services/Tech Development/What We Offer/Custom-Application-Development.png"
  
        
  },
  {
    name: "Automation Solutions",
    description:
      "Reduce manual effort and improve efficiency by automating routine tasks.",
      icon:"/Services/Tech Development/What We Offer/Automation-Solutions.png"
  
        
  },
  {
    name: "Expense & Time Tracking Dashboards",
    description:
      "Stay on top of your operations with real-time insights into expenses and time management.",
      icon: "/Services/Tech Development/What We Offer/Expense-&-Time-Tracking-Dashboards.png"
  
       
  },
  {
    name: "Cost Optimization",
    description:
      "Save at least 5% on operational costs with our tech solutions.",
      icon:"/Services/Tech Development/What We Offer/Cost-Optimization.png"
  
          
  },
];

const WHY_CHOOSE_US = [
  {
    name: "Tailored Solutions for Your Business Needs",
    
  },
  {
    name: "Proven Expertise in Cost Reduction & Profitability",
  },
  {
    name: "Real-Time Dashboards for Better Decision Making",
  },
  {
    name: "Niche Expertise in Expense & Time Tracking",
  },
];

const OUR_RESULTS = [
  {
    name: "5% Operational Cost Savings for Clients on Average",
    images: ["/Services/Tech Development/Our Results/Operational-Cost-Savings-for-Clients-on-Average.png"] 
  },
  {
    name: "Streamlined Processes Across Industries",
    images: ["/Services/Tech Development/Our Results/Increased Profitability & Time Efficiency for Over 50+ Businesses.png"] 
  },
  {
    name: "Increased Profitability & Time Efficiency for Over 50+ Businesses",
    images: ["/Services/Tech Development/Our Results/Streamlined-Processes-Across-Industries.png"] 
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Tech Development & Business Process Automation Solutions",
    description:
      "Tech Development: Our services include business process audits, tailored application development, automation solutions, and real-time dashboards.",
    keywords: "Customized Tech development",
  };
}

const TechDevelopmentPage = () => {
  return (
    <>
      <TitleBanner
        title={"Revolutionize Your Business with Tailor-Made Tech Solutions"}
        fontSize="3rem"
        subTitle="Streamline your processes, save costs, and boost profitability with custom-built applications designed just for your business."
        introduction={
          <div>
            At The Bot Agency, we specialize in transforming businesses through
            technology. By conducting a comprehensive audit of your business
            processes, we craft tailor-made applications that automate your
            workflows, optimize performance, and provide real-time insights to
            drive profitability.
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
        bookConsultTitle="Let Technology Drive Your Success"
        bookConsultDescription="Discover how custom tech solutions can save costs and boost profitability for your business"
      />
    </>
  );
};

export default TechDevelopmentPage;
