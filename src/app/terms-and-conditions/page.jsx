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

export default function TermsAndConditions() {
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
        Terms and Conditions
      </motion.h1>
      <motion.div
        className="p-8 rounded-lg shadow-lg"
        variants={containerVariants}
      >
        {[
          {
            title: "1. Acceptance of Terms",
            content: [
              "By accessing and using Lincify Media's services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
              "We reserve the right to modify these terms at any time without prior notice. Your continued use of our services following any changes indicates your acceptance of the new terms.",
            ],
          },
          {
            title: "2. Description of Services",
            content: [
              "Lincify Media provides a range of digital marketing services including but not limited to:",
              "• Content creation and curation",
              "• YouTube channel automation",
              "• Personal branding strategies",
              "• Social media marketing",
              "• Search engine optimization (SEO)",
              "• Email marketing campaigns",
              "The specific services provided will be as agreed upon in the service contract between Lincify Media and the client.",
            ],
          },
          {
            title: "3. User Responsibilities",
            content: [
              "As a user of our services, you agree to:",
              "• Provide accurate and complete information as required for service delivery",
              "• Maintain the confidentiality of any account credentials provided",
              "• Notify us immediately of any unauthorized use of your account",
              "• Use our services in compliance with all applicable laws and regulations",
              "• Not engage in any activity that interferes with or disrupts our services",
            ],
          },
          {
            title: "4. Intellectual Property Rights",
            content: [
              "All content produced by Lincify Media, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Lincify Media or its content suppliers and is protected by international copyright laws.",
              "The client may only use this content as expressly authorized by us. Any unauthorized use, reproduction, or distribution of our content may violate copyright, trademark, and other laws and could result in legal action.",
            ],
          },
          {
            title: "5. Limitation of Liability",
            content: [
              "Lincify Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.",
              "We do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We are not responsible for any loss of data or any other consequences resulting from such interruptions.",
            ],
          },
          {
            title: "6. Termination",
            content: [
              "We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.",
              "Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination.",
            ],
          },
          {
            title: "7. Governing Law",
            content: [
              "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
              "Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.",
            ],
          },
          {
            title: "8. Contact Information",
            content: [
              "For any questions regarding these Terms and Conditions, please contact us at:",
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
