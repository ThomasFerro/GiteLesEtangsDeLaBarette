<template>
  <div class="partners">
    <div
      class="partner"
      v-for="(partner, index) in content"
      :key="index"
    >
      <a
        :href="partner && partner.link"
        target="_blank"
        :title="partner && partner.title"
      ><img :src="getPictureSource(partner && partner.image)" :alt="partner && partner.title"></a>
    </div>
  </div>
</template>

<script>
import PictureLoadingMixin from '@/mixins/pictureLoading';

export default {
  name: 'partners-content',
  mixins: [PictureLoadingMixin],
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../main';

.partners {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .partner {
    height: 50px;
    width: 50px;
    text-decoration: none;

    a, img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
