"use client";
import { useState } from "react";
import style from "./styles.module.css";
import OutLinedButton from "../custom/OutLinedButton";
import AnimatedBtn from "../Btn/AnimatedBtn";

const B2BExporterVideo = () => {
  const [showVideoComponent, setShowVideoComponent] = useState(true);

  return (
    <>
      {/* {!showVideoComponent && ( */}

      <div className="d-flex justify-content-center align-items-end h-100">
        {/* <span
            data-bs-toggle="modal"
            data-bs-target="#videoBtn"
            id="video-btn"
          > */}
        <AnimatedBtn
          onClick={() => {
            // setShowVideoComponent(true);
          }}
          dataBsToggle="modal"
          dataBsTarget="#videoBtn"
          id="video-btn"
        />
        {/* </span> */}
      </div>
      {/* )} */}
      <div
        className={`modal fade zoom `}
        id="videoBtn"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="videoBtnLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className={`modal-content`} style={{ height: "50vh" }}>
            <div className="d-flex justify-content-end bg-black">
              <i
                className="fa fa-times cursor-pointer text-white"
                aria-hidden="true"
                // onClick={() => setShowVideoComponent(false)}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
            <iframe
              src="https://www.youtube.com/embed/wkaRICh0xnA"
              allowFullScreen
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default B2BExporterVideo;
