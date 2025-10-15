// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Разрешённые dev origins (предупреждение Dev Origin)
  allowedDevOrigins: ['http://localhost:3000', 'http://10.88.0.3:3000'],

  // Настройки изображений (если используешь next/image)
  images: {
    // если все изображения из public, можно оставить пустым.
    // Если позже подключишь внешние, добавь домены:
    // domains: ['example.com', 'another-cdn.com']
  },

  // SWC трансформы: обычно дефолтные значения подходят
  compiler: {
    // Можно включить конвертацию styled-components / emotion и т.п.
    // styledComponents: true,
  },

  // При необходимости — экспорт для GitHub Pages
  // Если будешь делать export: next export, проверь basePath и assetPrefix для правильных путей.
};

export default nextConfig;
