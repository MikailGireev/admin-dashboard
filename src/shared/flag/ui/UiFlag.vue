<script setup lang="ts">
interface Props {
  name?: string;
  width?: string;
  class?: string;
  url?: string;
}

defineProps<Props>();
</script>

<template>
  <img :class="`flag flag-${name}`" :src="`${url}`" alt="flag" :width="width" />
</template>

<style scoped lang="scss"></style>
