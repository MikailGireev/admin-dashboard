<script setup lang="ts">
import type { Props } from '../types/dadge';

defineProps<Props>();
</script>

<template>
  <span :class="`badge ${status}`">{{ status }}</span>
</template>

<style scoped langs="scss">
.badge {
  color: #fff;
  padding: 4px 14px;
  border-radius: 13.5px;
}

.delivered {
  background-color: var(--color-success);
}
.pending {
  background-color: var(--color-pending);
}
.rejected {
  background-color: var(--color-error);
}
</style>
