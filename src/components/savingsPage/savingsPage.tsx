
"use client";
import React, { useEffect, useRef, useState } from 'react'
import HeaderSection from '../header'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const SavingsPage = () => {
      const costHeadRef =useRef<HTMLHeadingElement[]>([]);
     const runningCostSvgRef = useRef<SVGSVGElement[]>([]);
      const runningCostNumberRef = useRef<HTMLParagraphElement[]>([]);
      const evTextRef = useRef<HTMLParagraphElement | null>(null);
   const petrolTextRef = useRef<HTMLParagraphElement | null>(null);
  const dieselTextRef = useRef<HTMLParagraphElement | null>(null);
const mileageDivRef = useRef<HTMLDivElement | null>(null);


 const [selectedMileage, setSelectedMileage] = useState(8000);
  const [evValue, setEvValue] = useState("1,20,989");
  const [petrolValue, setPetrolValue] = useState("1,50,000");
  const [dieselValue, setDieselValue] = useState("1,30,000");

      
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

       // Cost Pricing Head
  gsap.fromTo(
    [evTextRef.current, petrolTextRef.current, dieselTextRef.current],
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
    <div className='bg-gradient h-[100vh]  overflow-hidden'>
        <HeaderSection />
        <div className='flex max-w-[34.5rem] mx-auto mt-12'>
           <div className='w-[40%]'>
          <h1 className="text-white text-[0.635rem] mb-4">Select your annual mileage:</h1>
            <div>
                <div ref={mileageDivRef} className='flex gap-3 mb-3 mileage-bg'>
                    <p className="text-white text-[0.635rem] px-4 py-2" onClick={() => handleMileageClick(8000)} style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)"}}>8,000 km</p>
                    <p className="text-white text-[0.635rem]  px-4 py-2" onClick={() => handleMileageClick(10000)} style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)"}}>10,000 km</p>
                </div>
                <div ref={mileageDivRef} className='flex gap-3 mb-3 mileage-bg'>
                    <p className="text-white text-[0.635rem]  px-4 py-2" onClick={() => handleMileageClick(12000)} style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)"}}>12,000 km</p>
                    <p className="text-white text-[0.635rem]  px-4 py-2" onClick={() => handleMileageClick(15000)} style={{ border: "0.75px solid rgba(255, 255, 255, 0.2)"}}>15,000 km</p>
                </div>
            </div>
            <div>

           <div><svg width="34" height="15" viewBox="0 0 34 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M4.8714 11.3726H3.32852L1 10.2084V7.96505L2.09327 6.37957V4.33029H3.94851C3.94851 4.33029 7.97136 1.86925 11.3931 1.183C11.3931 1.183 15.1084 0.77125 17.1482 1.183C19.188 1.59475 22.7423 4.60005 22.7423 4.60005C22.7423 4.60005 25.2885 4.60005 28.2323 4.97394C29.4628 5.13012 30.6602 5.48981 31.7535 6.07194C32.1368 6.27545 32.5249 6.51682 32.8657 6.79132V10.7574C32.8657 10.7574 31.8055 11.3016 30.5561 11.3726" fill="#0C2839"/>
<path d="M4.8714 11.3726H3.32852L1 10.2084V7.96505L2.09327 6.37957V4.33029H3.94851C3.94851 4.33029 7.97136 1.86925 11.3931 1.183C11.3931 1.183 15.1084 0.77125 17.1482 1.183C19.188 1.59475 22.7423 4.60005 22.7423 4.60005C22.7423 4.60005 25.2885 4.60005 28.2323 4.97394C29.4628 5.13012 30.6602 5.48981 31.7535 6.07194C32.1368 6.27545 32.5249 6.51682 32.8657 6.79132V10.7574C32.8657 10.7574 31.8055 11.3016 30.5561 11.3726" stroke="url(#paint0_linear_111_3170)" strokeWidth="1.36767" strokeMiterlimit="10"/>
<path d="M27.1958 13.7674C28.8189 13.7674 30.1348 12.4812 30.1348 10.8946C30.1348 9.30804 28.8189 8.02185 27.1958 8.02185C25.5726 8.02185 24.2567 9.30804 24.2567 10.8946C24.2567 12.4812 25.5726 13.7674 27.1958 13.7674Z" fill="#062234" stroke="#00FFD0" strokeWidth="1.35168" strokeMiterlimit="10"/>
<path d="M7.77248 13.7674C9.39567 13.7674 10.7115 12.4812 10.7115 10.8946C10.7115 9.30804 9.39567 8.02185 7.77248 8.02185C6.14929 8.02185 4.83344 9.30804 4.83344 10.8946C4.83344 12.4812 6.14929 13.7674 7.77248 13.7674Z" fill="#062234" stroke="#00FFD0" strokeWidth="1.35168" strokeMiterlimit="10"/>
</g>
<defs>
<linearGradient id="paint0_linear_111_3170" x1="60.2584" y1="11.3728" x2="1" y2="11.3728" gradientUnits="userSpaceOnUse">
<stop offset="0.515" stopColor="#27B0FA"/>
<stop offset="1" stopColor="#27CA71" stopOpacity="0.7"/>
</linearGradient>
</defs>
</svg>
</div>

          

            <svg width="200" height="7" viewBox="0 0 200 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2" clipPath="url(#clip0_111_3100)">
