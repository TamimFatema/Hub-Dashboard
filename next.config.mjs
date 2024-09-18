/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      API_KEY: "https://ecommerce.ctsgroupbd.com",
    },
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ecommerce.ctsgroupbd.com",
          port: "",
          pathname: "/storage/**",
        },
      ],
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  