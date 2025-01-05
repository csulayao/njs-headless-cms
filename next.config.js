/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolia-dusky.vercel.app",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
};
