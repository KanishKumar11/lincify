"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const tabs = ["Personal Branding", "UGC Branding", "Marketing"];
const pricingData = {
  "Personal Branding": [
    {
      name: "Basic",
      price: 399,
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: 999,
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: 1299,
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
  "UGC Branding": [
    {
      name: "Basic",
      price: 499,
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: 899,
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: 1299,
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
  Marketing: [
    {
      name: "Basic",
      price: 409,
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: 809,
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: 1209,
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
};
export default function Pricing() {
  const [active, setActive] = useState("Personal Branding");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    <div className="max-w-7xl mx-auto my-20 flex flex-col gap-5 relative pricing-section py-20">
      {/* Cursor follower */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
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

      <div className="absolute w-[47.62px] h-[1015.04px] lg:-top-1/4 -top-1/2 z-10 lg:right-1/4 opacity-[0.5] rotate-[53.12deg] bg-[rgba(7,243,176,1)] blur-[80px]" />
      <div className="absolute w-[244px] h-[340px] bottom-0 left-[-67px] opacity-[0.3] bg-[#FDF8B3] blur-[129.7px]"></div>

      <motion.h2
        className="lg:text-6xl text-5xl leading-[55px] font-bold text-center lg:leading-[80px] tracking-wide gr1 text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Subscribe Today,
        <br />
        Start Growing Tomorrow{" "}
      </motion.h2>
      <motion.p
        className="font-medium text-[rgba(255,255,255,0.6)] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover plans designed to fit your brand&#39;s unique content needs.
      </motion.p>
      <motion.div
        className="flex flex-wrap flex-row overflow-hidden max-w-[100vw] justify-center gap-5 bg-[rgba(217,217,217,0.1)] rounded-[13px] w-max mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {tabs.map((tab, i) => (
          <motion.div
            key={i}
            className={cn(
              "text-white cursor-pointer font-medium px-8 py-5",
              active === tab &&
                "bg-gray-200 rounded-[13px] font-bold text-[rgba(61,70,51,1)] z-10"
            )}
            onClick={() => setActive(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center mt-10 h-max"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="w-max mx-auto justify-between border p-12 rounded-3xl relative overflow-hidden flex grb flex-wrap gap-10 ">
          {pricingData[active].map((plan, i) => (
            <motion.div
              className={`z-10 flex flex-row  max-sm:w-full max-md:items-center max-lg:justify-center`}
              key={`${plan.name}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="gap-8 flex flex-col">
                <h3 className="text-3xl font-bold z-10 relative">
                  {plan.name}
                </h3>
                <motion.div
                  className={cn(
                    "rounded-md p-[2px]",
                    plan.name == "Pro"
                      ? "bg-white"
                      : "bg-gradient-to-r from-green-500 to-green-900"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={cn(
                      "font-bold text-[13px] px-12 py-3 w-full h-full text-white bg-transparent border-none rounded-md",
                      plan.name == "Pro" ? "text-black bg-white" : "grn"
                    )}
                  >
                    Buy for {plan.price}$
                  </Button>
                </motion.div>

                <ul className="space-y-4 z-10 relative">
                  {plan.features.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Check className="w-5 text-slate-50 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "w-0.5 h-full top-[3135px] left-[549px] border-t border-transparent border-opacity-50 bg-gradient-to-b mx-20 from-transparent via-white to-transparent lg:block hidden",
                  i == 2 && "lg:hidden"
                )}
              />
            </motion.div>
          ))}

          <motion.div
            className="absolute bottom-0 right-0 -translate-x-1/2 bg-gradient-to-r w-1/3 h-1/3 rounded-full z-0 blur-3xl from-gray-700 via-green-900 to-black"
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
        </div>
      </motion.div>
    </div>
  );
}
