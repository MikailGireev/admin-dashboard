import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { ChartData, ChartOptions } from 'chart.js';

export const useChartStore = defineStore('chart', () => {
  const chartData = ref<ChartData<'bar'>>({
    labels: [],
    datasets: [],
  });
  const chartOptions = ref<ChartOptions<'bar'>>({
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {},
  });

  const setChartData = (data: ChartData<'bar'>) => {
    chartData.value = data;
  };

  const setChartOptions = (options: ChartOptions<'bar'>) => {
    chartOptions.value = options;
  };

  return { chartData, chartOptions, setChartData, setChartOptions };
});
