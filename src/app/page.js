import { AnimatedScroll } from "@/components/sections/AnimatedScroll";
import Hero from "@/components/sections/Hero";
import Strategy from "@/components/sections/Strategy";
import Testimonials from "@/components/sections/Testimonials";
import React from "react";

export default function page() {
  return (
    <div className="bg-black">
      <Hero />
      <Strategy />
      {/* <AnimatedScroll /> */}
      <Testimonials />
    </div>
  );
}
