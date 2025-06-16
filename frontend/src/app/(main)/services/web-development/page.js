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
    content: "Let us understand your goals and requirements.",
    icon: "/Services/Web Development/How It Works/Book a Free Consultation Call.png"

  },
  {
    name: "Website Strategy & Design",
    content:
      "We develop a strategy that aligns with your brand and target audience.",
      icon: "/Services/Web Development/How It Works/Website-Strategy-&-Design.png"
  
         
  },
  {
    name: "Launch Your Stunning Website",
    content: "Attract traffic and leads with your new high-performing website",
    icon: "/Services/Web Development/How It Works/Launch-Your-Stunning-Website.png"

        
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "Our new website not only looks incredible but also doubled our monthly traffic in just 2 months!",
    name: "Dhana - Rufex",
  },
  {
    content:
      "They delivered more than we expected. Leads started pouring in after the launch of our new website!",
    name: "Karan – Groundscrew NZ",
  },
];

const FAQ_DATA = [
  {
    question: "How long does it take to build a website?",
    ans: "The timeline depends on the complexity, but most projects are delivered within 4-6 weeks.",
  },
  {
    question: "Can you redesign my existing website?",
    ans: "Absolutely! We specialize in revamping outdated websites and turning them into traffic-generating platforms.",
  },
  {
    question: "Will my website be SEO-friendly?",
    ans: "Yes! Every website we create is optimized for search engines to ensure maximum visibility.",
  },
];

const WHAT_WE_OFFER = [
  {
    name: "Custom Website Design",
    content: "Beautiful, responsive, and tailored to your brand identity.",
    icon: (
      <img
      src="/Services/Web Development/What We Offer/Custom-Website-Design.png"

        alt="Custom Website Design"
        className="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "SEO-Optimized Content Strategy",
    description:
      "Content designed to rank high on search engines and engage visitors.",
      icon: (
        <img
        src="/Services/Web Development/What We Offer/SEO-Optimized Content Strategy.png"
  
          alt="SEO-Optimized Content Strategy"
          className="icon_size_png m-auto"
        />
      ),
  },
  {
    name: "Lead-Focused Designs",
    description: "Every website element is crafted to drive conversions.",
    icon: (
      <img
      src="/Services/Web Development/What We Offer/Lead-Focused-Designs.png"

        alt="Lead-Focused Designs"
        className="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Industry-Specific Expertise",
    description:
      "Stand out in your field with a website designed for your target audience.",
      icon: (
        <img
        src="/Services/Web Development/What We Offer/Industry-Specific-Expertise.png"
  
          alt="Industry-Specific Expertise"
          className="icon_size_png m-auto"
        />
      ),
  },
  {
    name: "Fast Load Times & Mobile-Friendly Design",
    description: "Perfect performance on all devices.",
    icon: (
      <img
      src="/Services/Web Development/What We Offer/Fast-Load-Times-&-Mobile-Friendly-Design.png"

        alt="Fast Load Times & Mobile-Friendly Design"
        className="icon_size_png m-auto"
      />
    ),
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

const OUR_RESULTS = [
  {
    name: "100+ Stunning Websites Designed",
    images: ["/Services/Web Development/Our Results/100+-Stunning-Websites-Designed.png"] 
  },
  {
    name: "High Traffic Websites That Convert Leads",
    images: ["/Services/Web Development/Our Results/High-Traffic-Websites-That-Convert-Leads.png"] 
  },
  {
    
    name: "Trusted by 50+ Businesses Across Industries",
    images: ["/Services/Web Development/Our Results/Trusted-by-50+-Businesses-Across-Industries.png"] 
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Professional Development Services | The Bot Agency",
    description:
      "At The Bot Agency, we specialize in website development that not only look stunning but also drive traffic, generate leads, and enhance business growth",
    keywords: "High-performance website Development",
  };
}

const WebDevelopmentPage = () => {
  return (
    <>
      <TitleBanner
        title={
          "Transform Your Online Presence with Stunning Websites That Drive Results!"
        }
        fontSize="3rem"
        subTitle="We design websites that don’t just look great – they bring traffic, generate leads, and grow your business."
        introduction={
          <div>
            In today’s digital age, your website is your most powerful tool to
            attract, engage, and convert visitors into customers. At The Bot
            Agency, we craft visually stunning, user-friendly, and
            high-performance websites that set you apart in your domain and
            attract high-quality leads.
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
      />
    </>
  );
};

export default WebDevelopmentPage;
