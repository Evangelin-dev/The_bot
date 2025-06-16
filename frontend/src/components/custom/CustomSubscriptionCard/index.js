import Link from "next/link";
import styles from "./styles.module.css";

const CustomSubscriptionCard = ({
  icon,
  name,
  description,
  label = "Department",
  link = null,
}) => {
  const CardContent = (
    <div
      className={`h-100 p-4 border border-1 rounded-3 ${styles.subscription_wrapper}`}
    >
      <div className={`${styles.subscription_icon} text-center`}>{icon}</div>
      {label && (
        <div className={`${styles.subscription_label} py-2 text-center`}>
          <span
            className={`border border-1 rounded-3 py-1 px-3 ${styles.subscription_label_content}`}
          >
            {label}
          </span>
        </div>
      )}
      <div className={`${styles.subscription_name} text-center`}>{name}</div>
      <div className={`${styles.subscription_description} pt-3`}>
        {description}
      </div>
    </div>
  );

  return (
    <div className="col-lg-3 col-md-4 col-12 py-4 fadeIn">
      {link ? (
        <Link href={link} className="text-decoration-none text-reset">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  );
};

export default CustomSubscriptionCard;
