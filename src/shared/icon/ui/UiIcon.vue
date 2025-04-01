<script setup lang="ts">
import type { Props } from '../types/icon';
import { icnosMaps } from '../types/iconsMaps';

const props = defineProps<Props>();

const iconSvg = icnosMaps[props.name];
</script>

<template>
  <span class="icon" v-html="iconSvg" :style="{ width: props.size }"></span>
</template>

<style scoped lang="scss"></style>
