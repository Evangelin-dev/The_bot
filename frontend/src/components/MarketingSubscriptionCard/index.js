import CustomSubscriptionCard from "../custom/CustomSubscriptionCard";
import CustomImage from "../custom/Image";
import styles from "./styles.module.css";
import Link from "next/link";


const BitCoin = () => {
  return <i className="fa fa-btc" aria-hidden="true"></i>;
};

const SaaS = () => {
  return <i className="fa fa-sitemap" aria-hidden="true"></i>;
};

const B2B = () => {
  return <i className="fa fa-briefcase" aria-hidden="true"></i>;
};

const Game = () => {
  return <i className="fa fa-gamepad" aria-hidden="true"></i>;
};

const Software = () => {
  return <i className="fa fa-code" aria-hidden="true"></i>;
};

const Small = () => {
  return <i className="fa fa-compress" aria-hidden="true"></i>;
};

const StartUp = () => {
  return <i className="fa fa-space-shuttle" aria-hidden="true"></i>;
};

const Dollar = () => {
  return <i className="fa fa-usd" aria-hidden="true"></i>;
};

const DATA = [
  {
    name: "B2B Business Owners",
    icon: (
      <CustomImage
        src={"/home/who-we-are/B2B-Business-Owners.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description: "Streamline your operations and acquire high-quality leads.",
    link: "/industries/b2b-business",
  },
  {
    name: "Large Businesses",
    icon: (
      <CustomImage
        src={"/home/who-we-are/Large-Businesses.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description:
      "Achieve unmatched growth with predictive analysis and branding.",
      link: "/industries/b2b-exporter",
  },
  {
    name: "Logistics Businesses",
    icon: (
      <CustomImage
        src={"/home/who-we-are/Logistic Businesses.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description:
      "Optimize processes with tech development and marketing strategies.",
      link: "/industries/logistics-businesses",
  },
  {
    name: "B2C Businesses",
    icon: (
      <CustomImage
        src={"/home/who-we-are/B2C-Businesses.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description: "Boost sales with performance marketing and lead generation.",
    link: "/industries/b2c-business",
  },
  {
    name: "SaaS Companies",
    icon: (
      <CustomImage
        src={"/home/who-we-are/SaaS-Companies.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description: "Identify product-market fit and build a loyal customer base.",
    link: "/industries/saas-company",
  },
  {
    name: "Startups",
    icon: (
      <CustomImage
        src={"/home/who-we-are/Startups.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
    description:
      "Establish your brand and craft a winning strategy without breaking the bank",
      link: "/industries/start-up",
  },
];

const MarketingSubscriptionCard = () => {
  return (
    <div className={`container ${styles.subscription_container}`}>
      <div className={`text-center ${styles.subscription_title} m-auto fadeIn`}>
        Who We Serve
      </div>
      <div className="text-center text-white pt-4 pb-5">
        We cater to a diverse range of industries, helping businesses grow and
        scale effectively
      </div>
      <div className="row">
        {DATA.map((marketing, marketingIdx) => {
          return (
            <CustomSubscriptionCard
            
              name={marketing.name}
              link={marketing.link}
              icon={marketing.icon}
              description={marketing.description}
              key={`marketingIdx-${marketingIdx}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MarketingSubscriptionCard;
