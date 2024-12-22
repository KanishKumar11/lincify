"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="absolute w-[244px] h-[340px] bottom-0 left-[-67px] opacity-[0.3] bg-[#FDF8B3] blur-[129.7px]" />
      <div
        className="absolute w-[94px] h-[372px] -top-[156px] left-1/4 rotate-[25.62deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(61,70,51,0.8), rgba(61,70,51,0.5))",
          backgroundSize: "400% 400%",
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />
      <div
        className="absolute w-[292px] h-[550px] lg:top-[46px] top-1/2 lg:left-[500px]"
        style={{
          background:
            "linear-gradient(to bottom right, #219B4B, #3EAD59, #9AA34F, #8cc655)",
          backgroundSize: "400% 400%",
          opacity: 0.3,
          filter: "blur(50px)",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      <Navbar />
      <Pricing />
      <Footer />
    </div>
  );
}
