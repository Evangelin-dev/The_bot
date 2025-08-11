import { headers } from "next/headers";
import CustomImage from "../custom/Image";
import styles from "./styles.module.css";
import Link from "next/link";
import ContactUsBtn from "../Btn/ContactUs";

export const SERVICES = [
  {
    name: "Marketing Strategies",
    url: "marketing-strategies",
  },
  {
    name: "Predictive Market Analysis",
    url: "predictive-analysis",
  },
  {
    name: "Lead Generation",
    url: "lead-generation",
  },
  {
    name: "Branding",
    url: "branding",
  },
  {
    name: "Web Development",
    url: "web-development",
  },
  {
    name: "Social Media Management",
    url: "social-media-management",
  },
  {
    name: "Tech Development",
    url: "tech-development",
  },
  {
    name: "App Development",
    url: "app-development",
  },
  {
    name: "Seo",
    url: "seo",
  },
  {
    name: "Website in 3 days",
    url: "web-development/3-days-delivery",
  },
];

export const INDUSTRIES = [
  {
    name: "B2B Businesses",
    url: "b2b-business",
  },
  {
    name: "B2C Businesses",
    url: "b2c-business",
  },
  {
    name: "Logistics Businesses",
    url: "logistics-businesses",
  },
  {
    name: "Saas Company",
    url: "saas-company",
  },
  {
    name: "Start Up",
    url: "start-up",
  },
  {
    name: "B2B Exporter",
    url: "b2b-exporter",
  },
];

export const PRODUCTS = [
  {
    name: "Emailer",
    url: "emailer",
  },
];

export const COMPANY = [
  {
    name: "About",
    link: "about-us",
  },
  {
    name: "Blog",
    link: "blogs",
  },
  {
    name: "Contact",
    link: "contact-us",
  },
];

const NavBar = async () => {
  const headersList = await headers();
  return (
    <nav className="navbar navbar-dark navbar-expand-sm sticky-top">
      <div className="container">
        <Link href="/">
          <div
            className="navbar-brand"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >
            <CustomImage
              src={"/bot-logo-white.png"}
              wrapperClss={styles.logo_img_container}
              height="auto"
              width="8vw"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
          <li className="nav-item px-1">
              <Link href={`/about-us`}>
                <span
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  About Us
                </span>
              </Link>
            </li>
            <li className={`nav-item dropdown dropdown-nav px-1`}>
              <a
                className="nav-link dropdown-toggle dropdown-nav-toggle"
                href="#"
                id="servicesDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu dropdown-nav-menu nav-dropdown-menu"
                aria-labelledby="servicesDropDown"
              >
                {SERVICES.map((service, serviceIndex) => {
                  return (
                    <li key={`service-${serviceIndex}`}>
                      <Link
                        href={`/services/${
                          service?.url ? service?.url : service.name
                        }`}
                      >
                        <span
                          className="dropdown-item nav-dropdown-item"
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          {service?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className={`nav-item dropdown dropdown-nav px-1`}>
              <a
                className="nav-link dropdown-toggle dropdown-nav-toggle"
                href="#"
                id="industriesDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries
              </a>
              <ul
                className="dropdown-menu dropdown-nav-menu nav-dropdown-menu w-auto"
                aria-labelledby="industriesDropDown"
              >
                {INDUSTRIES.map((industry, industryIndex) => {
                  return (
                    <li key={`industry-${industryIndex}`}>
                      <Link
                        href={`/industries/${
                          industry?.url ? industry?.url : industry.name
                        }`}
                      >
                        <span
                          className="dropdown-item nav-dropdown-item"
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          {industry?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item px-1">
              <Link href={`/pricing`}>
                <span
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Pricing
                </span>
              </Link>
            </li>
            {/* <li className={`nav-item dropdown dropdown-nav px-1`}>
              <a
                className="nav-link dropdown-toggle dropdown-nav-toggle"
                href="#"
                id="productsDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul
                className="dropdown-menu dropdown-nav-menu nav-dropdown-menu w-auto"
                aria-labelledby="productsDropDown"
              >
                {PRODUCTS.map((product, industryIndex) => {
                  return (
                    <li key={`products-${industryIndex}`}>
                      <Link
                        href={`/products/${
                          product?.url ? product?.url : product.name
                        }`}
                      >
                        <span
                          className="dropdown-item nav-dropdown-item"
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          {product?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li> */}
            <li className="nav-item px-1">
              <Link href={`/blogs`}>
                <span
                  className="nav-link"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Blogs
                </span>
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link href={`/case-study`}>
                <span
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Case Studies
                </span>
              </Link>
            </li>
           
            

            {/* <li className={`nav-item dropdown dropdown-nav px-1`}>
              <a
                className="nav-link dropdown-toggle dropdown-nav-toggle"
                href="#"
                id="companyDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                className="dropdown-menu dropdown-nav-menu nav-dropdown-menu"
                aria-labelledby="companyDropDown"
              >
                {COMPANY?.map((companyMenu, companyMenuIdx) => {
                  return (
                    <li key={`${companyMenuIdx}-company`}>
                      <Link href={`/${companyMenu.link}`}>
                        <span
                          className="dropdown-item nav-dropdown-item"
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          {companyMenu.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li> */}
            {/* <li className="nav-item px-1">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Events
              </a>
            </li> */}
          </ul>
          <ContactUsBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
