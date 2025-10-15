// tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
  // Пути к файлам, где Tailwind ищет классы
  content: [
    "./pages/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}"
  ],

  // Для явного включения классов, которые могут не встретиться при сканировании
  safelist: [
    'bg-white',
    'text-gray-800',
    { pattern: /^bg-/ },
    { pattern: /^text-/ }
  ],

  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink
    },
    extend: {}
  },

  corePlugins: {
    backgroundColor: true,
    textColor: true,
    borderColor: true,
    divideColor: true,
    placeholderColor: true,
    caretColor: true
  },

  plugins: []
};
