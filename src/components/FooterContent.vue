<template>
  <footer>
    <p v-for="element in content" :key="element">
      {{ element }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'footer-content',
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
p {
  margin: 0;
}

footer {
  font-size: 12px;
}
</style>
