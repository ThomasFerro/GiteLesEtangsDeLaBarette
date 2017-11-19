<template>
  <footer>
    <p v-for="element in content">
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

<style lang="scss">
p {
  margin: 0;
}
</style>
