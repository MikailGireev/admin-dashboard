<script setup lang="ts">
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

interface Props {
  value?: number | string;
  title?: string;
  icon: string;
  trend: {
    percent: string;
    direction: 'trending-up' | 'trending-down';
    color: 'red' | 'green';
    label: string;
  };
}

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
      <div class="stats-card__trend">
        <Icon :name="trend?.direction" />
        <Typography size="12px" :color="trend.color" tag="span"> {{ trend?.percent }} </Typography>
        <Typography color="trend-label" size="14px" tag="span">{{ trend?.label }}</Typography>
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

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

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

  .total-order {
    background-color: #fec53d33;
  }

  .total-sales {
    background-color: #4ad99133;
  }

  .total-pending {
    background-color: #ff906633;
  }

  .title__content {
    display: flex;
    justify-content: space-between;
  }

  &__trend {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
