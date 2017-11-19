<template>
  <carousel :per-page="1" :per-page-custom="[[800, 2]]">
    <template v-if="content && content.length > 0">
      <slide class="slide" v-for="picture in content" :key="picture.name">
        <img :src="getPictureSource(picture.src)" :title="picture.name" :alt="picture.name"></img>
      </slide>
    </template>
    <slide class="slide" v-else>
      Aucune image disponible
    </slide>
  </carousel>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'pictures-slider',
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getPictureSource(src) {
      let imageSource = '';
      try {
        imageSource = require(`../assets/${src}`);
      } catch (e) { } // eslint-disable-line no-empty
      return imageSource;
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss">
@import '../main';

.slide {
  display: flex;
  justify-content: center;

  img {
    height: 200px;
  }
}
</style>
