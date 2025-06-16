import ContactUsBtn from "@/components/Btn/ContactUs";
import styles from "./style.module.css";
import PrPeople from "@/components/Pricing/PrPeople";
import InlineCommonCard from "@/components/custom/InlineCommonCard";
import CommonContainer from "@/components/custom/CommonContainer";

const DATA = [
  {
    plan_type: "Get Started Plan",
    name: "10 hours",
    time: "Businesses looking for expert execution on a specific marketing task every week.",
    price: "$800",
    per_hour: "$80",
    bg_class: "price_bg_first",
    content: (
      <div>
        <div className="text-center">What&apos;s Included?</div>
        <ul>
          <li>10 hours of dedicated work per week</li>
          <li>
            1 focused task per week (Custom task based on your business goal)
          </li>
          <li>Optimized strategy execution to enhance brand visibility</li>
          <br />
        </ul>
      </div>
    ),
    note: `Ideal for: Early-stage businesses, startups, and solo entrepreneurs who need structured marketing support but at an affordable budget.`,
  },
  {
    plan_type: "Boost Plan",
    name: "20 hours",
    time: "Businesses ready to scale with more execution, strategic work audits, and optimizations.",
    price: "$2,000",
    per_hour: "$100",
    bg_class: "price_bg_first",
    content: (
      <div>
        <div className="text-center">What&apos;s Included?</div>
        <ul>
          <li>20 hours of dedicated work per week</li>
          <li>
            2 focused tasks per week (Branding, lead generation, digital
            marketing, or ad execution)
          </li>
          <li>Weekly work audit to analyze performance & refine strategy</li>
        </ul>
      </div>
    ),
    note: `Ideal for: Growing businesses, SaaS startups, and exporters looking for a balance of execution and optimization to drive revenue.`,
  },
  {
    plan_type: "Full Force Agency Plan",
    name: "30+ hours",
    time: "Businesses that need an end-to-end digital marketing team to take full control of their brand and growth strategy.",
    price: "$3,200",
    per_hour: "$100",
    bg_class: "price_bg_first",
    content: (
      <div>
        <div className="text-center">What&apos;s Included?</div>
        <ul>
          <li>30+ hours of dedicated work per week</li>
          <li>
            3 high-priority tasks per week (Branding, paid ads, SEO, content,
            lead generation)
          </li>
          <li>Weekly work audit & performance review</li>
          <li>Deep-dive business analysis to refine strategy & maximize ROI</li>
        </ul>
      </div>
    ),
    note: `Ideal for: Established businesses, high-growth SaaS companies, and B2B exporters who need continuous execution, optimization, and analysis to scale faster.`,
  },
];

const STRATEGIES = [
  {
    name: "Marketing Strategies",
    url: "/services/marketing-strategies",
    description:
      "We provide comprehensive marketing strategies tailored to your business needs. Whether it&apos;s a monthly, quarterly, or yearly plan, we&apos;ll guide your team to success.",
  },
  {
    name: "Predictive Market Analysis",
    description:
      "Stay ahead of the curve with data-driven insights that guide your next big move.",
    url: "/services/predictive-analysis",
  },
  {
    name: "Lead Generation",
    description:
      "Our services are designed to help you connect with the right audience, streamline your marketing efforts, and accelerate growth.",
    url: "/services/lead-generation",
  },
  {
    name: "Branding",
    description:
      "Define your brand&apos;s voice, tone, and visual identity to ensure consistency across all platforms.",
    url: "/services/branding",
  },
  {
    name: "Web Development",
    description:
      "We specialize in website development that not only looks stunning but also drives traffic, generates leads, and enhances business growth.",
    url: "/services/web-development",
  },
  {
    name: "Social Media Management",
    description:
      "Create viral content and engage your audience across platforms.",
    url: "/services/social-media-management",
  },
  {
    name: "Tech Development",
    description:
      "Our services include business process audits, tailored application development, automation solutions, and real-time analytics to optimize your operations.",
    url: "/services/tech-development",
  },
  {
    name: "SEO",
    description:
      "Rank higher, attract more, and convert better with search engine optimization.",
    url: "/services/seo",
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Pricing Plans | The Bot Agency",
    description:
      "At The Bot Agency, we believe that every business needs a customized approach to marketing, branding, and growth. Whether you&apos;re just getting started, need a boost in execution, or want a full-force marketing team to drive results—we&apos;ve got a plan that fits your needs.",
    keywords: "Pricing Plans The Bot Agency",
  };
}

