import localFont from "next/font/local";
import "./globals.css";
import RootProvider from "@/providers/RootProvider";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Inter({
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Transform Your Business with Powerful Content Strategies | Lincify",
  description:
    "At Lincify, we help businesses grow through impactful content strategies that drive engagement and results.",
  keywords:
    "content strategies, business growth, high-ticket sales, content marketing, engagement",
  authors: [{ name: "Kanish Kumar", url: "https://kanishkumar.in/" }],
  creator: "Kanish Kumar",
  publisher: "Lincify",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lincifymedia.com/",
    site_name: "Lincify Media",
    title: "Transform Your Business with Powerful Content Strategies | Lincify",
    description:
      "At Lincify, we help businesses grow through impactful content strategies that drive engagement and results.",
    images: [
      {
        url: "https://www.lincifymedia.com/meta.png",
        width: 1200,
        height: 630,
        alt: "Lincify - Empowering Business Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lincify",
    creator: "@lincify",
    title: "Transform Your Business with Powerful Content Strategies | Lincify",
    description:
      "At Lincify, we help businesses grow through impactful content strategies that drive engagement and results.",
    images: ["https://www.lincifymedia.com/meta.png"], // Add a relevant image URL for Twitter
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} $ antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
