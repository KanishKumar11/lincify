import React from "react";
import { Badge } from "../ui/badge";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import BoxReveal from "../ui/box-reveal";
import { motion } from "framer-motion";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowDown,
  ChevronDown,
} from "lucide-react";
const brands = ["/images/10.svg", "/images/11.svg", "/images/12.svg"];

export default function Hero() {
  return (
    <div className="h-[75%] lg:h-[80%] flex items-center justify-center flex-col gap-12 relative">
      <BoxReveal boxColor={"rgba(7,243,176,1)"} duration={0.5}>
        <div className="flex gap-2">
          <h2 className="text-[13px]">Effortless content creation for </h2>
          <Badge variant={"secondary"} className="">
            {" "}
            Brands
          </Badge>
        </div>
      </BoxReveal>
      <BoxReveal boxColor={"rgba(7,243,176,1)"} duration={0.5}>
        <h1 className="font-medium lg:text-6xl text-4xl text-center text-balance  bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[rgba(7,243,176,0.7)] bg-clip-text text-transparent">
          Fuel Your Creativity
          <br /> Craft Content That Leaves a Mark!
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"rgba(7,243,176,1)"} duration={0.5}>
        <p className="text-[10px]  text-balance max-w-sm text-center">
          We help entrepreneurs, creators, and VCs build distribution
          with organic videos, which predictably bring them more leads and
          revenue at scale.
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"rgba(7,243,176,1)"} duration={0.5}>
        <Image
          as={NextImage}
          alt=""
          src="/images/1.svg"
          width={120}
          height={38}
          className="hover:scale-110 transition-all ease-soft-spring"
        />
      </BoxReveal>
      <motion.div
        className="absolute lg:bottom-0 bottom-10 lg:py-8 py-4 rounded-2xl px-10 max-w-5xl   z-30 w-full flex flex-row flex-wrap gap-4 items-center  brands-section justify-center"
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
              className="max-h-[18px] sm:max-h-[24px] lg:max-h-[28px]  w-max"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute -bottom-6 ">
        <ArrowDown />
      </div>
    </div>
  );
}
