import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Discovery & Strategy",
    description:
      "We analyze your brand and create a custom content strategy aligned with your goals.",
    image: "/images/3.png",
  },
  {
    title: "Content Creation",
    description:
      "We craft compelling content to effectively communicate your brand message.",
    image: "/images/14.jpg",
  },
  {
    title: "Campaign Management",
    description:
      "We execute and optimize campaigns to maximize reach and engagement.",
    image: "/images/13.jpg",
  },
];

export default function WhatWeCanDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2]
  );

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = activeIndex.onChange((v) =>
      setCurrentIndex(Math.round(v))
    );
    return unsubscribe;
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="h-[400vh] relative" id="about">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl p-5 mx-auto w-full">
          <motion.div className="px-5 rounded-lg py-12 relative bg-gradient-to-br from-[#2C3027] to-[#0A0B0A] min-h-[90vh] lg:min-h-[700px]">
            {/* Border Gradient */}
            {/* <div className="absolute inset-0 border border-white/20 rounded-lg grad-b1" /> */}

            {/* Section Title */}
            <motion.h2 className="font-medium lg:text-6xl text-4xl text-center bg-gradient-to-r from-white via-white to-[#2B9E70] bg-clip-text text-transparent">
              What we do
            </motion.h2>

            {/* Image Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative h-[270px] w-full mt-8 overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={data[currentIndex].image}
                  alt="What we do"
                  fill
                  className="object-cover object-[50%_20%]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Steps Section */}
            <div className="flex flex-wrap items-start justify-between gap-8 p-8 pt-14 relative">
              {data.map((item, idx) => (
                <motion.div
                  key={`${item.title}-${idx}`}
                  className={cn(
                    "text-left lg:w-1/4 flex flex-col gap-4 relative",
                    idx < currentIndex && "hidden lg:flex"
                  )}
                >
                  <motion.div
                    className="h-0.5 -mb-[18px] bg-white"
                    style={{
                      width:
                        idx < currentIndex
                          ? "100%"
                          : idx === currentIndex
                            ? `${progress.get()}%`
                            : "0%",
                    }}
                  />

                  {/* Step Divider Line */}
                  <motion.div
                    className={`w-full h-0.5 ${
                      idx <= currentIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                  {/* Step Number */}
                  <motion.p
                    className="text-gray-400 text-xs"
                    style={{ opacity: idx === currentIndex ? 1 : 0.6 }}
                  >
                    [STEP {idx + 1}]
                  </motion.p>
                  {/* Step Title and Description */}
                  <AnimatePresence mode="wait">
                    {idx === currentIndex && (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-white font-bold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Glow Effect */}
              {/* <motion.div
                className="absolute w-[166px] h-[212px] -top-20 opacity-80 bg-green-500 blur-[170px] lg:block hidden"
                style={{ x: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
