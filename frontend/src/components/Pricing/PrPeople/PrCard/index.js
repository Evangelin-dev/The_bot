import Link from "next/link";
import styles from "./styles.module.css";

const PrCard = ({ icon, name, description, link }) => {
  const CardContent = (
    <div className={styles.pricing_people_tile}>
      {/* 
        HERE IS THE FIX: 
        We keep the styled wrapper and render your icon prop inside it.
      */}
      <div className={styles.iconWrapper}>
        {icon ? icon : (
          // This is the fallback if no icon is provided
          <i className="fa fa-medium fa-3x pink_text" aria-hidden="true"></i>
        )}
      </div>

      {/* Title */}
      <div className={styles.pricing_people_tile_sub_title}>{name}</div>

      {/* Description */}
      <div className={styles.pricing_people_tile_sub_description}>{description}</div>
    </div>
  );

  return link ? (
    <Link href={link} passHref legacyBehavior>
      <a className="text-decoration-none text-white">{CardContent}</a>
    </Link>
  ) : (
    CardContent
  );
};

export default PrCard;