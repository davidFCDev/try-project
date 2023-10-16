/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creato: "Creato Display Regular",
        creatoBold: "Creato Display Bold",
        creatoLight: "Creato Display Light",
        creatoMedium: "Creato Display Medium",
        creatoSemiBold: "Creato Display SemiBold",
        creatoThin: "Creato Display Thin",
        creatoExtrBold: "Creato Display ExtraBold",
      }
    },
  },
  plugins: [],
}
