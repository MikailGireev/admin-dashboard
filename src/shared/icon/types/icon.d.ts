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
    | 'notification'
    | 'drop-down'
    | 'pricing'
    | 'calendar'
    | 'todo'
    | 'contact'
    | 'invoice'
    | 'ui-elements'
    | 'team'
    | 'table'
    | string;
  color?: 'white' | 'dark';
  size?: string;
  height?: string;
  class?: string;
};
