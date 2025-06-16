"use client";

import { useRef } from "react";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import CustomImage from "@/components/custom/Image";
import "./style.css";

const HowItMakesCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <section className="why-carousel-section">
      <h2 className="section-heading">How It Works</h2>
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((item, idx) => (
            <div className="carousel-slide" key={idx}>
              <div className="carousel-card">
                <PrCard
                  icon={<CustomImage src={item.icon} className="icon_size_png m-auto" />}
                  name={item.name}
                  description={item.content}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItMakesCarousel;
