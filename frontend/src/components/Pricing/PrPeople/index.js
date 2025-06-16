"use client";

import { useRef } from "react";
import styles from "./styles.module.css";
import PrCard from "./PrCard";
const PrPeople = () => {
  const prPeopleRef = useRef();

  const scroll = (scrollOffset) => {
    prPeopleRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="py-5">
        <div className={`${styles.pricing_services_wrapper_title} lh-sm`}>
          <div className="pink_text text-center fw-bolder fs-1">
            no matter what plan you choose
          </div>
          <div className="text-center text-white fw-bolder fs-1">
            All the good stuff you get,
          </div>
        </div>
      </div>
      <div
        className={`d-flex overflow-auto gap-3 ${styles.pr_people_wrapper}`}
        ref={prPeopleRef}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((prPeopleTile, prPeopleTileIdx) => {
          return <PrCard key={`pr-card-${prPeopleTileIdx}`} />;
        })}
      </div>
      <div className={`text-center ${styles.pr_control_icons} text-white py-3`}>
        <i
          class="fa fa-chevron-circle-left px-2 cursor-pointer"
          aria-hidden="true"
          onClick={() => scroll(-500)}
        ></i>
        <i
          class="fa fa-chevron-circle-right px-2 cursor-pointer"
          aria-hidden="true"
          onClick={() => scroll(500)}
        ></i>
      </div>
    </div>
  );
};

export default PrPeople;
