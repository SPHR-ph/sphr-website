"use client";
import React, { useState } from "react";
import { contactsInfo } from "@constants";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // use nextjs API routes here for backend integration
    // or use emailjs or similar service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center m-[15px]">
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl mx-auto gap-8">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold mb-2 text-cyan-700 text-left">{contactsInfo.heading}</h1>
          <p className="text-base text-gray-600 mb-6 text-left">{contactsInfo.subtext}</p>
        </div>
        <form className="md:w-1/2 w-full bg-white rounded-lg shadow p-6 flex flex-col gap-4 items-start" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-1 text-left font-medium text-gray-700">{contactsInfo.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={contactsInfo.namePlaceholder}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="mb-1 text-left font-medium text-gray-700">{contactsInfo.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={contactsInfo.emailPlaceholder}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="company" className="mb-1 text-left font-medium text-gray-700">{contactsInfo.companyLabel} <span className="text-gray-400"></span></label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder={contactsInfo.companyPlaceholder}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form.company}
            onChange={handleChange}
          />
          <label htmlFor="details" className="mb-1 text-left font-medium text-gray-700">{contactsInfo.detailsLabel}</label>
          <textarea
            id="details"
            name="details"
            placeholder={contactsInfo.detailsPlaceholder}
            className="border border-gray-300 rounded px-4 py-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
            value={form.details}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white rounded px-4 py-2 font-semibold hover:bg-cyan-700 transition cursor-pointer mt-2"
          >
            {contactsInfo.buttonText}
          </button>
          {submitted && (
            <p className="text-green-600 mt-2">{contactsInfo.thankYou}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
