"use client";

import InlineCommonCard from "@/components/custom/InlineCommonCard";
import styles from "./styles.module.css";

import CustomImage from "@/components/custom/Image";
import ClientTestimonial from "@/components/ClientTestimonial";
import FaQ from "../FAQ";



import WhyChooseUsCarousel from "@/components/Why-choose-us";
// Import the client-only slider






const STRATEGIES = [
  {
    name: "Churn Prediction",
    description:"Predict customer churn and take effective actions to retain customers before it is too late.",
    // icon: (
    //   <img
    //     src="/bulb.png"
    //     alt="Automation-&-Dashboards"
    //     style={{ width: "16px", height: "16px" }}
    //   />
    // ),
  },
  {
    name: "Recommendation System",
    description:
      "Leverage machine learning to tailor recommendations to each of your customers.",
  },
  {
    name: "Customer Segmentation",
    description:
      "Achieve more profound customer understanding and improve customer marketing.",
  },
  {
    name: "Lifetime Value Optimization",
    description:
      "Leverage CRM data with predictive analytics to optimize customer lifetime value (LTV).",
  },
  {
    name: "Dynamic Pricing",
    description:
      "Optimize your pricing strategies to stay competitive and reduce revenue leaks.",
  },
  {
    name: "Credit Scoring",
    description: "Improve the quality of your credit scoring models.",
  },
  {
    name: "Demand Forecasting",
    description:
      "Respond to your business supply needs faster and more accurately.",
  },
  {
    name: "Marketing Campaign Optimization",
    description:
      "Boost your marketing campaign profitability with predictive analytics consulting.",
  },
];

const SERVICES = [
  {
    name: "Go-to-Market Strategy",
    content: (
      <ul style={{ fontSize: "1rem", textAlign: "start" }}>
        <li>Market research to identify gaps and opportunities.</li>
        <li>Define target audiences for maximum impact.</li>
        <li>Tactical launch plans tailored to your product or service.</li>
      </ul>
    ),
    icon: "/Services/Predective Analysis/What’s Included in Our Predictive Analysis Service/Go-to-Market Strategy.png",
  },
  {
    name: "Brand Positioning",
    content: (
      <ul style={{ fontSize: "1rem", textAlign: "start" }}>
        <li>Establish a unique voice in your industry.</li>
        <li>Differentiate your brand from competitors.</li>
        <li>Build trust and credibility with your target audience.</li>
      </ul>
    ),
    icon: 
      "/Services/Predective Analysis/What’s Included in Our Predictive Analysis Service/Brand-Positioning.png",

      
  },
  {
    name: "Sales Funnel Execution",
    content: (
      <ul style={{ fontSize: "1rem", textAlign: "start" }}>
        <li>Map customer journeys to ensure seamless lead conversions.</li>
        <li>Create actionable steps for every stage of the sales funnel.</li>
        <li>Optimize and automate processes to boost efficiency.</li>
      </ul>
    ),
    icon: 
      "/Services/Predective Analysis/What’s Included in Our Predictive Analysis Service/Sales Funnel Execution.png"

  
  },
];

