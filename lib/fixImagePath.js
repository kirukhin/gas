// /lib/fixImagePath.js

export function fixImagePath(path) {
  if (!path) return null;

  // Абсолютные URL – не трогаем
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Путь уже правильный
  if (path.startsWith('/assets/')) return path;

  // Удаляем возможные префиксы вида src/, public/, ./assets/
  const cleaned = path
    .replace(/^\.?\/*src\//, '')
    .replace(/^\.?\/*public\//, '')
    .replace(/^\.?\/*assets\//, '');

  return `/assets/${cleaned}`;
}
