import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Mission",
    description:
      "To empower brands with captivating, authentic, and innovative content that drives engagement and builds lasting connections with their audience.",
  },
  {
    title: "Vision",
    description:
      "To be the leading agency transforming storytelling into powerful brand experiences, inspiring creativity and authenticity across the digital landscape.",
    image: "/images/4.png",
  },
];

export default function Videos() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setActiveStep((prevStep) => (prevStep + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 50);

    return () => clearInterval(progressInterval);
  }, [activeStep]);

  return (
    <motion.div
      className="mx-auto flex items-center flex-col p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="lg:text-6xl text-4xl relative mb-10 text-center leading-[50px] lg:leading-[80px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Videos that makes <br />
        <div className="inline-flex relative z-20">
          <span className="relative z-10">your brand spread like</span>
          <div className="absolute bg-gradient-to-r from-[#07F3B0]/30 via-transparent to-transparent -left-2 top-0 z-0 w-full h-[50px] lg:h-[80px]" />
          <div className="absolute  bg-[#07F3B0] via-transparent to-transparent -left-2 top-0 z-0 w-1 lg:h-[80px] h-[50px]" />
        </div>{" "}
        wildfire
      </motion.h2>
      <motion.p
        className="text-slate-50 text-[15px] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Our system bring you consistent organic followers and predictably turn
        them into paying customers!
      </motion.p>
      <div className="flex flex-wrap items-start justify-around gap-8 p-8 pt-14 relative">
        <AnimatePresence mode="wait">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-left lg:w-1/4 flex flex-col gap-4 relative mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-0.5 -mb-[18px] bg-white"
                initial={{ width: "0%" }}
                animate={{ width: idx === activeStep ? `${progress}%` : "0%" }}
                transition={{ duration: 5 }}
              />
              <div
                className={`w-full h-0.5 ${idx <= activeStep ? "bg-white" : "bg-white/30"}`}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          className="absolute w-[166px] h-[212px] -top-20 opacity-80 bg-green-500 blur-[170px]"
          animate={{
            left: activeStep === 0 ? "85px" : "40%",
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
