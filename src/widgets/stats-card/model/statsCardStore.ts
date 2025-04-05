import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { StatsCard } from './types';

export const useStatsCardStore = defineStore('stats-card', () => {
  const statsCard = ref<StatsCard[]>([
    {
      icon: 'total-user',
      title: 'Total Users',
      value: '40,689',
      trend: {
        percent: '8.5%',
        direction: 'trending-up',
        color: 'green',
        label: 'Up from yesterday',
      },
    },
    {
      icon: 'total-order',
      title: 'Total Orders',
      value: '10293',
      trend: {
        percent: '1.3%',
        direction: 'trending-up',
        color: 'red',
        label: 'Up from yesterday',
      },
    },
    {
      icon: 'total-sales',
      title: 'Total Sales',
      value: '$89,000',
      trend: {
        percent: '4.3%',
        direction: 'trending-down',
        color: 'green',
        label: 'Down from yesterday',
      },
    },
    {
      icon: 'total-pending',
      title: 'Total Pending',
      value: '2040',
      trend: {
        percent: '1.8%',
        direction: 'trending-up',
        color: 'green',
        label: 'Up from yesterday',
      },
    },
  ]);

  return { statsCard };
});
