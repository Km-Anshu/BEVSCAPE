"use client";
import React, { useEffect, useState } from "react";
import HeaderSection from "../header";
import Lottie from "lottie-react";
import chargerAnimation from "../../../public/assets/videos/Charger.json";
import Image from "next/image";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";
import SideNavHeader from "../sideNavHeader";

const ChargersPage = () => {

   // Cost slider
   const initializeSwiper = () => {
    const swiperInstance = new Swiper(`.swiper.mySwiper`, {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      modules: [Pagination, Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: false,
      grabCursor: true,
      followFinger: true,
      allowTouchMove: true,
      autoHeight: false,
    });

    // Set button visibility based on slide position
    swiperInstance.on("slideChange", () => {
      const isAtBeginning = swiperInstance.isBeginning;
      const isAtEnd = swiperInstance.isEnd;

      const prevButton = document.querySelector<HTMLElement>(
        ".swiper-button-prev"
      );
      const nextButton = document.querySelector<HTMLElement>(
        ".swiper-button-next"
      );

      if (prevButton) prevButton.style.display = isAtBeginning ? "none" : "block";
      if (nextButton) nextButton.style.display = isAtEnd ? "none" : "block";
    });

    // Set initial button state
    const prevButton = document.querySelector<HTMLElement>(
      ".swiper-button-prev"
    );
    const nextButton = document.querySelector<HTMLElement>(
      ".swiper-button-next"
    );

    if (prevButton) prevButton.style.display = "none";
    if (nextButton) nextButton.style.display = "block";
  };

  // Function to initialize the image slider
  const initializeImgSwiper = () => {
    new Swiper(`.swiper.ImgSwiper`, {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: false,
      grabCursor: true,
      followFinger: true,
      allowTouchMove: true,
      autoHeight: false,
    });
  };

  // Initialize both sliders on component mount
  useEffect(() => {
    setTimeout(() => {
      initializeSwiper();
      initializeImgSwiper();
    }, 0);
  }, []);


// const [activeSection, setActiveSection] = useState("moreAboutUsage");

  return (
    <div className="bg-gradient  h-[100vh] overflow-hidden">
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
            <h1 className="text-gradient font-eleven">HOW TO CHARGE YOUR EV</h1>
            <p className="text-white font-nine">
            Make your EV charging simple and seamless <br/> for everyday life.
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
        <ul className="flex items-center gap-4 pr-3 charging-sub-menu">
          <li className="text-white font-ten opacity-70">Public Charging</li>
          <li className="text-white font-ten  opacity-70">Home Charging</li>
        </ul> 
        <SideNavHeader />
        </div>
      </div>
      {/* <div className="flex justify-between w-[35.4rem] mx-auto mt-8">
        <div className="mileage-bg my-auto">
          <p
            className="text-white font-light font-ten py-3 px-[1.31rem] mb-2"
            style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
            onClick={() => setActiveSection("chargerType")}>
            Types of Chargers
          </p>
          <p
            className="text-white font-light font-ten py-3 px-[1.31rem] "
            style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
            onClick={() => setActiveSection("moreAboutUsage")}>
            More about Usage
          </p>
        </div>
        {activeSection === "chargerType" && (
        <div className="swiper mySwiper w-[70%]">
          <div className="swiper-wrapper flex">
            <div className="swiper-slide !flex items-center pl-6 pb-6 pt-4 card-gradient" style={{ display: "flex",border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1"}}>
              <div className="w-[24%] mr-6">
                <h2 className="text-white font-nine mb-2">
                  WALLBOX CHARGER:
                </h2>
                <p className="text-gradient font-nine mb-4">
                  The recommended mode of charging
                </p>
                <p
                  className="font-eight text-white font-light py-1 px-2"
                  style={{
                    background:
                      "linear-gradient(96.44deg, rgba(22, 189, 79, 0.6) -3.43%, rgba(22, 189, 79, 0) 104.48%)",
                  }}
                >
                  Complimentary with your car.
                </p>
              </div>
              <div className="mr-6" style={{ width: 60, height: 139 }}>
                <Lottie animationData={chargerAnimation} loop={true} />
              </div>
              <div className="w-[38%]" style={{width: 151, height: 140}}>
                <Image src="/assets/Images/iX1/ix1-charger-1.png" width={151} height={140} alt="model-banner" />
               <div className="bg-[#0065C2] relative bottom-[60px] p-[8px]">
                <h2 className="text-white font-nine font-light">Home & Office:</h2>
                <p className="text-white font-eight font-light">Charge overnight or during office hours with ease.Your BMW EV will always be ready for the drive ahead.</p>
               </div>
              </div>
            </div>
            <div className="swiper-slide flex items-center pl-6 pb-6 pt-4 card-gradient" style={{display: "flex",border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1"}}>
              <div className="w-[42%] mr-6">
                <h2 className="text-white font-nine mb-2">
                  PORTABLE <br/> CHARGER:
                </h2>
                <p className="text-gradient font-nine mb-4">
                Lightweight
                & <br/> easy to carry 
                </p>
                <p
                  className="font-eight text-white font-light py-1 px-2"
                  style={{
                    background:
                      "linear-gradient(96.44deg, rgba(22, 189, 79, 0.6) -3.43%, rgba(22, 189, 79, 0) 104.48%)",
                  }}
                >
                  Portable Charger supports upto 3.3 kW charging rate and can be plugged into a 16A (power) household socket anywhere. 
                </p>
              </div>
              <div className="w-[65%] flex pr-5">
                <Image src="/assets/Images/iX1/ix1-PortableCharger.png" width={103} height={137} alt="model-banner" />
               <div className="bg-[#0065C2] p-[9px]" style={{width: 103, height: 137}}>
                <h2 className="text-white font-nine font-light mb-1">Charge Anywhere:</h2>
                <p className="text-white font-eight font-light">In emergency situations where a Wallbox charger or DC fast charger isn&apos;t available, you&apos;ll always have this in your boot.</p>
               </div>
              </div>
              <div className="flex  justify-end items-center gap-2 pt-2 pr-1 fixed right-[56px] bottom-[90px]">
            <p className=" flex justify-end underline text-white font-ten">
              Swipe for Portable Charger{" "}
            </p>
            <span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3666 0.572388H10.0029L13.6964 4.0853H0.621094L0.628894 5.06686H13.7042L10.0107 8.57239H11.3743L15.6211 4.55764L11.3666 0.572388Z"
                  fill="#F2F2F2"
                />
              </svg>
            </span>
          </div>
            </div>
          </div>
          <span className="swiper-button-container flex absolute w-full lgdesktop:right-[-395px] lgdesktop:bottom-[77px] lg:right-[-350px] lg:bottom-0 tab:right-[-239px] tab:bottom-[-9px] ">
            <div className="swiper-button-next custom after:relative after:top-[-83px] after:right-[-12px] !z-20 after:text-[22px]!important"></div>
            <div className="swiper-pagination z-10 custom bottom-[149px]"></div>
            <div className="swiper-button-prev custom after:relative after:bottom-[83px] after:left-[-2px] after:text-[22px]!important"></div>
          </span>
        </div>
        )}
        {activeSection === "moreAboutUsage" && (
          <div className="w-[70%] overflow-hidden mx-auto">
           <Image className="overflow-hidden" src="/assets/Images/iX1/moreAboutUsage.png" width={1171} height={448} alt="model-banner"  style={{overflow:"hidden", maxWidth: "55rem",width:"100%",position: "absolute",top: "65%",left: "50%",transform: "translate(-50%, -50%)"}}/>
          </div>
        )}
       
      </div> */}

      <div className="flex justify-between w-[35.4rem] mx-auto mt-8">
      <div className="mileage-bg my-auto">
          <p
            className="text-white font-light font-ten py-3 px-[1.31rem] mb-2"
            style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
           >
           Infrastructure in India
          </p>
          <p
            className="text-white font-light font-ten py-3 px-[1.31rem] "
            style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
            >
            Usage
          </p>
          <p
            className="text-white font-light font-ten py-3 px-[1.31rem] mb-2"
            style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
          >
            BMW Powered Vacations
          </p>
        </div>
        <div className="swiper mySwiper w-[70%]">
          <div className="swiper-wrapper flex">
            <div className="swiper-slide !flex items-center pl-6 pb-6 pt-4 card-gradient" style={{ display: "flex",border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1"}}>
              <div className="">
                <div className="mr-6">
                  <h2 className="font-ten text-white font-normal">DRIVE FEARLESSLY TO YOUR FAVOURITE VACATION HOMES.</h2>
                  <p className="text-gradient font-nine">BMW’s exclusive Destination Chargers in vacation homes, shopping centers and resorts ensure worry-free journeys and seamless recreation.</p>
                  </div>
                  <div className="w-[24%] mr-6 border-gradient p-[6px]">
                    <h3 className="text-gradient text-[1.2rem]">250+</h3>
                    <p className="text-white font-nine">Smart AC wallbox chargers have been installed by BMW across 120 locations in India as of November 2024</p>
                    </div>
                    <div className="swiper ImgSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <p className="font-nine text-white">Installed At</p>
                          <Image src="/assets/Images/iX1/installation-1.png" width={90} height={88} alt="model-banner" />
                          <p>High-End Malls</p>
                        </div>
                        <div className="swiper-slide">
                          <p className="font-nine text-white">Installed At</p>
                          <Image src="/assets/Images/iX1/installation-1.png" width={90} height={88} alt="model-banner" />
                          <p>High-End Malls</p>
                        </div>
                        <div className="swiper-slide">
                          <p className="font-nine text-white">Installed At</p>
                          <Image src="/assets/Images/iX1/installation-1.png" width={90} height={88} alt="model-banner" />
                          <p>High-End Malls</p>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="swiper-slide flex items-center pl-6 pb-6 pt-4 card-gradient" style={{display: "flex",border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1"}}>
              <div className="w-[42%] mr-6">
                <h2 className="text-white font-nine mb-2">
                  PORTABLE <br/> CHARGER:
                </h2>
                <p className="text-gradient font-nine mb-4">
                Lightweight
                & <br/> easy to carry 
                </p>
                <p
                  className="font-eight text-white font-light py-1 px-2"
                  style={{
                    background:
                      "linear-gradient(96.44deg, rgba(22, 189, 79, 0.6) -3.43%, rgba(22, 189, 79, 0) 104.48%)",
                  }}
                >
                  Portable Charger supports upto 3.3 kW charging rate and can be plugged into a 16A (power) household socket anywhere. 
                </p>
              </div>
              <div className="w-[65%] flex pr-5">
                <Image src="/assets/Images/iX1/ix1-PortableCharger.png" width={103} height={137} alt="model-banner" />
               <div className="bg-[#0065C2] p-[9px]" style={{width: 103, height: 137}}>
                <h2 className="text-white font-nine font-light mb-1">Charge Anywhere:</h2>
                <p className="text-white font-eight font-light">In emergency situations where a Wallbox charger or DC fast charger isn&apos;t available, you&apos;ll always have this in your boot.</p>
               </div>
              </div>
              <div className="flex  justify-end items-center gap-2 pt-2 pr-1 fixed right-[56px] bottom-[90px]">
            <p className=" flex justify-end underline text-white font-ten">
              Swipe for Portable Charger{" "}
            </p>
            <span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3666 0.572388H10.0029L13.6964 4.0853H0.621094L0.628894 5.06686H13.7042L10.0107 8.57239H11.3743L15.6211 4.55764L11.3666 0.572388Z"
                  fill="#F2F2F2"
                />
              </svg>
            </span>
          </div>
            </div>
          </div>
          <span className="swiper-button-container flex absolute w-full lgdesktop:right-[-395px] lgdesktop:bottom-[77px] lg:right-[-350px] lg:bottom-0 tab:right-[-239px] tab:bottom-[-9px] ">
            <div className="swiper-button-next custom after:relative after:top-[-83px] after:right-[-12px] !z-20 after:text-[22px]!important"></div>
            <div className="swiper-pagination z-10 custom bottom-[149px]"></div>
            <div className="swiper-button-prev custom after:relative after:bottom-[83px] after:left-[-2px] after:text-[22px]!important"></div>
          </span>
        </div>
        </div>
    </div>
  );
};

export default ChargersPage;