const Pricing = () => {
  return (
    <div
      className={`${styles.pricing_page_wrapper} ${styles.pricing_page_planet}`}
    >
      <div className={`container ${styles.pricing_container} `}>
        <div
          className={`text-white text-center m-auto ${styles.pricing_title}`}
        >
          Flexible Growth Plans <br /> Growth Plans
          <br />
          <span className="pink_text">For Businesses Ready to Scale</span>
        </div>
        <div
          className={`text-white text-center ${styles.pricing_sub_title} py-5`}
        >
          At The Bot Agency, we believe that every business needs a customized
          approach to marketing, branding, and growth. Whether you&apos;re just
          getting started, need a boost in execution, or want a full-force
          marketing team to drive results—we&apos;ve got a plan that fits your needs.
        </div>

        <div className="row">
          {DATA.map((pricing, marketingIdx) => {
            return (
              <div
                className="col-md-4 col-12 py-4 text-center"
                key={`marketing-${marketingIdx}`}
              >
                <div
                  className={`h-100 p-4 ${styles.plan_wrapper} ${
                    styles[pricing.bg_class]
                  } ${styles.plan_padding}`}
                >
                  <div className={`${styles.plan_type} py-3`}>
                    <span
                      className={`border border-1 rounded-3 py-1 px-3 ${styles.plan_type_content}`}
                    >
                      {pricing.plan_type}
                    </span>
                  </div>

                  <div className={`${styles.plan_name} py-2`}>
                    {pricing.name}
                  </div>
                  <div className={`${styles.time_label}`}>{pricing.time}</div>
                  <div className={`${styles.plan_pricing} py-5`}>
                    <span className="fw-bolder">{pricing.price}</span>{" "}
                    <span className="fw-lighter">/ Month</span>
                    <div className={styles.plan_per_hr}>
                      {pricing.per_hour} per hour
                    </div>
                  </div>
                  <div style={{ textAlign: "left" }}>{pricing.content}</div>
                  <div className="py-3">
                    <ContactUsBtn />
                    <div className={`${styles.time_label} pt-3`}>
                      {pricing.note}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col-md-12 col-12 py-4 text-center">
            <div className={`h-100 ${styles.plan_wrapper} py-5`}>
              <div className="fw-bolder fs-3 py-4">
                Which Plan is Right for You?
              </div>
              <div
                className={`d-flex justify-content-between ${styles.flex_wrap}`}
              >
                <div className="px-2">
                  ✅ Need a task-based marketing expert? → Choose &quot;Get Started&quot;
                  ($800/month)
                </div>
                <div className="px-2">
                  ✅ Want more execution + audits? → Choose &quot;Boost&quot;
                  ($2,000/month)
                </div>
                <div className="px-2">
                  ✅ Need full-service marketing support? → Go with &quot;Full Force
                  Agency&quot; ($3,200/month)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className={`${styles.pricing_services_wrapper_title} lh-sm`}>
            <div className="pink_text text-center fw-bolder fs-1">
              All the marketing muscle
            </div>
            <div className="text-center text-white fw-bolder fs-1">
              you&apos;ll ever need
            </div>
            <div className="text-white text-center pb-5">
              Digital marketing & Branding and design
            </div>
          </div>

          <div
            className={`row g-0 ${styles.pricing_services_wrapper} p-3 py-5 border border-1 rounded-3 d-flex justify-content-center flex-wrap`}
          >
            {STRATEGIES.map((strategy, strategyIdx) => {
              return (
                <InlineCommonCard
                  key={`strategy-column-${strategyIdx}`}
                  name={strategy.name}
                  description={strategy.description}
                  link={strategy.url}
                />
              );
            })}
          </div>
        </div>
      </div>
      <CommonContainer
        title={
          <span>
            No Contracts. No Hidden Fees. <br />
            100% Focused on Growth.
          </span>
        }
      />
      {/* <PrPeople /> */}
    </div>
  );
};

export default Pricing;
