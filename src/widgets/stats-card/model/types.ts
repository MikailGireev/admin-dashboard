export type StatsCard = {
  value?: number | string;
  title?: string;
  icon: string;
  trend: {
    percent: string;
    direction: 'trending-up' | 'trending-down';
    color: 'red' | 'green';
    label: string;
  };
};
