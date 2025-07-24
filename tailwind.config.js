/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ff5700",
      },
      fontFamily: {
        "inter-light": ["Inter-Light", "sans-serif"],
        inter: ["Inter-Regular", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
