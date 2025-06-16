import Link from "next/link";
import styles from "../styles.module.css";

const PrCard = ({
  className = "",
  name = "Every service under the sun",
  description = "You get your own personal marketing strategist ready to listen and help you plan your brand's every move.",
  icon = null,
  link = null,
}) => {
  const CardContent = (
    <div
      className={`py-3 text-center ${styles.pricing_people_tile} fadeIn ${className}`}
      style={{ maxWidth: "340px", margin: "0 auto" }} // ✅ Add this
    >
      <div className={`text-center ${styles.pricing_people_tile_title}`}>
        {icon ? icon : (
          <i className="fa fa-medium px-2 pink_text" aria-hidden="true"></i>
        )}
      </div>
      <div className={`text-center ${styles.pricing_people_tile_sub_title} py-2`}>
        {name}
      </div>
      <div className={`text-center ${styles.pricing_people_tile_sub_description} py-3`}>
        {description}
      </div>
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
