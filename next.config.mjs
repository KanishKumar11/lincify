/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
