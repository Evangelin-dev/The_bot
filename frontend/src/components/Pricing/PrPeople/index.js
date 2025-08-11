"use client";
import { useRef } from "react";
import styles from "./styles.module.css";
import PrCard from "./PrCard";

// --- IMPORTANT: DEFINE YOUR DATA WITH JSX ICONS ---
const WHAT_WE_OFFER_DATA = [
  {
    // The icon is now the actual JSX you want to render
    icon: <i className="fa fa-window-restore fa-3x" aria-hidden="true"></i>,
    name: "Automation Solutions",
    description: "Reduce manual effort and improve efficiency by automating routine tasks.",
  },
  {
    icon: <i className="fa fa-bar-chart fa-3x" aria-hidden="true"></i>,
    name: "Expense & Time Tracking Dashboards",
    description: "Stay on top of your operations with real-time insights into expenses and time management.",
  },
  {
    icon: <i className="fa fa-money fa-3x" aria-hidden="true"></i>,
    name: "Cost Optimization",
    description: "Save at least 5% on operational costs with our tech solutions.",
  },
  {
    icon: <i className="fa fa-search fa-3x" aria-hidden="true"></i>,
    name: "Business Process Audits",
    description: "A deep dive into your operations to identify inefficiencies and opportunities.",
  },
  {
    icon: <i className="fa fa-code fa-3x" aria-hidden="true"></i>,
    name: "Custom Application Development",
    description: "Tailor-made software solutions perfectly aligned with your business needs.",
  },
];

const PrPeople = () => {
  const prPeopleRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (prPeopleRef.current) {
      prPeopleRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.pr_section_wrapper}>
      <div className="py-5 text-center">
        <h2 className={`${styles.pr_section_title} text-white`}>What We Offer</h2>
      </div>

      <div className={styles.pr_carousel_container}>
        <button className={`${styles.pr_arrow} ${styles.pr_arrow_left}`} onClick={() => scroll(-350)} aria-label="Scroll Left">
          &#8249;
        </button>

        <div className={styles.pr_people_wrapper} ref={prPeopleRef}>
          {WHAT_WE_OFFER_DATA.map((cardData, idx) => (
            <div className={styles.pr_slide} key={`pr-card-${idx}`}>
              <PrCard
                icon={cardData.icon} // Pass the JSX icon here
                name={cardData.name}
                description={cardData.description}
              />
            </div>
          ))}
        </div>

        <button className={`${styles.pr_arrow} ${styles.pr_arrow_right}`} onClick={() => scroll(350)} aria-label="Scroll Right">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PrPeople;