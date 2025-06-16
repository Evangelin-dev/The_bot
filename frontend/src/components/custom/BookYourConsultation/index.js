import Link from "next/link";
import styles from "./styles.module.css";

const BookYourConsultation = ({
  name = "Ready to Take Your Marketing to the Next Level?",
  description = "Let’s create a roadmap for success!",
}) => {
  return (
    <div key={`book-your-consultation`}>
      <div className={`${styles.book_your_consultation_title} lh-sm`}>
        <div className="text-center fw-bolder fs-1 w-75 m-auto pb-1">
          <span className="text-white">{name}</span>
        </div>
      </div>
      <div className="text-center fs-1 tossing">
        <Link href={`/contact-us`}>
          <span className="pink_text ">Book Your Consultation Today.</span>
        </Link>
        <div className="fs-4 text-white">{description}</div>
      </div>
    </div>
  );
};

export default BookYourConsultation;
