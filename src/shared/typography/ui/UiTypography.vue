<script setup lang="ts">
import type { Props } from '../types/typography';

defineProps<Props>();
</script>

<template>
  <component
    :is="tag"
    :style="{ fontSize: size, fontWeight: weight }"
    :class="`typography typography--${color}`"
    ><slot></slot
  ></component>
</template>

<style scoped>
.typography--primary {
  color: var(--color-primary);
}

.typography--error,
.typography--red {
  color: var(--color-error);
}

.typography--success,
.typography--green {
  color: var(--color-success);
}

.typography--trend-label {
  color: var(--color-trend-label);
}
</style>
