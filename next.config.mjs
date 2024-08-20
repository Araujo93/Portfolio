/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /.*\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
