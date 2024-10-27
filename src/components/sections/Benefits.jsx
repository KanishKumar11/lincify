"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../Heading";
import Section from "./Section";
const benefits = [
  {
    id: "0",
    title: "Content Strategy Development",
    text: "We create a tailored content strategy aligned with your brand’s goals to engage your audience and drive results.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/benefits/image-2.png",
  },
  {
    id: "1",
    title: "SEO-Friendly Content Creation",
    text: "We produce SEO-driven content to increase your visibility and attract organic traffic.",
    backgroundUrl: "/benefits/card-2.svg",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/benefits/image-2.png",
    light: true,
  },
  {
    id: "2",
    title: "Social Media Management",
    text: "From engaging posts to strategic campaigns, we manage your social media to grow your brand.",
    backgroundUrl: "/benefits/card-3.svg",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/benefits/image-2.png",
  },
  {
    id: "3",
    title: "Visual Content Creation",
    text: "Eye-catching graphics and videos that boost your brand’s message and appeal to your audience.",
    backgroundUrl: "/benefits/card-4.svg",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/benefits/image-2.png",
    light: true,
  },
  {
    id: "4",
    title: "Content Distribution & Promotion",
    text: "We strategically distribute and promote your content to maximize reach and engagement.",
    backgroundUrl: "/benefits/card-5.svg",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/benefits/image-2.png",
    light: true,
  },
  {
    id: "5",
    title: "Analytics & Performance Tracking",
    text: "We track and analyze performance to optimize your content strategy and drive ongoing success.",
    backgroundUrl: "/benefits/card-6.svg",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/benefits/image-2.png",
  },
];

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Services designed for Everyone"
          gradientText="Services"
          tag="Our Services"
          text="Our content experts design a blueprint tailored to your brand’s needs, ensuring every piece of content aligns with your marketing goals."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <BenefitCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const BenefitCard = ({ item, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${item.backgroundUrl})`,
      }}
    >
      <motion.div
        className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="flex items-center mt-auto">
          <img src={item.iconUrl} width={48} height={48} alt={item.title} />
          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Book Call
          </p>
          <Arrow />
        </div>
      </motion.div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity"
          whileHover={{ opacity: 0.1 }}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </div>

      <ClipPath />
    </motion.div>
  );
};

export default Benefits;

const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};
const Arrow = () => {
  return (
    <svg className="ml-5 fill-n-1" width="24" height="24">
      <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
    </svg>
  );
};

const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};
