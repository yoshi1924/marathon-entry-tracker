import type { NextConfig } from "next";
import { races } from "./lib/data";

const nextConfig: NextConfig = {
  async redirects() {
    // ‹ŒURL: /races/5 ¨ VURL: /races/chiba-aqualine-marathon-2026
    return races.map((r) => ({
      source: `/races/${r.id}`,
      destination: `/races/${r.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;