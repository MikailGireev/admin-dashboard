<script setup lang="ts">
import type { Props } from '../types/input';

defineProps<Props>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input__wrapper">
    <slot name="left--icon"></slot>
    <input
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input"
      :type="type"
      :placeholder="placeholder"
      :style="{ width: width }"
    />
    <slot name="right--icon"></slot>
  </div>
</template>

<style scoped lang="scss">
.input__wrapper {
  position: relative;
  border: 1px solid #d5d5d5;
  border-radius: 19px;
  background-color: #f5f6fa;

  .input {
    outline: none;
    position: relative;
    border-radius: 19px;
    padding: 10px 16px;
    border: none;
    background-color: transparent;
  }
}
</style>
