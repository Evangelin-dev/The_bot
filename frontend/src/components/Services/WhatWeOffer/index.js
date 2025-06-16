"use client";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import Slider from '../../common/Slider';

const { default: PrCard } = require("@/components/Pricing/PrPeople/PrCard");

const WhatWeOffer = ({ data = [] }) => {
  const settings = {
    dots: false,
    infinite: data.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-5">
      <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
        <span className="text-white">What We Offer ?</span>
      </div>

      <div className="pt-5 pb-2">
        <Slider {...settings}>
          {data.map((row, rowIdx) => (
            <div key={`what-we-offer-${rowIdx}`} style={{ padding: "0 10px" }}>
              <PrCard
                name={row.name}
                description={row.content}
                icon={row.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatWeOffer;
