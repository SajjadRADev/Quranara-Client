import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias["yjs"] = path.resolve(__dirname, "node_modules/yjs");
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                hostname: "dl.quranara.com",
            },
            {
                hostname: "c938059.parspack.net",
            },
        ],
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
