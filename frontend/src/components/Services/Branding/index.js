"use client";


import CustomSubscriptionCard from "@/components/custom/CustomSubscriptionCard";
import styles from "./styles.module.css";
import CustomImage from "@/components/custom/Image";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import ClientTestimonial from "@/components/ClientTestimonial";
import BookYourConsultation from "@/components/custom/BookYourConsultation";
import FaQ from "../FAQ";


import React, { useState, useRef } from "react";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";

import WhyChooseUsCarousel from "@/components/Why-choose-us";







const Branding = ({
  serviceData = [],
  whyChooseUs = [],
  whatWeOffer = [],
  OurResults = [],
  howItWorks = [],
  clienTestimonialData = [],
  faqData = [],
  whatSetsUp = [],
  bookConsultTitle = "CTA: Your Growth Journey Begins Here",
  bookConsultDescription = "Let us design a future-proof brand and build tech solutions that elevate your business!",
  whyChooseUsSubTitle = "",
}) => {
  // ✅ Move hooks here inside the component
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className={styles.brading_bg}>
      <div className="container">
        {serviceData?.length > 0 && (
          <div className={`${styles.brading_title} lh-sm`}>
            <div className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
              <span className={`text-white`}>Our Services </span>
            </div>
          </div>
        )}

        {serviceData.map((service, serviceIdx) => {
          return (
            <div key={`services-${serviceIdx}`}>
              <div className="fw-bolder fs-3 text-white pb-2 pt-1">
                {service.name}
              </div>
              <div className="row">
                {service?.children?.map((serviceChild, serviceChildIdx) => {
                  return (
                    <CustomSubscriptionCard
                      name={serviceChild.name}
                      description={serviceChild.description}
                      icon={serviceChild.icon}
                      key={`services-child-${serviceChildIdx}`}
                      label=""
                    />
                  );
                })}
              </div>
            </div>
          );
        })}


        {whyChooseUs?.length > 0 && (
          <WhyChooseUsSection
            data={whyChooseUs}
            col={` bot-col-12 ${whyChooseUs?.length > 3 ? "bot-col-4" : "bot-col-3"
              }`}
          />
        )}



        {whatWeOffer?.length > 0 && (
          <div className="text-center text-white pb-5">
            <div className="fw-bolder fs-1 py-4">What We Offer ?</div>
            <WhyChooseUsCarousel
              data={whatWeOffer}
              col={` bot-col-12 ${whatWeOffer?.length > 3 ? "bot-col-4" : "bot-col-3"
                }`}
            /></div>
        )}

        {whatSetsUp?.length > 0 && (
          <div className="text-center text-white py-5">
            <div className="fw-bolder fs-1 pb-4">What Sets Us Apart</div>
            <div className="row g-4">
              {whatSetsUp.map((item, index) => (
                <div className="col-md-4 col-12" key={`what-sets-up-${index}`}>
                  <div className={`${styles.hoverCard} text-white text-center p-4`}>
                    <i className={`fa ${item.icon} fs-2 mb-3 d-block`} aria-hidden="true"></i>
                    <div className="fs-5">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {howItWorks?.length > 0 && (
          <div className="text-center text-white pb-5">
            <div className="fw-bolder fs-1 py-4">How It Works</div>

            <WhyChooseUsCarousel
              data={howItWorks}
              col={` bot-col-12 ${howItWorks?.length > 3 ? "bot-col-4" : "bot-col-3"
                }`}
            />
          </div>
        )}

        {OurResults?.length > 0 && (
          <div className="text-center text-white pb-5">
            <div className="fw-bolder fs-1 py-4">Our Results</div>
            <div className="row g-3 fs-5">
              {OurResults.map((results, resultsIdx) => (
                <div className="col-md-4 col-12" key={`results-${resultsIdx}`}>
                  <div
                    className="card mb-3"
                    style={{
                      background: "transparent",
                      borderColor: "white",
                    }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 d-flex flex-column justify-content-center align-items-center gap-2 p-2">
                        {results.images?.map((img, idx) =>
                          img ? <CustomImage src={img} key={idx} /> : null
                        )}
                      </div>
                      <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                          <div className="card-text text-white">{results.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {clienTestimonialData?.length > 0 && (
          <ClientTestimonial data={clienTestimonialData} />
        )}

        {faqData?.length > 0 && <FaQ data={faqData} />}
        <BookYourConsultation
          name={bookConsultTitle}
          description={bookConsultDescription}
        />
      </div>
    </div>
  );
};

export default Branding;
