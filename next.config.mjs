/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/lakay-pangasinan",
  assetPrefix: "/lakay-pangasinan/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;