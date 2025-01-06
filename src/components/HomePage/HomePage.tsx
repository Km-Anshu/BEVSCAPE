"use client";

import React, { useState } from "react";
import HeaderSection from "../header";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

const HomePage = () => {

  const costOwnershipRef = useRef(null);
  const costHeadRef =useRef<HTMLHeadingElement[]>([]);
  // const costsvgRef = useRef<SVGSVGElement[]>([]);
  // const numberRef = useRef<HTMLParagraphElement[]>([]);
  // const mileageDivRef = useRef<HTMLDivElement | null>(null);
  const runningCostSvgRef = useRef<SVGSVGElement[]>([]);
  const runningCostNumberRef = useRef<HTMLParagraphElement[]>([]);
  const maintenanceCostSvgRef = useRef<SVGSVGElement[]>([]);
  const maintenanceCostNumberRef = useRef<HTMLParagraphElement[]>([]);
  const mileageDivRef = useRef<HTMLDivElement | null>(null);


  const evTextRef = useRef<HTMLParagraphElement | null>(null);
  const petrolTextRef = useRef<HTMLParagraphElement | null>(null);
  const dieselTextRef = useRef<HTMLParagraphElement | null>(null);

  const maintenanceEvTextRef = useRef<HTMLParagraphElement | null>(null);
  const maintenancePetrolTextRef = useRef<HTMLParagraphElement | null>(null);
  const maintenanceDieselTextRef = useRef<HTMLParagraphElement | null>(null);

  const [selectedMileage, setSelectedMileage] = useState(8000);
  const [evValue, setEvValue] = useState("1,20,989");
  const [petrolValue, setPetrolValue] = useState("1,50,000");
  const [dieselValue, setDieselValue] = useState("1,30,000");

  // const numberRef = useRef<HTMLParagraphElement[]>([]);

  const handleMileageClick = (mileage:number) => {
    if (mileage === selectedMileage) {
      return; 
    }
    gsap.to([...runningCostSvgRef.current, ...runningCostNumberRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Update values after fade out
        setSelectedMileage(mileage);
    switch (mileage) {
      case 8000:
        setEvValue("1,20,989");
        setPetrolValue("1,50,000");
        setDieselValue("1,30,000");
        break;
      case 10000:
        setEvValue("1,50,000");
        setPetrolValue("1,80,000");
        setDieselValue("1,60,000");
        break;
      case 12000:
        setEvValue("1,80,000");
        setPetrolValue("2,10,000");
        setDieselValue("1,90,000");
        break;
      default:
        break;
    }
    gsap.to([...runningCostSvgRef.current, ...runningCostNumberRef.current], {
      opacity: 1,
      duration: 0.5,
    });
  },
});
  };

//   useEffect(() => {
//     if (mileageDivRef.current) {
     
//       gsap.fromTo(
//         mileageDivRef.current,
//         { opacity: 0, y: 50 }, 
//         { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } 
//       );
//     }

//     gsap.fromTo(
//       costOwnershipRef.current,
//       { opacity: 0, x: -100 }, 
//       { opacity: 1, x: 0, duration: 1.5 } 
//     );
  
//     //Cost Heading
//     costHeadRef.current.forEach((head) => {
//       gsap.fromTo(
//         head,
//         { opacity: 0},
//         { opacity: 1, duration: 4, ease: "power2.out" }
//       );
//     });


// //Graph SVG
//   costsvgRef.current.forEach((svg) => {
//     gsap.fromTo(
//       svg,
//       { scaleX: 0 },
//       { scaleX: 1, duration: 1.5, transformOrigin: "left", ease: "power1.out" }
//     );
//   });

//   //Cost Pricing
//   numberRef.current.forEach((numberElement) => {
//     const targetValue = parseInt(
//       numberElement.getAttribute("data-value")?.replace(/,/g, "") || "0",
//       10
//     );

//     const startValue = Math.floor(targetValue / 12);
//     if (numberElement) {
//       numberElement.textContent = `₹${startValue.toLocaleString("en-IN")}`;
//     }

