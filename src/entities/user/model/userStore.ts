import { defineStore } from 'pinia';
import type { User } from './types';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({});

  const setUser = (data: User) => {
    user.value = data;
  };

  return { user, setUser };
});
