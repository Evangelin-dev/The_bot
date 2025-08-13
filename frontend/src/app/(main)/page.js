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
import AboutUsTyping from "../../components/AboutSection/AboutUsTyping";
import HowItMakesCarousel from "@/components/How-it-works";
import AnimatedServiceGrid from "@/components/AnimatedCardGrid";
import styles from './page.module.css';
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

// src/app/(main)/page.js

// ... (keep all your imports and data constants at the top)

// src/app/(main)/page.js

// ... (keep all your imports and data constants at the top)

const HomePage = async () => {
  return (
    <>
      <Banner />

      {/* The master container for the whole section */}
      <div className={styles.unifiedBackgroundSection}>

        {/* --- Top part with the GALAXY background --- */}
        <div className={styles.galaxyWrapper}>
          <AboutUsTyping />
          <AnimatedServiceGrid />
        </div>

        {/* --- Bottom part with the WAVE background --- */}
        <div className={styles.waveWrapper}>
          <MarketingSubscriptionCard />
        </div>

      </div>

      {/* These components will NOT have the special background */}
      <div className="container fadeIn">
        <VentureBackedPartners />
        <WhyChooseUsCarousel data={WHY_CHOOSE_US} />
        <ClientTestimonial data={CLIENT_TESTIMONIAL} />
        <WhyChooseUsCarousel data={HOW_IT_WORKS} />
      </div>

      <LogoVideoComponent />
      <Clients />
    </>
  );
};

export default HomePage;

