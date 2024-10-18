import Navbar from "@/components/Navbar";
import { AnimatedScroll } from "@/components/sections/AnimatedScroll";
import GlobalReach from "@/components/sections/GobalReach";
import Hero from "@/components/sections/Hero";
import Strategy from "@/components/sections/Strategy";
import Testimonials from "@/components/sections/Testimonials";
import { VelocityScroll } from "@/components/sections/VelocityScroll";
import React from "react";

export default function page() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Strategy />
      <GlobalReach />
      {/* <AnimatedScroll /> */}
      <Testimonials />
    </div>
  );
}
