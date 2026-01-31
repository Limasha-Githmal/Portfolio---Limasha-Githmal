"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      {/* Profile Image */}
      <div>
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </div>

      {/* Greeting */}
      <h3 className="flex items-end font-Ovo md:text-2xl mb-3">
        Hi! I'm Limasha Githmal
        <Image src={assets.hand_icon} alt="hand icon" className="w-6 ml-2" />
      </h3>

      {/* Headline */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        A Professional Full Stack Software Developer
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-Ovo">
        I’m a Full Stack Software Developer and undergraduate at the University of Westminster, UK. I build responsive and efficient web applications, combining creativity with clean code to deliver impactful digital solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-white transition"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header;
