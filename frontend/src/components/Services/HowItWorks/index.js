"use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { useRef } from "react";
import Slider from "react-slick"; // Importing react-slick
const { default: PrCard } = require("@/components/Pricing/PrPeople/PrCard");

const HowItWorks = ({ data = [], col = "col-md-3 col-12" }) => {
  const settings = {
    dots: true, // Add pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of sliding
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5">
      <div className={`lh-sm`}>
        <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
          <span className="text-white">How It Works ?</span>
        </div>
      </div>
      <div className="pt-5 pb-2">
        <Slider {...settings}>
          {data.map((row, rowIdx) => (
            <PrCard
              key={`what-we-offer-${rowIdx}`}
              className={col}
              name={row.name}
              description={row.content}
              icon={row?.icon ? row?.icon : null}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HowItWorks;
