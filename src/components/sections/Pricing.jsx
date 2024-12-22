"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import CountrySelector, { countries } from "../CountrySelector";

const tabs = ["Personal Branding", "UGC Branding", "Marketing"];

const pricingData = {
  "Personal Branding": [
    {
      name: "Basic",
      price: { US: 399, IN: 29999, EU: 349, CA: 499 },
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: { US: 999, IN: 74999, EU: 849, CA: 1199 },
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: { US: 1299, IN: 99999, EU: 1149, CA: 1599 },
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
  "UGC Branding": [
    {
      name: "Basic",
      price: { US: 499, IN: 39999, EU: 449, CA: 649 },
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: { US: 899, IN: 69999, EU: 799, CA: 1099 },
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: { US: 1299, IN: 99999, EU: 1149, CA: 1599 },
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
  Marketing: [
    {
      name: "Basic",
      price: { US: 409, IN: 30999, EU: 359, CA: 559 },
      features: ["8:Videos"],
    },
    {
      name: "Pro",
      price: { US: 809, IN: 60999, EU: 709, CA: 999 },
      features: ["20:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
    {
      name: "Ultimate",
      price: { US: 1209, IN: 90999, EU: 1049, CA: 1399 },
      features: ["30:Videos", "Reel covers", "Sales Autopilot", "Facebook ADs"],
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState("Personal Branding");
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  return (
    <div
      className="max-w-7xl mx-auto my-20 flex flex-col gap-5 relative pricing-section py-20 overflow-hidden"
      id="pricing"
    >
      {/* Cursor follower */}

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
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CountrySelector
          selectedCountry={selectedCountry}
          onSelectCountry={handleCountryChange}
        />
      </motion.div>

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
                {/* <motion.div
                  className={cn(
                    "rounded-md p-[2px]",
                    plan.name === "Pro"
                      ? "bg-white"
                      : "bg-gradient-to-r from-green-500 to-green-900"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                > */}
                {/* <Button
                    className={cn(
                      "font-bold text-[13px] px-12 py-3 w-full h-full text-white bg-transparent border-none rounded-md",
                      plan.name === "Pro" ? "text-black bg-white" : "grn"
                    )}
                  >
                    Buy for {plan.price[selectedCountry]}{" "}
                    {
                      countries.find(
                        (country) => country.code === selectedCountry
                      ).currency
                    }
                  </Button> */}

                {/* </motion.div> */}
                <button className="uiverse">
                  <div className="wrapper">
                    <span>
                      {" "}
                      Buy for {plan.price[selectedCountry]}{" "}
                      {
                        countries.find(
                          (country) => country.code === selectedCountry
                        ).currency
                      }
                    </span>
                    <div className="circle circle-12"></div>
                    <div className="circle circle-11"></div>
                    <div className="circle circle-10"></div>
                    <div className="circle circle-9"></div>
                    <div className="circle circle-8"></div>
                    <div className="circle circle-7"></div>
                    <div className="circle circle-6"></div>
                    <div className="circle circle-5"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-1"></div>
                  </div>
                </button>
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
                  i === 2 && "lg:hidden"
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