<path d="M12.4853 -2.61706L1.13446 5.98743L3.14846 8.82596L14.4993 0.221473L12.4853 -2.61706Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M24.7902 -2.5344L15.0858 6.07031L17.3031 8.742L27.0075 0.137281L24.7902 -2.5344Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M37.0788 -2.4188L29.0255 6.18542L31.473 8.63288L39.5263 0.0286613L37.0788 -2.4188Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M49.3585 -2.26758L42.9531 6.33679L45.652 8.48329L52.0573 -0.121084L49.3585 -2.26758Z"fill="url(#paint14_linear_111_3100)"/>
<path d="M61.6379 -2.07378L56.8811 6.53174L59.8381 8.27801L64.5948 -0.327505L61.6379 -2.07378Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M73.9243 -1.81031L70.8165 6.7926L74.0067 8.0239L77.1145 -0.579013L73.9243 -1.81031Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M86.2473 -1.50493L84.7883 7.10144L88.1427 7.70899L89.6017 -0.897377L86.2473 -1.50493Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M102.03 -1.2342L98.6257 -1.1543L98.8148 7.45149L102.219 7.37158L102.03 -1.2342Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M114.404 -1.58045L111.079 -0.821533L112.917 7.78313L116.242 7.02422L114.404 -1.58045Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M126.719 -1.8743L123.578 -0.514526L127.064 8.08963L130.205 6.72985L126.719 -1.8743Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M139 -2.11656L136.101 -0.268555L141.237 8.33627L144.135 6.48826L139 -2.11656Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M151.278 -2.30476L148.638 -0.0811768L155.421 8.52335L158.061 6.29976L151.278 -2.30476Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M163.549 -2.44221L161.157 0.0626221L169.588 8.66523L171.98 6.16039L163.549 -2.44221Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M175.848 -2.55632L173.68 0.157959L183.761 8.76163L185.929 6.04735L175.848 -2.55632Z" fill="url(#paint14_linear_111_3100)"/>
<path d="M188.147 -2.63179L186.177 0.23877L197.906 8.84181L199.876 5.97125L188.147 -2.63179Z" fill="url(#paint14_linear_111_3100)"/>
</g>
<g clipPath="url(#clip1_111_3100)">
<path fillRule="evenodd" clipRule="evenodd" d="M186.177 0.228962L188.147 -2.6416L199.876 5.96144L197.906 8.832L186.177 0.228962ZM12.4853 -2.62681L1.13446 5.97768L3.14846 8.81621L14.4993 0.211725L12.4853 -2.62681ZM24.7902 -2.54425L15.0858 6.06046L17.3031 8.73215L27.0075 0.127432L24.7902 -2.54425ZM29.0255 6.17556L37.0788 -2.42866L39.5263 0.0187948L31.473 8.62302L29.0255 6.17556ZM49.3585 -2.27733L42.9531 6.32704L45.652 8.47354L52.0573 -0.130834L49.3585 -2.27733ZM56.8811 6.52195L61.6379 -2.08356L64.5948 -0.337289L59.8381 8.26823L56.8811 6.52195ZM73.9243 -1.82008L70.8165 6.78284L74.0067 8.01413L77.1145 -0.588781L73.9243 -1.82008ZM84.7883 7.09163L86.2473 -1.51474L89.6017 -0.907182L88.1427 7.69919L84.7883 7.09163ZM102.03 -1.24388L98.6257 -1.16397L98.8148 7.44181L102.219 7.36191L102.03 -1.24388ZM111.079 -0.831378L114.404 -1.59029L116.242 7.01438L112.917 7.77329L111.079 -0.831378ZM126.719 -1.88408L123.578 -0.524306L127.064 8.07985L130.205 6.72007L126.719 -1.88408ZM136.101 -0.2784L139 -2.1264L144.135 6.47842L141.236 8.32642L136.101 -0.2784ZM151.278 -2.31459L148.638 -0.0910032L155.421 8.51352L158.061 6.28993L151.278 -2.31459ZM161.157 0.0527399L163.549 -2.4521L171.98 6.15051L169.588 8.65535L161.157 0.0527399ZM175.848 -2.56605L173.68 0.148224L183.761 8.75189L185.929 6.03761L175.848 -2.56605Z" fill="url(#paint15_linear_111_3100)"/>
</g>
<defs>
<linearGradient id="paint0_linear_111_3100" x1="0.887368" y1="8.35735" x2="-0.848846" y2="2.18026" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint1_linear_111_3100" x1="15.1223" y1="8.35684" x2="13.1441" y2="2.3487" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint2_linear_111_3100" x1="29.3595" y1="8.35979" x2="27.0787" y2="2.57808" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint3_linear_111_3100" x1="43.5949" y1="8.36069" x2="40.9373" y2="2.88429" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint4_linear_111_3100" x1="57.834" y1="8.35565" x2="54.7142" y2="3.29248" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint5_linear_111_3100" x1="72.0682" y1="8.35874" x2="68.4061" y2="3.85002" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint6_linear_111_3100" x1="86.3043" y1="8.35609" x2="82.0463" y2="4.57009" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint7_linear_111_3100" x1="98.3441" y1="3.15742" x2="102.271" y2="2.08806" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint8_linear_111_3100" x1="111.63" y1="3.56465" x2="115.315" y2="1.78342" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint9_linear_111_3100" x1="124.974" y1="3.93779" x2="128.346" y2="1.56127" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint10_linear_111_3100" x1="138.349" y1="4.23803" x2="141.388" y2="1.397" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint11_linear_111_3100" x1="151.738" y1="4.46676" x2="154.459" y2="1.27818" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint12_linear_111_3100" x1="165.108" y1="4.64067" x2="167.544" y2="1.19687" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint13_linear_111_3100" x1="178.481" y1="4.75968" x2="180.669" y2="1.12838" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint14_linear_111_3100" x1="191.823" y1="4.85744" x2="193.8" y2="1.08767" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<linearGradient id="paint15_linear_111_3100" x1="-1.70668" y1="1.31375" x2="141.955" y2="-15.8365" gradientUnits="userSpaceOnUse">
<stop stopColor="#27B0FA" stopOpacity="0"/>
<stop offset="1" stopColor="#5BF5FF"/>
</linearGradient>
<clipPath id="clip0_111_3100">
<rect width="199" height="6" fill="white" transform="translate(0.83252 0.15332)"/>
</clipPath>
<clipPath id="clip1_111_3100">
<rect width="147" height="6" fill="white" transform="translate(0.83252 0.491211)"/>
</clipPath>
</defs>
</svg>

