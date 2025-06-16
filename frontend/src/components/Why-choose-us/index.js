"use client";
import { useEffect, useRef, useState } from "react";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import CustomImage from "@/components/custom/Image";
import "./style.css";

const WhyChooseUsCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const CARD_WIDTH = 300 + 16; // 280px card + 16px padding/gap

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse drag functionality
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

  // Scroll event to track active index
  const handleScroll = () => {
    const scrollX = carouselRef.current.scrollLeft;
    const index = Math.round(scrollX / CARD_WIDTH);
    setActiveIndex(index % data.length);
  };

  // Auto scroll every 3s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      carouselRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="why-carousel-section">
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
                  icon={
                    <CustomImage
                      src={item.icon}
                      className="card-img-top icon_size_png"
                    />
                  }
                  name={item.name}
                  description={item.content}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {data.map((_, i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsCarousel;
