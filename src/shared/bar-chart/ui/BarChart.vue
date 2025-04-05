<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

import type { Props } from '../types/bar-chart';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

defineProps<Props>();
</script>

<template>
  <Bar :height="height" :options="chartOptions" :data="chartData" id="my-chart-id" />
</template>

<style scoped lang="scss"></style>
