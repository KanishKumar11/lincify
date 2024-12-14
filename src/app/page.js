"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Dynamically Import Components
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/sections/Hero"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Talk = dynamic(() => import("@/components/sections/Talk"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);
const Videos = dynamic(() => import("@/components/sections/Videos"));
const WhatWeCanDo = dynamic(() => import("@/components/sections/WhatWeCanDo"));

const IMAGE_URLS = [
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.svg",
  "/images/7.jpg",
  "/images/6.svg",
  "/images/8.jpg",
  "/images/9.jpg",
];

export default function HomePage() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative bg-black scroll-snap-y snap-mandatory">
      {/* Cursor Effect */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference blur-[10px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          backgroundColor: "rgba(7, 243, 176, 0.5)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

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
      <div
        className="absolute w-[292px] h-[550px] lg:top-[46px] top-1/2 lg:left-[500px]"
        style={{
          background:
            "linear-gradient(to bottom right, #219B4B, #3EAD59, #9AA34F, #8cc655)",
          backgroundSize: "400% 400%",
          opacity: 0.3,
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

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
        <InfiniteMovingCards items={IMAGE_URLS} />
      </Suspense>
      <Suspense fallback={<div>Loading Videos...</div>}>
        <Videos />
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
      <div className="relative overflow-x-hidden">
        <div className="absolute w-[47.62px] h-full lg:h-[1015.04px] lg:-top-1/4 -top-1/2 z-10 right-1/4 opacity-[0.5] rotate-[53.12deg] bg-[rgba(7,243,176,1)] blur-[80px]" />
        <Suspense fallback={<div>Loading Pricing...</div>}>
          <Pricing />
        </Suspense>
      </div>
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
