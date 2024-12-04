import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip);

// Image URLs (extracted from original HTML)
const IMAGE_URLS = [
  "https://assets.codepen.io/756881/amys-1.jpg",
  "https://assets.codepen.io/756881/amys-2.jpg",
  "https://assets.codepen.io/756881/amys-3.jpg",
  "https://assets.codepen.io/756881/amys-4.jpg",
  "https://assets.codepen.io/756881/amys-5.jpg",
  "https://assets.codepen.io/756881/amys-6.jpg",
  "https://assets.codepen.io/756881/amys-7.jpg",
];

const SpinnyFlipz = () => {
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(null);
  const imagesRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Setup wheel positioning
    const setup = () => {
      const wheel = wheelRef.current;
      const images = imagesRef.current;
      const radius = wheel.offsetWidth / 2;
      const center = radius;
      const slice = 360 / images.length;
      const DEG2RAD = Math.PI / 180;

      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
        scale: 1,
      });
    };

    // Wheel rotation animation
    const rotateWheel = () => {
      const wheel = wheelRef.current;
      const images = imagesRef.current;
      const section = sectionRef.current;

      gsap.to(images, {
        rotation: (i) => `+=${360}`,
        ease: "none",
        duration: images.length,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Arrow animation
      gsap.to(".spinny-arrow", {
        y: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    };

    setup();
    rotateWheel();

    // Resize listener
    const resizeHandler = () => setup();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // ... rest of the component code remains the same

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div
        ref={headerRef}
        className="fixed top-0 left-0 w-full h-[60vh] flex items-center justify-center cursor-pointer z-50"
        // onClick={closeCard}
      />

      <section className="relative h-[200vh] w-full flex items-center justify-center">
        <div
          ref={wheelRef}
          className="sticky top-1/2 flex items-center justify-center w-[300vw] h-[300vw] max-w-[2000px] max-h-[2000px] transform -translate-y-1/2"
        >
          {[...IMAGE_URLS, ...IMAGE_URLS, ...IMAGE_URLS].map((url, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="absolute w-[6%] max-w-[200px] aspect-square cursor-pointer"
              // onClick={(e) => onCardClick(e, e.currentTarget)}
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="absolute w-full pointer-events-none z-[999] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-black uppercase text-sm font-light text-center">
        Scroll down
        <div
          className="spinny-arrow relative top-0 mx-auto w-[15px] h-[15px]"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+")`,
            backgroundSize: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default SpinnyFlipz;
