"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import OutLinedButton from "../custom/OutLinedButton";
import { useRouter } from "next/navigation";

const PhonePopUp = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const btn = document.getElementById("offer-modal-btn");
      if (btn) btn.click();
    }, 2000);
  }, []);

  return (
    <>
      <span className="btn-whatsapp-pulse">
        <i
          className="fa fa-phone cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#phoneNumberPoup"
          id="phone-modal-btn"
        ></i>
      </span>

      {/* <!-- Modal --> */}
      <div
        className={`modal fade zoom `}
        id="phoneNumberPoup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="phoneNumberPoupLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className={`modal-content ${styles.lanuching_modal_bg}`}>
            <div className="modal-header justify-content-between">
              <h5 className="modal-title" id="phoneNumberPoupLabel">
                Call Us Now
              </h5>
              <i
                className="fa fa-times cursor-pointer"
                aria-hidden="true"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
            <div className="modal-body">
              <div
                className="p-1 border border-0 rounded-1"
                // style={{ background: "white", color: "black" }}
              >
                <div className="container">
                  <div className="form py-2">
                    <ul>
                      <li>
                        Sales Enquiry :-{" "}
                        <a
                          className="text-white text-decoration-underline"
                          href="tel:+919892969658"
                        >
                          +91 9892969658
                        </a>
                      </li>
                      <li>
                        Support :-{" "}
                        <a
                          className="text-white text-decoration-underline"
                          href="tel:+919892969658"
                        >
                          +91 9892969658
                        </a>
                      </li>
                      <li>
                        Email :-{" "}
                        <a
                          className="text-white text-decoration-underline"
                          href="mailto:harry@thebot.agency"
                        >
                          harry@thebot.agency
                        </a>
                      </li>
                    </ul>
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

export default PhonePopUp;
