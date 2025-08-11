"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import OutLinedButton from "../custom/OutLinedButton";
import { useRouter } from "next/navigation";

const OfferPopUp = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("offer-modal-btn").click();
    }, 2000);
  }, []);

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <div className="fixed">
        <a
          href=""
          className="button"
          id="offer-modal-btn" 
          data-bs-toggle="modal"
          data-bs-target="#offersPopup"
        >
          <div className="buttonDiv bg-b-blue">Get Offers</div>
        </a>
      </div>

      {/* <!-- Modal --> */}

      <div
        className={`modal fade zoom `}
        id="offersPopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className={`modal-content ${styles.lanuching_modal_bg}`}>
            <div className="modal-header justify-content-between">
              <h5 className="modal-title" id="staticBackdropLabel">
                Act Now – Offer Valid for the First 5 Exporters Only !!
              </h5>
              <i
                className="fa fa-times cursor-pointer"
                aria-hidden="true"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  localStorage.setItem("pop-closed", new Date().toString());
                }}
              ></i>
            </div>
            <div className="modal-body">
              <div
                className="px-3 pb-3"
                // style={{ background: "white", color: "black" }}
              >
                <div className="container">
                  <div className="form py-2">
                    <ol>
                      <li>Invest just ₹3 Lakhs to expand globally.</li>
                      <li>We guarantee results every single time</li>
                      <li>
                        Exclusive Offer: Limited to the first 5 exporters only
                      </li>
                    </ol>
                  </div>
                  <div
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      router.push("/contact-us");
                    }}
                  >
                    <OutLinedButton name={"Connect With Us"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferPopUp;
