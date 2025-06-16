// components/WhyChooseUsSection.jsx
import { useRef, useState, useEffect } from "react";

const WhyChooseUsSection = ({ data = [], subtitle = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const SLIDE_WIDTH = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleScroll = () => {
    const scrollLeft = trackRef.current.scrollLeft;
    const index = Math.round(scrollLeft / SLIDE_WIDTH.current) % data.length;
    setActiveIndex(index);

    const maxScroll = SLIDE_WIDTH.current * data.length;
    if (scrollLeft <= 0) {
      trackRef.current.scrollLeft = maxScroll;
    } else if (scrollLeft >= maxScroll * 2) {
      trackRef.current.scrollLeft = maxScroll;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    SLIDE_WIDTH.current = track.offsetWidth;
    track.scrollLeft = track.offsetWidth * data.length;
    track.addEventListener("scroll", handleScroll);

    const autoScroll = setInterval(() => {
      track.scrollTo({
        left: track.scrollLeft + SLIDE_WIDTH.current,
        behavior: "smooth",
      });
    }, 3000);

    return () => {
      clearInterval(autoScroll);
      track.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  const getInfiniteData = () => [...data, ...data, ...data];

  return (
    <div className="text-center text-white why-carousel-section">
      <div className="fw-bolder fs-1 pt-4">Why Choose Us</div>
      {subtitle && <div className="fs-4 py-4 pink_text">{subtitle}</div>}

      <div className="container py-5">
        <div className="position-relative mb-5">
          <div
            className="position-absolute top-50 start-0 w-100"
            style={{ height: "2px", backgroundColor: "#999", zIndex: 0 }}
          />

          <div
            className="position-absolute top-50 w-100 d-flex justify-content-around"
            style={{ zIndex: 1 }}
          >
            {data.map((_, idx) => (
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

          <div
            className="position-absolute top-50"
            style={{
              left: `calc(${(100 / data.length) * activeIndex}% + ${
                100 / data.length / 2
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

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {getInfiniteData().map((item, idx) => (
              <div key={idx} className="carousel-slide px-3">
                <div
                  className="card p-3 h-100 text-white"
                  style={{
                    background: "transparent",
                    borderColor: "white",
                    minHeight: "300px",
                  }}
                >
                  <div className="card-body text-center">
                    <div className="fs-2 fw-bold mb-2">
                      Step {(idx % data.length) + 1}
                    </div>
                    <h5 className="card-title fs-4">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
