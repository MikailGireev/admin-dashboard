export type DataSets = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension: number;
  fill: boolean;
  pointRadius: number;
};

export type CharData = {
  labels: string[];
  datasets: DataSets[];
};

export type Props = {
  chartData: CharData;
  chartOptions: object;
  height?: string;
  width?: string;
};
