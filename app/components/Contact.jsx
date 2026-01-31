"use client";
import React from "react";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-16 px-[12%] scroll-mt-20 bg-gray-100"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        project ideas, please reach out using the form below.
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mbdyezag"
        method="POST"
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Write your message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-900 transition font-Ovo"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
