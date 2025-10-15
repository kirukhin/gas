// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://localhost:3000', 'http://10.88.0.3:3000'],
  images: {
    // Отключаем Image Optimization при статическом экспорте
    unoptimized: true
  },
  compiler: {},
  eslint: { ignoreDuringBuilds: true },

  // Включаем статический экспорт (Next 15+)
  output: 'export'
};

export default nextConfig;
