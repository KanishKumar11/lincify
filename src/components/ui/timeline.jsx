import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "./scroll-based-velocity";

const brands = ["/images/10.svg", "/images/11.svg", "/images/12.svg"];

export const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width and set mobile state
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initial load
    checkMobileView();

    // Add resize listener
    window.addEventListener("resize", checkMobileView);

    // Scroll handling for both mobile and desktop
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const containerTop = containerRect.top;
      const viewportHeight = window.innerHeight;

      const visibleHeight = Math.min(
        containerHeight,
        viewportHeight - containerTop
      );
      const visibleRatio = visibleHeight / containerHeight;

      const newActiveIndex = Math.floor(visibleRatio * data.length);
      const clampedIndex = Math.max(
        0,
        Math.min(newActiveIndex, data.length - 1)
      );

      setActiveIndex(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobileView);
    };
  }, [data]);

  // Render desktop or mobile version
  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[95vw] mx-auto "
      style={{
        height: `${100 + data.length * 100}vh`,
        // Ensure consistent layout for mobile and desktop
        overscrollBehavior: "contain",
      }}
    >
      <motion.div
        className="sticky w-[166px] h-[212px] top-1/2 left-0 ml-auto opacity-50 bg-[#FDF8B3] blur-[128.1px] z-40"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="sticky top-4 w-full text-center z-10 pb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h2
          className={`font-semibold ${isMobile ? "text-4xl" : "lg:text-7xl text-5xl"} bg-gradient-to-r from-[#2B9E70] from-[30%] via-white to-[#2B9E70] bg-clip-text text-transparent`}
        >
          *Services tailored for everyone.*
        </h2> */}
        <VelocityScroll
          text="*Services tailored for everyone. "
          default_velocity={4}
          className={`font-semibold ${isMobile ? "text-4xl" : "lg:text-7xl text-5xl"} bg-gradient-to-r from-[#2B9E70] from-[30%] via-white to-[#2B9E70] bg-clip-text text-transparent`}
        />
      </motion.div>

      <div
        className={`sticky top-32 h-[calc(100vh-8rem)] ${isMobile ? "flex-col" : "flex"} w-full bg-gradient-to-b from-transparent to-black via-black backdrop-blur-2xl z-20 max-w-[100vw] overflow-hidden`}
      >
        <div
          className={`${isMobile ? "w-full" : "w-1/3"} relative flex ${isMobile ? "justify-center" : "justify-end"} ${!isMobile && "pr-20"}`}
        >
          <div
            className={`absolute ${isMobile ? "w-[60%] h-[1px]" : "right-60 w-[1px] h-[50%]"} bg-neutral-200 top-28 dark:bg-neutral-700`}
          >
            <motion.div
              className={`absolute ${isMobile ? "top-[0px] -mt-2 w-[16px] h-[16px]" : "right-[-8px] w-[16px] h-[16px]"} bg-neutral-200 rounded-full`}
              animate={{
                [isMobile ? "left" : "top"]:
                  `${(activeIndex / (data.length - 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div
            className={`space-y-0 pt-10 relative ${isMobile ? "flex space-x-2 justify-between  w-[80%] " : "h-[45%] mt-32"}`}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                className={`${isMobile ? "  flex-row justify-between w-full " : "text-right pr-10"} ${
                  activeIndex === index
                    ? " text-neutral-200"
                    : "text-neutral-700 dark:text-neutral-400  "
                }`}
                style={{
                  position: isMobile ? "relative" : "absolute",
                  top: isMobile
                    ? "auto"
                    : `${(index / (data.length - 1)) * 100}%`,
                  left: isMobile ? "" : "",
                  transform: isMobile ? "none" : "translateY(-50%)",
                  visibility: isMobile
                    ? index == activeIndex
                      ? "visible"
                      : "hidden"
                    : "visible",
                }}
                animate={{
                  scale: activeIndex === index ? 1.1 : 1,
                  opacity: activeIndex === index ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                onClick={isMobile ? () => setActiveIndex(index) : undefined}
              >
                {
                  <h2
                    className={cn(
                      "text-lg w-max font-bold ",
                      isMobile &&
                        index == 1 &&
                        "absolute  left-1/2 -translate-x-1/2"
                    )}
                  >
                    {item.title}
                  </h2>
                }
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className={`${isMobile ? "w-full" : "w-2/3"} flex items-center ${!isMobile && "pl-20 ml-32"} h-max py-32`}
        >
          <motion.div
            className="w-full max-w-[550px] border p-12 rounded-3xl relative overflow-hidden"
            style={{
              background:
                "linear-gradient(110.12deg, #2C3027 -80.38%, #0A0B0A 83.54%)",
              borderImageSource:
                "linear-gradient(294.27deg, rgba(253, 248, 179, 0.3) 39.91%, rgba(7, 243, 176, 0.3) 101.06%)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {data.map(
                (item, index) =>
                  activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="z-10"
                    >
                      <h3 className="text-3xl font-bold mb-12 z-10 relative">
                        {item.title}
                      </h3>
                      <ul className="space-y-4 z-10 relative mb-12">
                        {item.content.map((point, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Check className="w-5 text-slate-50 flex-shrink-0" />
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      <p className="text-neutral-600 dark:text-neutral-400 z-10 relative">
                        {item.description}
                      </p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r w-2/3 h-2/3 rounded-full z-0 blur-3xl from-gray-700 via-green-900 to-black"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute -bottom-12 xl:bottom-0 lg:py-8 py-4 rounded-2xl   bg-[rgba(19,19,19,1)] z-30 w-full flex flex-row flex-wrap gap-4 items-center justify-between brands-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={brand}
              alt=""
              height={100}
              width={300}
              className="h-[18px] max-lg:w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
