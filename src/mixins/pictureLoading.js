export default {
  methods: {
    getPictureSource(src) {
      let imageSource = '';
      try {
        imageSource = require(`../assets/${src}`);
      } catch (e) { } // eslint-disable-line no-empty
      return imageSource;
    },
  },
};