//     // Animate number counting
//     gsap.fromTo(
//       numberElement,
//       { textContent: startValue },
//       {
//         textContent: targetValue,
//         duration: 2,
//         snap: { textContent: 1 },
//         ease: "power1.inOut",
//         onUpdate: function () {
//           const currentValue = Math.floor(Number(this.targets()[0].textContent));
//           numberElement.textContent = `₹${currentValue.toLocaleString("en-IN")}`; 
//         },
//         immediateRender: false, 
//       }
//     );
//   });
// }, 
  
  
// [evValue, petrolValue, dieselValue]);
 
 // Initial animations
 useEffect(() => {
  if (mileageDivRef.current) {
    gsap.fromTo(
      mileageDivRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }

  gsap.fromTo(
    costOwnershipRef.current,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1.5 }
  );

  // Cost Heading
  costHeadRef.current.forEach((head) => {
    gsap.fromTo(
      head,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "power2.out" }
    );
  });


  // Cost Pricing Head
  

  // Maintenance Cost SVG
  maintenanceCostSvgRef.current.forEach((svg) => {
    gsap.fromTo(
      svg,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, transformOrigin: "left", ease: "power1.out" }
    );
  });

  // Maintenance Cost Pricing
  maintenanceCostNumberRef.current.forEach((numberElement) => {
    const targetValue = parseInt(
      numberElement.getAttribute("data-value")?.replace(/,/g, "") || "0",
      10
    );

    const startValue = Math.floor(targetValue / 12);
    if (numberElement) {
      numberElement.textContent = `₹${startValue.toLocaleString("en-IN")}`;
    }

    // Animate number counting
    gsap.fromTo(
      numberElement,
      { textContent: startValue },
      {
        textContent: targetValue,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power1.inOut",
        onUpdate: function () {
          const currentValue = Math.floor(Number(this.targets()[0].textContent));
          numberElement.textContent = `₹${currentValue.toLocaleString("en-IN")}`;
        },
        immediateRender: false,
      }
    );
  });

  // Cost Pricing Head
  gsap.fromTo(
    [evTextRef.current, petrolTextRef.current, dieselTextRef.current],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
  );

  gsap.fromTo(
    [maintenanceEvTextRef.current, maintenancePetrolTextRef.current, maintenanceDieselTextRef.current],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
  );
 },
[]);

