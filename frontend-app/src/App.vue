<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => {
  // Check if the route has a layout defined in its meta
  if (route.meta.layout) {
    return route.meta.layout;
  }
  // Default to DefaultLayout if no specific layout is defined
  return 'DefaultLayout';
});

</script>
<template>
  <div>
    <component :is="layout" />
  </div>
</template>

