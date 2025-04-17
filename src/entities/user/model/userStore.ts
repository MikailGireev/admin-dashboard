import { defineStore } from 'pinia';
import type { User } from './types';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({});
  const isShow = ref<boolean>(false);

  const setUser = (data: User) => {
    user.value = data;
  };

  const setShow = () => {
    isShow.value = !isShow.value;
  };

  return { user, setUser, isShow, setShow };
});
