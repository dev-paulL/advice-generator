/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        body: "Manrope",
      },
      fontSize: {
        quote: "1.75rem",
      },
      boxShadow: {
        neon: "0 0 1.3rem 0.8rem rgba(82, 255, 168, 0.5)",
      },
    },
  },
  plugins: [],
};
