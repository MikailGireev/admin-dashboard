<script setup lang="ts">
import BarChart from '@/shared/bar-chart/ui/BarChart.vue';
import { Typography } from '@/shared/typography';

import { useChartStore } from '../model/chartStore';

import { onMounted } from 'vue';
import { Select } from '@/shared/select';

interface Props {
  title: string;
}

defineProps<Props>();

const store = useChartStore();
const { chartData, chartOptions, setChartData, setChartOptions } = store;

onMounted(() => {
  setChartData({
    labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [
      {
        label: 'Sales',
        data: [20, 40, 30, 65, 45, 50, 30, 60, 40, 55, 52, 58],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 1,
      },
    ],
  });

  setChartOptions({
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        type: 'linear',
        min: 20,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (val: number | string) => `${val}%`,
        },
      },
    },
  });
});
</script>

<template>
  <div class="analytics-chart">
    <div class="analytics-chart__title">
      <Typography tag="h2">{{ title }}</Typography>
      <Select />
    </div>
    <BarChart
      class="analytics-chart__chart"
      width="100%"
      height="100%"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
  </div>
</template>

<style scoped lang="scss">
.analytics-chart {
  padding: 32px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 14px;

  &__title {
    display: flex;
    justify-content: space-between;
  }

  &__chart {
    margin-top: 58px;
  }
}
</style>
