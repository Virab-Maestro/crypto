/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // new
    images: { // new
      unoptimized: true,
    },
    basePath: "/crypto", // new
    reactStrictMode: false,
};

export default nextConfig;
