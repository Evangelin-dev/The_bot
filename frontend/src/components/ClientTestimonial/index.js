"use client";
import { useRef } from "react";
import style from "./styles.module.css";

const CLIENT_TESTIMONIAL = [
  {
    content:
      "We were unsure about our go-to-market strategy until we tried this service. The data-backed insights were invaluable. Highly recommended!",
    name: "Sanskar Founder, Step Tech",
  },
  {
    content:
      "Their predictive analysis gave us a clear direction for our brand positioning. The results exceeded our expectations!",
    name: "Amruth, Co-Founder, Green Heap Agro Foods Pvt Ltd",
  },
  {
    content:
      "The fail-proof strategies crafted for us were on point. Our sales funnel now runs like a well-oiled machine.",
    name: "Siva, CTO, VOW Life",
  },
];
const ClientTestimonial = ({ data = CLIENT_TESTIMONIAL }) => {
  const testimonialRef = useRef();

  const testimonialScroll = (scrollOffset) => {
    testimonialRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className={`${style.testimonial_wrapper}`}>
        <h1 className="pink_text pb-5">Client Testimonials</h1>
        <div
          className={`d-flex overflow-auto gap-5 hide-scroll`}
          ref={testimonialRef}
        >
          {data.map((client, clientIdx) => {
            return (
              <div
                className={`${style.testimonial_content} d-flex fadeIn`}
                style={{ flexDirection: "column" }}
                key={`testimonial-${clientIdx}`}
              >
                <div
                  className={`${style.testimonial_msg}`}
                  style={{ marginBottom: "auto" }}
                >
                  &quot; {client.content} &quot;
                </div>
                <div className={`${style.testimonial_author} text-end`}>
                  {client.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end fs-2">
          <i
            className="fa fa-chevron-circle-left px-2 cursor-pointer"
            aria-hidden="true"
            onClick={() => testimonialScroll(-500)}
          ></i>
          <i
            className="fa fa-chevron-circle-right px-2 cursor-pointer"
            aria-hidden="true"
            onClick={() => testimonialScroll(500)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
