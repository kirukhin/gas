// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: ['http://localhost:3000', 'http://10.88.0.3:3000'],

  images: {
    // Если все изображения из public, можно оставить пустым
    // Если позже подключишь внешние источники, добавь домены:
    // domains: ['example.com', 'another-cdn.com']
  },

  output: 'export',

  compiler: {
    // Если используешь styled-components или emotion, можно включить
    // styledComponents: true,
  },

  // Настройки ESLint
  eslint: {
    // Не останавливать сборку на ошибках ESLint
    ignoreDuringBuilds: true,

    // Встроенные правила ESLint можно оставить по умолчанию,
    // свои кастомные правила лучше описать в .eslintrc.json
  },
};

export default nextConfig;
