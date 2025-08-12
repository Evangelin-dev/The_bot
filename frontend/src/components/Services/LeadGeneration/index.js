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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    )

  },
  {
    name: "Data-Driven Approach",
    content:
      "Our strategies are backed by analysis of customer behavior, ensuring precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3-3 4 4 5-5" />
      </svg>
    )


  },
  {
    name: "Customized Plans",
    content:
      "Every business is unique. We craft personalized strategies for maximum impact.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3-3 4 4 5-5" />
      </svg>
    )

  },
  {
    name: "Proven Success",
    content:
      "We’ve helped businesses not just generate leads but convert them into paying customers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3-3 4 4 5-5" />
      </svg>
    )


  },
];

const HOW_IT_WORKS = [
  {
    name: "Book a Free Audit",
    content:
      "Let us analyze your current social media presence and lead generation methods.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12 m-auto text-purple-700"
      >
        <rect x="6" y="10" width="36" height="28" rx="4" ry="4" stroke="currentColor" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" />
        <line x1="16" y1="4" x2="16" y2="10" stroke="currentColor" />
        <line x1="32" y1="4" x2="32" y2="10" stroke="currentColor" />
        <path d="M18 26l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Get a Customized Plan",
    content:
      "Receive a tailored strategy designed to attract high-quality leads.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12 m-auto text-purple-700"
      >
        <rect x="12" y="8" width="24" height="32" rx="3" ry="3" stroke="currentColor" />
        <rect x="18" y="4" width="12" height="6" rx="2" ry="2" fill="currentColor" />
        <line x1="18" y1="20" x2="30" y2="20" stroke="currentColor" />
        <line x1="18" y1="26" x2="30" y2="26" stroke="currentColor" />
        <line x1="18" y1="32" x2="26" y2="32" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: "Start Generating Results",
    content:
      "Watch as your business attracts and converts the right customers!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12 m-auto text-purple-700"
      >
        <path
          d="M24 4c4 4 8 8 8 14 0 8-8 16-8 16s-8-8-8-16c0-6 4-10 8-14Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 34c0 4-2 8-4 10 3 0 6-2 8-4 2 2 5 4 8 4-2-2-4-6-4-10" stroke="currentColor" />
        <circle cx="24" cy="18" r="3" stroke="currentColor" />
      </svg>
    ),
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
          <WhyChooseUsCarousel data={WHY_CHOOSE_US} />
        </div>
      </div>

      <div>
        <div className="d-flex g-5 align-items-center">
          <div className={styles.image_container}>
            <CustomImage src={"/Leads/Who-Is-This-Service-For.png"} />
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
          <HowItMakesCarousel data={HOW_IT_WORKS} />
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
