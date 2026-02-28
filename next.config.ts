import type { NextConfig } from "next";
import { races } from "./lib/data";

const nextConfig: NextConfig = {
  async redirects() {
    return races.map((r) => ({
      source: `/races/${r.id}`,
      destination: `/races/${r.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;