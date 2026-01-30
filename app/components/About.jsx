"use client";
import React from "react";
import Image from "next/image";
import { FaCode, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";

// Devicons for IDEs
import { DiVisualstudio, DiAndroid, DiIntellij } from "react-icons/di";

// Simple Icons for tools
import { SiFigma, SiFirebase, SiGit } from "react-icons/si";

function About() {
  return (
    <div id="about" className="w-full py-10 px-[12%] scroll-mt-20">
      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
                src="/assets/user-image.png"  // path relative to public/
                alt="user"
                width={400}
                height={400}
                className="w-full rounded-3xl"
                priority
                />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a Full Stack Software Developer and an undergraduate at the
            University of Westminster, UK, with a strong interest in building
            modern web and mobile applications. I am a curious learner,
            self-motivated individual, and a team player who enjoys exploring new
            technologies and creating user-friendly digital solutions through
            clean and efficient code.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <InfoCard
              icon={<FaCode />}
              title="Languages"
              description="React.js, Next.js, Node.js , Flutter, Python, Java"
            />
            <InfoCard
              icon={<FaGraduationCap />}
              title="Education"
              description="B.Eng in Software Engineering"
            />
            <InfoCard
              icon={<FaProjectDiagram />}
              title="Projects"
              description="Built more than 5 projects"
            />
          </ul>

          {/* Tools */}
          <h3 className="mt-14 mb-6 text-2xl font-semibold">Tools I Use</h3>

          <div className="flex flex-wrap gap-4">
            <Tool icon={<DiVisualstudio />} name="VS Code" color="#007ACC" />
            <Tool icon={<DiAndroid />} name="Android Studio" color="#3DDC84" />
            <Tool icon={<DiIntellij />} name="IntelliJ IDEA" color="#000000" />
            <Tool icon={<SiFigma />} name="Figma" color="#F24E1E" />
            <Tool icon={<SiFirebase />} name="Firebase" color="#FFCA28" />
            <Tool icon={<SiGit />} name="Git" color="#F05032" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/* ---------------- Components ---------------- */

const InfoCard = ({ icon, title, description }) => (
  <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500">
    <div className="text-2xl text-gray-700 mt-2">{icon}</div>
    <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </li>
);

const Tool = ({ icon, name, color }) => (
  <div className="flex items-center gap-3 px-4 py-2 border rounded-lg hover:bg-lightHover transition cursor-default">
    <span className="text-2xl" style={{ color: color }}>
      {icon}
    </span>
    <span className="text-sm font-medium">{name}</span>
  </div>
);
