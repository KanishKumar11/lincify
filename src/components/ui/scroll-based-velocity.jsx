"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export function VelocityScroll({ text, className, speed = 10 }) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden whitespace-nowrap")}
    >
      <div
        className={cn("flex whitespace-nowrap gap-6 animate-marquee")}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
        <span className={className}>{text}</span>{" "}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
