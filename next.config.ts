import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://tjs-photo.fra1.cdn.digitaloceanspaces.com/**")],
    },
    headers: async () => {
        return [
            {
                source: "/:img(.+\\.(?:png|jpg|jpeg|gif|svg|webp))",
                headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
            },
        ];
    },
};

export default nextConfig;
