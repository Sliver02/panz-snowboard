import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
