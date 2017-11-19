<template>
  <carousel :per-page="1" :per-page-custom="[[800, 2]]">
    <slide class="slide" v-for="picture in pictures" :key="picture.name">
      <img :src="getPictureSource(picture.src)" :title="picture.name" :alt="picture.name"></img>
    </slide>
  </carousel>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'pictures-slider',
  props: {
    pictures: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getPictureSource(src) {
      return require(`../assets/${src}`);
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
