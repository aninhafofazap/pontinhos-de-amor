import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st.depositphotos.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.elo7.com.br",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dcdn.mitiendanube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kleincode.blob.core.windows.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
