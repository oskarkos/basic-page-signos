module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ["Gotham", "sans-serif"],
      },
      dropShadow: {
        'logo': "0px 4.87671px 4.87671px rgba(0, 0, 0, 0.25)",
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
};
