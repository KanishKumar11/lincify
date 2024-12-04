import React from "react";
import { Badge } from "../ui/badge";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import BoxReveal from "../ui/box-reveal";

export default function Hero() {
  return (
    <div className="h-[80%] flex items-center justify-center flex-col gap-12 relative">
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
        <h1 className="font-medium lg:text-6xl text-5xl text-center text-balance  bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[rgba(7,243,176,0.7)] bg-clip-text text-transparent">
          Fuel Your Creativity
          <br /> Craft Content That Leaves a Mark!
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"rgba(7,243,176,1)"} duration={0.5}>
        <p className="text-[10px]  text-balance max-w-sm">
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
      <div className="h-10 p-5 absolute bottom-2 w-full flex items-center justify-between">
        <div className="flex gap-2">Follow Us</div>
        <div className="flex gap-1 text-white">
          Scroll <span className="text-[rgba(147,147,147,1)]"> to explore</span>
        </div>
      </div>
    </div>
  );
}
