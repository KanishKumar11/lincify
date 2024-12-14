"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Talk from "@/components/sections/Talk";
import Testimonials from "@/components/sections/Testimonials";
import Videos from "@/components/sections/Videos";
import WhatWeCanDo from "@/components/sections/WhatWeCanDo";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect } from "react";

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
      cursorX.set(e.clientX); // Global X position
      cursorY.set(e.clientY); // Global Y position
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

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
        <Navbar />
        <Hero />
      </div>
      <WhatWeCanDo />
      <InfiniteMovingCards items={IMAGE_URLS} />
      {/* <RotatingSemiCircle /> */}
      <Videos />
      <Services />
      <div className="relative overflow-x-hidden">
        <div className="absolute w-[47.62px] h-full lg:h-[1015.04px] lg:-top-1/4 -top-1/2 z-10 right-1/4 opacity-[0.5] rotate-[53.12deg] bg-[rgba(7,243,176,1)] blur-[80px]" />
        <Pricing />
      </div>
      <Testimonials />
      <Talk />
      <Footer />
    </div>
  );
}
