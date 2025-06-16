"use client";

import Slider from "react-slick";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { auto } from "@popperjs/core";

const OurProcessCarousel = ({ ourProcess }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
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
    <>
      {ourProcess?.length > 0 && (
        <div className="text-center text-white pb-5">
          <div className="fw-bolder fs-1 pt-4">Our Process</div>

          <div className="container py-5">
            {/* Row 1: Base Line + Dots */}
            <div className="position-relative mb-5">
              {/* Base Line */}
              <div
                className="position-absolute top-50 start-0 w-100"
                style={{ height: "2px", backgroundColor: "#999", zIndex: 0 }}
              />

              {/* Static Dots */}
              <div
                className="position-absolute top-50 w-100 d-flex justify-content-around"
                style={{ zIndex: 1 }}
              >
                {ourProcess.map((_, idx) => (
                  <div
                    key={idx}
                    className="rounded-circle"
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#fff",
                      transform: "translateY(-50%)",
                    }}
                  />
                ))}
              </div>

              {/* Active Dot Animation */}
              <div
                className="position-absolute top-50"
                style={{
                  left: `calc(${(100 / ourProcess.length) * activeSlide}% + ${
                    100 / ourProcess.length / 2
                  }%)`,
                  transform: "translate(-50%, -50%)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#0d6efd",
                  zIndex: 2,
                  transition: "left 0.5s ease",
                }}
              />
            </div>

            {/* Row 2: Carousel Cards */}
            <div className="row">
              <div className="col-12">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {ourProcess.map((process, processIdx) => (
                    <div key={processIdx} className="px-3" style={{ zIndex: 2 }}>
                      <div
                        className="border border-1 rounded-3 p-4 h-100 card-hover text-center text-white"
                        style={{ minHeight: "180px", background: "transparent" }}
                      >
                        <div className="fw-bolder fs-5 pb-2">
                          <i
                            className="fa fa-check pe-2"
                            aria-hidden="true"
                          ></i>
                          {process.name}
                        </div>
                        <div className="fw-light fs-6">{process.description}</div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurProcessCarousel;
