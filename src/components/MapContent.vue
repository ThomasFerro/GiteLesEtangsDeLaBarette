<template>
  <!-- TODO: REPLACE WITH GOOGLE API -->
  <a :href="mapLink" target="_BLANK">
    <img :src="pictureSource" alt="Carte"></img>
  </a>
</template>

<script>
export default {
  name: 'map-content',
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    mapLink() {
      return this.content && this.content.link;
    },
    pictureSource() {
      let imageSource = '';
      if (this.content && this.content.src) {
        try {
          imageSource = require(`../assets/${this.content.src}`);
        } catch (e) { } // eslint-disable-line no-empty
      }
      return imageSource;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  height: 200px;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
}
</style>
