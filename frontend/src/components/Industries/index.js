"use client";

import CustomSubscriptionCard from "@/components/custom/CustomSubscriptionCard";
import styles from "./styles.module.css";
import ClientTestimonial from "@/components/ClientTestimonial";
import BookYourConsultation from "@/components/custom/BookYourConsultation";
import FaQ from "../Services/FAQ";

import WhatWeOffer from "../Services/WhatWeOffer";
import OurProcessCarousel from "@/components/OurProcess";
import WhyChooseUsCarousel from "@/components/Why-choose-us";

const Industries = ({
  serviceData = [],
  whyChooseUs = [],
  whatWeOffer = [],
  OurResults = [],
  howItWorks = [],
  clienTestimonialData = [],
  faqData = [],
  ourProcess = [],
  bookConsultTitle = "CTA: Your Growth Journey Begins Here",
  bookConsultDescription = "Let us design a future-proof brand and build tech solutions that elevate your business!",
  industriesWeServe = [],
  whyChooseUsSubTitle = "",
  exporterGuarantee = false,
}) => {
  return (
    <div className={styles.brading_bg}>
      <div className="container">
        {serviceData?.length > 0 && (
          <div className={`${styles.brading_title} lh-sm`}>
            <div className="text-center fw-bolder fs-1 w-75 m-auto pb-5">
              <span className={`text-white `}>Our Services </span>
            </div>
          </div>
        )}

        {serviceData.map((service, serviceIdx) => {
          return (
            <div key={`services-${serviceIdx}`}>
              <div className="fw-bolder fs-3 text-white pb-2 pt-1 text-center">
                {service.name}
              </div>
              <div className="row m-auto d-flex justify-content-center">
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
         <div className="container-fluid py-5" >
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Column: Text Content */}
          <div className="col-md-6 text-white text-center">
            <div className="fw-bolder fs-1 py-4">Why Choose Us</div>

            {whyChooseUsSubTitle && (
              <div className="fs-4 py-4 pink_text">{whyChooseUsSubTitle}</div>
            )}

            <div className="row g-3 fs-5">
              {whyChooseUs?.map((why_choose_us, idx) => (
                <div className="col-md-12 col-12" key={`why-choose-us-${idx}`}>
                  <div className="h-100 p-3 d-flex align-items-center justify-content-center">
                    {why_choose_us.icon}
                    <span>{why_choose_us.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6">
            <div
              style={{
                backgroundImage: `url('/teamwork.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </div>

        {exporterGuarantee && (
          <div>
            <div className="text-center text-white pb-5">
              <div className="fw-bolder fs-1 py-4">
                Pain-Free Exporting – Guaranteed!
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="border border-1 rounded-3 p-1 card-hover h-100">
                    <div
                      className="card p-3"
                      style={{
                        background: "transparent",
                        borderColor: "white",
                      }}
                    >
                      <div className="card-body text-start text-white">
                        <div className="fw-bolder fs-5 pb-2  pink_text">
                          <i className="fa fa-bolt me-2" aria-hidden="true"></i>
                          Say Goodbye to :
                        </div>
                        <ol>
                          <li>
                            Endless hours spent at trade shows with little ROI.
                          </li>
                          <li>
                            Unpredictable cold outreach that leads nowhere.
                          </li>
                          <li>
                            Guessing which countries might work for your
                            product.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="border border-1 rounded-3 p-1 card-hover h-100">
                    <div
                      className="card p-3"
                      style={{
                        background: "transparent",
                        borderColor: "white",
                      }}
                    >
                      <div className="card-body text-start text-white">
                        <div className="fw-bolder fs-5 pb-2 pink_text">
                          <i className="fa fa-flag me-2" aria-hidden="true"></i>
                          Say Hello to :
                        </div>
                        <ol>
                          <li>
                            Data-driven, targeted strategies that save you time
                            and money.{" "}
                          </li>
                          <li>
                            Exclusive export enquiries in 3 global markets
                            within months.
                          </li>
                          <li>
                            A streamlined, modern approach to connecting with
                            international buyers.{" "}
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {whatWeOffer?.length > 0 && (
          <WhatWeOffer
            data={whatWeOffer}
            col={` bot-col-12 ${
              whatWeOffer?.length > 3 ? "bot-col-4" : "bot-col-3"
            }`}
          />
        )}

{ourProcess?.length > 0 && (
  <OurProcessCarousel ourProcess={ourProcess} />
)}

        {howItWorks?.length > 0 && (
           <div className="text-center text-white pb-5">
            <div className="fw-bolder fs-1 py-4">How It Works</div>
          <WhyChooseUsCarousel
            data={howItWorks}
            col={` bot-col-12 ${
              howItWorks?.length > 3 ? "bot-col-4" : "bot-col-3"
            }`}
            
          /></div>  
        )}

        {OurResults?.length > 0 && (
          <div className="text-center text-white pb-5">
            <div className="fw-bolder fs-1 py-4">Our Results</div>
            <div className="row g-3 fs-5">
              {OurResults?.map((results, resultsIdx) => {
                return (
                  <div
                    className="col-md-4 col-12"
                    key={`results-${resultsIdx}`}
                  >
                    <div className="h-100 p-4">
                      <i className="fa fa-check pe-2" aria-hidden="true"></i>
                      {results.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

{industriesWeServe?.length > 0 && (
  <div className="text-center text-white pb-5">
    <div className="fw-bolder fs-1 py-4">Industries We Serve</div>
    
    <div className="container">
      <div className="row g-3 fs-5 justify-content-center">
        {industriesWeServe?.map((process, processIdx) => (
          <div
            className="col-md-4 col-sm-6 col-12 d-flex"
            key={`our-process-${processIdx}`}
          >
            <div className="border border-1 rounded-3 p-4 card-hover text-center w-100">
              <div className="fw-bolder fs-1 pb-2 m-auto">
                {process?.icon ? (
                  process.icon
                ) : (
                  <i
                    className="fs-2 fa fa-check pe-3"
                    aria-hidden="true"
                  ></i>
                )}
              </div>
              <div className="fw-bolder fs-5 pb-2">{process.name}</div>
              <div className="fw-light fs-6">{process.description}</div>
            </div>
          </div>
        ))}
      </div>
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

export default Industries;
