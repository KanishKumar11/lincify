"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";

const Feedback = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row gap-6 flex-col"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-08 glassmorphism p-5"
      >
        <div className="gradient-05 z-0" />

        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Devansh
          </h4>
          <p className="mt-[8px] font-normal sm:text-[24px] text-[18px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Lincify
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[18px] text-[14px] sm:leading-[30px] leading-[26px] text-white">
          “At Lincify, our mission is to help businesses unlock their full
          potential through content strategies that not only engage but convert.
          Like a rocket soaring to new heights, we are here to propel your brand
          forward and ensure sustainable growth. “
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex relative flex-1 justify-center items-center"
      >
        <img
          src="./planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <div className="w-[155px] h-[155px] bg-white bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-[18px]">
              Book A Call
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
