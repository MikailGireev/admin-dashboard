import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Page } from './types';

export const useSidebarStore = defineStore('sidebar', () => {
  const mainMenu = ref<Page[]>([
    {
      label: 'Dashboard',
      path: '/',
      icon: 'dashboard',
    },
    {
      label: 'Products',
      path: '/products',
      icon: 'products',
    },
    {
      label: 'Favorites',
      path: '/favorites',
      icon: 'favorites',
    },
    {
      label: 'Inbox',
      path: '/inbox',
      icon: 'inbox',
    },
    {
      label: 'Order List',
      path: '/order',
      icon: 'orders',
    },
    {
      label: 'Product Stock',
      path: '/stock',
      icon: 'product-stock',
    },
  ]);

  const pages = ref<Page[]>([
    {
      label: 'Pricing',
      path: '/pricing',
      icon: 'pricing',
    },
    {
      label: 'Calendar',
      path: '/calendar',
      icon: 'calendar',
    },
    {
      label: 'To-do',
      path: '/todo',
      icon: 'todo',
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: 'contact',
    },
    {
      label: 'Invoice',
      path: '/invoice',
      icon: 'invoice',
    },
    {
      label: 'Ui Elements',
      path: '/ui-elements',
      icon: 'ui-elements',
    },
    {
      label: 'Team',
      path: '/team',
      icon: 'team',
    },
    {
      label: 'Table',
      path: '/table',
      icon: 'table',
    },
  ]);

  return { mainMenu, pages };
});
