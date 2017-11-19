<template>
  <ul>
    <li v-for="element in content" :key="element">
      {{ element }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list-content',
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
