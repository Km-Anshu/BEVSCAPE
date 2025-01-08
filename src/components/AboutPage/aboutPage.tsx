"use client";
import React from "react";
// import HeaderSection from "../header";
import Image from "next/image";
import SideNavHeader from "../sideNavHeader";

const aboutPage = () => {
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
        <h1 className="text-gradient font-eleven">ABOUT BEVSCAPE</h1>
      </div>
</div>
      <SideNavHeader/>
      </div>
      <div className="w-[35.4rem] mx-auto mt-6">
        <div className="flex justify-between">
          <div className="w-[47%] border-gradient p-[6px]">
            <Image
              src="/assets/Images/iX1/about.png"
              width={252}
              height={170}
              alt="model-banner"
            />
          </div>
          <div className="w-[49%]">
            <p className="text-white font-light font-ten my-3" style={{fontFamily:"BMWLight"}}>
              BEVScape is your gateway to electric mobility in India.
            </p>
            <p className="text-white font-light font-ten" style={{fontFamily:"BMWLight"}}>
              As a pioneer of BEVs with the broadest lineup, BMW provides
              insights into charging, costs, environmental impact, and offers
              interactive planning tools—ensuring you make informed decisions
              while enjoying the sheer driving pleasure of a BMW.
            </p>
            <button
              className="flex items-center font-ten text-white py-2 px-5 mt-5 card-gradient"
              style={{
                border:"1px solid",
                borderImageSource: "linear-gradient(93.4deg, rgba(255, 255, 255, 0.5) -10.99%, rgba(255, 255, 255, 0.125) 13.28%, rgba(255, 255, 255, 0.125) 74.26%, rgba(255, 255, 255, 0.5) 117.5%)",
                borderImageSlice: "1",
                fontFamily:"BMWLight"
              }}
            >
              Visit the Official BMW India website{" "}
              <svg
                className="pl-1"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.01905 0.479248H7.93024L10.8794 3.28418H0.439209L0.445437 4.06791H10.8856L7.93645 6.86694H9.02526L12.4161 3.66132L9.01905 0.479248Z"
                  fill="#F2F2F2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
