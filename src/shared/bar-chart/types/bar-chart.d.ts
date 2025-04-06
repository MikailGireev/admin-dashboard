import type { ChartData, ChartOptions } from 'chart.js';

export type DataSets = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  borderWidth: number;
};

export type CharData = {
  labels: string[];
  datasets: DataSets[];
};

export type Props = {
  chartData: ChartData<'bar'>;
  chartOptions: ChartOptions<'bar'>;
  height?: string;
  width?: string;
};
