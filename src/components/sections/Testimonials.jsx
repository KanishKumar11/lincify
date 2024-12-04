import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const autoplay = useRef(null);

  const onSelect = () => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    autoplay.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(autoplay.current);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <motion.div
      className="justify-between border lg:p-12 py-4 rounded-l-3xl relative overflow-hidden flex grbt ml-5 flex-col gap-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-medium text-left mb-8 px-10 py-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Testimonials
      </motion.h2>
      <div className="px-4 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2 snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
          onClick={scrollPrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>
        <motion.button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
          onClick={scrollNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!canScrollNext}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button> */}
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ content, author }) => {
  return (
    <motion.div
      className="p-4 bg-[rgb(13,13,13)] text-white rounded-md shadow-md flex flex-col gap-5 min-w-[280px] py-8 px-10 lg:min-w-[400px] snap-start"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center space-x-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={author.image}
          alt={author.name}
          className="w-12 h-12 rounded-full aspect-auto object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{author.name}</h3>
          <p className="text-sm text-gray-400">{author.role}</p>
        </div>
      </motion.div>
      <motion.p
        className="mt-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

// Keep the testimonials data as it is

export default Testimonials;

// Testimonial data
const testimonials = [
  {
    content:
      "Lincify has been a game-changer for our content strategy. Their seamless process and attention to detail have boosted our brand’s visibility and engagement.",
    author: {
      name: "Jordan Lee",
      role: "CEO at Horizon Ventures",
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
  },
  {
    content:
      "The content Lincify creates consistently resonates with our audience. We've seen significant growth in both organic traffic and user engagement.",
    author: {
      name: "Linda Graham",
      role: "Founder of Elite Brands",
      image:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
  },
  {
    content:
      "Lincify has transformed our content marketing strategy. Their team helped us create compelling, SEO-optimized content that has driven incredible traffic to our site.",
    author: {
      name: "Michael Brown",
      role: "Director at GrowthWorks",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    content:
      "Working with Lincify has been an incredible experience. Their ability to create tailored content strategies has increased our engagement across all platforms.",
    author: {
      name: "Emily Clark",
      role: "COO at Market Leaders",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    content:
      "Lincify has been a game-changer for our content strategy. Their seamless process and attention to detail have boosted our brand’s visibility and engagement.",
    author: {
      name: "Jordan Lee",
      role: "CEO at Horizon Ventures",
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
  },
  {
    content:
      "The content Lincify creates consistently resonates with our audience. We've seen significant growth in both organic traffic and user engagement.",
    author: {
      name: "Linda Graham",
      role: "Founder of Elite Brands",
      image:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
  },
  {
    content:
      "Lincify has transformed our content marketing strategy. Their team helped us create compelling, SEO-optimized content that has driven incredible traffic to our site.",
    author: {
      name: "Michael Brown",
      role: "Director at GrowthWorks",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    content:
      "Working with Lincify has been an incredible experience. Their ability to create tailored content strategies has increased our engagement across all platforms.",
    author: {
      name: "Emily Clark",
      role: "COO at Market Leaders",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
];
