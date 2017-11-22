<template>
  <div class="content">
    <component v-for="element in content" :key="element.text"
      :is="getHtmlTag(element)"
      v-html="formatText(element.text)">
    </component>
  </div>
</template>

<script>
import { textToHtml } from '@/tools/textFormatting';

export default {
  name: 'text-content',
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    formatText(text) {
      return textToHtml(text);
    },
    getHtmlTag(element) {
      switch (element && element.type) {
        case 'italic':
        case 'i':
          return 'i';
        default:
          return 'p';
      }
    },
  },
};
</script>
