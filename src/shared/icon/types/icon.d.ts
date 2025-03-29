export type Props = {
  name:
    | 'dashboard'
    | 'products'
    | 'favorites'
    | 'inbox'
    | 'orders'
    | 'product-stock'
    | 'settings'
    | string;
  color?: 'white' | 'dark';
  size?: string;
  class?: string;
};
