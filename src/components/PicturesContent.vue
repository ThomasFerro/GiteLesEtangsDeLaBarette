<template>
  <carousel :per-page="1" :per-page-custom="[[800, 2]]">
    <template v-if="content && content.length > 0">
      <slide class="slide" v-for="(picture, index) in content" :key="index">
        <img :src="getPictureSource(picture.src)" :title="picture.name" :alt="picture.name"/>
      </slide>
    </template>
    <slide class="slide" v-else>
      Aucune image disponible
    </slide>
  </carousel>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
import PictureLoadingMixin from '@/mixins/pictureLoading';

export default {
  name: 'pictures-slider',
  mixins: [PictureLoadingMixin],
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
@import '../main';

.slide {
  display: flex;
  justify-content: center;

  img {
    height: 200px;
    max-width: 100%;
  }
}
</style>
