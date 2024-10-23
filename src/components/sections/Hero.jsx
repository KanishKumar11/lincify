"use client";
import React, { useEffect, useRef } from "react";
import { Badge } from "lucide-react";
import RetroGrid from "../ui/Grid";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import Notification from "../Notification";
import Notification2 from "../Notification2";

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative max-w-full mx-auto z-1">
        <RetroGrid />

        <ScrollParallax isAbsolutelyPositioned>
          <Notification
            className="hidden absolute right-10 bottom-2/3 w-[18rem] xl:flex"
            title="Our Happy customers"
          />
        </ScrollParallax>
        <ScrollParallax isAbsolutelyPositioned>
          <Notification2
            className="hidden absolute left-10 top-1/3 w-[18rem] xl:flex"
            title="Thriving Businesses Everywhere!"
          />
        </ScrollParallax>
        <div className="md:absolute lg:top-1/4 top-1/2 lg:right-1/3 right-0 w-[60px] rounded-full hidden ">
          <Image
            src="/arrow.gif"
            alt=""
            width={100}
            height={50}
            className="opacity-60"
          />
        </div>
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center z-10 relative">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block hover:scale-105 transition-transform">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10 text-sm">
                <span>Elevate Your Brand</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>

            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
              className="text-4xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl"
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

            <div className="z-10 items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium text-gray-50 backdrop-blur-3xl hover:scale-105 transition-transform">
                  <a
                    href="javascript:void(0)"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10 text-lg"
                  >
                    Book a call
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="-mt-40 mx-10">
            <div className="gradient-02 z-0 " />
            <div className="overflow-y-hidden lg:-mt-40 -mt-20">
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
