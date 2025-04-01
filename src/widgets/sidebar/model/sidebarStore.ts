import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Pages } from './typres';

export const useSidebarStore = defineStore('sidebar', () => {
  const pages = ref<Pages[]>([
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

  return { pages };
});
