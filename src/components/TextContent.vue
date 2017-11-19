<template>
  <div class="content">
    <!-- TODO : Manage element.type and links -->
    <p v-for="element in content" :key="element.text">
      {{ element.text }}
    </p>
  </div>
</template>

<script>
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
};
</script>
