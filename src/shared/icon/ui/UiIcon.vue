<script setup lang="ts">
import { useAttrs } from 'vue';
import type { Props } from '../types/icon';
import { icnosMaps } from '../types/iconsMaps';

const props = defineProps<Props>();
const attrs = useAttrs();

const iconSvg = icnosMaps[props.name];
</script>

<template>
  <span
    v-bind="attrs"
    :class="`icon ${props.class}`"
    v-html="iconSvg"
    :style="{ width: props.size, height: props.height }"
  ></span>
</template>

<style scoped lang="scss"></style>
