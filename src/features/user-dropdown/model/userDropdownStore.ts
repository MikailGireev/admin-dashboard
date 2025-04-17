import { defineStore } from 'pinia';
import type { AdminCard } from '.';
import { ref } from 'vue';

export const useUserDropdownStore = defineStore('user-dropdown', () => {
  const cardItems = ref<AdminCard[]>([
    { title: 'Manage Account', img: 'user-manage-account', link: '/account' },
    { title: 'Change Password', img: 'user-change-password', link: '/password' },
    { title: 'Activity Log', img: 'user-activity-log', link: 'activity' },
    { title: 'Log out', img: 'user-logout', link: '/logout' },
  ]);

  return { cardItems };
});
