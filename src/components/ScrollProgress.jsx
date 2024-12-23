"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    // Trigger initial calculation on mount
    updateScrollProgress();

    return () => {
      // Clean up event listener
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        borderRadius: "0 0 3px 3px",
        backgroundColor: "#22dd73",
        zIndex: 9999,
      }}
    />
  );
}
