"use client";

import styles from "./styles.module.css";
import BookDemoBtn from "../BookDemoBtn";
import { useEffect } from "react";
import Link from "next/link";

const CommonBanner = ({
  title = "All your marketing needs in one single monthly subscription",
  subTitle = "Crystal-clear hourly billing and hundreds of marketing and creative experts at your disposal. That's what you get when you sign up for thebot all-in-one marketing service.",
}) => {
  useEffect(() => {
    document.body.style.setProperty(
      "--bg-color",
      "linear-gradient(43deg, #1a2561 0%, #1c1d6a 74%, #fe9192 100%)"
    );
  }, []);
  return (
    <div className={`container ${styles.banner_bg} common-bg`}>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ height: "90vh" }}
      >
        <div
          className={`carousel-inner ${styles.carousel_inner} d-flex align-items-center`}
        >
          <div className={`carousel-item active`} data-bs-interval="10000">
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="text-center">
                <div className={`${styles.banner_title} py-5 m-auto fadeIn`}>
                  {title}
                </div>
                <div
                  className={`m-auto ${styles.banner_sub_title} pb-5 fadeIn`}
                >
                  {subTitle}
                </div>
                <div className={`row g-0 m-auto ${styles.banner_btn} fadeIn`}>
                  <div className="col-md-6">
                    <BookDemoBtn />
                  </div>
                  <Link
                    href={"/about-us"}
                    className="col-md-6 d-flex align-items-center justify-content-center py-3 text-white"
                  >
                    <div>
                      Meet Bot Promo
                      <i
                        className="fa fa-chevron-circle-right px-4"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
