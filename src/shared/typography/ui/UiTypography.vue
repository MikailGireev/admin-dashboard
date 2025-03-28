<script setup lang="ts">
import type { Props } from '../types/typography';

defineProps<Props>();
</script>

<template>
  <component :is="tag" :style="{ fontSize: size }" :class="`typography typography--${color}`"
    ><slot></slot
  ></component>
</template>

<style scoped>
.typography--primary {
  color: var(--color-primary);
}
</style>
