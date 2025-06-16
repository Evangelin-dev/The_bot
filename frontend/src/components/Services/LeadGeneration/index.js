"use client";


import PrCard from "@/components/Pricing/PrPeople/PrCard";
import styles from "./styles.module.css";
import CustomImage from "@/components/custom/Image";
import ClientTestimonial from "@/components/ClientTestimonial";
import FaQ from "../FAQ";
import BookYourConsultation from "@/components/custom/BookYourConsultation";
import HowItMakesCarousel from "@/components/How-it-works";
import WhyChooseUsCarousel from "@/components/Why-choose-us";
    

const LEAD_GENERATION_PROCESS = [
  {
    name: "Social Media Audit",
    description:
      "We start by analyzing your existing social media presence to identify gaps and areas for improvement.",
    content: (
      <ul>
        <li>How are you engaging with your audience?</li>
        <li>Are your platforms optimized for conversions?</li>
        <li>Is your messaging aligned with your goals?</li>
      </ul>
    ),
  },
  {
    name: "Digital Profiling",
    description:
      "Next, we create a comprehensive profile of your business’s digital footprint to align your positioning with your ideal customer’s behavior.",
    content: (
      <ul>
        <li>Understand your audience better.</li>
        <li>Create messaging that resonates.</li>
        <li>Align your online presence to attract the right visitors.</li>
      </ul>
    ),
  },
  {
    name: "Strategic Positioning",
    description:
      "We position your business to stand out in a crowded market by tailoring your",
    content: (
      <ul>
        <li>Brand voice</li>
        <li>Content strategy</li>
        <li>Campaigns</li>
      </ul>
    ),
  },
  {
    name: "Ongoing Profile Boost",
    description:
      "We periodically optimize and boost your profile to ensure steady traffic to your social media pages and website.",
    content: (
      <ul>
        <li>Drive consistent visitor growth.</li>
        <li>Ensure long-term lead generation success.</li>
      </ul>
    ),
  },
];

const WHY_CHOOSE_US = [
  {
    name: "High-Quality Leads",
    content:
      "We’ve successfully converted leads for both B2B and B2C businesses across industries.",
      icon: "/Services/Lead Generation/Why Choose Us/High-Quality Leads.png"
  
  },
  {
    name: "Data-Driven Approach",
    content:
      "Our strategies are backed by analysis of customer behavior, ensuring precision.",
      icon: "/Services/Lead Generation/Why Choose Us/Data-Driven-Approach.png"
  
         
  },
  {
    name: "Customized Plans",
    content:
      "Every business is unique. We craft personalized strategies for maximum impact.",
      icon:"/Services/Lead Generation/Why Choose Us/Customized-Plans.png"
  
  },
  {
    name: "Proven Success",
    content:
      "We’ve helped businesses not just generate leads but convert them into paying customers.",
      icon:"/Services/Lead Generation/Why Choose Us/Proven Success.png"
  
       
  },
];

const HOW_IT_WORKS = [
  {
    name: "Book a Free Audit",
    content:
      "Let us analyze your current social media presence and lead generation methods.",
      icon: "/Services/Lead Generation/How It Works/Book-a-Free-Audit.png"
  
  },
  {
    name: "Get a Customized Plan",
    content:
      "Receive a tailored strategy designed to attract high-quality leads.",
      icon: "/Services/Lead Generation/How It Works/Get-a-Customized-Plan.png"
  
      
  },
  {
    name: "Start Generating Results",
    content:
      "Watch as your business attracts and converts the right customers!",
      icon: "/Services/Lead Generation/How It Works/Start Generating Results.png"
  
       
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "We were spending a fortune on ads but weren’t seeing results. After their audit and positioning strategy, our leads not only increased but were much more targeted!",
    name: "Founder, Step Digitals",
  },
  {
    content:
      "Their profiling and periodic boosts completely transformed our social media engagement. Now, we actually get inquiries that convert!",
    name: "Amruth, Owner, Green Heap Agro Foods Pvt Ltd",
  },
  {
    content:
      "This team understands lead generation like no one else. Their tailored approach worked wonders for our B2B sales pipeline.",
    name: "Sameer, CEO, CPEC",
  },
];

