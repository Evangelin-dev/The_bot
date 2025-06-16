"use client";
import { useRef, useEffect, useState } from "react";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import CustomImage from "@/components/custom/Image";
import "./style.css";

const WHY_CHOOSE_US = [
  {
    name: "Proven Track Record",
    content: "Over 50+ brands scaled with our expertise.",
    icon: (
      <CustomImage
        src={"/home/why-choose-us/Proven-Track-Record.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Guaranteed Results",
    content: "200% ROAS achieved for our clients.",
    icon: (
      <CustomImage
        src={"/home/why-choose-us/Guaranteed-Results.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Data-Driven Approach",
    content: "Predictive strategies that work from Day 1.",
    icon: (
      <CustomImage
        src={"/home/why-choose-us/Data-Driven-Approach.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Customized Solutions",
    content: "Tailored strategies that align with your unique goals.",
    icon: (
      <CustomImage
        src={"/home/why-choose-us/Customized-Solutions.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
];
const WhyChooseUsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const cardCount = WHY_CHOOSE_US.length;

  // Clone slides for infinite loop - Removed the clones
  const getAllSlides = () => {
    return [...WHY_CHOOSE_US]; // Just return the original slides
  };

  // Scroll to active slide index
  const scrollToIndex = (index, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index];
    if (slide) {
      const offset = slide.offsetLeft - (track.offsetWidth - slide.offsetWidth) / 2;
      track.scrollTo({
        left: offset,
        behavior,
      });
    }
  };

  // Handle infinite loop adjustment - Removed logic for infinite loop reset
  const handleScrollEnd = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = track.children;
    const scrollLeft = track.scrollLeft;
    const cardWidth = children[0].offsetWidth;

    const visibleIndex = Math.round(scrollLeft / cardWidth);
    setCurrent(visibleIndex); // Update the current index based on the scroll
  };

  // Drag scroll support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

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

  // Scroll to first real card on mount
  useEffect(() => {
    scrollToIndex(0, "auto");
  }, []);

  return (
    <div className="why-carousel-section">
      <div className="section-heading">Why Choose Us ?</div>

      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={trackRef} onScroll={handleScrollEnd}>
          {getAllSlides().map((item, idx) => (
            <div className="carousel-slide" key={`slide-${idx}`}>
              <PrCard
                className={"bot-col-4"}
                name={item.name}
                description={item.content}
                icon={item?.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCarousel;
