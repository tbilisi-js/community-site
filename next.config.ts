import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://tjs-photo.fra1.cdn.digitaloceanspaces.com/**")],
    },
};

export default nextConfig;
