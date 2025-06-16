"use client";
import styles from "./styles.module.css";

const CustomButton = ({ title, onClick = () => {} }) => {
  return (
    <button
      className={`${styles.bot_btn}`}
      data={title}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
