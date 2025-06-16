"use client";
import { useRef } from "react";
import styles from "./styles.module.css";
import CustomImage from "../custom/Image";

const CLIENT_LOGO = [
  "/clients/sara-logo-grey-colour.png",
  "/clients/yagnam-logo-grey-colour.png",
  "/clients/green-heap--grey-colour.png",
  "/clients/Step-production-grey-colour.png",
  "/clients/Serene-grey-colour.png",
  "/clients/SAR-international-grey-colour.png",
  "/clients/EYC-A-grey-colour.png",
  "/clients/RPLUS-CRM-logo-grey-colour.png",
  "/clients/secured365-grey-colour.png",
  "/clients/karamel-logo-grey-colour.png",
  "/clients/ORPHEUS-logo-grey-colour.png",
  "/clients/MakinExports-grey-colour.png",
  "/clients/Rajog-G-logo-grey-colour.png",
  "/clients/Yugma-logo-grey-colour.png",
  "/clients/VOW-grey-colour.png",
  "/clients/Prakash-Enterprises-grey-colour.png",
  "/clients/Iyer-Idly-grey-colour.png",
  "/clients/TBHC-logo-grey-colour.png",
  "/clients/EYC-grey-colour.png",
  "/clients/threadality--logo-grey-colour.png",
  "/clients/mannai-logo-grey-colour.png",
  "/clients/kores-logo-grey-colour.png",
  "/clients/Royal-logo-grey-colour.png",
  "/clients/Super-Coats-Logo-grey-colour.png",
  "/clients/Creative-Axis-grey-colour.png",
  "/clients/medi-sure-grey-colour.png",
  "/clients/Urban-design-grey-colour.png",
  "/clients/ashish-book-logo-grey-colour.png",
  "/clients/Entropi-logo-grey-colour.png",
  "/clients/chemiplant-logo-grey-colour.png",
  "/clients/Rajog-E-logo-grey-colour.png",
  "/clients/Gabrin-logo-grey-colour.png",
  "/clients/step-Digital--grey-colour.png",
];

const Clients = () => {
  const bannerServicesRef = useRef();

  const scrollBannerServices = (scrollOffset) => {
    bannerServicesRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="pt-5 text-white fw-bolder fs-1 px-4 text-center pb-3 fadeIn">
        Out Clients
      </div>
      <div
        className={`d-flex overflow-auto  gap-5 hide-scroll`}
        ref={bannerServicesRef}
      >
        <div className={`d-flex ${styles.track}`}>
          {CLIENT_LOGO?.map((client, clientIdx) => {
            return (
              <div key={`client-wrapper-${clientIdx}`} className={styles.client_logo_wrapper}>
                <CustomImage
                  src={client}
                  key={`client-img-${clientIdx}`}
                  wrapperClss={styles.img_container}
                  alt={client.split("/")[2]}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`text-center ${styles.services_control_icons} text-white`}
      >
        <i
          className="fa fa-chevron-circle-left px-2 cursor-pointer"
          aria-hidden="true"
          onClick={() => scrollBannerServices(-100)}
        ></i>
        <i
          className="fa fa-chevron-circle-right px-2 cursor-pointer"
          aria-hidden="true"
          onClick={() => scrollBannerServices(100)}
        ></i>
      </div>
    </>
  );
};

export default Clients;
