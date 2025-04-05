<script setup lang="ts">
import BarChart from '@/shared/bar-chart/ui/BarChart.vue';
import { Icon } from '@/shared/icon';
import { Typography } from '@/shared/typography';
import type { Props } from '../types/analytics-chart';

defineProps<Props>();

const chartData = {
  labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
  datasets: [
    {
      label: 'Sales',
      data: [20, 40, 30, 65, 45, 50, 30, 60, 40, 55, 52, 58],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.5,
      fill: true,
      pointRadius: 4,
    },
  ],
};

const chartOptions = {
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
        callback: (val: number) => `${val}%`,
      },
    },
  },
};
</script>

<template>
  <div class="analytics-chart">
    <div class="analytics-chart__title">
      <Typography tag="h2">{{ title }}</Typography>
      <div class="select-wrapper">
        <select class="analytics-chart__select" name="month" id="month-select">
          <option value="">
            <Typography tag="span">October</Typography>
          </option>
          <option value="January">
            <Typography tag="span">January</Typography>
          </option>
        </select>
        <Icon class="select-icon" name="drop-down" />
      </div>
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

  &__select {
    width: 104px;
    padding: 9px 16px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    color: #d5d5d5;

    appearance: none;
  }

  &__chart {
    margin-top: 58px;
  }

  .select-wrapper {
    position: relative;
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
