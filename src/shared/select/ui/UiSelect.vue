<script setup lang="ts">
import { Icon } from '@/shared/icon';
</script>

<template>
  <div class="select-wrapper">
    <select class="select" name="month" id="month-select">
      <option value="">
        <Typography tag="span">October</Typography>
      </option>
      <option value="January">
        <Typography tag="span">January</Typography>
      </option>
    </select>
    <Icon class="select-icon" name="drop-down" />
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {
  position: relative;

  .select {
    width: 104px;
    padding: 9px 16px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    color: #d5d5d5;

    appearance: none;
  }

  .select-icon {
    position: absolute;
    top: 5px;
    right: 16px;

    :deep(svg) {
      fill: #d5d5d5;
      opacity: 0.5;
    }
  }
}
</style>
