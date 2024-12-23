"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Simple from "@/components/sections/Simple";

// Dynamically Import Components
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/sections/Hero"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Talk = dynamic(() => import("@/components/sections/Talk"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);
const Videos = dynamic(() => import("@/components/sections/Videos"));
const WhatWeCanDo = dynamic(() => import("@/components/sections/WhatWeCanDo"));

export const IMAGE_URLS = [
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.svg",
  "/images/7.jpg",
  "/images/6.svg",
  "/images/8.jpg",
  "/images/9.jpg",
];

export default function HomePage() {
  return (
    <div className="relative bg-black scroll-snap-y snap-mandatory">
      {/* Cursor Effect */}
      {/* Gradient Backgrounds */}
      <div className="absolute w-[244px] h-[340px] bottom-0 left-[-67px] opacity-[0.3] bg-[#FDF8B3] blur-[129.7px]" />
      <div
        className="absolute w-[94px] h-[372px] -top-[156px] left-1/4 rotate-[25.62deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(61,70,51,0.8), rgba(61,70,51,0.5))",
          backgroundSize: "400% 400%",
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />
      {/* <div
        // className="absolute w-[292px] h-[550px] lg:top-[46px] top-1/2 lg:left-[500px]"
        style={{
          background:
            "linear-gradient(to bottom right, #219B4B, #3EAD59, #9AA34F, #8cc655)",
          backgroundSize: "400% 400%",
          opacity: 0.3,
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      /> */}

      {/* Page Sections */}
      <div className="min-h-screen snap-start h-screen">
        <Suspense>
          <Navbar />
        </Suspense>
        <Suspense>
          <Hero />
        </Suspense>
      </div>
      <Suspense>
        <WhatWeCanDo />
      </Suspense>
      <Suspense>
        <div className="-mb-60"></div>
      </Suspense>
      <Suspense fallback={<div>Loading Videos...</div>}>
        <Videos />
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
      <Simple />
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading Talk Section...</div>}>
        <Talk />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
