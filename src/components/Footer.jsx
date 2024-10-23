"use client";

import { motion } from "framer-motion";
import { footerVariants } from "@/lib/motion";
const socials = [
  {
    name: "twitter",
    url: "./twitter.svg",
  },
  {
    name: "linkedin",
    url: "./linkedin.svg",
  },
  {
    name: "instagram",
    url: "./instagram.svg",
  },
  {
    name: "facebook",
    url: "./facebook.svg",
  },
];

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`p-8 relative`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="md:h-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Lincify</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright &copy; 2024 Lincify. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