<div className='mt-5'>
    <p className='text-[0.456rem] text-white' style={{opacity:"70%"}}>*All calculations are based on a 4 year ownership period</p>
    <p className='text-[0.456rem] text-white' style={{opacity:"70%"}}>*Power tariff & fuel cost may vary from state to state</p>
</div>

            </div>
           </div>

           <div className="w-[60%] pl-5 pr-5 pt-5" style={{height:"145px" ,border:" 0.84px solid;border-image-source: linear-gradient(93.4deg, rgba(255, 255, 255, 0.3) -10.99%, rgba(255, 255, 255, 0.075) 13.28%, rgba(255, 255, 255, 0.075) 74.26%, rgba(255, 255, 255, 0.3) 117.5%)",borderImageSlice:"1"}}>
          <div className="flex">
          <div className="w-[20rem]">
            <h2 ref={(el) => {if (el)costHeadRef.current.push(el)}} className="text-white text-[0.635rem] mb-4">Running Costs</h2>
            <div >
            <div className="flex items-center mb-3">
              <p  ref={evTextRef} className="text-gradient text-[0.635rem]">EV (iX1)</p>
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
              data-value={evValue} className="text-white price-1 text-[0.635rem]">{evValue}</p>
             
            </div>
            
            <div className="flex items-center mb-3">
              <p ref={petrolTextRef} className="text-gradient text-[0.635rem]">Petrol (iX1)</p>
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
              data-value={petrolValue} className="text-white price-1 text-[0.635rem]">{petrolValue}</p>
                 
            </div>
            <div className="flex items-center">
              <p ref={dieselTextRef} className="text-gradient text-[0.635rem]">Diesel(iX1)</p>
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
              data-value={dieselValue} className="text-white price-1 text-[0.635rem]">{dieselValue}</p>
             
            </div>
            </div>
          </div>
          </div>
          
        </div>
        </div>
    </div>
  )
}


export default SavingsPage