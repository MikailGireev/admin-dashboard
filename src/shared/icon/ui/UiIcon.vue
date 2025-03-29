<script setup lang="ts">
import { computed } from 'vue';
import type { Props } from '../types/icon';

const props = defineProps<Props>();

const iconPath = computed(() => {
  return new URL(`./icons/${props.name}.svg`, import.meta.url).href;
});
</script>

<template>
  <img
    :src="iconPath"
    :alt="name"
    :class="`icon icon--${props.class} ${props.color ? 'icon--' + props.color : ''}`"
    :width="props.size"
  />
</template>

<style scoped lang="scss"></style>
