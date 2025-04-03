<script setup lang="ts">
import type { Props } from '../types/icon';
import { icnosMaps } from '../types/iconsMaps';

const props = defineProps<Props>();

const iconSvg = icnosMaps[props.name];
</script>

<template>
  <span
    :class="`icon ${props.class}`"
    v-html="iconSvg"
    :style="{ width: props.size, height: props.height }"
  ></span>
</template>

<style scoped lang="scss"></style>
