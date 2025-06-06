export interface Props {
  name:
    | 'dashboard'
    | 'products'
    | 'favorites'
    | 'inbox'
    | 'orders'
    | 'product-stock'
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
    | 'total-user'
    | 'total-order'
    | 'total-sales'
    | 'total-pending'
    | 'trending-up'
    | 'trending-down'
    | 'settings'
    | 'logout'
    | 'user-manage-account'
    | 'user-change-password'
    | 'user-activity-log'
    | 'user-logout'
    | 'check'
    | string;
  color?: 'white' | 'dark';
  size?: string;
  height?: string;
  class?: string;
}
