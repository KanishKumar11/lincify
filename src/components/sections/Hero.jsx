"use client";
import React from "react";
import { Badge, ChevronRight } from "lucide-react";
import RetroGrid from "../ui/Grid";
import { motion } from "framer-motion";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative">
      <section className="relative max-w-full mx-auto  z-1">
        <RetroGrid />

        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Elevate Your Brand
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
              className="text-4xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-6xl"
            >
              High-Ticket Marketing Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                Extraordinary Growth.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
              className="max-w-2xl mx-auto text-gray-300"
            >
              At Lincify, we craft tailored marketing strategies for high-ticket
              businesses. Our expert team ensures your brand stands out, driving
              exceptional growth and success.
            </motion.p>
            <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <a
                    href="javascript:void(0)"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10 text-lg"
                  >
                    Book a call
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="-mt-40 mx-10">
            {/* <img
              src="https://farmui.vercel.app/dashboard.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            /> */}
            <div class="gradient-02 z-0 " />
            <div className="overflow-hidden lg:-mt-80 -mt-40">
              <MacbookScroll
                badge={
                  <Link href="#">
                    <Badge className="h-10 w-10 transform -rotate-12" />
                  </Link>
                }
                src={`https://farmui.vercel.app/dashboard.png`}
                showGradient={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
