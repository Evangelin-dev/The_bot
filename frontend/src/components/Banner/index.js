"use client";

import { useEffect } from "react";
import styles from "./styles.module.css";
import CustomImage from "../custom/Image";
import BookDemoBtn from "../BookDemoBtn";

const Banner = () => {
  useEffect(() => {
    // Background gradient
    document.body.style.setProperty(
      "--bg-color",
      "linear-gradient(90deg, #04041e 5%,rgb(35, 35, 89) 24%, #000000 100%)"
    );
  }, []);

  return (
    <div className="bg-animated mb-5">
      <div className="container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          style={{ height: "100vh" }}
        >
          <div
            className={`carousel-inner ${styles.carousel_inner} d-flex align-items-center`}
          >
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="m-auto"></div>

              <div className="carousel-caption d-flex align-items-center">
                <div className="w-100">
                  <div className={`${styles.banner_title} fadeIn`}>
                    Explore our MaaS
                  </div>
                  <div className={`${styles.banner_sub_title} py-3 fadeIn`}>
                    MARKETING FOR UNSTOPPABLE GROWTH
                  </div>
                  <div className="row">
                    <div className="col-md-8 d-none d-lg-block pe-3">
                      <div className="d-flex align-items-center h-100">
                        <CustomImage src={"/lineArrow.svg"} />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 pe-3">
                      <div className={`${styles.banner_sub_content} py-3 fadeIn`}>
                        Go to Market Strategy, Branding, Design, Development,
                        Content, Ads and all you need in one package from a
                        leading digital marketing company worldwide.
                      </div>
                      <BookDemoBtn />
                      {/* Google Sign-In button removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
