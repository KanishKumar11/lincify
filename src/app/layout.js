import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Poppins,
  Sora,
  Source_Code_Pro,
  Space_Grotesk,
} from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sorag",
});
export const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-codeg",
});
export const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-groteskg",
});

export const metadata = {
  title: "Transform Your Business with Powerful Content Strategies | Lincify",
  description:
    "At Lincify, we help businesses grow through impactful content strategies that drive engagement and results.",
  keywords:
    "content strategies, business growth, high-ticket sales, content marketing, engagement",
  authors: [{ name: "Lincify" }],
  creator: "Lincify",
  publisher: "Lincify",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lincifymedia.com/",
    site_name: "Lincify",
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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${sora.variable}${source.variable} ${space.variable} ${sora.className} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
