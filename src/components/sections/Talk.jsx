import React from "react";
import { motion } from "framer-motion";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Talk() {
  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VelocityScroll
        text="Let&#39;s talk"
        default_velocity={4}
        className="font-display text-center text-[100px] font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-[250px] md:leading-[15rem] my-20"
      />
      <motion.div
        className="my-20 mx-auto flex items-center flex-col justify-center gap-5 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="font-medium text-5xl text-center"
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
        >
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#D9D9D9]/20 px-8 text-white rounded-2xl my-10 z-10 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </Button>
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
    </motion.div>
  );
}
