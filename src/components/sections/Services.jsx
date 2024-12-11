import React from "react";
import { Timeline } from "../ui/timeline";
import { Check, CheckIcon, UserCheck } from "lucide-react";
export const timelineData = [
  {
    title: "Personal Branding",
    content: ["Portfolio Creation", "LinkedIn Optimization"],
    description: "Build your online presence to stand out professionally.",
  },
  {
    title: "UGC Branding",
    content: ["Video Editing", "Reels Cover"],
    description:
      "Harness the power of authentic user-generated content to elevate your brand's trust and engagement.",
  },
  {
    title: "Marketing",
    content: ["SEO Strategies", "Social Media Campaigns"],
    description: "Boost your visibility and connect with your audience.",
  },
];

export default function Services() {
  return (
    <div
      className="lg:max-w-7xl relative mx-auto mb-20 max-w-[100vw] "
      id="services"
    >
      {" "}
      <Timeline data={timelineData} />
    </div>
  );
}
