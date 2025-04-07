<script setup lang="ts">
import router from '@/app/router';

import { computed } from 'vue';

import { Container } from '@/shared/container';
import { Typography } from '@/shared/typography';

import { DealsTable } from '@/widgets/deals-table';
import { ChartWindget } from '@/widgets/sales-chart';
import { StatsCard, useStatsCardStore } from '@/widgets/stats-card';

import { storeToRefs } from 'pinia';

const urlPath = computed(() => router.currentRoute.value.name);

const store = useStatsCardStore();
const { statsCard } = storeToRefs(store);
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
      <DealsTable />
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
