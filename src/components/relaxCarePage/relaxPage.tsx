"use client";

import React, { useState } from "react";
import HeaderSection from "../header";
import Image from "next/image";
import SideNavHeader from "../sideNavHeader";

const RelaxPage = () => {
  const [activeSection, setActiveSection] = useState("warranty");


  return (
    <div className="bg-gradient h-[100vh] overflow-hidden">
      <div className="header-bg flex justify-between items-center px-8 py-2">
        <div className="flex items-center">
          <div className="flex">
            <Image
              src="/assets/Images/header-logo.svg"
              width={127}
              height={25}
              alt="menubar"
            />

            <svg
              className="mx-2"
              width="2"
              height="52"
              viewBox="0 0 2 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M1.11584 0L1.11585 52"
                stroke="url(#paint0_linear_268_751)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_268_751"
                  x1="1.61584"
                  y1="-2.18557e-08"
                  x2="1.61585"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.495" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h1 className="text-gradient font-eleven">RELAX WE CARE</h1>
            <p className="text-white font-nine">
              Proactive service execellence, tailored for your <br /> peace of
              mind.
            </p>
          </div>
        </div>
        <SideNavHeader />
      </div>
      <div className="flex justify-between w-[38.4rem] mx-auto mt-8">
        <div className="w-[24%] mileage-bg my-auto ">
        <p
          onClick={() => setActiveSection("warranty")}
          className={`cursor-pointer text-white font-light font-ten py-[6px] text-center px-3 mb-2 ${
            activeSection === "warranty" ? "bg-[#00427B]" : ""
          }`}
          style={{
            border: "0.75px solid rgba(255, 255, 255, 0.2)",
            width: 130,
            fontFamily: "BMWLight",
          }}
        >
            Warranty Coverage / Service Packages
          </p>
          <p
          onClick={() => setActiveSection("roadside")}
          className={`cursor-pointer text-white font-light font-ten py-[6px] text-center px-3 mb-2 ${
            activeSection === "roadside" ? "bg-[#00427B]" : ""
          }`}
          style={{
            border: "0.75px solid rgba(255, 255, 255, 0.2)",
            width: 130,
            fontFamily: "BMWLight",
          }}
        >
            Roadside Assistance / Charging Concierge
          </p>
          <p
          onClick={() => setActiveSection("finance")}
          className={`cursor-pointer text-white font-light font-ten py-[6px] text-center px-3 ${
            activeSection === "finance" ? "bg-[#00427B]" : ""
          }`}
          style={{
            border: "0.75px solid rgba(255, 255, 255, 0.2)",
            width: 130,
            fontFamily: "BMWLight",
          }}
        >
            BMW Smart <br /> Finance
          </p>
        </div>
        
        <div className="w-[73%]">
        {activeSection === "warranty" && (
          <div className="flex items-center card-gradient  border-gradient py-3 pl-3 pr-1" style={{height:"180px"}}>
            <div className="w-[60%]">
              <h1 className="text-white font-light font-ten mb-1">
                BMW Warranty Coverage*
              </h1>
              <Image
                src="/assets/Images/iX1/warranty-coverage.png"
                width={137}
                height={68}
                alt="model-banner"
              />
              <div className="flex pt-1 gap-3">
                <div>
                  <h2 className="text-white font-eight font-light">
                    Standard Warranty
                  </h2>
                  <p className="text-gradient font-nine font-normal pb-1">
                    2 years
                  </p>
                  <h2 className="text-white font-eight font-light">
                    Extended Warranty Upto
                  </h2>
                  <p className="text-gradient font-nine font-normal pb-1">
                    10 years
                  </p>
                </div>
                <div className="">
                  <svg
                    width="2"
                    height="50"
                    viewBox="0 0 2 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M0.72522 0.863647L0.725222 49.4393"
                      stroke="url(#paint0_linear_75_1032)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_75_1032"
                        x1="1.22522"
                        y1="0.863647"
                        x2="1.22522"
                        y2="49.4393"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.495" stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-eight font-light">
                    Battery Warranty
                  </h3>
                  <p className="text-gradient font-nine font-normal">
                    8 years or <br/> 1,60,000 km
                  </p>
                  <p className="text-gradient font-eight font-light">
                    whichever comes first
                  </p>
                </div>
              </div>

              <p className="text-white opacity-70 font-seven">
                *Terms and conditions applicable
              </p>
            </div>
            <div className="px-3">
              <svg
                width="2"
                height="167"
                viewBox="0 0 2 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M1.41309 0.556396L1.41308 166.187"
                  stroke="url(#paint0_linear_75_1033)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_75_1033"
                    x1="1.91309"
                    y1="0.556397"
                    x2="1.91308"
                    y2="166.187"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.495" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="">
              <h1 className="text-white font-light font-ten mb-1">
                BMW Service Packages*
              </h1>
              <Image
                src="/assets/Images/iX1/service-packages.png"
                width={137}
                height={68}
                alt="model-banner"
              />
              <div>
                <p className="text-gradient font-nine font-light pt-1 w-[65%]">
                  Customizable packages covering servicing and repair costs, for{" "}
                </p>
                <div className="flex items-baseline h-[35px]">
                  <svg
                    width="102"
                    height="4"
                    viewBox="0 0 102 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.6"
                      d="M7.04443 1.86646L83.8711 1.86646"
                      stroke="url(#paint0_linear_75_1011)"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.6"
                      d="M97.5908 3.42285L101.656 3.42285V0.379813L97.5908 0.379813V3.42285Z"
                      fill="#00427B"
                    />
                    <path
                      opacity="0.6"
                      d="M91.7841 3.42285L95.8494 3.42285V0.379813L91.7841 0.379813V3.42285Z"
                      fill="#00427B"
                    />
                    <path
                      opacity="0.6"
                      d="M85.9773 3.42285L90.0425 3.42285V0.379813L85.9773 0.379813V3.42285Z"
                      fill="#00427B"
                    />
                    <path
                      opacity="0.6"
                      d="M0.873435 3.42285L4.9386 3.42285V0.379813L0.873435 0.379813V3.42285Z"
                      fill="#00FFD0"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_75_1011"
                        x1="-nan"
                        y1="-nan"
                        x2="-nan"
                        y2="-nan"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.5"
                          stopColor="#0B6DB6"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="0.5687"
                          stopColor="#0A7EB9"
                          stopOpacity="0.6632"
                        />
                        <stop
                          offset="0.704"
                          stopColor="#06A9C1"
                          stopOpacity="0.7877"
                        />
                        <stop
                          offset="0.8915"
                          stopColor="#01EECD"
                          stopOpacity="0.9602"
                        />
                        <stop offset="0.9347" stopColor="#00FFD0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="pl-1">
                    <p className="text-gradient font-nine font-normal">
                      3 years or <br /> 30,000 km
                    </p>
                    <p className="text-gradient font-eight font-light">
                      whichever comes first
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
         {activeSection === "roadside" && (
        <div className="flex items-center gap-2 card-gradient  border-gradient pb-0 pl-3 pr-1" style={{height:"180px"}}>
            <div className="w-[46%]">
              <h1 className="text-white font-light font-ten mb-1 pb-1">
                BMW Roadside Assistance*
              </h1>
              <div className="flex">
               
                  <p className="text-gradient font-nine pr-2">
                  Portable HVB Charging, on-site puncture repair and other solutions at the location of the breakdown (Currently operational in 
                    5 cities).{" "}
                  </p>
               
                <Image
                  src="/assets/Images/iX1/roadside-assistance.png"
                  width={108}
                  height={122}
                  alt="model-banner"
                />
              </div>
            </div>
            <div className="px-1">
              <svg
                width="2"
                height="167"
                viewBox="0 0 2 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M1.41309 0.556396L1.41308 166.187"
                  stroke="url(#paint0_linear_75_1033)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_75_1033"
                    x1="1.91309"
                    y1="0.556397"
                    x2="1.91308"
                    y2="166.187"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.495" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="w-[46%]">
              <h1 className="text-white font-light font-ten mb-1 pb-1">
                Charging Concierge
              </h1>
              <div className="flex">
                <div>
                  
                  <p className="text-gradient font-nine pr-2">BMW’s team covers all your EV needs, from trip
                  planning with optimized routes to reserving chargers, making it</p>
                  <p className="text-white font-ten pt-2">An Industry<br/>first.</p>
                </div>
              <Image
                src="/assets/Images/iX1/charging-concierge.png"
                width={108}
                height={122}
                alt="model-banner"
              />
              </div>
              
            </div>
          </div>
         )}
          {activeSection === "finance" && (
           <div className="border-gradient pt-3 px-5 pb-4" style={{height:"180px"}}>
          <h2 className="text-white font-light font-ten mb-1 pb-1">
            BMW Flex-Assured Finance Plan
          </h2>
          <div className="flex">
            <Image
              src="/assets/Images/iX1/flex-assured.png"
              width={188}
              height={132}
              alt="model-banner"
            />
            <div className="my-auto pl-5">
              <h2 className="text-white font-light font-ten">
                Easy and Convenient
              </h2>
              <p className="text-gradient font-nine pb-3">
                Financing options for your car with BMW Financial Services.
              </p>

              <button
                className="flex p-3 items-center gap-2 text-white font-nine border-gradient"
                style={{
                  background:
                    "linear-gradient(90deg, #1A5C80 0%, #15425A 55.15%, #1D668D 105.04%)",
                }}
              >
                EXPLORE NOW{" "}
                <svg
                  className=""
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1614 0.216919H8.95958L12.2147 3.53408H0.691162L0.698036 4.46094H12.2216L8.96644 7.77112H10.1682L13.911 3.98009L10.1614 0.216919Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default RelaxPage;
