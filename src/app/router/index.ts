import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { DashboardPage } from '@/pages/dashboard/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [{ path: '/', name: 'Dashboard', component: DashboardPage }],
    },
  ],
});

export default router;
