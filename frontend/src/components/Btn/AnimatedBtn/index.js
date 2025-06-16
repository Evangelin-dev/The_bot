import style from "./styles.module.css";

const AnimatedBtn = ({
  onClick,
  title = "Watch Video",
  dataBsToggle = "",
  dataBsTarget = "",
  id = "",
}) => {
  return (
    <span
      className={`${style.playbtn}`}
      onClick={() => {
        onClick();
      }}
      id={id}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </span>
  );
};

export default AnimatedBtn;
