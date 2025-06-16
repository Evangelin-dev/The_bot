"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import ContactUsForm from "../ContactUs/form";

const LaunchingModal = () => {
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("pop-closed")) {
        let nextPopTime =
          new Date(localStorage.getItem("pop-closed")).getTime() +
          60 * 60 * 24 * 1000;
        if (nextPopTime < new Date()) {
          document.getElementById("modal-btn").click();
        }
      } else {
        document.getElementById("modal-btn").click();
      }
    }, 2000);
  }, []);

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        id="modal-btn"
        // onClick={() => handleShow()}
      >
        Launch static backdrop modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className={`modal fade zoom `}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.lanuching_modal_bg}`}>
            <div className="modal-header justify-content-between">
              <h5 className="modal-title" id="staticBackdropLabel">
                LETS GROW YOUR BRAND ONLINE !!
              </h5>
              <i
                className="fa fa-times cursor-pointer"
                aria-hidden="true"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  console.log("alsdjklasjd");
                  localStorage.setItem("pop-closed", new Date().toString());
                }}
              ></i>
            </div>
            <div className="modal-body">
              <div
                className="p-3 border border-1 rounded-1"
                style={{ background: "white", color: "black" }}
              >
                <div className="container">
                  <div className="form py-4">
                    <ContactUsForm />
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

export default LaunchingModal;
