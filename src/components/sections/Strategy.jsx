import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Strategy() {
  const data = [
    {
      title: "Step 1: Discovery & Strategy",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We analyze your brand and create a custom content strategy aligned
            with your goals.
          </p>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            <Image
              src="/strategy/1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/strategy/2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover  h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="gradient-02 z-0" />
        </div>
      ),
    },
    {
      title: "Step 2: Planning & Ideation",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developing a comprehensive content calendar to ensure consistency
            and quality.
          </p>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            <Image
              src="/strategy/3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/strategy/4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="gradient-01 z-0" />
        </div>
      ),
    },
    {
      title: "Step 3: Content Creation & Design",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our team creates compelling content, from blogs to social media
            assets, all optimized for performance.
          </p>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            <Image
              src="/strategy/5.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/strategy/6.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="gradient-02 z-0" />
        </div>
      ),
    },
    {
      title: "Step 4: Review & Feedback",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We collaborate with you for feedback to ensure the content matches
            your brand voice.
          </p>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            <Image
              src="/strategy/7.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/strategy/8.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="gradient-01 z-0" />
        </div>
      ),
    },
    {
      title: "Step 5: Publishing & Promotion",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Content is published across platforms, and we use tailored promotion
            strategies to maximize reach.
          </p>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            <Image
              src="/strategy/9.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/strategy/10.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
