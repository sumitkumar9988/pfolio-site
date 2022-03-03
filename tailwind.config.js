module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body:'avenir',
        heading:'avenir-black',
      },
      borderRadius: {
       
        '4xl': '30px',
      }
    },
  },
  plugins: [],
}
