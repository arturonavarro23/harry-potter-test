/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/src/assets/bg.svg')",
        houses: "url('/src/assets/bg-houses.svg')",
        gryffindor: "url('/src/assets/houses/gryffindor.svg')",
        slytherin: "url('/src/assets/houses/slytherin.svg')",
        hufflepuff: "url('/src/assets/houses/hufflepuff.svg')",
        ravenclaw: "url('/src/assets/houses/ravenclaw.svg')",
      },
      fontFamily: {
        NeueMontrealRegular: ['NeueMontreal-Regular'],
        NeueMontrealMedium: ['NeueMontreal-Medium'],
        PPEikoMedium: ['PPEiko-Medium'],
        PPEikoThin: ['PPEiko-Thin'],
      },
    },
  },
  plugins: [],
}
