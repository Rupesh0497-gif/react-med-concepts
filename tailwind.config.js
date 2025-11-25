/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        brandBlue: "#0055FF",
        softGrey: "#F4F4F4",
        customGreen: "#00D27F",
      },
    },
  },
  plugins: [],
};
