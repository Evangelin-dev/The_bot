"use client";

import { useRouter } from "next/navigation";

const { default: CustomButton } = require("../custom/CustomButton");

const BookDemoBtn = () => {
  const router = useRouter();

  return (
    <CustomButton
      title={`Book a Demo`}
      onClick={() => {
        router.push("/contact-us");
      }}
    />
  );
};

export default BookDemoBtn;
