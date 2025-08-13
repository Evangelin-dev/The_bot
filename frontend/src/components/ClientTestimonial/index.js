"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import style from './styles.module.css';

const CLIENT_TESTIMONIAL = [
  {
    content: "We were unsure about our go-to-market strategy until we tried this service. The data-backed insights were invaluable. Highly recommended!",
    name: "Sanskar Founder, Step Tech",
  },
  {
    content: "Their predictive analysis gave us a clear direction for our brand positioning. The results exceeded our expectations!",
    name: "Amruth, Co-Founder, Green Heap Agro Foods Pvt Ltd",
  },
  {
    content: "The fail-proof strategies crafted for us were on point. Our sales funnel now runs like a well-oiled machine.",
    name: "Siva, CTO, VOW Life",
  },
];

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const ClientTestimonial = ({ data = CLIENT_TESTIMONIAL }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    const newPage = (page + newDirection + data.length) % data.length;
    setPage([newPage, newDirection]);
  };

  useEffect(() => {
    // Autoplay logic
    if (isHovered) return;

    const autoplay = setInterval(() => {
      paginate(1); // Go to the next slide
    }, 4000); // Change slide every 4 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(autoplay);
  }, [page, isHovered]); // Effect resets on page change or hover state change

  const testimonial = data[page];

  return (
    <div
      className={style.testimonial_wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="pink_text pb-5">Client Testimonials</h1>
      
      {/* This is the viewport that hides the overflow */}
      <div className={style.testimonial_viewport}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page} // The key is crucial for AnimatePresence
            className={style.testimonial_slide}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className={style.testimonial_msg}>
              &quot; {testimonial.content} &quot;
            </div>
            <div className={style.testimonial_author}>
              {testimonial.name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button className={`${style.nav_button} ${style.prev}`} onClick={() => paginate(-1)}>
        <FaChevronLeft />
      </button>
      <button className={`${style.nav_button} ${style.next}`} onClick={() => paginate(1)}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ClientTestimonial;