import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full mt-20 px-[12%] pb-10">

      {/* Logo + Email */}
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-40 mx-auto mb-2" />

        <p className="text-gray-500 font-Ovo text-sm flex items-center justify-center gap-2">
          <MdEmail className="text-xl" />
          limashagithmal@gmail.com
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm font-Ovo text-gray-600 gap-4">

        {/* Left */}
        <p>© {new Date().getFullYear()} Limasha Githmal, All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            className="transition"
            style={{ color: "#181717" }}
          >
            <FaGithub className="hover:scale-110 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="transition"
            style={{ color: "#0A66C2" }}
          >
            <FaLinkedin className="hover:scale-110 transition" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="transition"
            style={{ color: "#E1306C" }}
          >
            <FaInstagram className="hover:scale-110 transition" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="transition"
            style={{ color: "#1877F2" }}
          >
            <FaFacebook className="hover:scale-110 transition" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
