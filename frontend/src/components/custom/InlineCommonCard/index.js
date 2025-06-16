import Link from "next/link";
import styles from "./style.module.css";

const InlineCommonCard = ({
  name,
  description,
  icon, // 👈 Accept icon as a prop
  column = "col-md-3",
  link = "#",
}) => {
  return (
    <div className={`${column} col-12 text-white pt-2`}>
      <Link href={link}>
        <div className={`${styles.pricing_services_title} pink_text d-flex align-items-center gap-2`}>
          {/* Icon goes here */}
          <span style={{ width: "16px", height: "16px" }}>{icon}</span>
          {name}
        </div>
        <div className={`${styles.pricing_services_description} pb-2 pt-1 pe-2`}>
          {description}
        </div>
      </Link>
    </div>
  );
};

export default InlineCommonCard;
