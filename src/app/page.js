"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import RotatingSemiCircle from "@/components/sections/RotatingSemiCircle";
import Services from "@/components/sections/Services";
import Talk from "@/components/sections/Talk";
import Testimonials from "@/components/sections/Testimonials";
import Videos from "@/components/sections/Videos";
import WhatWeCanDo from "@/components/sections/WhatWeCanDo";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.svg",
  "/images/7.jpg",
  "/images/6.svg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.svg",
  "/images/7.jpg",
  "/images/6.svg",
  "/images/8.jpg",
  "/images/9.jpg",
];
export const timelineData = [
  {
    title: "Personal Branding",
    content: (
      <ul className="list-disc ml-6 text-neutral-300">
        <li>Portfolio Creation</li>
        <li>LinkedIn Optimization</li>
      </ul>
    ),
    description: "Build your online presence to stand out professionally.",
  },
  {
    title: "UGC Branding",
    content: (
      <ul className="list-disc ml-6 text-neutral-300">
        <li>Video Editing</li>
        <li>Reels Cover</li>
      </ul>
    ),
    description:
      "Harness the power of authentic user-generated content to elevate your brand's trust and engagement.",
  },
  {
    title: "Marketing",
    content: (
      <ul className="list-disc ml-6 text-neutral-300">
        <li>SEO Strategies</li>
        <li>Social Media Campaigns</li>
      </ul>
    ),
    description: "Boost your visibility and connect with your audience.",
  },
];

export default function HomePage() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Get the bounding rectangle of the pricing section
      const pricingSection = document.querySelector(".pricing-section");
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();

        // Calculate cursor position relative to the section
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="relative bg-black  scroll-snap-y snap-mandatory ">
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

      <div
        className="absolute w-[166px] h-[212px] top-[356px] left-[60%] lg:right-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(62,173,89,0.8), rgba(62,173,89,0.5))",
          backgroundSize: "400% 400%",
          opacity: 0.55,
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      <div
        className="absolute w-[166px] h-[212px] top-[504px] left-[-85px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(62,173,89,0.8), rgba(62,173,89,0.5))",
          backgroundSize: "400% 400%",
          opacity: 0.8,
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      {/* Add this to your global CSS or a style tag */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
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
        <div className="absolute w-[244px] h-[340px] bottom-0 left-[-67px] opacity-[0.3] bg-[#FDF8B3] blur-[129.7px]"></div>
        <motion.div
          className="absolute top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference blur-[10px]"
          style={{
            x: cursorX + 20,
            y: cursorY,
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

        <div className="absolute w-[47.62px] h-full lg:h-[1015.04px] lg:-top-1/4 -top-1/2 z-10 right-1/4 opacity-[0.5] rotate-[53.12deg] bg-[rgba(7,243,176,1)] blur-[80px]" />
        <Pricing />
      </div>
      <Testimonials />
      <Talk />
      <Footer />
    </div>
  );
}
