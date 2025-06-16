"use client";
import CustomButton from "@/components/custom/CustomButton";
import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMsg";
import "react-phone-number-input/style.css";

import PhoneInputWithCountrySelect from "react-phone-number-input";

const INTERESTED_IN_CHOICES = [
  ["Seo", "Seo"],
  ["Tech Development", "Tech Development"],
  ["Web Development", "Web Development"],
  ["Branding", "Branding"],
  ["Lead Generation", "Lead Generation"],
  ["Predictive Marketing Strategies", "Predictive Marketing Strategies"],
  ["Marketing Strategies", "Marketing Strategies"],
  ["B2B Manufacturing", "B2B Manufacturing"],
  ["Website in 3 Days", "Website in 3 Days"],
  ["Other", "Other"],
];

const ContactUsForm = () => {
  const [loc, setLoc] = useState("");
  const [loader, setLoader] = useState(false);
  const [host, setHost] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoc(`${position.coords.latitude},${position.coords.longitude}`);
    });
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    if (window) {
      setHost(window.location.href);
    }
  }, []);
  const saveContactUs = async (e) => {
    setLoader(true);
    const formData = new FormData(e.target);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/lead-generate/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("contact-us-form").reset();
        document.getElementById("success-msg-modal-btn").click();
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        document.getElementById("contact-us-form").reset();
        alert("Something went wrong, will keep in touch with you !");
      });
  };

  return (
    <>
      {loader && (
        <div
          id="spinner-div"
          className="pt-5 pt-5 d-flex align-items-center justify-content-center"
        >
          <div className="d-flex align-items-center">
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      )}

      <SuccessMessage />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveContactUs(e);
        }}
        id="contact-us-form"
      >
        <input type="hidden" value={host} name="source" />
        <input type="hidden" value={loc} name="location" />
        <input
          type="hidden"
          value={"0694b9b2-af29-4505-891c-c623dec03c5d"}
          name="access_key"
        />

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            name="first_name"
            required
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            name="last_name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="workEmail"
            placeholder="Work Email"
            name="email"
            required
          />
          <label htmlFor="workEmail">Work Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="hidden" value={phoneValue} name="phone" required />
          <PhoneInputWithCountrySelect
            // value={value}
            // onChange={setValue}
            onChange={(e) => setPhoneValue(e)}
            defaultCountry="IN"
            className="form-floating"
            numberInputProps={{
              className: "form-control",
              required: true,
              name: "phone",
              placeholder: "Phone",
            }}
            limitMaxLength={15}
            labels={"Phone Number"}
          />
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="What tasks would you like to solve?"
            id="note"
            name="note"
            required
          ></textarea>
          <label htmlFor="note">What tasks would you like to solve?</label>
        </div>
        <div className="form-floating mb-3">
          <select
            id="interested_in"
            name="interested_in"
            required
            className="form-control"
          >
            <option value={""}>Show Your Interest</option>
            {INTERESTED_IN_CHOICES?.map((choice, index) => {
              return (
                <option value={choice[0]} key={`iterested-choice-${index}`}>
                  {choice[1]}
                </option>
              );
            })}
          </select>
          <label htmlFor="interested_in">Interested In</label>
        </div>
        <div className="mb-3 mt-5">
          <CustomButton title={`Book Demo`} />
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
