import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserRegister } from '../types';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserRegister>();
  const isLoading = ref<boolean>(false);

  const regUser = async (user: UserRegister) => {
    try {
      isLoading.value = true;

      const res = await axios.post('http://localhost:3000/users', user);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error('Register failed');
    }
  };

  return { user, isLoading, regUser };
});
