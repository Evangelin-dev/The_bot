import CustomImage from "../custom/Image";
import style from "./styles.module.css";
import logoStyle from "../NavBar/styles.module.css";
import { COMPANY, INDUSTRIES, SERVICES } from "../NavBar";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`container text-color-white footer mt-auto py-3 text-white ${style.footer_container}`}
    >
      <div className="row g-0 pt-4">
        <div className="col-md-2">
          <CustomImage
            src={"/bot-logo-white.png"}
            wrapperClss={logoStyle.logo_img_container}
            height="auto"
            width="8vw"
          />
        </div>
        <div className="col-md-2">
          <div className={`${style.footer_menu_header} pink_text`}>
            Services
          </div>
          {SERVICES.map((service, serviceIdx) => {
            return (
              <div
                className={`${style.footer_a} py-1`}
                key={`services-footer-${serviceIdx}`}
              >
                <Link
                  href={`/services/${
                    service?.url ? service?.url : service.name
                  }`}
                  className="dropdown-item nav-dropdown-item"
                >
                  {service?.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="col-md-2">
          <div className={`${style.footer_menu_header} pink_text`}>
            Industries
          </div>
          {INDUSTRIES.map((industry, industryIdx) => {
            return (
              <div
                className={`${style.footer_a} py-1`}
                key={`services-footer-${industryIdx}`}
              >
                <Link
                  href={`/industries/${
                    industry?.url ? industry?.url : industry.name
                  }`}
                  className="dropdown-item nav-dropdown-item"
                >
                  {industry?.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="col-md-2">
          <div className={`${style.footer_menu_header} pink_text`}>Company</div>
          {COMPANY.map((companyRow, companyRowIdx) => {
            return (
              <div
                className={`${style.footer_a} py-1`}
                key={`company-footer-${companyRowIdx}`}
              >
                <Link
                  className="dropdown-item nav-dropdown-item"
                  href={companyRow.link}
                >
                  {companyRow.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <div className={`${style.footer_menu_header} pink_text`}>
            Follow Us On
          </div>
          <div className="py-1">
            <Link
              href="https://www.facebook.com/profile.php?id=61550572990313"
              className={`pe-2`}
              target="_blank"
            >
              <i
                className={`fa fa-3x fa-facebook-square ${style.share_button}`}
              ></i>
            </Link>
            <Link
              href="https://www.instagram.com/thebot.agency/"
              className={`px-2`}
              target="_blank"
            >
              <i className={`fa fa-3x fa-instagram ${style.share_button}`}></i>
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-bot-agency-india/"
              className={`px-2`}
              target="_blank"
            >
              <i
                className={`fa fa-3x fa-linkedin-square ${style.share_button}`}
              ></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start pt-5">
        <div>© 2024 TheBot. All rights reserved.</div>
        <div className="px-3">
          <Link
            className="dropdown-item nav-dropdown-item"
            href={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link
            className="dropdown-item nav-dropdown-item"
            href={"/terms-and-condition"}
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
