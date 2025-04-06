<script setup lang="ts">
interface Props {
  name?: string;
  width?: string;
  class?: string;
  role: string;
  url?: string;
}

defineProps<Props>();
</script>

<template>
  <img :class="`avatar avatar-${role}`" :src="url" :alt="`${role} avatar`" />
</template>

<style scoped lang="scss"></style>
