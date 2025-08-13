import Link from "next/link";
import styles from "./NewServiceCard.module.css";

const NewServiceCard = ({ link, icon, name, description }) => {
  return (
    <Link href={link} className={styles.link_wrapper}>
      <div className={styles.card_container}>
        <div className={styles.icon_wrapper}>{icon}</div>
        <div className={styles.department_tag}>Department</div>
        <h3 className={styles.card_title}>{name}</h3>
        <p className={styles.card_description}>{description}</p>
      </div>
    </Link>
  );
};

export default NewServiceCard;