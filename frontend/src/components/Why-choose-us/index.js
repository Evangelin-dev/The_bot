"use client";
import { useRef } from "react";
import PrCard from "@/components/Pricing/PrPeople/PrCard"; // This is the card component it uses
import CustomImage from "@/components/custom/Image";
import "./style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const WhyChooseUsCarousel = ({ data }) => {
  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    carouselRef.current.classList.add("grabbing");
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const stopDragging = () => {
    if (!carouselRef.current) return;
    isDragging.current = false;
    carouselRef.current.classList.remove("grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="why-carousel-section">

      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={() => scroll(-320)} aria-label="Scroll Left">
          <FaArrowLeft />
        </button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
          >
            {data.map((item, idx) => (
              <div className="carousel-slide" key={idx}>
                <div className="carousel-card">
                  <PrCard
                    icon={
                      typeof item.icon === "string" && item.icon.trim() !== "" ? (
                        <CustomImage
                          src={item.icon}
                          className="card-img-top"
                          alt={item.name || "icon"}
                        />
                      ) : null
                    }
                    name={item.name}
                    description={item.description || item.content}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow right" onClick={() => scroll(320)} aria-label="Scroll Right">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUsCarousel;