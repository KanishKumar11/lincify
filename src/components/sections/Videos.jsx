import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IMAGE_URLS } from "@/app/page";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = activeIndex.onChange((v) =>
      setCurrentIndex(Math.round(v))
    );
    return unsubscribe;
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center flex-col bg-black">
        <div className="h-[550px] -mt-[400px] bg-black overflow-hidden max-w-[100vw]">
          <InfiniteMovingCards items={IMAGE_URLS} />
        </div>

        <motion.div
          className="mx-auto flex items-center flex-col p-4 max-w-7xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="lg:text-6xl text-3xl relative mb-8 text-center leading-[50px] lg:leading-[80px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Videos that makes <br />
            <div className="inline-flex relative z-20">
              <span className="relative z-10 inline-flex">
                your brand spread
              </span>
              <div className="absolute bg-gradient-to-r from-[#07F3B0]/30 via-transparent to-transparent -left-2 top-0 z-0 w-full h-[50px] lg:h-[80px]" />
              <div className="absolute  bg-[#07F3B0] via-transparent to-transparent -left-2 top-0 z-0 w-1 lg:h-[80px] h-[50px]" />
            </div>{" "}
            <span className="inline-flex"> like wildfire</span>
          </motion.h2>
          <motion.p
            className="text-slate-300 text-center text-sm lg:text-[15px] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our system bring you consistent organic followers and predictably
            turn them into paying customers!
          </motion.p>
          <div className="flex flex-wrap items-start justify-around gap-8 p-8 pt-20 relative">
            <AnimatePresence mode="wait">
              {data.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={cn(
                    "text-left lg:w-1/4 flex flex-col gap-4 relative lg:mt-20",
                    idx === currentIndex ? "block" : "lg:block hidden "
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: idx === currentIndex ? 1 : 0,
                    y: 0,
                    // display: idx === currentIndex ? "block" : "hidden lg:block",
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-full h-0.5 ${
                      idx <= currentIndex ? "bg-white" : "bg-white/30"
                    } ${idx === currentIndex ? "block" : "hidden lg:hidden"}`}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className={idx === currentIndex ? "block" : "hidden "}
                  >
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-gray-400 text-sm",
                        idx === currentIndex ? "block" : "hidden "
                      )}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div
          className={cn(
            "absolute lg:block hidden w-[166px] h-[212px] -bottom-20 opacity-60 rounded-full bg-green-500 blur-[140px] bg-cover left-[40%]"
          )}
        />
      </div>
    </div>
  );
}
