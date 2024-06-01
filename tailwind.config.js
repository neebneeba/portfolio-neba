/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lgxw: ["LXGW WenKai TC", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      aspectRatio: {
        square: "1/1",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
