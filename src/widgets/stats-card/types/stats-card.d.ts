export type Props = {
  value?: number | string;
  title?: string;
  icon: string;
  trend?: {
    percent: string;
    direction: 'up' | 'down';
    color: 'red' | 'green';
    label: string;
  };
};