// Animations when running cost values change
useEffect(() => {
  // Running Cost SVG
  runningCostSvgRef.current.forEach((svg) => {
    gsap.fromTo(
      svg,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, transformOrigin: "left", ease: "power1.out" }
    );
  });

  // Running Cost Pricing
  runningCostNumberRef.current.forEach((numberElement) => {
    const targetValue = parseInt(
      numberElement.getAttribute("data-value")?.replace(/,/g, "") || "0",
      10
    );

    const startValue = Math.floor(targetValue / 12);
    if (numberElement) {
      numberElement.textContent = `₹${startValue.toLocaleString("en-IN")}`;
    }

    // Animate number counting
    gsap.fromTo(
      numberElement,
      { textContent: startValue },
      {
        textContent: targetValue,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power1.inOut",
        onUpdate: function () {
          const currentValue = Math.floor(Number(this.targets()[0].textContent));
          numberElement.textContent = `₹${currentValue.toLocaleString("en-IN")}`;
        },
        immediateRender: false,
      }
    );
  });
}, [evValue, petrolValue, dieselValue]);









  return (
    <main className=""style={{height:"100vh", background: "radial-gradient(50% 50% at 0% 0%,#5B8792 0%,rgba(91, 135, 146, 0) 100%),radial-gradient(50% 50% at 100% 0%,#0C4E8C 0%, rgba(12, 78, 140, 0) 100%),linear-gradient(to bottom, #021E33, #011320)"}}>
      <HeaderSection />
      <div className="flex mt-40 max-w-[83.5rem] mx-auto justify-between" >
        <div  ref={costOwnershipRef} className="w-[25%]">
          <h1 className="uppercase text-gradient text-2xl">
            Cost of Ownership
          </h1>
          <p className="text-gradient font-light mt-3">
            Discover the financial benefits of owning <br /> a BMW EV over
            traditional vehicles.
          </p>
          <button
            className="text-white py-3 px-4 mt-6 mb-4"
            style={{ border: "1px solid #9AA3AA" }}
          >
            Acquisition & Running costs
          </button>
          <button
            className="text-white py-3 px-[74px]"
            style={{ border: "1px solid #9AA3AA" }}
          >
            Tax Benefits
          </button>
        </div>
        <div className="w-[70%]">
          <div className="flex">
          <div className="w-[20rem]">
            <h2 ref={(el) => {if (el)costHeadRef.current.push(el)}} className="text-white text-xl mb-4">Running Costs</h2>
            <div >
            <div className="flex items-center mb-3">
              <p  ref={evTextRef} className="text-gradient">EV (iX1)</p>
              <svg
                ref={(el) => {
                  if (el) runningCostSvgRef.current.push(el);
                }}
                className="mileage-1 mx-4"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.638428"
                  y="0.788818"
                  width="19.4429"
                  height="14"
                  fill="url(#paint0_linear_24_1831)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1831"
                    x1="20.0813"
                    y1="7.78882"
                    x2="0.638428"
                    y2="7.78882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23FFDC" />
                    <stop offset="1" stopColor="#23FFDC" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p  ref={(el) => {
              if (el) runningCostNumberRef.current.push(el);
            }}
              data-value={evValue} className="text-white price-1">{evValue}</p>
             
            </div>
            
            <div className="flex items-center mb-3">
              <p ref={petrolTextRef} className="text-gradient">Petrol (iX1)</p>
              <svg
                ref={(el) => {
                  if (el) runningCostSvgRef.current.push(el);
                }}
                className="mileage-1 mx-4"
                width="65"
                height="15"
                viewBox="0 0 65 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.638428 0.442871H64.8999V14.4429H0.638428V0.442871Z"
                  fill="url(#paint0_linear_24_1835)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1835"
                    x1="64.8999"
                    y1="7.44287"
                    x2="0.638424"
                    y2="7.44287"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A9FF9C" />
                    <stop offset="1" stopColor="#A9FF9C" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <p   ref={(el) => {
              if (el) runningCostNumberRef.current.push(el);
            }}
              data-value={petrolValue} className="text-white price-1">{petrolValue}</p>
                 
            </div>
            <div className="flex items-center">
              <p ref={dieselTextRef} className="text-gradient">Diesel(iX1)</p>
              <svg
               ref={(el) => {
                if (el) runningCostSvgRef.current.push(el);
              }}
                className="mileage-1 mx-4"
                width="42"
                height="15"
                viewBox="0 0 42 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.638428"
                  y="0.0968018"
                  width="40.9348"
                  height="14"
                  fill="url(#paint0_linear_24_1839)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1839"
                    x1="41.5732"
                    y1="7.0968"
                    x2="0.638428"
                    y2="7.0968"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1B8FFA" />
                    <stop offset="1" stopColor="#1B8FFA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <p ref={(el) => {
              if (el) runningCostNumberRef.current.push(el);
            }}
              data-value={dieselValue} className="text-white price-1">{dieselValue}</p>
             
            </div>
            </div>
          </div>
          <div className="mx-20">
          <svg
            className="my-4"
            width="2"
            height="104"
            viewBox="0 0 2 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M0.786133 0.788818L0.786137 103.531"
              stroke="url(#paint0_linear_24_1854)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_24_1854"
                x1="1.28613"
                y1="0.788818"
                x2="1.28614"
                y2="103.531"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.495" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          </div>
          <div className="w-[20rem] pl-10">
            <h2 ref={(el) => {if (el)costHeadRef.current.push(el)}} className="text-white text-xl mb-4">Maintenance Costs</h2>
            <div className="flex items-center mb-3">
              <p ref={maintenanceEvTextRef} className="text-gradient">EV (iX1)</p>
              <svg
              ref={(el) => {
                if (el) maintenanceCostSvgRef.current.push(el);
              }}
                className="mx-4"
                width="41"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.638428"
                  y="0.788818"
                  width="19.4429"
                  height="14"
                  fill="url(#paint0_linear_24_1831)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1831"
                    x1="20.0813"
                    y1="7.78882"
                    x2="0.638428"
                    y2="7.78882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23FFDC" />
                    <stop offset="1" stopColor="#23FFDC" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p  ref={(el) => {
              if (el) maintenanceCostNumberRef.current.push(el);
            }}
            data-value="23,000" className="text-white"></p>
            </div>
            <div className="flex items-center mb-3">
              <p ref={maintenancePetrolTextRef} className="text-gradient">Petrol (iX1)</p>
              <svg
                ref={(el) => {
                  if (el) maintenanceCostSvgRef.current.push(el);
                }}
                className="mx-4"
                width="65"
                height="15"
                viewBox="0 0 65 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.638428 0.442871H64.8999V14.4429H0.638428V0.442871Z"
                  fill="url(#paint0_linear_24_1835)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1835"
                    x1="64.8999"
                    y1="7.44287"
                    x2="0.638424"
                    y2="7.44287"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A9FF9C" />
                    <stop offset="1" stopColor="#A9FF9C" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <p  ref={(el) => {
              if (el) maintenanceCostNumberRef.current.push(el);
            }}
            data-value="1,00,900" className="text-white"></p>
            </div>
            <div className="flex items-center">
              <p  ref={maintenanceDieselTextRef} className="text-gradient">Diesel(iX1)</p>
              <svg
                 ref={(el) => {
                  if (el) maintenanceCostSvgRef.current.push(el);
                }}
                className="mx-4"
                width="42"
                height="15"
                viewBox="0 0 42 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.638428"
                  y="0.0968018"
                  width="40.9348"
                  height="14"
                  fill="url(#paint0_linear_24_1839)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_1839"
                    x1="41.5732"
                    y1="7.0968"
                    x2="0.638428"
                    y2="7.0968"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1B8FFA" />
                    <stop offset="1" stopColor="#1B8FFA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <p
             ref={(el) => {
              if (el) maintenanceCostNumberRef.current.push(el);
            }}
            data-value="1,12,200"
              className="text-white"></p>
            </div>
          </div>
          </div>
          <div>
            <div ref={mileageDivRef} className="flex items-center my-4 gap-5">
              <h3 className="text-white">Annual Mileage:</h3>
              <button
                className="text-white py-3 px-4 mt-6 mb-4"
                style={{ border: "1px solid #9AA3AA" }}
                onClick={() => handleMileageClick(8000)}
              >
                8,000 km
              </button>
              <button
                className="text-white py-3 px-4 mt-6 mb-4"
                style={{ border: "1px solid #9AA3AA" }}
                onClick={() => handleMileageClick(10000)}
              >
                10,000 km
              </button>
              <button
                className="text-white py-3 px-4 mt-6 mb-4"
                style={{ border: "1px solid #9AA3AA" }}
                onClick={() => handleMileageClick(12000)}
                
              >
                12,000 km
              </button>
            </div>

            <svg
              width="347"
              height="2"
              viewBox="0 0 347 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M346.832 0.894287L0.74 0.894287"
                stroke="url(#paint0_linear_24_1891)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_24_1891"
                  x1="346.832"
                  y1="1.39429"
                  x2="0.73999"
                  y2="1.39429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.495" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="my-4">
            <h3 className="text-gradient text-xl">Registration Fee Savings</h3>
            <p className="text-gradient font-light my-2">Enjoy state-specific benefits on reduced registration fees for EVs.</p>
            </div>
          </div>
        </div>

       
      </div>
       {/* <div className="w-[70%]">
        <div className="flex items-center mb-3">
              <p className="text-gradient">EV (iX1)</p>
              <svg width="172" height="21" viewBox="0 0 172 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.274414 0.668701L171.371 0.668701V20.6687L0.274414 20.6687L0.274414 0.668701Z" fill="url(#paint0_linear_24_1967)"/>
<defs>
<linearGradient id="paint0_linear_24_1967" x1="141.371" y1="10.6687" x2="0.274414" y2="10.6687" gradientUnits="userSpaceOnUse">
<stop stopColor="#23FFDC"/>
<stop offset="1" stopColor="#23FFDC" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>

              <p className="text-white">₹13,69,010</p>
            </div>

            <div className="flex items-center mb-3">
              <p className="text-gradient">Petrol (iX1)</p>
              <svg width="124" height="21" viewBox="0 0 124 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.274414 0.66394L123.624 0.66394V20.6639L0.274414 20.6639L0.274414 0.66394Z" fill="url(#paint0_linear_24_1971)"/>
<defs>
<linearGradient id="paint0_linear_24_1971" x1="93.6238" y1="10.6639" x2="0.274414" y2="10.6639" gradientUnits="userSpaceOnUse">
<stop stopColor="#1B8FFA"/>
<stop offset="1" stopColor="#1B8FFA" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>


              <p className="text-white">₹6,98,419</p>
            </div>

            <div className="flex items-center mb-3">
              <p className="text-gradient">Diesel (iX1)</p>
              <svg width="138" height="21" viewBox="0 0 138 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.274414 0.659058L137.821 0.659058V20.6591L0.274414 20.6591L0.274414 0.659058Z" fill="url(#paint0_linear_24_1975)"/>
<defs>
<linearGradient id="paint0_linear_24_1975" x1="107.821" y1="10.6591" x2="0.274408" y2="10.6591" gradientUnits="userSpaceOnUse">
<stop stopColor="#A9FF9C"/>
<stop offset="1" stopColor="#A9FF9C" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>


              <p className="text-white">₹7,40,408</p>
            </div>
        </div> */}
    </main>
  );
};

export default HomePage;
