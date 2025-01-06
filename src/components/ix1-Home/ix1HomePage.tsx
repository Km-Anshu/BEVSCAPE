
"use client";
import React from "react";
import HeaderSection from "../header";
import Image from "next/image";
// import Lottie from "lottie-react";
// import chargerAnimation from '../../../public/assets/videos/Charger.json'; 

const ix1HomePage = () => {
  return (
    <div className="bg-gradient h-[100vh] overflow-hidden">
      <HeaderSection />
      <div className="flex max-w-[83.5rem] mx-auto mt-10">
        <div className="model-bg-img landscape:block relative z-0">
          <Image
            src="/assets/Images/iX1/ix1-home-banner.png"
            width={518}
            height={211}
            alt="model-banner"
          />
        </div>
        {/* <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={chargerAnimation} loop={true} />
    </div> */}
        <div>
        <ul className="absolute right-12 z-10">
            {[
              "Savings with an EV",
              "How to Charge your EV",
              "Relax. We care.",
              "Testimonials",
              "Contribute to Zero Emissions",
            ].map((text, index) => (
              <li
                key={index}
                className="py-2 px-[1.1rem] mb-2 text-white text-center text-[0.635rem]"
                style={{
                    background:" linear-gradient(90deg, rgba(8, 161, 211, 0.3) 0%, rgba(29, 119, 217, 0.3) 100%)",
                  border: "1.2px solid",
                  borderImageSource:
                    "linear-gradient(93.4deg, rgba(255, 255, 255, 0.5) -10.99%, rgba(255, 255, 255, 0.125) 13.28%, rgba(255, 255, 255, 0.125) 74.26%, rgba(255, 255, 255, 0.5) 117.5%)",
                  borderImageSlice: 1,
                }}
               >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ix1HomePage;
