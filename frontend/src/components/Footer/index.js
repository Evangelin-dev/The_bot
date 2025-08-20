"use client";

import { useEffect } from "react";
import CustomImage from "../custom/Image";
import style from "./styles.module.css";
import logoStyle from "../NavBar/styles.module.css";
import { COMPANY, INDUSTRIES, SERVICES } from "../NavBar";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
  useEffect(() => {
    // Google callback function
    window.handleCredentialResponse = async function (response) {
      try {
        const data = JSON.parse(atob(response.credential.split(".")[1]));
        console.log("Decoded email:", data.email);
        console.log("Decoded name:", data.name);

        // POST to Django backend
        const res = await fetch("https://portal.botdigitalsolutions.com/user_api/contacts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
    name: data.name,
    email: data.email,
    phone_number: ""  // illa user input la edhavadhu set pannala na empty string
})
,
        });

        if (res.ok) {
          const result = await res.json();
          console.log("Saved:", result); // Saved success log
          const outputEl = document.getElementById("g_output");
          if (outputEl) {
            outputEl.innerText = `Saved successfully: ${result.name} (${result.email})`;
          }
        } else {
          console.error("Failed to save contact");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
  }, []);

  return (
    <>
      {/* Load Google Sign-In script */}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />

      <footer
        className={`container text-color-white footer mt-auto py-3 text-white ${style.footer_container}`}
      >
        {/* Google Sign-In Button */}
        <div
          id="g_id_onload"
          data-client_id="551926263764-43t3d122lq4nolpkii6cgulm232ol01o.apps.googleusercontent.com"
          data-callback="handleCredentialResponse"
        ></div>

        <div id="g_output" style={{ color: "white", marginTop: "10px" }}></div>

        <div className="row g-0 pt-4">
          {/* Logo */}
          <div className="col-md-2">
            <CustomImage
              src={"/bot-logo-white.png"}
              wrapperClss={logoStyle.logo_img_container}
              height="auto"
              width="8vw"
            />
          </div>

          {/* Services */}
          <div className="col-md-2">
            <div className={`${style.footer_menu_header} pink_text`}>Services</div>
            {SERVICES.map((service, idx) => (
              <div className={`${style.footer_a} py-1`} key={idx}>
                <Link
                  href={`/services/${service?.url ? service?.url : service.name}`}
                  className="dropdown-item nav-dropdown-item"
                >
                  {service?.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="col-md-2">
            <div className={`${style.footer_menu_header} pink_text`}>Industries</div>
            {INDUSTRIES.map((industry, idx) => (
              <div className={`${style.footer_a} py-1`} key={idx}>
                <Link
                  href={`/industries/${industry?.url ? industry?.url : industry.name}`}
                  className="dropdown-item nav-dropdown-item"
                >
                  {industry?.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div className="col-md-2">
            <div className={`${style.footer_menu_header} pink_text`}>Company</div>
            {COMPANY.map((company, idx) => (
              <div className={`${style.footer_a} py-1`} key={idx}>
                <Link className="dropdown-item nav-dropdown-item" href={company.link}>
                  {company.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <div className={`${style.footer_menu_header} pink_text`}>Follow Us On</div>
            <div className="py-1">
              <Link
                href="https://www.facebook.com/profile.php?id=61550572990313"
                className="pe-2"
                target="_blank"
              >
                <i className={`fa fa-3x fa-facebook-square ${style.share_button}`}></i>
              </Link>
              <Link
                href="https://www.instagram.com/thebot.agency/"
                className="px-2"
                target="_blank"
              >
                <i className={`fa fa-3x fa-instagram ${style.share_button}`}></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-bot-agency-india/"
                className="px-2"
                target="_blank"
              >
                <i className={`fa fa-3x fa-linkedin-square ${style.share_button}`}></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="d-flex justify-content-start pt-5">
          <div>© 2024 TheBot. All rights reserved.</div>
          <div className="px-3">
            <Link className="dropdown-item nav-dropdown-item" href={"/privacy-policy"}>
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link className="dropdown-item nav-dropdown-item" href={"/terms-and-condition"}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
