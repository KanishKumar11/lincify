import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Simple() {
  const testimonials = [
    {
      quote:
        "The process begins by getting out what’s in your head, out of your head. We give you 100% clarity after taking short interviews, researching your ICP, building a brand story and other assets, helping you gain crystal clarity about your brand’s content direction",
      name: "Strategy and foundation",
      designation: "[1]",
      src: "/images/17.svg",
    },
    {
      quote:
        "Consistency means trust and with a solid foundation we will design the visual guidelines for editing your content. This builds authority and trust already warranted by your expertise.\nAlready have a brand? We will build a complimentary visual identity specific to videos",
      name: "Content Design",
      designation: "[2]",
      src: "/images/18.svg",
    },
    {
      quote:
        "This is where you invest 1 hour a week and record a podcast with an industry expert, interview with our team, or record long-form videos from the scripts we send.\nNo overthinking, no confusion - Always create with confidence",
      name: "Pre-Production",
      designation: "[3]",
      src: "/images/19.svg",
    },
    {
      quote:
        "We take all the raw content and our team turns it into authority-driven content that builds trust for your brand at scale. We create and post 20 videos a month on every platform mainly - Instagram, YouTube, and Linkedin",
      name: "Post-Production",
      designation: "[4]",
      src: "/images/20.svg",
    },
    {
      quote:
        "If you sell info-products we set automation and backend systems to predictably convert your followers into paying customers.",
      name: "Backend automation",
      designation: "[5]",
      src: "/images/21.svg",
    },
  ];
  return (
    <div className="py-20 snap-start">
      <h2 className="mx-auto text-balance text-6xl text-center max-w-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white mb-10   bg-gray-600 leading-[70px]">
        Simple{" "}
        <span className="relative bg-clip-text bg-gradient-to-b to-emerald-400  to from-emerald-900 underline underline-offset-[10px] w-max inline-block ">
          5-step process
          <div className="h-1 w-full bg-emerald-400" />
        </span>{" "}
        to make your brand{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b to-emerald-400  to from-emerald-900 underline underline-offset-2 inline-block relative w-max">
          Go Big
          <div className="h-1 w-full bg-emerald-400 " />
        </span>
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
