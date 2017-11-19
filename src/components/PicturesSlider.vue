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
    source: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      pictures: [],
    };
  },
  watch: {
    source() {
      this.fetchPictures();
    },
  },
  methods: {
    fetchPictures() {
      console.log('fetch pictures from source', this.source);
      this.pictures = [{
        src: 'exterieur02-red.jpg',
        name: 'Vue du jardin',
      }, {
        src: 'exterieur02-red.jpg',
        name: 'Vue du jardin',
      }, {
        src: 'exterieur02-red.jpg',
        name: 'Vue du jardin',
      }, {
        src: 'exterieur02-red.jpg',
        name: 'Vue du jardin',
      }, {
        src: 'exterieur02-red.jpg',
        name: 'Vue du jardin',
      },
      ];
    },
    getPictureSource(src) {
      return require(`../assets/${src}`);
    },
  },
  components: {
    Carousel,
    Slide,
  },
  created() {
    this.fetchPictures();
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
