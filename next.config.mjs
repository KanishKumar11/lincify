/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "farmui.vercel.app",
      },
      {
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
