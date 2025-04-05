<script setup lang="ts">
import router from '@/app/router';

import { Container } from '@/shared/container';
import { Typography } from '@/shared/typography';
import { ChartWindget } from '@/widgets/sales-chart';

import { StatsCard, useStatsCardStore } from '@/widgets/stats-card';

const urlPath = router.currentRoute.value.name;

const store = useStatsCardStore();
const { statsCard } = store;
</script>

<template>
  <Container>
    <div class="dashboard">
      <Typography tag="h1">{{ urlPath }}</Typography>
      <div class="dashboard__cards">
        <StatsCard
          v-for="(card, index) in statsCard"
          :key="index"
          :icon="card.icon"
          :title="card.title"
          :value="card.value"
          :trend="card.trend"
        />
      </div>
      <ChartWindget title="Sales" />
    </div>
  </Container>
</template>

<style scoped lang="scss">
.dashboard {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;

  &__cards {
    display: flex;
    gap: 30px;
  }
}
</style>
