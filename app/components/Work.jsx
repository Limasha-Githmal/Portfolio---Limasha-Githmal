"use client";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample project data
const projectsData = [
  {
    name: "Portfolio Website",
    category: "Web Development",
    image: "/assets/work-1.png",
    link: "https://your-portfolio.vercel.app",
  },
  {
    name: "Geo Locator App",
    category: "Mobile App",
    image: "/assets/work-2.png",
    link: "https://geo-app.vercel.app",
  },
  {
    name: "Photography Site",
    category: "Web Design",
    image: "/assets/work-3.png",
    link: "https://photography-site.vercel.app",
  },
  {
    name: "UI/UX Dashboard",
    category: "Web Application",
    image: "/assets/work-4.png",
    link: "https://dashboard.vercel.app",
  },
  {
    name: "E-commerce App",
    category: "Web Development",
    image: "/assets/work-5.png",
    link: "https://ecommerce.vercel.app",
  },
  {
    name: "Travel Booking App",
    category: "Mobile App",
    image: "/assets/work-6.png",
    link: "https://travel-app.vercel.app",
  },
];

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  // Decide which projects to show
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div id="work" className="w-full py-16 px-[12%] scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My latest work</h4>
      <h2 className="text-center text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I build web and mobile applications that are user-friendly, efficient, 
        and visually appealing, showcasing my full-stack development skills 
        and passion for creating practical digital solutions.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsToShow.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Background image */}
            <div
              className="w-full h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-white text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-200">{project.category}</p>
              <FaExternalLinkAlt className="mt-3 text-white text-lg" />
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {projectsData.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
