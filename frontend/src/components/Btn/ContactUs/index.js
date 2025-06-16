"use client";

import OutLinedButton from "@/components/custom/OutLinedButton";
import { useRouter } from "next/navigation";

const ContactUsBtn = ({ title = "Contact Us" }) => {
  const router = useRouter();

  return (
    <OutLinedButton
      name={title}
      onClick={() => {
        router.push("/contact-us");
      }}
    />
  );
};

export default ContactUsBtn;
