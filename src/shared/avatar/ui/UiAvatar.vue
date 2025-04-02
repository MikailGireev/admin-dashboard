<script setup lang="ts">
import type { Props } from '../types/avatar';

defineProps<Props>();
</script>

<template>
  <img :class="`avatar avatar-${role}`" :src="url" :alt="`${role} avatar`" />
</template>

<style scoped lang="scss"></style>
