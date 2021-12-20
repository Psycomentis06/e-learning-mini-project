const skinColorOpacity = ({ opacityValue }, varName) => {
  if (opacityValue !== undefined) return `rgba(var(${varName}, ${opacityValue}))`;
  return `rgb(var(${varName}))`;
}

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      textColor: {
        skin: {},
      },
    },
  },
  plugins: [],
};
