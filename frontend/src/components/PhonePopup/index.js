"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import OutLinedButton from "../custom/OutLinedButton";
import ScratchableModal from "./ScratchModal";

const CONTACT_INFO = {
  sales: "+91 9892969658",
  support: "+91 9892969658",
  email: "harry@thebot.agency",
};

const PhonePopUp = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);


  // auto open logic 
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

   const connectButton = (
    <div onClick={() => router.push("/contact-us")}>
      <OutLinedButton name={"Connect With Us"} />
    </div>
  );

  return (
    <>
      <span  className={styles.btn_whatsapp_pulse} onClick={() => setIsModalOpen(true)}>
        <i className="fa fa-phone cursor-pointer"></i>
      </span>

      <ScratchableModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        actionButton={connectButton}
      >
      <ul>
          <li>
            Sales Enquiry: <a href={`tel:${CONTACT_INFO.sales}`}>{CONTACT_INFO.sales}</a>
          </li>
          <li>
            Support: <a href={`tel:${CONTACT_INFO.support}`}>{CONTACT_INFO.support}</a>
          </li>
          <li>
            Email: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </li>
        </ul>
      </ScratchableModal>
    </>
  );
};

export default PhonePopUp;