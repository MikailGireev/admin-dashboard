<script setup lang="ts">
type Props = {
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: string;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'red' | 'green' | 'trend-label';
  weight?: 'normal' | 'bold' | 'light' | 'medium';
};

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
