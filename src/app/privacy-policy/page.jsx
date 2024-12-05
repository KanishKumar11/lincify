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

export default function PrivacyPolicy() {
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
        Privacy Policy
      </motion.h1>
      <motion.div
        className="p-8 rounded-lg shadow-lg"
        variants={containerVariants}
      >
        {[
          {
            title: "1. Introduction",
            content: [
              "At Lincify Media, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.",
              "By using our services, you consent to the data practices described in this policy. We may update this policy from time to time, and we encourage you to review it periodically.",
            ],
          },
          {
            title: "2. Information We Collect",
            content: [
              "We collect several types of information from and about users of our services, including:",
              "• Personal identifiers such as name, email address, phone number, and billing information",
              "• Usage data including IP address, browser type, operating system, and pages visited",
              "• Marketing and communications preferences",
              "• Content you provide to us in relation to our services",
              "We collect this information when you provide it to us directly, automatically as you navigate through our services, or from third parties such as business partners and analytics providers.",
            ],
          },
          {
            title: "3. How We Use Your Information",
            content: [
              "We use the information we collect about you for various purposes, including:",
              "• Providing and maintaining our services",
              "• Processing transactions and sending related information",
              "• Responding to your comments, questions, and requests",
              "• Sending you technical notices, updates, security alerts, and support messages",
              "• Monitoring and analyzing trends, usage, and activities in connection with our services",
              "• Improving our services and developing new products and features",
              "• Personalizing your experience and delivering content relevant to your interests",
            ],
          },
          {
            title: "4. Disclosure of Your Information",
            content: [
              "We may disclose personal information that we collect or you provide:",
              "• To our subsidiaries and affiliates",
              "• To contractors, service providers, and other third parties we use to support our business",
              "• To fulfill the purpose for which you provide it",
              "• For any other purpose disclosed by us when you provide the information",
              "• With your consent",
              "• To comply with any court order, law, or legal process",
              "We do not sell, rent, or lease your personal information to third parties without your consent.",
            ],
          },
          {
            title: "5. Data Security",
            content: [
              "We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.",
              "While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
            ],
          },
          {
            title: "6. Your Rights and Choices",
            content: [
              "You have certain rights regarding your personal information, including:",
              "• The right to access and receive a copy of your personal information",
              "• The right to rectify or update your personal information",
              "• The right to erase your personal information in certain circumstances",
              "• The right to restrict or object to our processing of your personal information",
              "• The right to data portability in certain circumstances",
              "To exercise these rights, please contact us using the information provided at the end of this policy.",
            ],
          },
          {
            title: "7. Children's Privacy",
            content: [
              "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.",
            ],
          },
          {
            title: "8. Contact Information",
            content: [
              "If you have any questions or concerns about this Privacy Policy, please contact us at:",
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
