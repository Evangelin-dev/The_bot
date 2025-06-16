import CustomButton from "../custom/CustomButton";
import PhonePopUp from "../PhonePopup";
import ContactUsForm from "./form";
import style from "./styles.module.css";

const ContactUs = () => {
  return (
    <div
      className={`container text-color-white py-5  ${style.contact_us_container}`}
    >
      <div className="row g-0 py-2">
        <div className="col-md-6 col-sm-12">
          <div className={`${style.contact_content_title}`}>
            Transform Your Business with Our Marketing Solutions
          </div>
          <div className={`pt-4 pb-4 ${style.contact_content_sub_title}`}>
            Schedule a personalized demo and discovery call to explore:{" "}
          </div>
          <div className={`${style.contact_content_li}`}>
            <div className="py-2">
              &#10003; How our advanced bot agency operates to deliver
              exceptional results.
            </div>
            <div className="py-2">
              &#10003; Ways to scale your marketing efficiently—better, faster,
              and more cost-effectively.
            </div>
            <div className="py-2">
              &#10003; The perfect subscription plan tailored to meet your
              unique needs.
            </div>
          </div>
          <div className={`pt-4 pb-4 ${style.contact_content_sub_title}`}>
            Take the first step toward smarter marketing today!
          </div>
          <div
            className={`text-start py-3 px-3 ${style.bg_white} text-black border border-1 rounded-3`}
          >
            <div className="fs-6 fw-normal">
              <div className="">
                <i className="fa fa-phone pe-4" aria-hidden="true"></i>
                <span>Sales Enquiry :- +91 9892969658</span>
              </div>
              <div>
                <i className="fa fa-phone pe-4 pt-2" aria-hidden="true"></i>
                <span>Support :- +91 9892969658</span>
              </div>
              <div className="py-2">
                <i className="fa fa-envelope pe-4" aria-hidden="true"></i>
                <span>harry@thebot.agency</span>
              </div>
              <div>
                <i className="fa fa-map-marker pe-4" aria-hidden="true"></i>
                <span>
                  Aaradhya Square B Wing 1005, Naidu Colony, Ghatkopar East
                  Mumbai 400075.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 ${style.contact_us_form_p}`}>
          <div
            className="p-3 border border-1 rounded-1"
            style={{ background: "white", color: "black" }}
          >
            <div className="container">
              <div className="form py-4">
                <div className={`${style.contact_form_title} py-3`}>
                  BOOK A CALL WITH US
                </div>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PhonePopUp /> */}
    </div>
  );
};

export default ContactUs;
