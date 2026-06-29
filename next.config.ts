import type { NextConfig } from "next";
import path from "path";

const config: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
  turbopack: {
    root: path.join(__dirname, "../"),
  },
};

export default config;
