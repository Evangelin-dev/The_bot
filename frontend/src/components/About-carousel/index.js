"use client";
import React, { useState, useEffect, useRef } from "react";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import CustomImage from "@/components/custom/Image";
import "./style.css";

const WHY_CHOOSE_US = [
  {
    name: "Industry-Specific Growth Strategies",
    content:
      "Whether you’re a B2B exporter, SaaS founder, or agency owner, we create tailored marketing strategies that attract the right global clients.",
    icon: (
      <CustomImage
        src={"/about-us/why-choose-us/Industry-Specific Growth Strategies.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Proven Results in International Markets",
    content:
      "We have successfully worked with companies in India, the Gulf, and Africa, driving real business growth through digital branding, lead generation, and strategic marketing campaigns.",
    icon: (
      <CustomImage
        src={"/about-us/why-choose-us/Proven Results in International Markets.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Lead Generation That Converts",
    content:
      "Our multi-channel marketing framework attracts, engages, and converts B2B buyers, SaaS users, and high-value clients, ensuring sustainable long-term business growth",
    icon: (
      <CustomImage
        src={"/about-us/why-choose-us/Lead-Generation-That-Converts.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Beyond Marketing – A Business Growth Partner",
    content:
      "Unlike traditional marketing agencies, we don’t just focus on ads and content. We work hands-on to position your business, optimize conversions, and drive revenue growth.",
    icon: (
      <CustomImage
        src={"/about-us/why-choose-us/Beyond-Marketing-A-Business-Growth-Partner.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
];

const WhyChooseUsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const slideCount = WHY_CHOOSE_US.length;

  // Scroll to active slide index
  const scrollToIndex = (index) => {
    if (index < 0 || index >= slideCount) return; // Prevent out of bounds
    setCurrent(index);
  };

  // Drag scroll support
  useEffect(() => {
    const track = trackRef.current;
    let isDragging = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mousemove", onMouseMove);
    track.addEventListener("mouseup", onMouseUp);
    track.addEventListener("mouseleave", onMouseUp);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mousemove", onMouseMove);
      track.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  // Adjust the slides and the scroll to the correct position
  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const slideWidth = track.children[0].offsetWidth;
      track.scrollTo({
        left: slideWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div className="py-5 why-choose-us-carousel">
      <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
        <span className="text-white">Why Choose Us ?</span>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {WHY_CHOOSE_US.map((row, index) => (
            <div key={index} className="carousel-slide">
              <PrCard
                className=""
                name={row.name}
                description={row.content}
                icon={row.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {/* <div className="carousel-dots">
        {WHY_CHOOSE_US.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`carousel-dot ${current === index ? "active" : ""}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default WhyChooseUsCarousel;
