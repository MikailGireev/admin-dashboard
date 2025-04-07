import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

import { Dashboard } from '@/pages/dashboard/index';
import { Products } from '@/pages/products';
import { Favorites } from '@/pages/favorites';
import { Inbox } from '@/pages/inbox';
import { OrderList } from '@/pages/order-list';
import { ProductStock } from '@/pages/product-stock';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '/', name: 'Dashboard', component: Dashboard },
        { path: '/products', name: 'Products', component: Products },
        { path: '/favorites', name: 'Favorites', component: Favorites },
        { path: '/inbox', name: 'Inbox', component: Inbox },
        { path: '/order', name: 'Order List', component: OrderList },
        { path: '/stock', name: 'Product Stock', component: ProductStock },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Register', component: Register },
      ],
    },
  ],
});

export default router;
