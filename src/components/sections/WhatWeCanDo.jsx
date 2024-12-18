import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

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
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cycleCompleted, setCycleCompleted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  useEffect(() => {
    let interval;
    if (isInView) {
      interval = setInterval(() => {
        setProgress(0);
        setActiveStep((prevStep) => {
          const nextStep = (prevStep + 1) % data.length;
          if (nextStep === 0) {
            setCycleCompleted(true);
          }
          return nextStep;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    let progressInterval;
    if (isInView) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + (100 / 5000) * 50
        );
      }, 50);
    }
    return () => clearInterval(progressInterval);
  }, [activeStep, isInView]);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="max-w-7xl p-5 snap-start mx-auto min-h-screen"
      ref={ref}
      id="about"
    >
      <motion.div
        className="px-5 rounded-lg py-12 relative bg-gradient-to-br from-[#2C3027] to-[#0A0B0A]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Border Gradient */}
        <div className="absolute inset-0 border border-white/20 rounded-lg grad-b1" />

        {/* Section Title */}
        <motion.h2
          className="font-medium lg:text-6xl text-4xl text-center bg-gradient-to-r from-white via-white to-[#2B9E70] bg-clip-text text-transparent"
          variants={itemVariants}
        >
          What we do
        </motion.h2>

        {/* Image Section */}
        <motion.div variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="relative h-[346px] w-full mt-8 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={data[activeStep].image}
                alt="What we do"
                fill
                className="object-cover object-[50%_20%]"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          className="flex flex-wrap items-start justify-between gap-8 p-8 pt-14 relative"
          variants={itemVariants}
        >
          {data.map((item, idx) => (
            <motion.div
              key={`${item.title}-idx`}
              className={`text-left lg:w-1/4 flex flex-col gap-4 relative ${
                !cycleCompleted && idx !== activeStep ? "hidden lg:flex" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="h-0.5 -mb-[18px] bg-white"
                initial={{ width: "0%" }}
                animate={{ width: idx === activeStep ? `${progress}%` : "0%" }}
                transition={{ duration: 0.5 }}
              />

              {/* Step Divider Line */}
              <motion.div
                className={`w-full h-0.5 ${
                  idx < activeStep ? "bg-white" : "bg-white/30"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              />
              {/* Step Number */}
              <motion.p
                className={`text-gray-400 text-xs ${
                  idx === activeStep ? "opacity-100" : "opacity-60"
                }`}
                animate={{ opacity: idx === activeStep ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              >
                [STEP {idx + 1}]
              </motion.p>
              {/* Step Title and Description */}
              <AnimatePresence mode="wait">
                {(cycleCompleted || idx === activeStep) && (
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
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Glow Effect */}
          <motion.div
            className="absolute w-[166px] h-[212px] -top-20 opacity-80 bg-green-500 blur-[170px]"
            animate={{
              left: cycleCompleted
                ? "50%"
                : activeStep === 0
                  ? "85px"
                  : activeStep === 1
                    ? "40%"
                    : "85%",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
