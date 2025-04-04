<script setup lang="ts">
import { Typography } from '@/shared/typography';
import type { Props } from '../types/stats-card';
import { Icon } from '@/shared/icon';

defineProps<Props>();
</script>

<template>
  <div class="stats-card">
    <div class="stats-card__content">
      <div class="title__content">
        <div class="stats-card__title">
          <Typography size="16px" color="primary" tag="span">{{ title }}</Typography>
          <Typography size="28px" weight="bold" tag="p"> {{ value }}</Typography>
        </div>
        <div :class="`stats-card__icon ${icon}`">
          <Icon :name="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stats-card {
  width: 246px;
  height: 145px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 14px;

  &__icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .total-user {
    background-color: #8280ff33;
  }

  .title__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
