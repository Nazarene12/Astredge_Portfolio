/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#FFFFFF", // Custom primary color
        textSecondary: "#0D141C", // Custom secondary color
        textHighlight: "#4A739C", // Custom highlight color
        primaryBackground: "#FFFFFF",
        secondaryBackground: "#E8EDF5",
        teritaryBackground: "#F7FAFC",
        highlightBackground: "#0D80F2",
        borderPrimary: "#CFDBE8",
      },
    },
  },
  plugins: [],
};
