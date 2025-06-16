import Banner from "@/components/Banner";
import ClientTestimonial from "@/components/ClientTestimonial";
import Clients from "@/components/Clients";
import LogoVideoComponent from "@/components/LogoVideoComponent";
import MarketingSubscriptionCard from "@/components/MarketingSubscriptionCard";
import OurExpertArticle from "@/components/OurExpertArticle";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import HowItWorks from "@/components/Services/HowItWorks";
import CustomImage from "@/components/custom/Image";
import style from "../../components/ClientTestimonial/styles.module.css";
import WhyChooseUsCarousel from "@/components/Why-choose-us";
import VentureBackedPartners from "@/components/VentureBackedPartners";

import HowItMakesCarousel from "@/components/How-it-works";

// const fetchPosts = async () => {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const data = await res.json();
//   return data;
// };

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "The Bot Agency | Predictive Marketing & Business Growth Strategies ",
    description:
      "The Bot Agency offers data-driven, predictive marketing strategies that guarantee business growth. With a proven track record of 200% ROAS for over 50 brands, we help B2B, B2C, SaaS, and startups achieve results",
    keywords: " Predictive Marketing Strategies",
  };
}

const settings = {
  infinite: true,  // Allows for infinite scrolling
  speed: 500,      // Speed of the transition
  slidesToShow: 3, // Number of items to show at a time
  slidesToScroll: 1, // Number of items to scroll at a time
  arrows: true,    // Show previous/next arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // 2 items for medium screens
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // 1 item for small screens
      },
    },
  ],
};

const WHAT_WE_OFFER = [
  {
    name: "Predictive Market Analysis",
    description:
      "Stay ahead of the curve with data-driven insights that guide your next big move.",
      link: "/services/predictive-analysis"

  },
  {
    name: "Marketing Subscription",
    description:
      "Ongoing support to manage your marketing efforts effortlessly",
      link:"/services/lead-generation" 
  },
  {
    name: "Predictive Marketing Strategy",
    description: "Fool-proof strategies backed by data to guarantee results",
    link:"/services/marketing-strategies" 
  },
  {
    name: "SEO",
    description:
      "Rank higher, attract more, and convert better with search engine optimization.",
      link:"/services/seo" 
  },
  {
    name: "Social Media Management",
    description:
      "Create viral content and engage your audience across platforms.",
      link:"/services/social-media-management" 
  },
  {
    name: "Branding",
    description:
      "Compelling brand stories that resonate with your target audience.",
      link:"/services/branding" 
  },
  {
    name: "Web Development",
    description: "Stunning websites that drive traffic and convert leads",
    link:"/services/web-development" 
  },
  {
    name: "Tech Developmentt",
    description:
      "Tailored solutions to automate your processes and save operational costs.",
      link:"/services/tech-development" 
  },
];

const WHY_CHOOSE_US = [
  {
    name: "Proven Track Record",
    content: "Over 50+ brands scaled with our expertise.",
    icon: "/home/why-choose-us/Proven-Track-Record.png"
     
  },
  {
    name: "Guaranteed Results",
    content: "200% ROAS achieved for our clients.",
    icon: "/home/why-choose-us/Guaranteed-Results.png"
      
  },
  {
    name: "Data-Driven Approach",
    content: "Predictive strategies that work from Day 1.",
    icon: "/home/why-choose-us/Data-Driven-Approach.png"
      
  },
  {
    name: "Customized Solutions",
    content: "Tailored strategies that align with your unique goals.",
    icon: "/home/why-choose-us/Customized-Solutions.png"
    
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The Bot Agency’s strategies helped us achieve a 200% ROAS and transform our business!",
    name: "Groundscrew",
  },
  {
    content:
      "From zero to a thriving business, The Bot Agency crafted a strategy that actually worked.",
    name: "Surendra – Makin Exports",
  },
];

const HOW_IT_WORKS = [
  {
    name: "Market Analysis",
    content:
      "We start by understanding your industry, competitors, and audience.",
    icon: "/home/how-it-works/Market-Analysis.png"
       
  },
  {
    name: "Predictive Strategy",
    content:
      "Using data-driven insights, we create a fool-proof plan tailored to your needs.",
    icon: "/home/how-it-works/Predictive-Strategy.png"
      
  },
  {
    name: "Execution",
    content: "Our team ensures flawless execution and measurable results",
    icon: "/home/how-it-works/Execution.png"
     ,
  },
];

const HomePage = async () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className={`${style.testimonial_wrapper}`}>
          <h1 className="pink_text pb-4">About Us</h1>
          <div className={`d-flex overflow-auto gap-5 hide-scroll`}>
            <div
              className={`${style.testimonial_content} d-flex`}
              style={{ flexDirection: "column" }}
            >
              <div
                className={`${style.testimonial_msg} fadeIn`}
                style={{ marginBottom: "auto" }}
              >
                At <span className="fw-bolder">The Bot</span>, we specialize in
                crafting fool-proof marketing strategies that deliver results
                from Day 1. Using a predictive, data-driven approach, we help
                businesses achieve sustainable growth. With over 50+ brands in
                our portfolio, we’ve generated 200% ROAS for our clients by
                crafting compelling stories and executing them flawlessly.
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurExpertArticle data={WHAT_WE_OFFER} />
      <MarketingSubscriptionCard />

      <div className="container fadeIn">
      <WhyChooseUsCarousel data={WHY_CHOOSE_US}/>
      <VentureBackedPartners />



        <ClientTestimonial data={CLIENT_TESTIMONIAL} />
      
        <WhyChooseUsCarousel data={HOW_IT_WORKS} />
      </div>

      
      <LogoVideoComponent />
      <Clients />
    </>
  );
};

export default HomePage;

