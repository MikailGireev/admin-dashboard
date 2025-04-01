export type Props = {
  name:
    | 'dashboard'
    | 'products'
    | 'favorites'
    | 'inbox'
    | 'orders'
    | 'product-stock'
    | 'settings'
    | 'menu'
    | 'search'
    | string;
  color?: 'white' | 'dark';
  size?: string;
  class?: string;
};
