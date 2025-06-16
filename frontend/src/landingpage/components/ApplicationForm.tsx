"use client";

import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  revenue: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

export default function ApplicationForm() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  interface ApplicationFormValues {
    name: string;
    email: string;
    company: string;
    revenue: string;
    phone: string;
  }

  const handleSubmit = async (
    values: ApplicationFormValues,
    { resetForm, setSubmitting }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setIsSubmitting(true);

    try {
      const nameParts = values.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        location: null,
        interested_in: "Other",
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        first_name: firstName,
        last_name: lastName,
        email: values.email,
        phone: `+${values.phone}`,
        company: values.company,
        revenue: values.revenue,
        note: `Application from ${values.company} with monthly revenue: ${values.revenue}`
      };

      console.log('Payload:', payload);

      const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API}/?access_key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setShowSuccess(true);
        resetForm();

        setTimeout(() => {
          setShowSuccess(false);
          setShowForm(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  
  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Success!</h2>
          <p className="text-white/80 mb-6">Your application has been submitted successfully. We&apos;ll get back to you soon!</p>
          <button
            onClick={() => {
              setShowSuccess(false);
              setShowForm(false);
            }}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 z-50 group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 animate-bounce shadow-lg"
      >
        <span className="flex items-center gap-2">
          Apply Now
          <div className="transform transition-transform duration-300 group-hover:translate-x-1">→</div>
        </span>
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Application Form</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/60 cursor-pointer hover:text-white text-xl transition-colors duration-200 p-1"
              >
                ✕
              </button>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                company: "",
                revenue: "",
                phone: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1 md:col-span-2">
                      <label className="block text-white/80 text-sm font-medium">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-white/80 text-sm font-medium">Full Name</label>
                      <input
                        name="name"
                        placeholder="Enter your full name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-white/80 text-sm font-medium">Company Name</label>
                      <input
                        name="company"
                        placeholder="Enter your company name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm"
                      />
                      <ErrorMessage name="company" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-white/80 text-sm font-medium">Monthly Revenue</label>
                      <input
                        name="revenue"
                        placeholder="e.g. ₹20L"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.revenue}
                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm"
                      />
                      <ErrorMessage name="revenue" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label className="block text-white/80 text-sm font-medium">Phone Number</label>
                      <PhoneInput
                        country={"in"}
                        enableSearch
                        value={formik.values.phone}
                        onChange={(phone) => formik.setFieldValue("phone", phone)}
                        inputStyle={{
                          width: "100%",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: "0.5rem",
                          color: "white",
                          padding: "12px",
                          fontSize: "14px",
                          paddingLeft: "56px", 
                        }}
                        containerStyle={{
                          width: "100%",
                        }}
                        buttonStyle={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        dropdownStyle={{
                          backgroundColor: "#fff",
                          color: "#000",
                          borderRadius: "0.5rem",
                          fontSize: "14px",
                        }}
                        searchStyle={{
                          color: "#000",
                        }}
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-400 text-sm" />
                    </div>

                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={formik.submitForm}
                      disabled={isSubmitting}
                      className="group px-8 py-3 cursor-pointer bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        <div className="transform transition-transform duration-300 group-hover:rotate-12">✓</div>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}