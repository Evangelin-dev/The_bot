"use client";

import CustomImage from "@/components/custom/Image";
import styles from "./styles.module.css";
import ClientTestimonial from "@/components/ClientTestimonial";
import FaQ from "../FAQ";
import BookYourConsultation from "@/components/custom/BookYourConsultation";

import HowItMakesCarousel from "@/components/How-it-works";
import WhyChooseUsCarousel from "@/components/Why-choose-us";

const WHAT_WE_OFFER = [
  {
    name: "Custom Marketing Strategy",
    icon: "/Services/Marketing strategies/How It Works/Custom Marketing Strategy.png",
    content: "A complete roadmap designed for your business.",
  },
  {
    name: "Monthly, Quarterly, or Yearly Planners",
    icon: "/Services/Marketing strategies/How It Works/Monthly,-Quarterly,-or-Yearly-Planners.png",
    content: "Clear, actionable plans your team can follow.",
  },
  {
    name: "Market Insights & Analytics",
    icon: "/Services/Marketing strategies/How It Works/Market Insights & Analytics.png",
    content: "Data-driven strategies to stay ahead of competitors.",
  },
  {
    name: "Guidance for Your Team",
    icon: "/Services/Marketing strategies/How It Works/Guidance-for-Your-Team.png",
    content: "Ensure every member knows exactly what to do and when.",
  },
];

const WHY_CHOOSE_US = [
  {
    name: "Proven Expertise",
    content: "We’ve crafted strategies for businesses across industries.",
    icon: "/Services/Marketing strategies/Why Choose us/Proven Expertise.png",
  },
  {
    name: "Tailored Solutions",
    content: "Your strategy is as unique as your business.",
    icon: "/Services/Marketing strategies/Why Choose us/Tailored Solutions.png",
  },
  {
    name: "Ongoing Support",
    content: "From strategy to execution, we’re with you every step of the way.",
    icon: "/Services/Marketing strategies/Why Choose us/Ongoing Support.png",
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "The strategy they provided gave us a clear direction! Our in-house team executed it seamlessly, and we saw a 40% increase in leads within three months.",
    name: "Sanskar Dubey, Step Consultancy",
  },
  {
    content:
      "We always had the manpower, but we were missing the plan. Their quarterly strategy made a huge difference in how we approached marketing. Highly recommend them!",
    name: "CEO, RSLPL.",
  },
  {
    content:
      "Their expertise is unmatched. The yearly planner was not only detailed but also realistic. Our team is now more productive and focused.",
    name: "Siva Co-Founder, VOW",
  },
];

const FAQ_DATA = [
  {
    question: "Do you only provide the strategy, or will you also execute it for us?",
    ans: "We focus on creating a customized strategy tailored to your business needs. Your team will handle execution, but we’re happy to provide guidance along the way!",
  },
  {
    question: "Can you help businesses from different industries?",
    ans: "Absolutely! Our strategies are crafted to meet the unique needs of businesses across industries, from manufacturing to IT and beyond.",
  },
  {
    question: "How long does it take to create a marketing strategy?",
    ans: "Depending on the complexity of your business and goals, it usually takes 1–2 weeks to deliver a comprehensive strategy.",
  },
  {
    question: "What happens if my team struggles with execution?",
    ans: "We offer ongoing support and guidance to help your team implement the strategy effectively. We can also provide additional training if needed.",
  },
  {
    question: "How do I know if this is the right service for me?",
    ans: "If you have a team but lack a clear, actionable plan, this is perfect for you. Schedule a consultation, and we’ll assess your needs!",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const MarketingStrategies = () => {
  return (
    <div className="container">
      {/* Intro Section */}
      <section className="row align-items-center py-5">
        <div className="col-lg-6 text-white">
          <h1 className="fs-3 mb-3">
            Your team is talented, but without a clear roadmap, it’s hard to achieve your marketing goals.
          </h1>
          <p>
            We provide comprehensive marketing strategies tailored to your business needs. Whether it’s a monthly, quarterly, or yearly plan, we’ll guide your team to execute campaigns with precision and purpose.
          </p>
        </div>
        <div className="col-lg-6">
          <CustomImage src="/Services/Marketing strategies/Marketing-Strategies.png" />
        </div>
      </section>

     {/* How It Works */}
    
<section className="py-5">
<HowItMakesCarousel data={WHAT_WE_OFFER}  />
</section>



      {/* Who Is This For */}
      <section className="text-center text-white py-5">
        <h2 className="pink_text mb-3">Who Is This For?</h2>
        <p>This is perfect for businesses with an in-house marketing team</p>
        <div className="row mt-4">
          {[
            { icon: "fa-lightbulb-o", text: "Struggles with planning or execution." },
            { icon: "fa-bullseye", text: "Needs a clear, actionable strategy to drive results." },
            { icon: "fa-line-chart", text: "Wants expert guidance to maximize their marketing efforts." },
          ].map((item, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className={`${styles.hoverCard} p-4`}>
                <i className={`fa ${item.icon} fs-2 mb-3`}></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Carousel */}
      <section className="py-5">
       <WhyChooseUsCarousel data={WHY_CHOOSE_US} />
      </section>

      {/* Testimonials */}
      <ClientTestimonial data={CLIENT_TESTIMONIAL} />

      {/* FAQ */}
      <FaQ data={FAQ_DATA} />

      {/* CTA */}
      <BookYourConsultation />
      
    </div>
  );
};

export default MarketingStrategies;