const WHY_CHOOSE_SERVICES = [
  {
    name: "Data-Driven Approach",
    content:
      "Every strategy is backed by detailed data analysis, ensuring accuracy and efficiency.",
      icon: 
        "/Services/Predective Analysis/Why Choose Our Predictive Analysis Service/Data-Driven-Approach.png"
  
       
  },
  {
    name: "Tailored for Startups",
    content:
      "We specialize in helping startups navigate uncertainty and scale confidently.",
      icon: 
        "/Services/Predective Analysis/Why Choose Our Predictive Analysis Service/Tailored-for-Startups.png"
  
  },
  {
    name: "Fail-Proof Strategies",
    content: "Our insights minimize risks and maximize success.",
    icon: 
      "/Services/Predective Analysis/Why Choose Our Predictive Analysis Service/Fail-Proof-Strategies.png"

     
  },
  {
    name: "Expert Guidance",
    content: "Leverage our expertise to fast-track your growth.",
    icon: "/Services/Predective Analysis/Why Choose Our Predictive Analysis Service/Expert Guidance.png"

  
  },
];
const PredectiveAnalysis = () => {
  return (
    <div className="container">
      <div className="pb-5">
        <div className={`${styles.predictive_analysis_title} lh-sm`}>
          <div className="pink_text text-center fw-bolder fs-1 w-75 m-auto pb-5">
            How Our Predictive Analytics Models Can Augment Your Business
          </div>

          <div
            className={`row g-0 ${styles.pricing_services_wrapper} p-3 py-3 border border-1 rounded-3`}
          >
            {STRATEGIES.map((item, itemIdx) => {
              return (
                <InlineCommonCard
      key={`pricing-column-${itemIdx}`}
      name={item.name}
      description={item.description}
      icon={item.icon} // 👈 Pass the icon here
      column="col-md-4"
    />
              );
            })}
          </div>
        </div>
      </div>
      <div className="pb-5">
        <div className={`${styles.predictive_analysis_title} lh-sm`}>
          <h1 className="pink_text text-center fw-bolder fs-1 w-75 m-auto pb-5">
            Craft a Fail-Proof Strategy with Predictive Analysis
          </h1>

          <div className={`row g-0 py-3 text-white`}>
            <div className="col-md-6 col-12">
              <div className={`${styles.predictive_anlys_strategy_title}`}>
                Are You a Startup Unsure of Your Next Steps?
              </div>
              <div
                className={`${styles.predictive_anlys_strategy_sub_title} py-2`}
              >
                Launching and scaling a business can be overwhelming, especially
                when you’re unsure about:
              </div>
              <div
                className={`${styles.predictive_anlys_strategy_description}`}
              >
                <ul>
                  <li className="py-1">The right market strategy.</li>
                  <li className="py-1">
                    How to position your brand effectively.
                  </li>
                  <li className="py-1">
                    Building a sales funnel that actually converts
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className={`${styles.predictive_anlys_strategy_title}`}>
                We’ve got you covered.{" "}
              </div>
              <div
                className={`${styles.predictive_anlys_strategy_sub_title} py-2`}
              >
                Our Predictive Analysis Service is backed by data-driven
                insights to help you:
              </div>
              <div
                className={`${styles.predictive_anlys_strategy_description}`}
              >
                <ul>
                  <li className="py-1">Identify market opportunities.</li>
                  <li className="py-1">
                    Craft fail-proof go-to-market strategies.{" "}
                  </li>
                  <li className="py-1">
                    Execute sales funnels with precision.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5">
  <div className={`${styles.predictive_analysis_title} lh-sm`}>
    <h1 className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
      <span className="text-white">What’s Included in</span>
      <span className="pink_text"> Our Predictive Analysis Service?</span>
    </h1>
    <WhyChooseUsCarousel
      data={SERVICES} />
  </div>
</div>

<div className="pb-5">
      <div
        className={`${styles.predictive_analysis_title} lh-sm ${styles.predictive_anlys_why_choose_wrapper}`}
      >
         
        <h1 className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
          <span className="text-white">Why Choose Our </span>
          <span className="pink_text"> Predictive Analysis Service?</span>
        </h1>
        <WhyChooseUsCarousel
          data={WHY_CHOOSE_SERVICES}
          />
      </div>
    </div>
      <div className="pb-5">
        <div
          className={`${styles.predictive_analysis_title} lh-sm text-center text-white`}
        >
          <div className="d-flex pt-5 text-start">
            <div className={styles.why_service_for_img}>
              <CustomImage src={"/Services/Predective Analysis/What-Makes-Us-Different.png"} />
            </div>

            <div
              className="d-flex align-items-center px-3 w-75"
              style={{ paddingLeft: "5% !important" }}
            >
              <div>
                <h1 className="fw-bolder fs-1 m-auto pb-2">
                  <span
                    className="pink_text"
                    style={{ fontSize: "3rem" }}
                  >
                    What Makes Us Different?
                  </span>
                </h1>
                <ul className="fs-6">
                  <li className="py-1">
                    <span className="fw-bold">
                      Real Insights, Real Results:
                    </span>{" "}
                    We rely on predictive analysis and industry expertise to
                    deliver strategies that work.
                  </li>
                  <li className="py-1">
                    <span className="fw-bold">Proven Success Stories:</span> Our
                    approach has helped startups and businesses achieve
                    exponential growth.
                  </li>
                  <li className="py-1">
                    <span className="fw-bold">One-Stop Solution:</span> From
                    strategy to execution, we cover it all.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <div
          className={`${styles.predictive_analysis_title} lh-sm text-center text-white`}
        >
          <div className="d-flex pt-5 text-start">
            <div className="d-flex align-items-center px-3 w-75">
              <div>
                <h1 className="fw-bolder fs-1 m-auto pb-2">
                  <span
                    className="pink_text"
                    style={{ fontSize: "3rem !important;" }}
                  >
                    Who Should Use This Service?
                  </span>
                </h1>
                <div className={"fw-bolder fs-2 m-auto pb-2"}>
                  This service is perfect for:
                </div>
                <ul className="fs-6">
                  <li className="py-1">
                    Startups struggling to find their footing in a competitive
                    market.
                  </li>
                  <li className="py-1">
                    Entrepreneurs looking for fail-proof strategies backed by
                    data.
                  </li>
                  <li className="py-1">
                    Businesses unsure of how to position their brand or execute
                    sales effectively.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.why_service_for_img}>
            <CustomImage src={"/Services/Predective Analysis/Who-Should-Use-This-Service.png"} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <ClientTestimonial />
      </div>
      <div className="pb-2">
        <FaQ />
      </div>
    </div>
  );
};

export default PredectiveAnalysis;
