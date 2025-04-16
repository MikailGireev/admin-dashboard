import { defineStore } from 'pinia';
import type { AdminCard } from '.';
import { ref } from 'vue';

export const useUserDropdownStore = defineStore('user-dropdown', () => {
  const cardItems = ref<AdminCard[]>([
    { title: 'Manage Account', img: 'user-manage-account' },
    { title: 'Change Password', img: 'user-change-password' },
    { title: 'Activity Log', img: 'user-activity-log' },
    { title: 'Log out', img: 'user-logout' },
  ]);

  return { cardItems };
});
