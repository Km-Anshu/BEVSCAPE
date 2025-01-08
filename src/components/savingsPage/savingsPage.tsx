"use client";
import React, { useEffect, useRef, useState } from "react";
import HeaderSection from "../header";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Swiper } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import SideNavHeader from "../sideNavHeader";

gsap.registerPlugin(TextPlugin);

const SavingsPage = () => {
  const costHeadRef = useRef<HTMLHeadingElement[]>([]);
  const runningCostSvgRef = useRef<SVGSVGElement[]>([]);
  const runningCostNumberRef = useRef<HTMLParagraphElement[]>([]);
  const evTextRef = useRef<HTMLParagraphElement | null>(null);
  const petrolTextRef = useRef<HTMLParagraphElement | null>(null);
  const dieselTextRef = useRef<HTMLParagraphElement | null>(null);
  const mileageDivRef = useRef<HTMLDivElement | null>(null);
  const maintenanceCostSvgRef = useRef<SVGSVGElement[]>([]);
  const maintenanceCostNumberRef = useRef<HTMLParagraphElement[]>([]);

  const maintenanceEvTextRef = useRef<HTMLParagraphElement | null>(null);
  const maintenancePetrolTextRef = useRef<HTMLParagraphElement | null>(null);
  const maintenanceDieselTextRef = useRef<HTMLParagraphElement | null>(null);
  const [maintenanceEvValue, setMaintenanceEvValue] = useState<string>("1,00,000");
const [maintenancePetrolValue, setMaintenancePetrolValue] = useState<string>("1,20,000");
const [maintenanceDieselValue, setMaintenanceDieselValue] = useState<string>("1,10,000");


  const [selectedMileage, setSelectedMileage] = useState(8000);
  const [evValue, setEvValue] = useState("1,20,989");
  const [petrolValue, setPetrolValue] = useState("1,50,000");
  const [dieselValue, setDieselValue] = useState("1,30,000");
  const [activeBars, setActiveBars] = useState<number[]>([]);

  const barGroups: { [key: number]: number[] } = {
    8000: [1, 2, 3],
    10000: [4, 5, 6, 7],
    12000: [8, 9, 10, 11],
    15000: [12, 13, 14, 15],
  };

  const handleMileageClick = (mileage: number) => {
    if (mileage === selectedMileage) {
      return;
    }
    const targetBars = barGroups[mileage];
    setActiveBars(targetBars);
    setSelectedMileage(mileage);
    const totalBars = 15;
    const barIndex = targetBars[targetBars.length - 2];
    const svgPosition = (barIndex - 2) / totalBars;

    const multiplier = 200;
    gsap.to("#svg-pointer", {
      x: svgPosition * multiplier,
      duration: 3,
      ease: "power1.inOut",
    });
    gsap.to([...runningCostSvgRef.current, ...runningCostNumberRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setSelectedMileage(mileage);
        switch (mileage) {
          case 8000:
            setEvValue("1,20,989");
            setPetrolValue("1,50,000");
            setDieselValue("1,30,000");
            setMaintenanceEvValue("1,00,000"); 
            setMaintenancePetrolValue("1,20,000");
            setMaintenanceDieselValue("1,10,000");
            break;
          case 10000:
            setEvValue("1,50,000");
            setPetrolValue("1,80,000");
            setDieselValue("1,60,000");
            setMaintenanceEvValue("1,20,000");
            setMaintenancePetrolValue("1,50,000");
            setMaintenanceDieselValue("1,40,000");
            break;
          case 12000:
            setEvValue("96,000");
            setPetrolValue("4,80,000");
            setDieselValue("3,84,000");
            setMaintenanceEvValue("80,000");
            setMaintenancePetrolValue("1,00,000");
            setMaintenanceDieselValue("90,000");
            break;
          case 15000:
            setEvValue("2,80,000");
            setPetrolValue("3,10,000");
            setDieselValue("2,90,000");
            setMaintenanceEvValue("2,50,000");
            setMaintenancePetrolValue("3,00,000");
            setMaintenanceDieselValue("2,70,000");
            break;
          default:
            break;
        }
        gsap.to(
          [...runningCostSvgRef.current, ...runningCostNumberRef.current],
          {
            opacity: 1,
            duration: 0.5,
          }
        );
      },
    });
  };

  //DEFAULT 8000
  // useEffect(() => {
  //   const totalBars = 15;
  //   const barIndex = barGroups[8000][barGroups[8000].length - 2];
  //   const svgPosition = (barIndex - 2) / totalBars;
  //   const multiplier = 200;

  //   gsap.to("#svg-pointer", {
  //     x: svgPosition * multiplier,
  //     duration: 0,
  //   });
  // }, []);

  useEffect(() => {
    if (mileageDivRef.current) {
      gsap.fromTo(
        mileageDivRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }

    costHeadRef.current.forEach((head) => {
      gsap.fromTo(
        head,
        { opacity: 0 },
        { opacity: 1, duration: 4, ease: "power2.out" }
      );
    });
    maintenanceCostSvgRef.current.forEach((svg) => {
      gsap.fromTo(
        svg,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          transformOrigin: "left",
          ease: "power1.out",
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
      [
        maintenanceEvTextRef.current,
        maintenancePetrolTextRef.current,
        maintenanceDieselTextRef.current,
      ],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);
  //running cost values change  Animations 
  useEffect(() => {

    // Running Cost SVG
    runningCostSvgRef.current.forEach((svg) => {
      gsap.fromTo(
        svg,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          transformOrigin: "left",
          ease: "power1.out",
        }
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
            const currentValue = Math.floor(
              Number(this.targets()[0].textContent)
            );
            numberElement.textContent = `₹${currentValue.toLocaleString(
              "en-IN"
            )}`;
          },
          immediateRender: false,
        }
      );
    });
  }, [evValue, petrolValue, dieselValue]);


  useEffect(() => {
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
  
      // Animate number counting for maintenance cost
      gsap.fromTo(
        numberElement,
        { textContent: startValue },
        {
          textContent: targetValue,
          duration: 2,
          snap: { textContent: 1 },
          ease: "power1.inOut",
          onUpdate: function () {
            const currentValue = Math.floor(
              Number(this.targets()[0].textContent)
            );
            numberElement.textContent = `₹${currentValue.toLocaleString(
              "en-IN"
            )}`;
          },
          immediateRender: false,
        }
      );
    });
  
    // Maintenance Cost SVG
    maintenanceCostSvgRef.current.forEach((svg) => {
      gsap.fromTo(
        svg,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          transformOrigin: "left",
          ease: "power1.out",
        }
      );
    });
  }, [maintenanceEvValue, maintenancePetrolValue, maintenanceDieselValue]);
  

  // Cost slider
  const initializeSwiper = () => {
    const swiperInstance = new Swiper(`.swiper`, {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      // spaceBetween: 100,
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

    swiperInstance.on("slideChange", () => {
      const isAtBeginning = swiperInstance.isBeginning;
      const isAtEnd = swiperInstance.isEnd;
      const runningCostTitle = swiperInstance.isBeginning;
      const maintenanceCost = swiperInstance.isEnd;

      const prevButton = document.querySelector<HTMLElement>(
        ".swiper-button-prev"
      );
      const nextButton = document.querySelector<HTMLElement>(
        ".swiper-button-next"
      );
      const running = document.querySelector<HTMLElement>(".runningCostTitle");
      const maintenance =
        document.querySelector<HTMLElement>(".maintenanceCost");

      if (prevButton) {
        prevButton.style.display = isAtBeginning ? "none" : "block";
        if (running) {
          running.style.display = runningCostTitle ? "none" : "flex";
        }
      }

      if (nextButton) {
        nextButton.style.display = isAtEnd ? "none" : "block";
        if (maintenance) {
          maintenance.style.display = maintenanceCost ? "none" : "flex";
        }
      }
    });

    // Set initial state for buttons
    const prevButton = document.querySelector<HTMLElement>(
      ".swiper-button-prev"
    );
    const nextButton = document.querySelector<HTMLElement>(
      ".swiper-button-next"
    );

    if (prevButton) prevButton.style.display = "none";
    if (nextButton) nextButton.style.display = "block";
  };
  useEffect(() => {
    setTimeout(() => {
      initializeSwiper();
    }, 0);
    // hotjar.initialize({ id: 5056233, sv: 6 });
  }, []);

  return (
    <div className="bg-gradient h-[100vh]  overflow-hidden">
     
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
            <h1 className="text-gradient font-eleven">SAVINGS WITH ANEV</h1>
            <p className="text-white font-nine">
            Discover the financial benefits of owning a <br/>BMW EV over traditional vehicles.
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
        <ul className="flex items-center gap-6 pr-5 charging-sub-menu">
          <li className="text-white font-ten opacity-70">Acquisition & <br/>Running Costs</li>
          <li className="text-white font-ten  opacity-70">Tax Benifits</li>
        </ul> 
        <SideNavHeader />
        </div>
      </div>
      <div className="flex justify-between max-w-[36.5rem] mx-auto mt-8">
        {/* Acquisition and Running Costs */}
        <div className="w-[38%]">
          <h1 className="text-white text-[0.635rem] mb-2">
            Select your annual mileage:
          </h1>
          <div>
            <div
              ref={mileageDivRef}
              className="flex flex-wrap gap-3 mb-3 mileage-bg"
            >
              {Object.keys(barGroups).map((mileage, index) => (
                <p
                  key={index}
                  className="text-white text-[0.635rem] px-[1.1rem] py-2"
                  onClick={() => handleMileageClick(Number(mileage))}
                  style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)" }}
                >
                  {`${Number(mileage).toLocaleString()} km`}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div>
              <svg
                id="svg-pointer"
                width="34"
                height="15"
                viewBox="0 0 34 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7">
                  <path
                    d="M4.8714 11.3726H3.32852L1 10.2084V7.96505L2.09327 6.37957V4.33029H3.94851C3.94851 4.33029 7.97136 1.86925 11.3931 1.183C11.3931 1.183 15.1084 0.77125 17.1482 1.183C19.188 1.59475 22.7423 4.60005 22.7423 4.60005C22.7423 4.60005 25.2885 4.60005 28.2323 4.97394C29.4628 5.13012 30.6602 5.48981 31.7535 6.07194C32.1368 6.27545 32.5249 6.51682 32.8657 6.79132V10.7574C32.8657 10.7574 31.8055 11.3016 30.5561 11.3726"
                    fill="#0C2839"
                  />
                  <path
                    d="M4.8714 11.3726H3.32852L1 10.2084V7.96505L2.09327 6.37957V4.33029H3.94851C3.94851 4.33029 7.97136 1.86925 11.3931 1.183C11.3931 1.183 15.1084 0.77125 17.1482 1.183C19.188 1.59475 22.7423 4.60005 22.7423 4.60005C22.7423 4.60005 25.2885 4.60005 28.2323 4.97394C29.4628 5.13012 30.6602 5.48981 31.7535 6.07194C32.1368 6.27545 32.5249 6.51682 32.8657 6.79132V10.7574C32.8657 10.7574 31.8055 11.3016 30.5561 11.3726"
                    stroke="url(#paint0_linear_111_3170)"
                    strokeWidth="1.36767"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M27.1958 13.7674C28.8189 13.7674 30.1348 12.4812 30.1348 10.8946C30.1348 9.30804 28.8189 8.02185 27.1958 8.02185C25.5726 8.02185 24.2567 9.30804 24.2567 10.8946C24.2567 12.4812 25.5726 13.7674 27.1958 13.7674Z"
                    fill="#062234"
                    stroke="#00FFD0"
                    strokeWidth="1.35168"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M7.77248 13.7674C9.39567 13.7674 10.7115 12.4812 10.7115 10.8946C10.7115 9.30804 9.39567 8.02185 7.77248 8.02185C6.14929 8.02185 4.83344 9.30804 4.83344 10.8946C4.83344 12.4812 6.14929 13.7674 7.77248 13.7674Z"
                    fill="#062234"
                    stroke="#00FFD0"
                    strokeWidth="1.35168"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_111_3170"
                    x1="60.2584"
                    y1="11.3728"
                    x2="1"
                    y2="11.3728"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.515" stopColor="#27B0FA" />
                    <stop offset="1" stopColor="#27CA71" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <svg
              width="200"
              height="7"
              viewBox="0 0 200 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(15)].map((_, index) => {
                const barId = index + 1;
                const isActive = activeBars.includes(barId);
                return (
                  <path
                    key={barId}
                    id={`bar-${barId}`}
                    d={
                      [
                        "M12.4854 -2.16683L1.13452 6.43765L3.14852 9.27618L14.4994 0.671698L12.4854 -2.16683Z",
                        "M24.7903 -2.08427L15.0859 6.52045L17.3032 9.19213L27.0076 0.587415L24.7903 -2.08427Z",
                        "M37.0789 -1.96869L29.0256 6.63553L31.4732 9.08299L39.5264 0.478765L37.0789 -1.96869Z",
                        "M49.3585 -1.81736L42.9531 6.78702L45.652 8.93352L52.0573 0.329142L49.3585 -1.81736Z",
                        "M61.6379 -1.62358L56.8811 6.98193L59.8381 8.72821L64.5948 0.12269L61.6379 -1.62358Z",
                        "M73.9243 -1.3601L70.8165 7.24281L74.0068 8.47411L77.1146 -0.128802L73.9243 -1.3601Z",
                        "M86.2473 -1.05476L84.7883 7.55161L88.1427 8.15916L89.6017 -0.447212L86.2473 -1.05476Z",
                        "M102.03 -0.783899L98.6257 -0.703995L98.8148 7.90179L102.219 7.82188L102.03 -0.783899Z",
                        "M114.404 -1.13031L111.079 -0.371399L112.917 8.23327L116.242 7.47436L114.404 -1.13031Z",
                        "M126.719 -1.42411L123.578 -0.0643311L127.064 8.53983L130.205 7.18005L126.719 -1.42411Z",
                        "M139 -1.66642L136.101 0.18158L141.237 8.7864L144.135 6.9384L139 -1.66642Z",
                        "M151.278 -1.85463L148.638 0.368958L155.422 8.97348L158.061 6.7499L151.278 -1.85463Z",
                        "M163.55 -1.99212L161.157 0.512711L169.588 9.11532L171.98 6.61048L163.55 -1.99212Z",
                        "M175.848 -2.10609L173.68 0.608185L183.761 9.21185L185.929 6.49758L175.848 -2.10609Z",
                        "M188.148 -2.18163L186.177 0.688934L197.906 9.29198L199.876 6.42141L188.148 -2.18163Z",
                      ][index]
                    }
                    fill={isActive ? "#00BFFF" : "#5BF5FF"}
                    style={{ opacity: isActive ? 1 : 0.2 }}
                  />
                );
              })}

              <defs>
                <linearGradient
                  id="active-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="12.52%" stopColor="#27B0FA" />
                  <stop offset="88.1%" stopColor="#5BF5FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-5">
              <p
                className="text-[0.456rem] text-white"
                style={{ opacity: "70%" }}
              >
                *All calculations are based on a 4 year ownership period
              </p>
              <p
                className="text-[0.456rem] text-white"
                style={{ opacity: "70%" }}
              >
                *Power tariff & fuel cost may vary from state to state
              </p>
            </div>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper flex ml-10" style={{}}>
            <div className="swiper-slide">
              <div
                className="pl-3 pt-3"
                style={{
                  height: "125px",
                  width: "313px",
                  border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1",
                }}
              >
                <h2
                  ref={(el) => {
                    if (el) costHeadRef.current.push(el);
                  }}
                  className="text-white text-[0.635rem] mb-4"
                >
                  Running Costs
                </h2>
                <div>
                  <div className="flex items-center mb-3">
                    <p
                      ref={evTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      EV (iX1)
                    </p>
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
                          <stop
                            offset="1"
                            stopColor="#23FFDC"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p
                      ref={(el) => {
                        if (el) runningCostNumberRef.current.push(el);
                      }}
                      data-value={evValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {evValue}
                    </p>
                  </div>

                  <div className="flex items-center mb-3">
                    <p
                      ref={petrolTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      Petrol (iX1)
                    </p>
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
                          <stop
                            offset="1"
                            stopColor="#A9FF9C"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p
                      ref={(el) => {
                        if (el) runningCostNumberRef.current.push(el);
                      }}
                      data-value={petrolValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {petrolValue}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p
                      ref={dieselTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      Diesel(iX1)
                    </p>
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
                          <stop
                            offset="1"
                            stopColor="#1B8FFA"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p
                      ref={(el) => {
                        if (el) runningCostNumberRef.current.push(el);
                      }}
                      data-value={dieselValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {dieselValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="pl-3 pt-3"
                style={{
                  height: "125px",
                  width: "313px",
                  border:
                    " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
                  borderImageSlice: "1",
                }}
              >
                <h2
                  ref={(el) => {
                    if (el) costHeadRef.current.push(el);
                  }}
                  className="text-white text-[0.635rem] mb-4"
                >
                  Maintenance Costs
                </h2>
                <div>
                  <div className="flex items-center mb-3">
                    <p
                      ref={maintenanceEvTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      EV (iX1)
                    </p>
                    <svg
                      ref={(el) => {
                        if (el) maintenanceCostSvgRef.current.push(el);
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
                          <stop
                            offset="1"
                            stopColor="#23FFDC"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p
                      ref={(el) => {
                        if (el) maintenanceCostNumberRef.current.push(el);
                      }}
                      data-value={maintenanceEvValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {maintenanceEvValue}
                    </p>
                  </div>

                  <div className="flex items-center mb-3">
                    <p
                      ref={maintenancePetrolTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      Petrol (iX1)
                    </p>
                    <svg
                      ref={(el) => {
                        if (el) maintenanceCostSvgRef.current.push(el);
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
                          <stop
                            offset="1"
                            stopColor="#A9FF9C"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p
                      ref={(el) => {
                        if (el) maintenanceCostNumberRef.current.push(el);
                      }}
                      data-value={maintenancePetrolValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {maintenancePetrolValue}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p
                      ref={maintenanceDieselTextRef}
                      className="text-gradient text-[0.635rem]"
                    >
                      Diesel(iX1)
                    </p>
                    <svg
                      ref={(el) => {
                        if (el) maintenanceCostSvgRef.current.push(el);
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
                          <stop
                            offset="1"
                            stopColor="#1B8FFA"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p
                      ref={(el) => {
                        if (el) maintenanceCostNumberRef.current.push(el);
                      }}
                      data-value={maintenanceDieselValue}
                      className="text-white price-1 text-[0.635rem]"
                    >
                      {maintenanceDieselValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="swiper-button-container flex absolute w-full lgdesktop:right-[-395px] lgdesktop:bottom-[77px] lg:right-[-350px] lg:bottom-0 tab:right-[-239px] tab:bottom-[-9px] ">
            <div className="swiper-button-next custom after:relative after:top-[-109px] after:right-[-12px] !z-20 after:text-[22px]!important"></div>
            <div className="swiper-pagination z-10 custom bottom-[149px]"></div>
            <div className="swiper-button-prev custom after:relative after:bottom-[109px] after:left-[-2px] after:text-[22px]!important"></div>
          </span>
          <div className=" maintenanceCost flex  justify-end items-center gap-2 pt-2 pr-1 fixed right-[56px] bottom-[90px]">
            <p className=" flex justify-end underline text-white text-[0.635rem]">
              Maintenance Costs{" "}
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
          <div
            className=" runningCostTitle flex justify-end items-center gap-2 pt-2 pr-1 fixed right-[56px] bottom-[90px]"
            style={{ display: "none" }}
          >
            <span className="pr-1">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.24783 8.4491L5.61146 8.4491L1.91796 4.93618L14.9933 4.93618L14.9855 3.95462L1.91016 3.95462L5.60369 0.449096L4.24005 0.449096L-0.00671352 4.46385L4.24783 8.4491Z"
                  fill="#F2F2F2"
                />
              </svg>
            </span>
            <p className=" flex justify-end underline text-white text-[0.635rem]">
              Running Costs{" "}
            </p>
          </div>
          <div className="mt-2 fixed ml-[50px] bottom-[50px]">
            <h3 className="text-white font-normal text-[0.589rem]">
              Registration fee savings
            </h3>
            <p className="text-white font-normal text-[0.489rem] opacity-60">
              Enjoy state-specific benefits on reduced registration fees for
              EVs.
            </p>
          </div>
        </div>
        {/* Tax Benefits */}

        {/* <div className="w-[38%]">
          <Image
            src="/assets/Images/iX1/tax-benIfit.png"
            width={400}
            height={300}
            alt="tax-benefits"
          />
        </div>
        <div className="w-[56.3%]">
          <div
            className="flex pl-3 pt-3"
            style={{
              border:
                " 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",
              borderImageSlice: "1",
            }}
          >
            <div className="">
              <h2
                ref={(el) => {
                  if (el) costHeadRef.current.push(el);
                }}
                className="text-white text-[0.635rem] mb-3 font-light"
              >
                As a business owner, enjoy tax benefits through accelerated
                depreciation.*
              </h2>
              <div>
                <div className="flex items-center mb-3">
                  <p ref={evTextRef} className="text-gradient text-[0.635rem]">
                    EV (iX1)
                  </p>
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
                  <p
                    ref={(el) => {
                      if (el) runningCostNumberRef.current.push(el);
                    }}
                    data-value={evValue}
                    className="text-white price-1 text-[0.635rem]"
                  >
                    {evValue}
                  </p>
                </div>

                <div className="flex items-center mb-3">
                  <p
                    ref={petrolTextRef}
                    className="text-gradient text-[0.635rem]"
                  >
                    Petrol (iX1)
                  </p>
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

                  <p
                    ref={(el) => {
                      if (el) runningCostNumberRef.current.push(el);
                    }}
                    data-value={petrolValue}
                    className="text-white price-1 text-[0.635rem]"
                  >
                    {petrolValue}
                  </p>
                </div>
                <div className="flex items-center">
                  <p
                    ref={dieselTextRef}
                    className="text-gradient text-[0.635rem]"
                  >
                    Diesel(iX1)
                  </p>
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

                  <p
                    ref={(el) => {
                      if (el) runningCostNumberRef.current.push(el);
                    }}
                    data-value={dieselValue}
                    className="text-white price-1 text-[0.635rem]"
                  >
                    {dieselValue}
                  </p>
                </div>
                <svg
                  className="my-2"
                  width="267"
                  height="2"
                  viewBox="0 0 267 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M267.006 0.766113L0.796623 0.766113"
                    stroke="url(#paint0_linear_75_1308)"
                    strokeWidth="0.75"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_75_1308"
                      x1="267.006"
                      y1="1.26611"
                      x2="0.796631"
                      y2="1.26611"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.495" stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mb-3">
                  <p className="text-[0.345rem] text-white opacity-70 font-light">
                    *All calculations are based on a 4 year ownership period.
                  </p>
                  <p className="text-[0.345rem] text-white opacity-70 font-light">
                    *Depreciation rates are 15% for ICE models and 40% for BEV
                    models.
                  </p>
                  <p className="text-[0.345rem] text-white opacity-70 font-light">
                    *The Corporate Tax Rate considered is 25%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SavingsPage;
