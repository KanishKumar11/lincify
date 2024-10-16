import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Strategy() {
  const data = [
    {
      title: "Step 1: Discovery",
      content: (
        <div className="relative">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Understand client&#39;s business needs and goals through in-depth
            consultation.
          </p>
          <Image
            src="/1.jpeg"
            alt="discovery session"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[80%] shadow-lg"
          />
          <div className="gradient-02 z-0"/>
        </div>
      ),
    },
    {
      title: "Step 2: Strategy Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Craft a tailored marketing strategy to achieve client&#39;s
            high-ticket goals.
          </p>
          <Image
            src="/2.jpeg"
            alt="strategy development"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Step 3: Implementation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Execute the strategic plan with precision and adaptability.
          </p>
          <Image
            src="https://assets.aceternity.com/implementation.webp"
            alt="implementation"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Step 4: Monitoring & Optimization",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continuously monitor performance and refine strategies to ensure
            maximum ROI.
          </p>
          <Image
            src="https://assets.aceternity.com/monitoring-optimization.webp"
            alt="monitoring optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Step 5: Reporting & Scaling",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Provide comprehensive reports and identify scaling opportunities for
            growth.
          </p>
          <Image
            src="https://assets.aceternity.com/reporting-scaling.webp"
            alt="reporting scaling"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
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
