"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHover = (index : number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="header-bg py-3 px-12">
      <div className="flex justify-between items-center max-w-[83.5rem] mx-auto my-0">
        <div>
          <Image
            src="/assets/Images/header-logo.svg"
            width={127}
            height={25}
            alt="menubar"
          />
        </div>
        <div onClick={toggleMenu} className="cursor-pointer">
          <Image
            src="/assets/Images/hamburger.png"
            width={27}
            height={27}
            alt="menubar"
          />
        </div>
        <div
          className={`bg-gradient fixed z-20 top-0 right-0 h-full bg-white transition-transform transform  ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="close-icon cursor-pointer d-flex justify-items-end pr-5 pt-5 "
            onClick={toggleMenu}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.526123"
                y="0.0796509"
                width="27.4739"
                height="27.4739"
                fill="url(#paint0_linear_75_1228)"
                fillOpacity="0.15"
              />
              <rect
                x="0.946515"
                y="0.500043"
                width="26.6331"
                height="26.6331"
                stroke="url(#paint1_linear_75_1228)"
                strokeOpacity="0.6"
                strokeWidth="0.840785"
              />
              <path
                d="M10.4589 17.6209L18.0675 10.0123"
                stroke="white"
                strokeWidth="1.35"
                strokeLinecap="round"
              />
              <path
                d="M10.4589 10.0123L18.0675 17.6209"
                stroke="white"
                strokeWidth="1.35"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_75_1228"
                  x1="0.526123"
                  y1="13.8166"
                  x2="28"
                  y2="13.8166"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_75_1228"
                  x1="14.2631"
                  y1="-6.20514"
                  x2="14.2631"
                  y2="34.6411"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="0.48" stopColor="white" stopOpacity="0.2" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <ul className="pt-6 pl-7 pr-7 relative">
            {[
              "HomePage",
              "Savings with an EV",
              "How to Charge your EV",
              "Relax. we care.",
              "Testimonials",
              "Contribute to Zero Emissions",
            ].map((item, index) => (
              <li
                key={index}
                className={`hover-text text-white cursor-pointer pb-5 relative mobile:text-[0.625rem] tablet:text-base ${
                  activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
             >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
