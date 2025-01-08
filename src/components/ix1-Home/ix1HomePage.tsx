"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ix1HomePage = () => {
  const menuItems = [
    { label: "Savings with an EV", href: "/savings" },
    { label: "How to Charge your EV", href: "/chargers" },
    { label: "Relax. We care.", href: "/relax-we-care" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contribute to Zero Emissions", href: "/contribute" },
  ];

  return (
    <div className="bg-gradient h-[100vh] overflow-hidden">
      <div className="cursor-pointer pl-5 pt-4">
        <Image
          src="/assets/Images/header-logo.svg"
          width={127}
          height={25}
          alt="menubar"
        />
      </div>
      <div className="flex max-w-[83.5rem] mx-auto mt-10">
        <div className="model-bg-img landscape:block relative z-0">
          <Image
            src="/assets/Images/iX1/ix1-home-banner.png"
            width={518}
            height={211}
            alt="model-banner"
          />
        </div>

        <div>
          <ul className="absolute right-12 z-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="py-2 px-[1.1rem] mb-2 text-white text-center text-[0.635rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(8, 161, 211, 0.3) 0%, rgba(29, 119, 217, 0.3) 100%)",
                  border: "1.2px solid",
                  borderImageSource:
                    "linear-gradient(93.4deg, rgba(255, 255, 255, 0.5) -10.99%, rgba(255, 255, 255, 0.125) 13.28%, rgba(255, 255, 255, 0.125) 74.26%, rgba(255, 255, 255, 0.5) 117.5%)",
                  borderImageSlice: 1,
                }}
              >
                <Link href={item.href}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ix1HomePage;
