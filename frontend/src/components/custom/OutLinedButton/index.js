"use client";

import styles from "./styles.module.css";

const OutLinedButton = ({ name, onClick = () => {} }) => {
  return (
    <button
      className={`${styles.bot_outline_btn}`}
      data={name}
      onClick={() => onClick()}
    ></button>
  );
};

export default OutLinedButton;
