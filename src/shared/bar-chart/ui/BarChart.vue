<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';


interface Props {
  chartData: ChartData<'bar'>;
  chartOptions: ChartOptions<'bar'>;
  height?: string;
  width?: string;
}

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

defineProps<Props>();
</script>

<template>
  <Bar :height="height" :options="chartOptions" :data="chartData" id="my-chart-id" />
</template>

<style scoped lang="scss"></style>
