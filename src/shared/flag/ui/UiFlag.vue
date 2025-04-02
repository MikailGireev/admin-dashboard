<script setup lang="ts">
import type { Props } from '../types/flag';

defineProps<Props>();
</script>

<template>
  <img :class="`flag flag-${name}`" :src="`${url}`" alt="flag" :width="width" />
</template>

<style scoped lang="scss"></style>
