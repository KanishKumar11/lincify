import React from "react";
import { motion } from "framer-motion";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import BookACall from "../BookACall";

export default function Talk() {
  return (
    <motion.div
      className="h-screen relative overflow-hidden mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-20">
        {" "}
        <VelocityScroll
          text="Let&#39;s talk "
          default_velocity={4}
          className="font-display text-center text-[130px] font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-[250px] md:leading-[15rem] my-20 z-10 relative"
        />
      </div>
      <motion.div
        className="mt-20 mx-auto flex items-center flex-col justify-center gap-5 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="font-medium text-5xl text-center relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Contact our friendly team
        </motion.h2>
        <motion.p
          className="text-sm font-medium text-center max-w-md text-slate-300 text-balance"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Enough of generic videos edited for the sake of editing. Let us know
          how we can help, Our team of experts are here to help.
        </motion.p>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-10"
        >
          {/* <Button

            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#D9D9D9]/20 px-8 text-white rounded-2xl my-10 z-10 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </Button> */}
          <BookACall />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 bg-green-500/60 blur-[50px] h-20 w-40 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
      <motion.div
        initial={{
          // x: "-300px",
          scale: 1.3,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        className="
           h-60 w-60 lg:h-[500px] lg:w-[500px] rounded-full
          absolute top-0 left-10 z-0 -translate-x-1/2
          "
      >
        <Image src="/images/15.svg" fill alt="" />
      </motion.div>
      <motion.div
        initial={{
          // x: "-300px",
          scale: 1.3,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        className="
           h-40 w-40 lg:h-80 lg:w-80 rounded-full
          absolute top-40 left-[500px] z-0 -translate-x-1/2
          "
      >
        <Image src="/images/16.svg" fill alt="" />
      </motion.div>
    </motion.div>
  );
}
