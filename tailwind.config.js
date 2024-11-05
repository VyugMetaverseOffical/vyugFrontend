// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     // extend: {
//     //   colors: {
//     //     "grayscale-white": "#fff",
//     //     "corporate-black": "#242424",
//     //     black: "#000",
//     //     "greyscale-black": "#1a141f",
//     //     "greyscale-disabled": "#f1f1f1",
//     //     "greyscale-border": "#d8d8d8",
//     //     darkslategray: "rgba(50, 50, 50, 0.44)",
//     //   },
//     //   spacing: {},
//     //   fontFamily: {
//     //     "body-text-body-m-regular": "Montserrat",
//     //   },
//     //   borderRadius: {
//     //     "3xs": "10px",
//     //     "11xl": "30px",
//     //     "21xl": "40px",
//     //   },
//     // },
//     // fontSize: {
//     //   '4xl': '2.25rem', // Add text-6xl size
//     //   "3xl":	"1.875rem",
//     //   "5xl":	"3rem",
//     //   "2xl":"1.5rem",
//     // },
//     // screens: {
//     //   mq1350: {
//     //     raw: "screen and (max-width: 1350px)",
//     //   },
//     //   mq1150: {
//     //     raw: "screen and (max-width: 1150px)",
//     //   },
//     //   mq800: {
//     //     raw: "screen and (max-width: 800px)",
//     //   },
//     //   mq450: {
//     //     raw: "screen and (max-width: 450px)",
//     //   },
//     // },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  important: "#root",

  theme: {
    extend: {},
  },
  plugins: [],
}