"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatedScroll } from "@/components/sections/AnimatedScroll";
import Benefits from "@/components/sections/Benefits";
import Feedback from "@/components/sections/Feedback";
import GlobalReach from "@/components/sections/GobalReach";
import Hero from "@/components/sections/Hero";
import Strategy from "@/components/sections/Strategy";
import Testimonials from "@/components/sections/Testimonials";
import { VelocityScroll } from "@/components/sections/VelocityScroll";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis on client-side
    const lenis = new Lenis({
      duration: 0.1, // Adjust the duration to control smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional easing function
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction, can be 'horizontal' too
      smoothTouch: false, // Disables smooth scrolling on touch devices
    });

    // Update function that is called every frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup when component unmounts
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black overflow-y-visible overflow-x-clip">
      <Navbar />
      <Hero />
      <Strategy />
      <GlobalReach />
      <Benefits />
      {/* <AnimatedScroll /> */}
      <Testimonials />
      <Feedback />
      <Footer />
    </div>
  );
}
