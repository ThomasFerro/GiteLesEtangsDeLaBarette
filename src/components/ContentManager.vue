<template>
  <div>
    <section v-for="element in content" :key="element.title">
      <h1>{{ element.title }}</h1>
      <component :is="getComponentFromType(element.type)" :content="element.content"></component>
    </section>
  </div>
</template>

<script>
import PicturesContent from './PicturesContent';
import PartnersContent from './PartnersContent';
import TextContent from './TextContent';
import ListContent from './ListContent';
import MapContent from './MapContent';
import FooterContent from './FooterContent';

export default {
  name: 'content-manager',
  props: {
    content: {
      type: [Object, Array],
      default() {
        return [];
      },
    },
  },
  methods: {
    getComponentFromType(type) {
      switch (type) {
        case 'pictures':
          return 'pictures-content';
        case 'partners':
          return 'partners-content';
        case 'list':
          return 'list-content';
        case 'map':
          return 'map-content';
        case 'footer':
          return 'footer-content';
        default:
          return 'text-content';
      }
    },
  },
  components: {
    PicturesContent,
    PartnersContent,
    TextContent,
    MapContent,
    ListContent,
    FooterContent,
  },
};
</script>
