// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'vt-green-light': '#D9F99D',
//         'vt-green-dark': '#4B6A07',
//         'vt-gray-dark': '#53665D',
//       },
//       fontFamily: {
//         sans: ['Inter', 'ui-sans-serif', 'system-ui'],
//       },
//     },
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   darkMode: 'class', // Add this line
//   theme: {
//     extend: {
//       colors: {
//         'vt-green-light': '#D9F99D',
//         'vt-green-dark': '#4B6A07',
//         'vt-gray-dark': '#53665D',
//       },
//       fontFamily: {
//                montserrat: ['Montserrat', 'sans-serif'],
//                dmSans: ['DM Sans', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'vt-green-light': '#D9F99D',
        'vt-green-dark': '#4B6A07',
        'vt-gray-dark': '#53665D',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        roadMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
      },
      animation: {
        road: 'roadMove 10s linear infinite',
      },
    },
  },
  plugins: [],
}

