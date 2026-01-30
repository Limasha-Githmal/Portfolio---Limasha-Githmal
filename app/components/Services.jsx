"use client";
import React from "react";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="w-full py-16 px-[12%] scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer full-stack development services to build modern, scalable, and
        user-friendly digital experiences. From responsive websites to complete
        mobile applications, I focus on clean UI, strong performance, and
        reliable functionality tailored to your goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10">
        <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur">
          <div className="text-4xl text-blue-600 mb-4">
            <FaLaptopCode />
          </div>
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-600 font-Ovo">
            I design and develop responsive, high-performance websites using
            modern technologies like React, Next.js, and Tailwind. My focus is
            on clean UI and seamless user experience across all devices.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur">
          <div className="text-4xl text-green-600 mb-4">
            <FaMobileAlt />
          </div>
          <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
          <p className="text-gray-600 font-Ovo">
            I build Android mobile applications with smooth UI, fast
            performance, and clean architecture. I focus on creating reliable
            apps that give users a seamless mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
