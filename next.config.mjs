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
  basePath: '',
  assetPrefix: '',

  // Включаем статический экспорт (Next 15+)
  output: 'export',

  // Рерайты — работают при запуске Next.js как серверного приложения.
  // Заметь: при `next export` эти рерайты могут не применяться на целевом хостинге.
  async rewrites() {
    return [
      { source: '/compressors', destination: '/categories/compressors' },
      { source: '/compressors/:rest*', destination: '/categories/compressors/:rest*' },

      { source: '/dryers', destination: '/categories/dryers' },
      { source: '/dryers/:rest*', destination: '/categories/dryers/:rest*' },

      { source: '/filters', destination: '/categories/filters' },
      { source: '/filters/:rest*', destination: '/categories/filters/:rest*' },

      { source: '/dcompressors', destination: '/categories/dcompressors' },
      { source: '/dcompressors/:rest*', destination: '/categories/dcompressors/:rest*' }
    ];
  }
};

export default nextConfig;