const FAQ_DATA = [
  {
    question: "How do you ensure high-quality leads?",
    ans: "We analyze customer behavior and tailor your messaging to resonate with your ideal audience. This ensures that the leads generated are relevant and likely to convert.",
  },
  {
    question: "Do you work with both B2B and B2C businesses?",
    ans: "Yes, we specialize in crafting lead generation strategies for both B2B and B2C clients across industries.",
  },
  {
    question: "How soon can I expect results?",
    ans: "While results vary by industry and campaign, many of our clients start seeing high-quality leads within the first month of implementation.",
  },
  {
    question: "Do you offer ongoing support?",
    ans: "Absolutely! We provide periodic boosts and continuous optimization to keep your lead generation engine running effectively.",
  },
  {
    question: "What platforms do you work with?",
    ans: "We specialize in optimizing social media platforms (like LinkedIn, Instagram, and Facebook) and websites to maximize lead generation opportunities.",
  },
];

const LeadGeneration = () => {
  return (
    <div className="container">
      <div>
        <div className="py-5">
          <div className={`${styles.lead_generation_title} lh-sm`}>
            {/* <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
              <span className="pink_text">
                Struggling to Generate High-Quality Leads?
              </span>
            </div>
            <div
              className={`text-white text-center fw-light fs-4 w-75 m-auto py-3 ${styles.lead_generation_sub_title}`}
            >
              You’ve tried every method under the sun – yet the leads aren’t
              flowing in, or worse, they’re just not the right ones.{" "}
            </div> */}
            <div
              className={`text-white text-center fw-bolder fs-2 w-75 m-auto py-3 ${styles.lead_generation_sub_title}`}
            >
              It’s time to change the game.
            </div>
            <div
              className={`text-white text-center fw-light fs-4 w-75 m-auto py-3 ${styles.lead_generation_sub_title}`}
            >
              Our{" "}
              <span className="pink_text fw-bolder">
                Lead Generation Service
              </span>{" "}
              is designed for businesses that want results, not just promises.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-5">
          <div className={`${styles.lead_generation_title} lh-sm pb-4`}>
            <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
              <span className="pink_text">
                Our Proven Lead Generation Process
              </span>
            </div>
          </div>
          <div className="row g-0 pt-4">
            {LEAD_GENERATION_PROCESS.map((row, rowIdx) => {
              return (
                <div
                  className={`col-md-6 col-12 p-2 `}
                  key={`row-idx-${rowIdx}`}
                >
                  <div className="border border-1 rounded-3 p-3 card-hover">
                    <div className="pink_text fw-bolder fs-3">{row.name}</div>
                    <div className="text-white fs-6 py-2">
                      {row.description}
                    </div>
                    <div className="text-white fs-6 py-2">{row.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-5">
  <div className={`${styles.lead_generation_title} lh-sm`}>
    <h1 className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
      <span className="text-white">Why Choose Us?</span>
    </h1>
    <WhyChooseUsCarousel data={WHY_CHOOSE_US}  />
  </div>
</div>

      <div>
        <div className="d-flex g-5 align-items-center">
          <div className={styles.image_container}>
            <CustomImage src={"/Services/Lead Generation/Who-Is-This-Service-For.png"} />
          </div>
          <div
            className={`text-white ${styles.lead_generation_container} ps-5`}
          >
            <div className={styles.lead_generation_title}>
              <h1 className="fs-1 m-auto pb-2 fw-bolder">
                Who Is This Service For?
              </h1>
            </div>
            <div
              className={`${styles.lead_generation_content_description} py-3`}
            >
              <ul>
                <li>
                  Our Lead Generation Service is perfect for:
                  <ul>
                    <li>
                      B2B Businesses looking for corporate clients.
                      <ul>
                        <li className="py-1">
                          <span className="pink_text">B2C Businesses</span> that
                          want to connect with retail customers.
                        </li>
                        <li className="py-1">
                          <span className="pink_text">Entrepreneurs</span> who
                          have tried multiple methods but haven’t seen results.
                        </li>
                        <li className="py-1">
                          <span className="pink_text">Businesses </span>
                          struggling to build a meaningful digital presence.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
  <div className={`${styles.lead_generation_title} lh-sm`}>
    <h1 className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
      <span className="text-white">How It Works?</span>
    </h1>
   <HowItMakesCarousel data={HOW_IT_WORKS}  />
  </div>
</div>


      <ClientTestimonial data={CLIENT_TESTIMONIAL} />
      <FaQ data={FAQ_DATA} />
      <BookYourConsultation
        name="Don’t Settle for Low-Quality Leads. Start Converting Today!"
        description="Let us help you craft a strategy that generates real, high-quality leads for your business."
      />
    </div>
  );
};

export default LeadGeneration;
