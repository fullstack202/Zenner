module.exports = {
  purge: {},
  theme: {
    extend: {
      backgroundImage: theme => ({
        '01': "url('/assets/img/bg1.jpg')",
        '02': "url('/assets/img/bg2.jpg')",
        '03': "url('/assets/img/bg3.jpg')",
        '04': "url('/assets/img/bg4.jpg')",
      }),
      colors: {
        'primary': '#391F75',
        'primary_light': '#7000FF'
      }
    },
  },
  variants: {},
  plugins: [],
};
