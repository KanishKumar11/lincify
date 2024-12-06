"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RefundAndCancellation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto px-4 py-8 max-w-7xl"
    >
      <Navbar />
      <motion.h1
        className="text-5xl font-bold text-accent my-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Refund and Cancellation Policy
      </motion.h1>
      <motion.div
        className="p-8 rounded-lg shadow-lg"
        variants={containerVariants}
      >
        {[
          {
            title: "1. Cancellation Policy",
            content: [
              "You may cancel your service at any time by contacting us via email or phone. The cancellation will be effective at the end of your current billing cycle.",
              "For project-based services, cancellation terms will be as specified in your individual service agreement.",
            ],
          },
          {
            title: "2. Refund Policy",
            content: [
              "We offer a 7-day money-back guarantee for our subscription-based services. If you are not satisfied with our services within 7 days of purchase, you may request a full refund.",
              "For project-based services, refunds will be handled on a case-by-case basis, depending on the amount of work completed and resources allocated.",
            ],
          },
          {
            title: "3. Refund Process",
            content: [
              "To request a refund, please contact us within the specified refund period. Refund requests should be sent to Lincifymedia@gmail.com.",
              "Please provide your order number and a brief explanation of why you're requesting a refund.",
              "Refunds will be processed within 5-10 business days and will be issued using the original payment method.",
            ],
          },
          {
            title: "4. Exceptions",
            content: [
              "Refunds may not be available for:",
              "• Custom or bespoke services",
              "• Services that have been fully delivered",
              "• Digital products that have been downloaded or accessed",
              "• Services cancelled after the refund period",
              "We reserve the right to refuse a refund if we suspect fraud or misuse of our services.",
            ],
          },
          {
            title: "5. Partial Refunds",
            content: [
              "In some cases, we may issue partial refunds. This could occur if:",
              "• Only part of the contracted services have been delivered",
              "• There are extenuating circumstances that prevent full service delivery",
              "Partial refunds will be calculated based on the proportion of services delivered or time elapsed, whichever is greater.",
            ],
          },
          {
            title: "6. Cancellation Fees",
            content: [
              "For certain services, particularly those involving significant upfront work or resource allocation, a cancellation fee may apply. Any applicable cancellation fees will be clearly communicated in your service agreement.",
            ],
          },
          {
            title: "7. Changes to This Policy",
            content: [
              "We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting to our website.",
              "It is your responsibility to review this policy periodically for changes. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.",
            ],
          },
          {
            title: "8. Contact Information",
            content: [
              "If you have any questions about this Refund and Cancellation Policy, please contact us at:",
              "Email: Lincifymedia@gmail.com",
              "Phone: +919266866692",
            ],
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            className="content-section mb-8"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-accent mb-4">
              {section.title}
            </h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4">
                {paragraph}
              </p>
            ))}
          </motion.section>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
}
