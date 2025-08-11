"use client";

import styles from "./styles.module.css";
import BookDemoBtn from "../BookDemoBtn";
import { useEffect } from "react";
import Link from "next/link";

const HeroBannerVariant = ({ title }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <div className={styles.heroButtonContainer}>
          <BookDemoBtn />
          <Link href={"/about-us"} className={styles.heroMeetPromoLink}>
            <span>Meet Bot Promo</span>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};


const TitleBanner = ({
  title,
  fontSize = "4.5rem",
  subTitle = "",
  introduction = "",
  height = "40vh",
  showContactUs = true,
  variant = "default",
  bgColor = "linear-gradient(90deg, rgba(110,64,231,1) 0%, ...)",
}) => {


  if (variant === 'hero') {
    return <HeroBannerVariant title={title} />;
  }



  useEffect(() => {
    document.body.style.setProperty("--bg-color", bgColor);
  }, [bgColor]);

  return (
    <div className={`container ${styles.banner_bg} common-bg`}>
      <div
        id="carouselExampleDark"
        className={`carousel carousel-dark slide ${styles.title_bar_container} d-flex align-items-center`}
        data-bs-ride="carousel"
        style={{ height: height ? height : "100vh" }}
      >
        <div className={`carousel-inner ${styles.carousel_inner} row d-flex align-items-center m-auto`}>
          <div className={`carousel-item active`} data-bs-interval="10000">
            <div className="carousel-caption d-flex align-items-center justify-content-center m-auto">
              <div className="text-center col-md-8 col-sm-12">
                <div
                  className={`${styles.banner_title} m-auto pink_text`}
                  style={{ fontSize: fontSize }}
                >
                  {title}
                </div>
                {showContactUs && (
                  <div className={`row g-0 m-auto ${styles.banner_btn} py-5`}>
                    <div className="col-md-6 col-sm-12">
                      <BookDemoBtn />
                    </div>
                    <Link
                      href={"/about-us"}
                      className="col-md-6 d-flex align-items-center justify-content-center py-3 text-white"
                    >
                      <div>
                        Meet Bot Promo
                        <i className="fa fa-chevron-circle-right px-4"></i>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {(subTitle || introduction) && (
        <>
          <hr className="mt-4 mb-4" />
          <div className="container text-white">
            {subTitle && (
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="pink_text mb-4">{subTitle}</h2>
                </div>
              </div>
            )}
            <div className="row align-items-center">
              <div className="col-md-6 col-12 text-center mb-3 mb-md-0">
                <img
                  src="/promo.jpg"
                  alt="Subsection Illustration"
                  className="img-fluid rounded"
                  style={{ maxWidth: "50%", height: "auto", width: "600px" }}
                />


              </div>

              <div className="col-md-6 col-12">
                {introduction && (
                  <div className="fs-5">{introduction}</div>
                )}
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </>
      )}
    </div>
  );
};

export default TitleBanner;