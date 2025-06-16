"use client";

import { useState } from "react";
import style from "./styles.module.css";

const LogoVideoComponent = () => {
  const [showVideoComponent, setShowVideoComponent] = useState(true);

  return (
    showVideoComponent && (
      <div className={`${style.video_wrapper}`}>
        <div className="d-flex justify-content-end fadeIn">
          <i
            className="fa fa-times cursor-pointer"
            aria-hidden="true"
            onClick={() => setShowVideoComponent(false)}
          ></i>
        </div>
        <video
          className="border border-1"
          autoPlay={true}
          muted
          loop
          width="100%"
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      </div>
    )
  );
};

export default LogoVideoComponent;
